#!/usr/bin/env python3
"""
Build complete CS degree requirements from Excel and generate TypeScript files
"""
import json

# Based on the Excel file analysis
cs_requirements = {
    'glacc_core': {
        'cci': {
            'required_credits': 16,
            'courses': [
                {'code': 'CCI', 'title': 'FirstBridge Course', 'credits': 4, 'type': 'FirstBridge'},
                {'code': 'CCI', 'title': 'FirstBridge Course', 'credits': 4, 'type': 'FirstBridge'},
                {'code': 'CCI', 'title': 'CCI Course', 'credits': 4, 'type': 'CCI'},
                {'code': 'CCI', 'title': 'CCI Course @ AUP (transfer students)', 'credits': 4, 'type': 'CCI_AUP'}
            ]
        },
        'ccx': {
            'required_credits': 4,
            'courses': [
                {'code': 'CCX', 'title': 'Experiential Learning (internship or GPS Program)', 'credits': 4}
            ]
        },
        'ccr': {
            'required_credits': 12,
            'required_courses': ['EN1010', 'EN2020CCE', 'CS3050CCR'],  # CS/MA3050CCR
            'courses': [
                {'code': 'EN1010', 'title': 'College Writing', 'credits': 4, 'prerequisites': ['EN1000']},
                {'code': 'EN2020CCE', 'title': 'Writing & Criticism', 'credits': 4, 'prerequisites': ['EN1010']},
                {'code': 'CS3050CCR', 'title': 'Research and Writing in CS & Math', 'credits': 4, 'prerequisites': ['CS2040', 'CS2071', 'MA2400CCD'], 'note': 'junior standing required'}
            ]
        },
        'ccd': {
            'required_credits': 4,
            'note': 'Fulfilled by CS1040CCD (Introduction to Computer Programming I)'
        },
        'ccm': {
            'required_credits': 4,
            'required_courses': ['MA1020CCM', 'MA1030CCM'],  # One of these
            'courses': [
                {'code': 'MA1020CCM', 'title': 'Applied Statistics I', 'credits': 4, 'prerequisites': ['MA0900']},
                {'code': 'MA1030CCM', 'title': 'Alternative CCM course', 'credits': 4}
            ]
        },
        'ccs': {
            'required_credits': 4,
            'note': 'Any course coded CCS (must enroll in 4CR lecture AND associated 0CR lab)'
        }
    },
    'language': {
        'french': {
            'required_credits': 8,
            'required_courses': ['FR1100', 'FR1200CCF'],
            'courses': [
                {'code': 'FR1100', 'title': 'Elementary French Language and Culture', 'credits': 4},
                {'code': 'FR1200CCF', 'title': 'Elementary French Language and Culture II', 'credits': 4, 'prerequisites': ['FR1100']}
            ]
        }
    },
    'major_requirements': {
        'required_credits': 56,
        'required_courses': [
            'MA1020CCM',  # or MA1030CCM
            'CS1040CCD',  # Introduction to Computer Programming I
            'CS2040',     # Introduction to Computer Programming II
            'CS2071',     # Languages & Data Structures
            'MA2400CCD',  # Discrete Mathematics
            'CS3015',     # Computer Networks
            'CS3032',     # Operating Systems
            'CS3048',     # Human/Computer Interaction
            'CS3050CCR',  # Research and Writing in CS & Math
            'CS3051CCD',  # Web Applications
            'CS3053',     # Software Engineering
            'CS3068',     # Database Applications
            'CS4095CCC',  # or CS4098CCCX (Capstone)
        ],
        'core_elective': {
            'required_credits': 4,
            'note': 'Select a course from the drop-down menu'
        },
        'courses': [
            {'code': 'MA1020CCM', 'title': 'Applied Statistics I', 'credits': 4, 'prerequisites': ['MA0900'], 'alternative': 'MA1030CCM'},
            {'code': 'CS1040CCD', 'title': 'Introduction to Computer Programming I', 'credits': 4},
            {'code': 'CS2040', 'title': 'Introduction to Computer Programming II', 'credits': 4, 'prerequisites': ['CS1040CCD']},
            {'code': 'CS2071', 'title': 'Languages & Data Structures', 'credits': 4, 'prerequisites': ['CS1040CCD']},
            {'code': 'MA2400CCD', 'title': 'Discrete Mathematics', 'credits': 4, 'prerequisites': ['MA1010', 'CS1040CCD']},
            {'code': 'CS3015', 'title': 'Computer Networks', 'credits': 4, 'prerequisites': ['CS2040', 'MA2400CCD'], 'alternative_prereq': 'CS1050'},
            {'code': 'CS3032', 'title': 'Operating Systems', 'credits': 4, 'prerequisites': ['CS2071']},
            {'code': 'CS3048', 'title': 'Human/Computer Interaction', 'credits': 4, 'prerequisites': ['CS1040CCD'], 'alternative_prereq': 'CS1005+GPA>3.0'},
            {'code': 'CS3050CCR', 'title': 'Research and Writing in CS & Math', 'credits': 4, 'prerequisites': ['CS2040', 'CS2071', 'MA2400CCD'], 'note': 'junior standing required'},
            {'code': 'CS3051CCD', 'title': 'Web Applications', 'credits': 4, 'prerequisites': ['CS1040CCD']},
            {'code': 'CS3053', 'title': 'Software Engineering', 'credits': 4, 'prerequisites': ['CS1040CCD']},
            {'code': 'CS3068', 'title': 'Database Applications', 'credits': 4},
            {'code': 'CS4095CCC', 'title': 'Capstone Course', 'credits': 4, 'alternative': 'CS4098CCCX'}
        ]
    },
    'electives': {
        'open_electives_minor': {
            'required_credits': 36,  # 9 courses × 4 credits = 36 credits
            'note': 'Open Electives / Minor courses'
        }
    },
    'total_credits': 128
}

