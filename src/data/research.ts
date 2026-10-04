export type Venue = 'Research Assistant' | 'Invited Speaker' | 'Presenter' | 'Solo Author' | 'Finalist'

export interface ResearchEntry {
  /** the topic, used as the card title */
  title: string
  venue: Venue
  /** program, conference, or competition the card belongs to */
  where: string
  /** e.g. 'April 21, 2026' or 'Fall 2025 to Present' */
  date: string
  /** short stat chips, strongest number first */
  stats: string[]
  bullets: string[]
  funding?: string
  mentor?: string
  link?: string
  tags?: string[]
}

export interface StripNumber {
  value: string
  label: string
}

/** numbers strip at the top of the research page */
export const researchNumbers: StripNumber[] = [
  { value: '262', label: 'electrodes' },
  { value: '9', label: 'simulations' },
  { value: '1,500+', label: 'drilling operations' },
  { value: '89%', label: 'ROP accuracy' },
  { value: '$11M', label: 'addressable market' },
  { value: 'Top 10', label: 'finalist' },
]

/** seizure modeling first, since the other epilepsy cards build on it; the rest newest first */
export const research: ResearchEntry[] = [
  {
    title: 'Patient Specific Seizure Propagation Modeling for Epilepsy Surgery Planning',
    venue: 'Research Assistant',
    where: 'Honors College URS TrUE Toreador Research, Texas Tech CS',
    date: 'Fall 2025 to Present',
    stats: ['262 electrodes', '3 patients', '9 simulations'],
    bullets: [
      'Processed 262 electrodes across 3 patients from the UPenn OpenNeuro iEEG dataset (ds004789) and generated 9 personalized 3D seizure simulations.',
      'Built the model on fractional order dynamics, which keep the memory in neural tissue that standard models drop. Surgery success has sat at 50 to 60 percent for 30 years because surgeons use generic brain templates.',
      'Presented the work at the TTU Undergraduate Research Conference (April 9, Session D) and carried it into the other venues on this page.',
    ],
    mentor: 'Dr. Emily Pereira',
    funding: 'CH Foundation and Helen Jones Foundation through URS',
    tags: ['Fractional order dynamics', 'iEEG', '3D simulation'],
  },
  {
    title: 'Resting State fMRI Functional Connectivity in Autism',
    venue: 'Research Assistant',
    where: 'ABIDE Autism Connectivity Project, Texas Tech CS',
    date: 'Fall 2026 to Spring 2027',
    stats: [],
    bullets: [
      'Compare machine learning classifiers on the ABIDE dataset to see which methods separate autism from control scans most reliably.',
      'Identify which brain connections drive the predictions across every classifier, not just one.',
      'Second research thread in a new area, after epilepsy modeling.',
    ],
    mentor: 'Dr. Linh Huynh',
    tags: ['fMRI', 'Machine learning', 'ABIDE'],
  },
  {
    title: 'Fractional Order Multimodal Brain Modeling for Epilepsy Surgery Planning',
    venue: 'Presenter',
    where: 'CRA UR2PhD Undergraduate Mentoring Workshop, New Orleans',
    date: 'April 23 to 25, 2026',
    stats: ['48 by 36 inch poster', '5 minute talk', 'Pod 1B'],
    bullets: [
      'Selected for a fully funded national workshop for students heading to a PhD.',
      'Presented a 48 by 36 inch poster and a 5 minute talk at Pod 1B.',
      'Met CRA CEO Tracy Camp and Google Distinguished Engineer Kathryn McKinley.',
    ],
    tags: ['Poster', 'CRA'],
  },
  {
    title: 'Patient Specific Seizure Network Modeling Using Fractional Order Dynamics and Real Intracranial EEG Data',
    venue: 'Invited Speaker',
    where: 'GlobusWorld 2026, Chicago',
    date: 'April 21, 2026',
    stats: ['weeks to days', '3 person team'],
    bullets: [
      'Sole presenter in the session "Globus Integration Across Life Sciences, Data Intensive, and Regulated Domains." Accepted outside the open call.',
      'Set up Globus Compute on the TTU RedRaider cluster so simulations submit to HPC from Python. This removed manual job submission and moved runs from weeks to days.',
      'Replaced emailed patient files with audit logged Globus Transfer across the 3 person team.',
    ],
    funding: 'NSF travel award #2004894',
    tags: ['Globus Compute', 'HPC', 'Python'],
  },
  {
    title: 'Turning the seizure model into a surgical planning product',
    venue: 'Finalist',
    where: 'Commercialization Researcher, CortexCompass, TTU URC Commercialization Competition',
    date: 'March to April 2026 (finalist session April 8, 2026)',
    stats: ['Top 10 finalist', '150+ surgery centers', '$11M addressable', 'team of 3'],
    bullets: [
      'Top 10 finalist among TTU undergraduate teams. Presented to a panel from the Lubbock Economic Development Alliance and the TTU Innovation Hub.',
      'Sized the market: 150+ US epilepsy surgery centers, $11 million addressable. A failed surgery costs $150,000 to $300,000.',
      'Mapped the route to market: NIH SBIR funding, then FDA clearance, with medical device partners.',
      'Led a team of 3 with Amar Kushwaha and Shruti Chougule.',
    ],
    tags: ['Market sizing', 'SBIR', 'FDA'],
  },
  {
    title: 'Ensemble Machine Learning Framework for Real Time Drilling Fluid Performance Optimization and Non Productive Time Reduction',
    venue: 'Solo Author',
    where: 'AADE 2026 Fluids Technical Conference, Houston. Student Paper Contest. Paper AADE-26-FTCE-SPP-03',
    date: 'Fall 2025 to April 7, 2026',
    stats: ['89% ROP accuracy', '85% incident classification', '1,500+ operations', '$400K to $550K per well'],
    bullets: [
      'Reached 89 percent rate of penetration accuracy (RMSE 11.8 ft/hr) and 85 percent incident classification (AUC 0.91).',
      'Trained on 1,500+ drilling operations and 47 features from Permian Basin and Gulf of Mexico wells.',
      'Projected 18 to 28 percent non productive time reduction, worth $400K to $550K per deepwater well. Industry loses $8 to 12 billion a year to this.',
      'Wrote and presented it alone, with no drilling background, in the Student Paper Contest.',
    ],
    tags: ['Ensemble ML', 'Drilling', 'Python'],
  },
]
