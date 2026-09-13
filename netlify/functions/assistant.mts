type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

const SYSTEM_PROMPT = `You are PharmaAI Guide, a careful medication information assistant for patients, caregivers, students, and clinicians.

Answer questions about medicines, drug classes, common uses, administration, side effects, warnings, contraindications, and interactions in clear everyday language. You may also answer general health questions when they relate to medicines. Be concise but useful, organize longer answers with short headings or bullets, and define medical terms.

Safety rules:
- Give educational information, not a diagnosis, prescription, or patient-specific dosing decision.
- Never tell someone to start, stop, combine, or change a medicine or dose without their licensed clinician or pharmacist.
- If age, pregnancy, kidney/liver function, allergies, formulation, or other medicines could change the answer, say so.
- For overdose, trouble breathing, facial swelling, fainting, seizure, chest pain, severe bleeding, or thoughts of self-harm, tell the user to contact local emergency services or poison control now.
- Do not claim certainty or invent citations, incidence rates, or current regulatory facts. Encourage verification with the product label, pharmacist, or clinician where appropriate.
- If a question is outside medicine or health, briefly say this assistant specializes in medication information and offer a medication-related direction.

End answers involving treatment decisions with a brief reminder to confirm with a pharmacist or licensed clinician.`

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405, headers: { Allow: 'POST' } })
  }

  try {
    const body = await req.json()
    const messages = Array.isArray(body?.messages) ? body.messages : []
    const cleanMessages: ChatMessage[] = messages
      .filter((item: unknown): item is ChatMessage => {
        if (!item || typeof item !== 'object') return false
        const message = item as Record<string, unknown>
        return (message.role === 'user' || message.role === 'assistant') && typeof message.content === 'string'
      })
      .slice(-10)
      .map((message) => ({ role: message.role, content: message.content.trim().slice(0, 3000) }))
      .filter((message) => message.content.length > 0)

    if (!cleanMessages.length || cleanMessages.at(-1)?.role !== 'user') {
      return Response.json({ error: 'Please include a question.' }, { status: 400 })
    }

    const baseUrl = process.env.OPENAI_BASE_URL
    const apiKey = process.env.OPENAI_API_KEY
    if (!baseUrl || !apiKey) {
      return Response.json({ error: 'The assistant is temporarily unavailable.' }, { status: 503 })
    }

    const upstream = await fetch(`${baseUrl.replace(/\/$/, '')}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      signal: AbortSignal.timeout(25_000),
      body: JSON.stringify({
        model: 'gpt-5.4-mini',
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...cleanMessages],
        max_completion_tokens: 900,
      }),
    })

    if (!upstream.ok) {
      return Response.json({ error: 'The assistant could not answer right now.' }, { status: 502 })
    }

    const data = await upstream.json()
    const answer = data?.choices?.[0]?.message?.content
    if (typeof answer !== 'string' || !answer.trim()) {
      return Response.json({ error: 'The assistant returned an empty response.' }, { status: 502 })
    }

    return Response.json({ answer: answer.trim() })
  } catch {
    return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}

export const config = {
  path: '/api/assistant',
}