# Calculate credit breakdown
total_glacc = (
    cs_requirements['glacc_core']['cci']['required_credits'] +
    cs_requirements['glacc_core']['ccx']['required_credits'] +
    cs_requirements['glacc_core']['ccr']['required_credits'] +
    cs_requirements['glacc_core']['ccd']['required_credits'] +
    cs_requirements['glacc_core']['ccm']['required_credits'] +
    cs_requirements['glacc_core']['ccs']['required_credits']
)
total_language = cs_requirements['language']['french']['required_credits']
total_major = cs_requirements['major_requirements']['required_credits'] + cs_requirements['major_requirements']['core_elective']['required_credits']
total_electives = cs_requirements['electives']['open_electives_minor']['required_credits']

print(f"Credit Breakdown:")
print(f"  GLACC Core: {total_glacc} credits")
print(f"  Language (French): {total_language} credits")
print(f"  Major Requirements: {total_major} credits")
print(f"  Open Electives/Minor: {total_electives} credits")
print(f"  Total: {total_glacc + total_language + total_major + total_electives} credits")

# Generate TypeScript degree requirements
ts_code = """export interface DegreeRequirement {
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
    requiredCredits: 4,
    description: 'Fulfilled by CS1040CCD (Introduction to Computer Programming I) - required for major'
  },
  {
    id: 'glacc_ccm',
    category: 'GLACC: Quantitative Reasoning (CCM)',
    requiredCredits: 4,
    requiredCourses: ['MA1020CCM', 'MA1030CCM'],
    description: 'Applied Statistics I (MA1020CCM) or alternative CCM course. Fulfilled by major requirement.'
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
"""

# Write to file
with open('/Users/jonahortega/AUP/src/data/degreeRequirements.ts', 'w') as f:
    f.write(ts_code)

print("\n\nGenerated degreeRequirements.ts")

# Also save JSON for reference
with open('/Users/jonahortega/AUP/cs_requirements_complete.json', 'w') as f:
    json.dump(cs_requirements, f, indent=2)

print("Saved complete requirements to cs_requirements_complete.json")
