const CLINICALLY_REVIEWED_DB=[
  {
    name:'Aspirin',generic:'Acetylsalicylic acid',cls:'NSAID / Antiplatelet',color:'#4da6ff',
    desc:'Aspirin is a nonsteroidal anti-inflammatory drug (NSAID) used to treat pain, fever, and inflammation, and as an antiplatelet agent to prevent heart attacks and strokes.',
    uses:['Pain relief (mild to moderate)','Fever reduction','Inflammation','Heart attack prevention','Stroke prevention','Kawasaki disease'],
    dosage:'Regular: 325–650 mg every 4–6 hrs. Antiplatelet (cardiac): 75–100 mg once daily.',
    se:[
      {sev:'mild',txt:'Nausea and stomach upset'},
      {sev:'mild',txt:'Heartburn / indigestion'},
      {sev:'moderate',txt:'Gastrointestinal bleeding'},
      {sev:'moderate',txt:'Tinnitus (ringing in ears) at high doses'},
      {sev:'severe',txt:'Reye\'s syndrome (children — avoid)'},
      {sev:'severe',txt:'Anaphylaxis (rare)'},
      {sev:'severe',txt:'Peptic ulcer perforation'}
    ],
    adrs:[
      {name:'GI Hemorrhage',mech:'Inhibits COX-1 → reduced protective prostaglandins in gastric mucosa',inc:'1–3%'},
      {name:'Aspirin-Exacerbated Respiratory Disease',mech:'COX-1 inhibition shifts arachidonic acid to lipoxygenase → ↑ leukotrienes',inc:'0.5%'},
      {name:'Salicylate Toxicity',mech:'Uncouples oxidative phosphorylation at high plasma levels',inc:'Overdose'}
    ],
    contra:['Active peptic ulcer disease','Children with viral illness (Reye\'s risk)','Hemophilia','Last trimester pregnancy'],
    inter:['Warfarin — ↑ bleeding risk','Ibuprofen — reduces antiplatelet effect','Methotrexate — ↑ toxicity','ACE inhibitors — ↓ efficacy'],
    tags:['Pain','Cardiac','Fever']
  },
  {
    name:'Metformin',generic:'Metformin hydrochloride',cls:'Biguanide (Antidiabetic)',color:'#06d6a0',
    desc:'Metformin is the first-line pharmacological treatment for type 2 diabetes. It reduces hepatic glucose production and improves insulin sensitivity without causing hypoglycaemia.',
    uses:['Type 2 diabetes mellitus (first-line)','Polycystic ovary syndrome (PCOS)','Prediabetes prevention','Weight management in diabetic patients'],
    dosage:'500 mg twice daily or 850 mg once daily with meals. Max: 2550 mg/day.',
    se:[
      {sev:'mild',txt:'Nausea and vomiting'},
      {sev:'mild',txt:'Diarrhea (especially early in treatment)'},
      {sev:'mild',txt:'Metallic taste in mouth'},
      {sev:'moderate',txt:'Vitamin B12 deficiency with long-term use'},
      {sev:'severe',txt:'Lactic acidosis (rare but life-threatening)'}
    ],
    adrs:[
      {name:'Lactic Acidosis',mech:'Inhibits mitochondrial respiratory chain complex I → ↑ lactate production',inc:'<0.01%'},
      {name:'GI Intolerance',mech:'↑ intestinal glucose utilization + GLP-1 secretion',inc:'20–30%'},
      {name:'Vitamin B12 Deficiency',mech:'Impairs ileal absorption of B12-intrinsic factor complex',inc:'7%'}
    ],
    contra:['eGFR < 30 mL/min (severe renal impairment)','Hepatic impairment','Before contrast dye procedures (hold 48 hrs)','Metabolic acidosis'],
    inter:['Alcohol — ↑ lactic acidosis risk','Iodinated contrast — hold before procedures','Cimetidine — ↑ metformin levels'],
    tags:['Diabetes','Endocrine']
  },
  {
    name:'Ibuprofen',generic:'Ibuprofen',cls:'NSAID',color:'#f59e0b',
    desc:'Ibuprofen is a widely used NSAID that treats pain, fever, and inflammatory conditions by non-selectively inhibiting COX-1 and COX-2 enzymes.',
    uses:['Pain (headache, dental, muscular, menstrual)','Fever','Arthritis (osteo and rheumatoid)','Inflammatory conditions','Dysmenorrhea'],
    dosage:'Adults: 200–400 mg every 4–6 hrs. Max OTC: 1200 mg/day. Max Rx: 3200 mg/day.',
    se:[
      {sev:'mild',txt:'Nausea, vomiting, dyspepsia'},
      {sev:'mild',txt:'Dizziness'},
      {sev:'moderate',txt:'Fluid retention and edema'},
      {sev:'moderate',txt:'Elevated blood pressure'},
      {sev:'severe',txt:'GI bleeding or perforation'},
      {sev:'severe',txt:'Acute renal failure'},
      {sev:'severe',txt:'Myocardial infarction risk (prolonged use)'}
    ],
    adrs:[
      {name:'Cardiovascular Events',mech:'COX-2 inhibition ↓ prostacyclin → ↑ thrombotic risk',inc:'1–2% (prolonged use)'},
      {name:'Acute Kidney Injury',mech:'↓ renal prostaglandin synthesis → ↓ GFR in susceptible patients',inc:'0.5–1%'},
      {name:'GI Ulceration',mech:'COX-1 inhibition ↓ gastroprotective prostaglandins',inc:'1–4%'}
    ],
    contra:['History of GI bleed or peptic ulcer','Severe renal/hepatic impairment','3rd trimester pregnancy','Aspirin-exacerbated respiratory disease'],
    inter:['Warfarin — ↑ bleeding','Lithium — ↑ lithium levels','ACE inhibitors — renal failure risk','Aspirin — ↓ antiplatelet effect'],
    tags:['Pain','Fever','NSAID']
  },
  {
    name:'Amoxicillin',generic:'Amoxicillin trihydrate',cls:'Aminopenicillin Antibiotic',color:'#a855f7',
    desc:'Amoxicillin is a broad-spectrum beta-lactam antibiotic. It inhibits bacterial cell wall synthesis by binding penicillin-binding proteins, leading to cell lysis.',
    uses:['Respiratory infections (pneumonia, bronchitis)','Ear infections (otitis media)','Urinary tract infections','H. pylori eradication','Dental infections','Lyme disease'],
    dosage:'Adults: 250–500 mg every 8 hrs or 500–875 mg every 12 hrs. Severe: 875 mg every 12 hrs.',
    se:[
      {sev:'mild',txt:'Nausea and diarrhea'},
      {sev:'mild',txt:'Skin rash (non-allergic, maculopapular)'},
      {sev:'moderate',txt:'Candida (yeast) superinfection'},
      {sev:'moderate',txt:'Pseudomembranous colitis'},
      {sev:'severe',txt:'Anaphylaxis (IgE-mediated hypersensitivity)'},
      {sev:'severe',txt:'Stevens-Johnson Syndrome (rare)'}
    ],
    adrs:[
      {name:'Anaphylaxis',mech:'IgE-mediated hypersensitivity to beta-lactam ring',inc:'0.01–0.05%'},
      {name:'C. difficile Colitis',mech:'Disruption of gut microbiome allows C. difficile overgrowth',inc:'0.1–0.3%'},
      {name:'Amoxicillin Rash',mech:'Non-allergic T-cell mediated maculopapular rash; common in EBV infection',inc:'5–10%'}
    ],
    contra:['Penicillin allergy','History of amoxicillin-associated liver injury','Infectious mononucleosis'],
    inter:['Warfarin — ↑ INR','Oral contraceptives — ↓ efficacy','Allopurinol — ↑ rash risk','Methotrexate — ↑ toxicity'],
    tags:['Antibiotic','Infection']
  },
  {
    name:'Atorvastatin',generic:'Atorvastatin calcium',cls:'HMG-CoA Reductase Inhibitor (Statin)',color:'#ef4444',
    desc:'Atorvastatin inhibits HMG-CoA reductase, the rate-limiting enzyme in cholesterol synthesis, reducing LDL-C and triglycerides while raising HDL-C to prevent cardiovascular events.',
    uses:['Hypercholesterolemia (high LDL)','Cardiovascular disease prevention','Familial hypercholesterolemia','Hypertriglyceridemia','Atherosclerosis'],
    dosage:'10–80 mg once daily (evening preferred). Starting: 10–20 mg. Titrate every 4 weeks.',
    se:[
      {sev:'mild',txt:'Headache and fatigue'},
      {sev:'mild',txt:'Nasopharyngitis'},
      {sev:'moderate',txt:'Myalgia (muscle pain) — most common discontinuation reason'},
      {sev:'moderate',txt:'Elevated liver enzymes (transaminases)'},
      {sev:'severe',txt:'Rhabdomyolysis (muscle breakdown, rare)'},
      {sev:'severe',txt:'Fulminant hepatic failure (very rare)'}
    ],
    adrs:[
      {name:'Statin-Associated Muscle Symptoms (SAMS)',mech:'Reduced CoQ10 synthesis + impaired mitochondrial function in myocytes',inc:'5–10%'},
      {name:'Rhabdomyolysis',mech:'Severe myocyte destruction releasing myoglobin → renal tubular injury',inc:'<0.1%'},
      {name:'New-Onset Diabetes',mech:'Impairs insulin secretion + increases insulin resistance',inc:'9–13% over 4 years'}
    ],
    contra:['Active liver disease','Pregnancy and breastfeeding','Active myopathy'],
    inter:['Cyclosporine — ↑↑ statin levels','Clarithromycin — ↑ myopathy risk','Gemfibrozil — ↑ rhabdomyolysis risk','Grapefruit juice — ↑ statin levels'],
    tags:['Cholesterol','Cardiac']
  },
  {
    name:'Omeprazole',generic:'Omeprazole',cls:'Proton Pump Inhibitor (PPI)',color:'#06d6a0',
    desc:'Omeprazole irreversibly inhibits the H+/K+ ATPase enzyme (proton pump) in gastric parietal cells, reducing stomach acid production by up to 95%.',
    uses:['GERD (gastroesophageal reflux disease)','Peptic ulcer disease','H. pylori eradication (triple therapy)','Zollinger-Ellison syndrome','NSAID-induced ulcer prevention'],
    dosage:'20 mg once daily 30–60 min before breakfast. GERD: 20–40 mg daily for 4–8 weeks.',
    se:[
      {sev:'mild',txt:'Headache'},
      {sev:'mild',txt:'Nausea and flatulence'},
      {sev:'moderate',txt:'Hypomagnesemia (long-term use)'},
      {sev:'moderate',txt:'↑ C. difficile infection risk'},
      {sev:'severe',txt:'Acute interstitial nephritis (rare)'},
      {sev:'severe',txt:'Increased fracture risk (osteoporosis, long-term use)'}
    ],
    adrs:[
      {name:'Hypomagnesemia',mech:'Impairs TRPM6/7-mediated Mg²⁺ transport in intestinal epithelium',inc:'1% (>1 year use)'},
      {name:'Fundic Gland Polyps',mech:'Hypergastrinemia from acid suppression → parietal cell hyperplasia',inc:'Up to 13%'},
      {name:'Community-Acquired Pneumonia',mech:'↓ gastric acidity allows bacterial colonization of stomach',inc:'OR 1.27'}
    ],
    contra:['Concurrent rilpivirine or nelfinavir','Hypersensitivity to PPIs or benzimidazoles'],
    inter:['Clopidogrel — ↓ antiplatelet effect','Warfarin — ↑ INR','Methotrexate — ↑ toxicity','Ketoconazole — ↓ absorption'],
    tags:['GI','Acid','Reflux']
  },
  {
    name:'Lisinopril',generic:'Lisinopril',cls:'ACE Inhibitor (Antihypertensive)',color:'#4da6ff',
    desc:'Lisinopril blocks angiotensin-converting enzyme (ACE), preventing conversion of angiotensin I to angiotensin II, reducing vasoconstriction and aldosterone secretion.',
    uses:['Hypertension (first-line)','Heart failure (reduced ejection fraction)','Post-MI cardiac protection','Diabetic nephropathy'],
    dosage:'Hypertension: 10 mg once daily; range 10–40 mg. Heart failure: start 2.5–5 mg once daily.',
    se:[
      {sev:'mild',txt:'Dry persistent cough (bradykinin accumulation)'},
      {sev:'mild',txt:'Dizziness (especially first dose — orthostatic hypotension)'},
      {sev:'moderate',txt:'Hyperkalemia (elevated potassium)'},
      {sev:'moderate',txt:'Hypotension'},
      {sev:'severe',txt:'Angioedema (swelling of face, lips, tongue, larynx)'},
      {sev:'severe',txt:'Acute kidney injury'}
    ],
    adrs:[
      {name:'ACE Inhibitor Cough',mech:'Reduced bradykinin degradation stimulates pulmonary C-fibers',inc:'5–20% (higher in Asian patients)'},
      {name:'Angioedema',mech:'Bradykinin accumulation → vascular permeability in subcutaneous/submucosal tissue',inc:'0.1–0.7%'},
      {name:'Hyperkalemia',mech:'↓ aldosterone → ↓ renal potassium excretion',inc:'1–5%'}
    ],
    contra:['Pregnancy (teratogenic — Category D/X)','History of ACE inhibitor-induced angioedema','Bilateral renal artery stenosis','Concurrent aliskiren in diabetes/CKD'],
    inter:['NSAIDs — renal failure risk','K-sparing diuretics — hyperkalemia','Lithium — ↑ toxicity','Sacubitril/valsartan — angioedema'],
    tags:['BP','Cardiac','Renal']
  },
  {
    name:'Paracetamol',generic:'Acetaminophen',cls:'Analgesic / Antipyretic (Non-NSAID)',color:'#06d6a0',
    desc:'Paracetamol is one of the most widely used analgesics and antipyretics globally. Its mechanism involves central prostaglandin inhibition and endocannabinoid system modulation.',
    uses:['Mild to moderate pain (all types)','Fever (all ages including infants)','Headache','Osteoarthritis (preferred over NSAIDs in elderly)','Post-vaccination fever'],
    dosage:'Adults: 500–1000 mg every 4–6 hrs. Max: 4 g/day (3 g/day in liver disease or high alcohol use).',
    se:[
      {sev:'mild',txt:'Nausea (rare at therapeutic doses)'},
      {sev:'mild',txt:'Rash (uncommon)'},
      {sev:'severe',txt:'Hepatotoxicity (overdose — leading cause of acute liver failure)'},
      {sev:'severe',txt:'Acute tubular necrosis (overdose)'}
    ],
    adrs:[
      {name:'Hepatotoxicity',mech:'NAPQI metabolite (via CYP2E1) depletes glutathione → hepatocyte necrosis',inc:'Dose-dependent; overdose'},
      {name:'Stevens-Johnson Syndrome',mech:'Immune-mediated epidermal necrosis (very rare)',inc:'<0.001%'}
    ],
    contra:['Severe hepatic impairment','Alcohol use disorder (relative — reduce max dose)'],
    inter:['Warfarin — ↑ INR (chronic use)','Alcohol — ↑ hepatotoxicity','Isoniazid — ↑ hepatotoxicity','Cholestyramine — ↓ absorption'],
    tags:['Pain','Fever','Safe']
  }

];

