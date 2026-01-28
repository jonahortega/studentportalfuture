export interface DegreeRequirement {
  id: string
  category: string
  requiredCredits: number
  requiredCourses?: string[]
  description: string
}

export const degreeRequirements: DegreeRequirement[] = [
  {
    id: 'glacc_cci',
    category: 'GLACC: Integrative Inquiry (CCI)',
    requiredCredits: 16,
    description: 'Four CCI courses including two FirstBridge courses, one regular CCI course, and one CCI course at AUP (for transfer students)'
  },
  {
    id: 'glacc_ccx',
    category: 'GLACC: Experiential Learning (CCX)',
    requiredCredits: 4,
    description: 'Experiential Learning through registered internship or completion of the GPS Program. Must be taken at AUP.'
  },
  {
    id: 'glacc_ccr',
    category: 'GLACC: Research, Interpretation and Writing (CCR)',
    requiredCredits: 12,
    requiredCourses: ['EN1010', 'EN2020CCE', 'CS3050CCR'],
    description: 'College Writing, Writing & Criticism, and Research and Writing in CS & Math'
  },
  {
    id: 'glacc_ccd',
    category: 'GLACC: Digital Literacy and Communication (CCD)',
    requiredCredits: 0,
    description: 'Fulfilled by CS1040CCD (Introduction to Computer Programming I) - required for major. No additional credits needed.'
  },
  {
    id: 'glacc_ccm',
    category: 'GLACC: Quantitative Reasoning (CCM)',
    requiredCredits: 0,
    requiredCourses: ['MA1020CCM', 'MA1030CCM'],
    description: 'Applied Statistics I (MA1020CCM) or alternative CCM course. Fulfilled by major requirement. No additional credits needed.'
  },
  {
    id: 'glacc_ccs',
    category: 'GLACC: Experimental Reasoning (CCS)',
    requiredCredits: 4,
    description: 'Any course coded CCS (must enroll in 4CR lecture AND associated 0CR lab)'
  },
  {
    id: 'language_french',
    category: 'Expression française (FR)',
    requiredCredits: 8,
    requiredCourses: ['FR1100', 'FR1200CCF'],
    description: 'Elementary French Language and Culture I & II - Required for most degrees'
  },
  {
    id: 'major_core',
    category: 'Major Requirements: Core Courses',
    requiredCredits: 52,
    requiredCourses: [
      'MA1020CCM',  // or MA1030CCM - Applied Statistics I
      'CS1040CCD',  // Introduction to Computer Programming I
      'CS2040',     // Introduction to Computer Programming II
      'CS2071',     // Languages & Data Structures
      'MA2400CCD',  // Discrete Mathematics
      'CS3015',     // Computer Networks
      'CS3032',     // Operating Systems
      'CS3048',     // Human/Computer Interaction
      'CS3050CCR',  // Research and Writing in CS & Math
      'CS3051CCD',  // Web Applications
      'CS3053',     // Software Engineering
      'CS3068',     // Database Applications
      'CS4095CCC'   // or CS4098CCCX - Capstone
    ],
    description: 'Core Computer Science major courses (56 credits total including core elective)'
  },
  {
    id: 'major_elective',
    category: 'Major Requirements: Core Elective',
    requiredCredits: 4,
    description: 'Select one course from the approved core elective list'
  },
  {
    id: 'open_electives',
    category: 'Open Electives / Minor',
    requiredCredits: 36,
    description: 'Open electives or courses toward a minor (9 courses × 4 credits)'
  },
  {
    id: 'total',
    category: 'Total Degree Credits',
    requiredCredits: 128,
    description: 'Total credits required for graduation'
  }
]