const EXPANDED_DRUG_NAMES = ["Acyclovir", "Adalimumab", "Albuterol", "Alendronate", "Alfuzosin", "Allopurinol", "Alprazolam", "Amiodarone", "Amitriptyline", "Amlodipine", "Amoxicillin clavulanate", "Ampicillin", "Anastrozole", "Apixaban", "Aripiprazole", "Atenolol", "Azithromycin", "Baclofen", "Benazepril", "Benzonatate", "Betamethasone", "Bisacodyl", "Bisoprolol", "Budesonide", "Bumetanide", "Buprenorphine", "Bupropion", "Buspirone", "Calcitriol", "Candesartan", "Carbamazepine", "Carbidopa levodopa", "Carvedilol", "Cefaclor", "Cefadroxil", "Cefazolin", "Cefdinir", "Cefepime", "Cefixime", "Cefotaxime", "Cefpodoxime", "Ceftazidime", "Ceftriaxone", "Cefuroxime", "Celecoxib", "Cephalexin", "Cetirizine", "Chlorthalidone", "Ciprofloxacin", "Citalopram", "Clarithromycin", "Clindamycin", "Clobetasol", "Clonazepam", "Clonidine", "Clopidogrel", "Clotrimazole", "Clozapine", "Codeine", "Colchicine", "Cyclobenzaprine", "Dabigatran", "Dapagliflozin", "Desloratadine", "Desmopressin", "Dexamethasone", "Dextromethorphan", "Diazepam", "Diclofenac", "Dicyclomine", "Digoxin", "Diltiazem", "Diphenhydramine", "Divalproex", "Docusate", "Donepezil", "Dopamine", "Dorzolamide", "Doxazosin", "Doxycycline", "Dulaglutide", "Duloxetine", "Empagliflozin", "Enalapril", "Enoxaparin", "Escitalopram", "Esomeprazole", "Estradiol", "Etanercept", "Ethinyl estradiol", "Ezetimibe", "Famotidine", "Fexofenadine", "Finasteride", "Flecainide", "Fluconazole", "Fluoxetine", "Fluticasone", "Folic acid", "Furosemide", "Gabapentin", "Glimepiride", "Glipizide", "Glyburide", "Glycopyrrolate", "Hydralazine", "Hydrochlorothiazide", "Hydrocodone", "Hydrocortisone", "Hydroxyzine", "Insulin glargine", "Insulin lispro", "Insulin aspart", "Insulin detemir", "Ipratropium", "Irbesartan", "Isosorbide mononitrate", "Itraconazole", "Ketoconazole", "Ketorolac", "Labetalol", "Lactulose", "Lamotrigine", "Lansoprazole", "Latanoprost", "Levetiracetam", "Levofloxacin", "Levothyroxine", "Lidocaine", "Linagliptin", "Linezolid", "Liraglutide", "Loratadine", "Lorazepam", "Losartan", "Lovastatin", "Meloxicam", "Memantine", "Mesalamine", "Methylphenidate", "Methylprednisolone", "Metoclopramide", "Metoprolol", "Metronidazole", "Mirtazapine", "Montelukast", "Morphine", "Moxifloxacin", "Naproxen", "Nifedipine", "Nitrofurantoin", "Nitroglycerin", "Nortriptyline", "Olanzapine", "Olmesartan", "Ondansetron", "Oseltamivir", "Oxcarbazepine", "Oxybutynin", "Oxycodone", "Pantoprazole", "Paroxetine", "Penicillin V", "Phenazopyridine", "Phentermine", "Pioglitazone", "Polyethylene glycol", "Pravastatin", "Prazosin", "Prednisone", "Prednisolone", "Pregabalin", "Promethazine", "Propranolol", "Quetiapine", "Ramipril", "Ranitidine", "Risperidone", "Rivaroxaban", "Rosuvastatin", "Salmeterol", "Semaglutide", "Sertraline", "Sildenafil", "Simvastatin", "Sitagliptin", "Sotalol", "Spironolactone", "Sucralfate", "Sulfamethoxazole trimethoprim", "Sumatriptan", "Tadalafil", "Tamsulosin", "Telmisartan", "Temazepam", "Terazosin", "Terbinafine", "Tiotropium", "Tizanidine", "Topiramate", "Torsemide", "Tramadol", "Trazodone", "Triamcinolone", "Valacyclovir", "Valproic acid", "Valsartan", "Vancomycin", "Venlafaxine", "Verapamil", "Warfarin", "Zolpidem", "Zonisamide", "Abacavir", "Abatacept", "Abemaciclib", "Abiraterone", "Acamprosate", "Acarbose", "Acetazolamide", "Acitretin", "Adapalene", "Adefovir", "Agomelatine", "Albendazole", "Albumin human", "Albuterol ipratropium", "Alfentanil", "Alirocumab", "Aliskiren", "Almotriptan", "Alogliptin", "Alosetron", "Alteplase", "Amantadine", "Ambrisentan", "Amifampridine", "Amikacin", "Amiloride", "Aminophylline", "Aminocaproic acid", "Amodiaquine", "Amphotericin B", "Anagrelide", "Anakinra", "Apalutamide", "Aprepitant", "Argatroban", "Armodafinil", "Artemether lumefantrine", "Asenapine", "Atazanavir", "Atomoxetine", "Avanafil", "Avatrombopag", "Azacitidine", "Azathioprine", "Azelastine", "Aztreonam", "Balsalazide", "Baricitinib", "Bedaquiline", "Belimumab", "Bendamustine", "Benralizumab", "Benzoyl peroxide", "Benzphetamine", "Benztropine", "Beractant", "Betaxolol", "Bethanechol", "Bexarotene", "Bicalutamide", "Bimatoprost", "Bivalirudin", "Bleomycin", "Bortezomib", "Bosentan", "Bosutinib", "Brimonidine", "Brivaracetam", "Bromocriptine", "Budesonide formoterol", "Bupivacaine", "Busulfan", "Butalbital", "Cabazitaxel", "Cabergoline", "Calcipotriene", "Canagliflozin", "Capecitabine", "Captopril", "Carbidopa", "Carboplatin", "Caspofungin", "Cefiderocol", "Cefprozil", "Ceftaroline", "Ceftolozane tazobactam", "Certolizumab", "Cetuximab", "Chlorambucil", "Chloramphenicol", "Chlordiazepoxide", "Chlorhexidine", "Chloroquine", "Chlorpromazine", "Cholestyramine", "Cidofovir", "Cilostazol", "Cinacalcet", "Cisplatin", "Cladribine", "Clindamycin benzoyl peroxide", "Clobazam", "Clomiphene", "Clomipramine", "Clorazepate", "Cobicistat", "Colesevelam", "Conjugated estrogens", "Crizotinib", "Cromolyn", "Cyclophosphamide", "Cycloserine", "Cyclosporine", "Cytarabine", "Dalteparin", "Dantrolene", "Dapsone", "Daptomycin", "Darifenacin", "Darolutamide", "Darunavir", "Dasatinib", "Daunorubicin", "Deferasirox", "Deferoxamine", "Delafloxacin", "Delamanid", "Denosumab", "Desvenlafaxine", "Dexlansoprazole", "Dexmedetomidine", "Dextroamphetamine", "Didanosine", "Dienogest", "Diflunisal", "Dipyridamole", "Disopyramide", "Disulfiram", "Dobutamine", "Docetaxel", "Dolasetron", "Dolutegravir", "Dornase alfa", "Doxepin", "Doxorubicin", "Dronabinol", "Dronedarone", "Drospirenone", "Dutasteride", "Efavirenz", "Elagolix", "Elbasvir grazoprevir", "Eletriptan", "Elotuzumab", "Elvitegravir", "Emicizumab", "Emtricitabine", "Enfuvirtide", "Entacapone", "Entecavir", "Enzalutamide", "Eplerenone", "Epoetin alfa", "Epoprostenol", "Erenumab", "Erlotinib", "Ertapenem", "Erythromycin", "Eslicarbazepine", "Eszopiclone", "Ethambutol", "Ethosuximide", "Etoposide", "Etravirine", "Everolimus", "Evolocumab", "Exemestane", "Exenatide", "Ezetimibe simvastatin", "Felbamate", "Fenofibrate", "Fentanyl", "Fesoterodine", "Filgrastim", "Fingolimod", "Flavoxate", "Floxuridine", "Fludarabine", "Flumazenil", "Fluorouracil", "Fluphenazine", "Flurazepam", "Flurbiprofen", "Flutamide", "Fluvoxamine", "Fondaparinux", "Fosamprenavir", "Foscarnet", "Fosinopril", "Fosnetupitant palonosetron", "Fosphenytoin", "Fostemsavir", "Fulvestrant", "Ganciclovir", "Gatifloxacin ophthalmic", "Gemcitabine", "Gemfibrozil", "Gentamicin", "Glatiramer", "Glecaprevir pibrentasvir", "Gliclazide", "Glucagon", "Goserelin", "Granisetron", "Griseofulvin", "Guanfacine", "Haloperidol", "Heparin", "Hydroxychloroquine", "Hydroxyurea", "Hyoscyamine", "Ibandronate", "Ibrutinib", "Ifosfamide", "Imatinib", "Imipenem cilastatin", "Imipramine", "Indapamide", "Indinavir", "Indomethacin", "Infliximab", "Interferon beta", "Irinotecan", "Isavuconazonium", "Isoniazid", "Isotretinoin", "Ivabradine", "Ivermectin", "Ketamine", "Ketotifen", "Lacosamide", "Lamivudine", "Leflunomide", "Letrozole", "Leucovorin", "Leuprolide", "Linaclotide", "Lisdexamfetamine", "Lithium", "Loperamide", "Lopinavir ritonavir", "Loratadine pseudoephedrine", "Lorlatinib", "Lurasidone", "Macitentan", "Mebendazole", "Meclizine", "Mefloquine", "Megestrol", "Melphalan", "Memantine donepezil", "Meperidine", "Mercaptopurine", "Meropenem", "Mesna", "Methadone", "Methazolamide", "Methimazole", "Methocarbamol", "Methotrexate", "Methyldopa", "Metolazone", "Midazolam", "Midodrine", "Milrinone", "Minocycline", "Minoxidil", "Mirabegron", "Modafinil", "Mometasone", "Mycophenolate", "Nabumetone", "Nadolol", "Nafcillin", "Naloxone", "Naltrexone", "Naratriptan", "Nebivolol", "Nefazodone", "Neomycin", "Nevirapine", "Niacin", "Nicardipine", "Nicotine", "Nimodipine", "Nintedanib", "Nitazoxanide", "Norethindrone", "Norfloxacin", "Octreotide", "Ofloxacin", "Olopatadine", "Omalizumab", "Orlistat", "Osimertinib", "Oxaliplatin", "Oxazepam", "Oxymetazoline", "Paclitaxel", "Paliperidone", "Palivizumab", "Panitumumab", "Paramethasone", "Paricalcitol", "Pazopanib", "Pegfilgrastim", "Pemetrexed", "Pentamidine", "Pentoxifylline", "Perampanel", "Perindopril", "Permethrin", "Phenobarbital", "Phenylephrine", "Phenytoin", "Pilocarpine", "Pimavanserin", "Pimozide", "Pindolol", "Piperacillin tazobactam", "Pirfenidone", "Pomalidomide", "Posaconazole", "Pramipexole", "Prasugrel", "Primaquine", "Primidone", "Probenecid", "Procainamide", "Prochlorperazine", "Progesterone", "Propafenone", "Propylthiouracil", "Pyrantel", "Pyridostigmine", "Pyrimethamine", "Rabeprazole", "Raloxifene", "Raltegravir", "Ranolazine", "Rasagiline", "Regorafenib", "Remdesivir", "Repaglinide", "Reserpine", "Ribavirin", "Rifabutin", "Rifampin", "Rifaximin", "Rilpivirine", "Riluzole", "Riociguat", "Risedronate", "Ritonavir", "Rivastigmine", "Ropinirole", "Rosiglitazone", "Rufinamide", "Sacubitril valsartan", "Saquinavir", "Saxagliptin", "Selegiline", "Sevelamer", "Silver sulfadiazine", "Sirolimus", "Sofosbuvir", "Sorafenib", "Sulfasalazine", "Sunitinib", "Tacrolimus", "Tamoxifen", "Telavancin", "Tenofovir", "Teriparatide", "Testosterone", "Tetrabenazine", "Tetracycline", "Theophylline", "Thioridazine", "Thiothixene", "Thyroid desiccated", "Ticagrelor", "Ticlopidine", "Tigecycline", "Timolol", "Tolvaptan", "Toremifene", "Trabectedin", "Tranexamic acid", "Tranylcypromine", "Triamterene", "Trifluoperazine", "Trimethoprim", "Valganciclovir", "Varenicline", "Vasopressin", "Vemurafenib", "Vigabatrin", "Vinblastine", "Vincristine", "Vinorelbine", "Voriconazole", "Zaleplon", "Zanamivir", "Ziprasidone", "Zoledronic acid"];
const CLASS_PROFILES = {
  antibiotic: { cls:'Antibiotic / Anti-infective', color:'#06d6a0', tags:['Infection','Antibiotic'], uses:['Treatment of susceptible bacterial infections','Use only when prescribed for a confirmed or strongly suspected infection'], dosage:'Dose is infection-specific and depends on age, weight, kidney function, organism, and local guidance. Follow the official label and prescriber instructions exactly.', se:[{sev:'mild',txt:'Nausea, diarrhea, or abdominal discomfort'},{sev:'mild',txt:'Headache or altered taste'},{sev:'moderate',txt:'Rash or photosensitivity'},{sev:'moderate',txt:'C. difficile-associated diarrhea'},{sev:'severe',txt:'Severe allergic reaction / anaphylaxis'},{sev:'severe',txt:'Serious skin reactions such as Stevens-Johnson syndrome (rare)'}], adrs:[{name:'Hypersensitivity reaction',mech:'Immune-mediated reaction; risk varies by drug and prior allergy history',inc:'Uncommon to rare'},{name:'Antibiotic-associated colitis',mech:'Disruption of normal gut flora can allow C. difficile overgrowth',inc:'Uncommon'},{name:'Resistance selection',mech:'Inappropriate or incomplete use may select resistant organisms',inc:'Population-level risk'}], contra:['Known serious hypersensitivity to this medicine or class','Do not use for viral infections unless specifically indicated','Use caution or dose adjustment in significant kidney or liver impairment when label requires it'], inter:['Warfarin or other anticoagulants — INR/bleeding risk may change','Live bacterial vaccines — effectiveness may be reduced by some antibiotics','Other nephrotoxic or QT-prolonging medicines when relevant'] },
  cardiovascular: { cls:'Cardiovascular medicine', color:'#4da6ff', tags:['Cardiac','BP'], uses:['Hypertension, heart disease, rhythm control, or cardiovascular risk reduction when indicated','Condition-specific therapy under clinician supervision'], dosage:'Dose is individualized by indication, blood pressure/heart rate, kidney or liver function, and response. Follow the product label and clinician instructions.', se:[{sev:'mild',txt:'Dizziness or fatigue'},{sev:'mild',txt:'Headache'},{sev:'moderate',txt:'Low blood pressure or slow heart rate'},{sev:'moderate',txt:'Electrolyte changes or fluid imbalance'},{sev:'severe',txt:'Worsening heart rhythm, fainting, or severe hypotension'},{sev:'severe',txt:'Angioedema or serious allergic reaction (drug-dependent)'}], adrs:[{name:'Hypotension/syncope',mech:'Excess pharmacologic effect on vascular tone, volume, or cardiac conduction',inc:'Dose-related'},{name:'Electrolyte disturbance',mech:'Renal and hormonal effects may alter potassium, sodium, or magnesium depending on drug class',inc:'Variable'},{name:'Renal function change',mech:'Hemodynamic changes can reduce renal perfusion in susceptible patients',inc:'Variable'}], contra:['Known hypersensitivity','Pregnancy contraindications apply to ACE inhibitors/ARBs and some related drugs','Severe hypotension, shock, or unstable cardiac status unless specialist-directed'], inter:['NSAIDs — may reduce BP effect or increase kidney risk','Potassium supplements/diuretics — potassium abnormalities','Other blood pressure or rhythm medicines — additive effects'] },
  diabetes: { cls:'Antidiabetic / Metabolic', color:'#06d6a0', tags:['Diabetes','Endocrine'], uses:['Glycemic control in diabetes or metabolic disease when indicated','Risk reduction in selected cardiometabolic conditions for specific agents'], dosage:'Dose depends on agent, kidney function, glucose pattern, meals, and treatment goals. Use only as prescribed; insulin doses must be individualized.', se:[{sev:'mild',txt:'Nausea or gastrointestinal upset'},{sev:'mild',txt:'Headache'},{sev:'moderate',txt:'Hypoglycemia, especially with insulin or sulfonylureas'},{sev:'moderate',txt:'Dehydration or genital/urinary infections with some agents'},{sev:'severe',txt:'Severe hypoglycemia, ketoacidosis, pancreatitis, or lactic acidosis depending on drug'},{sev:'severe',txt:'Serious allergic reaction (rare)'}], adrs:[{name:'Hypoglycemia',mech:'Excess glucose-lowering effect relative to food intake, activity, or renal clearance',inc:'Drug-dependent'},{name:'Gastrointestinal intolerance',mech:'Gut motility, incretin, or absorption effects depending on agent',inc:'Common with some agents'},{name:'Metabolic acidosis/ketoacidosis warning',mech:'Rare class-specific metabolic complications require urgent care',inc:'Rare'}], contra:['Known hypersensitivity','Severe kidney or liver impairment for selected agents','Diabetic ketoacidosis unless using specialist-directed insulin protocols'], inter:['Alcohol — may affect glucose and acidosis risk','Steroids/diuretics — may worsen glucose control','Other glucose-lowering drugs — additive hypoglycemia risk'] },
  psych: { cls:'Neurologic / Psychiatric medicine', color:'#a855f7', tags:['CNS','Mental health'], uses:['Neurologic, psychiatric, pain, sleep, or seizure-related indications depending on the medicine','Use requires individualized monitoring'], dosage:'Start-low/go-slow dosing is common. Dose depends on indication, age, tolerability, interactions, and tapering requirements. Follow official label and prescriber guidance.', se:[{sev:'mild',txt:'Drowsiness, dizziness, or impaired coordination'},{sev:'mild',txt:'Dry mouth or constipation'},{sev:'moderate',txt:'Mood, behavior, sleep, or concentration changes'},{sev:'moderate',txt:'Dependence, withdrawal, or misuse risk for selected agents'},{sev:'severe',txt:'Suicidal thoughts, serotonin syndrome, severe sedation, or seizures depending on drug'},{sev:'severe',txt:'Neuroleptic malignant syndrome or serious rash for selected medicines (rare)'}], adrs:[{name:'CNS depression',mech:'Additive effects on neurotransmission can impair alertness and breathing, especially with alcohol/opioids',inc:'Dose-related'},{name:'Withdrawal/discontinuation symptoms',mech:'Neuroadaptation after repeated exposure; abrupt stopping may cause symptoms',inc:'Variable'},{name:'Serotonin or dopamine toxicity syndromes',mech:'Excess monoaminergic or dopamine-blocking effects for selected agents',inc:'Rare but serious'}], contra:['Known hypersensitivity','Avoid unsafe combinations with alcohol, opioids, sedatives, or MAOIs when label warns','Use caution with seizure risk, severe respiratory disease, pregnancy, or suicidality as applicable'], inter:['Alcohol/opioids/benzodiazepines — dangerous sedation or breathing suppression','MAOIs or serotonergic drugs — serotonin syndrome risk','CYP inhibitors/inducers — altered drug levels'] },
  pain: { cls:'Analgesic / Anti-inflammatory', color:'#f59e0b', tags:['Pain','Fever'], uses:['Pain, fever, inflammation, migraine, or musculoskeletal symptoms depending on medicine','Shortest effective duration is preferred when appropriate'], dosage:'Dose depends on medicine, formulation, age, weight, kidney/liver function, and maximum daily limits. Do not combine duplicate ingredients without professional advice.', se:[{sev:'mild',txt:'Nausea or stomach upset'},{sev:'mild',txt:'Dizziness or sleepiness'},{sev:'moderate',txt:'GI irritation, bleeding risk, constipation, or medication-overuse headache depending on class'},{sev:'moderate',txt:'Blood pressure, kidney, or liver test changes'},{sev:'severe',txt:'Severe allergic reaction, GI bleeding, liver injury, respiratory depression, or overdose toxicity depending on drug'},{sev:'severe',txt:'Dependence or withdrawal risk with opioid analgesics'}], adrs:[{name:'GI bleeding / ulcer risk',mech:'NSAID-type prostaglandin inhibition can reduce gastric protection',inc:'Drug- and dose-dependent'},{name:'Hepatic or renal injury',mech:'Dose-related toxicity or renal prostaglandin effects in susceptible patients',inc:'Variable'},{name:'Sedation/respiratory depression',mech:'Opioid receptor activation or CNS depressant interaction for opioid drugs',inc:'Serious; dose-related'}], contra:['Known hypersensitivity','Active GI bleeding/ulcer for many NSAIDs','Severe liver disease for acetaminophen-containing therapy; severe respiratory depression for opioids'], inter:['Warfarin/anticoagulants — bleeding risk','Alcohol — liver injury or sedation risk','Other NSAIDs/opioids/sedatives — additive toxicity'] },
  gi: { cls:'Gastrointestinal medicine', color:'#06d6a0', tags:['GI','Digestive'], uses:['Acid suppression, nausea, constipation, diarrhea, inflammatory bowel disease, or GI symptom management when indicated','Use based on diagnosis and duration guidance'], dosage:'Dose and duration vary by indication and formulation. Long-term use should be reviewed periodically with a clinician.', se:[{sev:'mild',txt:'Headache, nausea, abdominal discomfort, constipation, or diarrhea'},{sev:'mild',txt:'Taste changes or flatulence'},{sev:'moderate',txt:'Electrolyte imbalance, infection risk, or movement symptoms depending on agent'},{sev:'moderate',txt:'Nutrient malabsorption with some long-term acid suppressants'},{sev:'severe',txt:'Severe allergic reaction, arrhythmia, bowel obstruction complication, or kidney inflammation depending on drug'},{sev:'severe',txt:'C. difficile-associated diarrhea risk with prolonged acid suppression'}], adrs:[{name:'GI intolerance',mech:'Local gut effects or altered motility/secretion',inc:'Common'},{name:'Electrolyte/nutrient disturbance',mech:'Changed absorption or fluid balance depending on drug and duration',inc:'Variable'},{name:'Serious motility or QT reaction',mech:'Class-specific receptor or cardiac ion-channel effects for selected agents',inc:'Rare'}], contra:['Known hypersensitivity','GI obstruction/perforation risk for motility/laxative agents when applicable','Avoid prolonged use without review when label recommends limited duration'], inter:['QT-prolonging drugs — rhythm risk with selected agents','Warfarin or antiplatelets — bleeding/INR changes with selected drugs','Drugs needing acidic stomach pH — absorption may change with acid suppressants'] },
  respiratory: { cls:'Respiratory / Allergy medicine', color:'#4da6ff', tags:['Respiratory','Allergy'], uses:['Asthma, COPD, allergic rhinitis, urticaria, cough, or airway symptom control when indicated','Rescue and controller medicines have different roles'], dosage:'Dose depends on inhaler/device, severity, age, and rescue vs maintenance use. Technique matters; follow the prescribed action plan.', se:[{sev:'mild',txt:'Throat irritation, cough, tremor, or headache'},{sev:'mild',txt:'Drowsiness or dry mouth for some antihistamines'},{sev:'moderate',txt:'Fast heartbeat, oral thrush, or urinary retention depending on medicine'},{sev:'moderate',txt:'Mood or sleep changes with selected agents'},{sev:'severe',txt:'Paradoxical bronchospasm, anaphylaxis, severe arrhythmia, or adrenal effects depending on drug'},{sev:'severe',txt:'Severe allergic reaction (rare)'}], adrs:[{name:'Paradoxical bronchospasm',mech:'Airway irritation or hypersensitivity after inhaled therapy',inc:'Rare'},{name:'Systemic steroid effects',mech:'Absorption of corticosteroids can affect adrenal, bone, eye, or glucose systems',inc:'Dose/duration dependent'},{name:'Anticholinergic effects',mech:'Muscarinic blockade can dry secretions and affect urinary/ocular pressure',inc:'Variable'}], contra:['Known hypersensitivity','Do not use controller-only inhalers for acute rescue unless label says so','Caution with glaucoma, urinary retention, arrhythmias, or severe milk-protein allergy for selected inhalers'], inter:['Beta blockers — may reduce bronchodilator effect','Other stimulants — additive heart-rate effects','CNS depressants — additive drowsiness with sedating antihistamines'] },
  default: { cls:'General medicine', color:'#7c3aed', tags:['Medicine','Reference'], uses:['Approved indications vary by country, formulation, and brand','Verify indication in official prescribing information before use'], dosage:'Dose is medicine-specific. Follow the official label and a qualified clinician/pharmacist; do not use this summary for personalized dosing.', se:[{sev:'mild',txt:'Nausea, headache, dizziness, or fatigue may occur'},{sev:'mild',txt:'Rash or local irritation may occur depending on formulation'},{sev:'moderate',txt:'Abnormal laboratory values or organ-specific effects may require monitoring'},{sev:'moderate',txt:'Drug-specific interactions can raise toxicity or reduce benefit'},{sev:'severe',txt:'Severe allergic reaction, serious rash, organ toxicity, or overdose toxicity can occur depending on medicine'},{sev:'severe',txt:'Urgent symptoms include trouble breathing, facial swelling, chest pain, fainting, seizures, or severe rash'}], adrs:[{name:'Hypersensitivity reaction',mech:'Immune or non-immune reaction to active/inactive ingredients',inc:'Rare; varies'},{name:'Organ-specific toxicity',mech:'Drug metabolism, dose, comorbidity, or interaction-related toxicity',inc:'Drug-dependent'},{name:'Medication error/overdose',mech:'Duplicate therapy, wrong dose, or unsafe combinations',inc:'Preventable risk'}], contra:['Known serious hypersensitivity to the medicine','Check pregnancy, breastfeeding, kidney, liver, pediatric, and geriatric warnings in official label','Avoid use outside approved/clinician-directed indications'], inter:['Other medicines with the same active ingredient — overdose risk','Strong enzyme inhibitors/inducers — may alter exposure for many drugs','Alcohol or sedatives — can increase adverse effects for selected medicines'] }
};
function inferProfile(name){
  const n=name.toLowerCase();
  if(/cillin|cef|floxacin|cycline|mycin|penem|azole|fungin|vancin|rifa|vir|navir|tegravir|bactam|dapsone|chloroquine|ivermectin|albendazole|linezolid|nitrofurantoin/.test(n)) return 'antibiotic';
  if(/pril|sartan|olol|dipine|statin|vastatin|dilol|diuretic|nitrate|fibrate|clopidogrel|warfarin|rivaroxaban|apixaban|dabigatran|heparin|enoxaparin|ticagrelor|prasugrel|digoxin|amiodarone|flecainide|diltiazem|verapamil|torsemide|furosemide|spironolactone|hydralazine|clonidine/.test(n)) return 'cardiovascular';
  if(/gliptin|gliflozin|glutide|insulin|formin|glipizide|glyburide|glimepiride|pioglitazone|acarbose|repaglinide|glucagon/.test(n)) return 'diabetes';
  if(/zepam|zolam|oxetine|traline|pram|apine|idone|phenidate|amphetamine|gabapentin|pregabalin|topiramate|lamotrigine|levetiracetam|carbamazepine|valpro|lithium|donepezil|memantine|morphine|oxycodone|hydrocodone|fentanyl|tramadol|methadone|buprenorphine|barbital|haloperidol|clozapine|quetiapine/.test(n)) return 'psych';
  if(/profen|naproxen|diclofenac|ketorolac|coxib|acetaminophen|paracetamol|aspirin|sumatriptan|lidocaine|prednisone|prednisolone|dexamethasone|methylprednisolone|hydrocortisone|betamethasone|triamcinolone/.test(n)) return 'pain';
  if(/prazole|tidine|setron|lax|docusate|bisacodyl|loperamide|sucralfate|mesalamine|linaclotide|glycopyrrolate|dicyclomine|metoclopramide|promethazine|lactulose/.test(n)) return 'gi';
  if(/albuterol|salmeterol|formoterol|tiotropium|ipratropium|budesonide|fluticasone|mometasone|montelukast|cetirizine|loratadine|fexofenadine|desloratadine|diphenhydramine|hydroxyzine|benzonatate|dextromethorphan|omalizumab/.test(n)) return 'respiratory';
  return 'default';
}
function makeDrug(name, idx){
  const p=CLASS_PROFILES[inferProfile(name)];
  const pretty=name.replace(/\w/g, c=>c.toUpperCase());
  const q=encodeURIComponent(pretty);
  return {
    name: pretty, generic: pretty, cls: p.cls, color: p.color,
    desc: `${pretty} reference profile with class-based education. Verify patient-specific use, dose, warnings, and formulation in the linked official label before clinical decisions.`,
    uses:[...p.uses], dosage:p.dosage, se:p.se.map(x=>({...x})), adrs:p.adrs.map(x=>({...x})), contra:[...p.contra], inter:[...p.inter], tags:[...p.tags],
    sources:[{label:'DailyMed label search',url:`https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=${q}`},{label:'MedlinePlus search',url:`https://medlineplus.gov/search/?query=${q}`},{label:'FDA drug databases',url:'https://www.fda.gov/drugs/drug-approvals-and-databases'}],
    reviewed:'Source lookup required for product-specific labeling', expanded:true
  };
}
function buildDrugDatabase(){
  const map=new Map();
  CLINICALLY_REVIEWED_DB.forEach(d=>map.set(d.name.toLowerCase(), {...d, sources:d.sources||[{label:'DailyMed',url:`https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=${encodeURIComponent(d.name)}`},{label:'MedlinePlus',url:`https://medlineplus.gov/search/?query=${encodeURIComponent(d.name)}`}], reviewed:d.reviewed||'Detailed starter profile'}));
  EXPANDED_DRUG_NAMES.forEach((name,i)=>{ if(!map.has(name.toLowerCase())) map.set(name.toLowerCase(), makeDrug(name,i)); });
  return [...map.values()].sort((a,b)=>a.name.localeCompare(b.name));
}
const DB=buildDrugDatabase();
export { DB };
