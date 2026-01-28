#!/usr/bin/env python3
"""
Update completed courses to reflect a Computer Science major's typical progress
Based on the CS degree requirements
"""
import json

# Typical CS major progress - first 2 years completed
completed_courses = [
    # GLACC Core - CCI courses (FirstBridge and CCI)
    {
        'id': 'comp-1',
        'code': 'CCI-FB1',
        'title': 'FirstBridge Course I',
        'credits': 4,
        'professor': 'David Sturman',
        'schedule': 'Completed',
        'location': 'N/A',
        'availableSpots': 0,
        'totalSpots': 0,
        'department': 'General',
        'description': 'FirstBridge course fulfilling CCI requirement.',
        'term': 'Fall 2024'
    },
    {
        'id': 'comp-2',
        'code': 'CCI-FB2',
        'title': 'FirstBridge Course II',
        'credits': 4,
        'professor': 'Georgi Stojanov',
        'schedule': 'Completed',
        'location': 'N/A',
        'availableSpots': 0,
        'totalSpots': 0,
        'department': 'General',
        'description': 'Second FirstBridge course fulfilling CCI requirement.',
        'term': 'Spring 2025'
    },
    {
        'id': 'comp-3',
        'code': 'CCI-REG',
        'title': 'CCI Regular Course',
        'credits': 4,
        'professor': 'Marco Pascucci',
        'schedule': 'Completed',
        'location': 'N/A',
        'availableSpots': 0,
        'totalSpots': 0,
        'department': 'General',
        'description': 'Regular CCI course.',
        'term': 'Fall 2024'
    },
    
    # GLACC Core - CCR (Research, Interpretation and Writing)
    {
        'id': 'comp-4',
        'code': 'EN1010',
        'title': 'College Writing',
        'credits': 4,
        'professor': 'Ruth Corran',
        'schedule': 'Completed',
        'location': 'N/A',
        'availableSpots': 0,
        'totalSpots': 0,
        'department': 'English',
        'description': 'Introduction to academic writing and critical thinking.',
        'term': 'Fall 2024'
    },
    {
        'id': 'comp-5',
        'code': 'EN2020CCE',
        'title': 'Writing & Criticism',
        'credits': 4,
        'professor': 'David Sturman',
        'schedule': 'Completed',
        'location': 'N/A',
        'availableSpots': 0,
        'totalSpots': 0,
        'department': 'English',
        'description': 'Advanced writing and critical analysis.',
        'term': 'Spring 2025'
    },
    
    # Language - French
    {
        'id': 'comp-6',
        'code': 'FR1100',
        'title': 'Elementary French Language and Culture',
        'credits': 4,
        'professor': 'Marco Pascucci',
        'schedule': 'Completed',
        'location': 'N/A',
        'availableSpots': 0,
        'totalSpots': 0,
        'department': 'French Studies',
        'description': 'Introduction to French language and culture.',
        'term': 'Fall 2024'
    },
    {
        'id': 'comp-7',
        'code': 'FR1200CCF',
        'title': 'Elementary French Language and Culture II',
        'credits': 4,
        'professor': 'Marco Pascucci',
        'schedule': 'Completed',
        'location': 'N/A',
        'availableSpots': 0,
        'totalSpots': 0,
        'department': 'French Studies',
        'description': 'Continued study of French language and culture.',
        'term': 'Spring 2025'
    },
    
    # Major Requirements - Math
    {
        'id': 'comp-8',
        'code': 'MA1020CCM',
        'title': 'Applied Statistics I',
        'credits': 4,
        'professor': 'Ruth Corran',
        'schedule': 'Completed',
        'location': 'N/A',
        'availableSpots': 0,
        'totalSpots': 0,
        'department': 'Mathematics',
        'description': 'Applied statistics and data analysis.',
        'term': 'Fall 2024'
    },
    
    # Major Requirements - Computer Science Core
    {
        'id': 'comp-9',
        'code': 'CS1040CCD',
        'title': 'Introduction to Computer Programming I',
        'credits': 4,
        'professor': 'David Sturman',
        'schedule': 'Completed',
        'location': 'N/A',
        'availableSpots': 0,
        'totalSpots': 0,
        'department': 'Computer Science',
        'description': 'Introduction to programming and computer science fundamentals. Fulfills GLACC CCD requirement.',
        'term': 'Fall 2024'
    },
    {
        'id': 'comp-10',
        'code': 'CS2040',
        'title': 'Introduction to Computer Programming II',
        'credits': 4,
        'professor': 'Georgi Stojanov',
        'schedule': 'Completed',
        'location': 'N/A',
        'availableSpots': 0,
        'totalSpots': 0,
        'department': 'Computer Science',
        'description': 'Advanced programming concepts and problem-solving techniques.',
        'term': 'Spring 2025'
    },
    {
        'id': 'comp-11',
        'code': 'CS2071',
        'title': 'Languages & Data Structures',
        'credits': 4,
        'professor': 'Six Seven',
        'schedule': 'Completed',
        'location': 'N/A',
        'availableSpots': 0,
        'totalSpots': 0,
        'department': 'Computer Science',
        'description': 'Study of fundamental data structures and programming language concepts.',
        'term': 'Spring 2025'
    },
    {
        'id': 'comp-12',
        'code': 'MA2400CCD',
        'title': 'Discrete Mathematics',
        'credits': 4,
        'professor': 'Barack Mobamba',
        'schedule': 'Completed',
        'location': 'N/A',
        'availableSpots': 0,
        'totalSpots': 0,
        'department': 'Mathematics',
        'description': 'Mathematical foundations for computer science including logic, set theory, and combinatorics.',
        'term': 'Spring 2025'
    },
    
    # Some electives completed
    {
        'id': 'comp-13',
        'code': 'HIST1010',
        'title': 'World History I',
        'credits': 4,
        'professor': 'Sarah Johnson',
        'schedule': 'Completed',
        'location': 'N/A',
        'availableSpots': 0,
        'totalSpots': 0,
        'department': 'History',
        'description': 'Survey of world history from ancient civilizations to 1500.',
        'term': 'Fall 2024'
    },
    {
        'id': 'comp-14',
        'code': 'PHIL1010',
        'title': 'Introduction to Philosophy',
        'credits': 4,
        'professor': 'Michael Chen',
        'schedule': 'Completed',
        'location': 'N/A',
        'availableSpots': 0,
        'totalSpots': 0,
        'department': 'Philosophy',
        'description': 'Introduction to major philosophical questions and thinkers.',
        'term': 'Spring 2025'
    }
]

# Calculate total credits
total_credits = sum(course['credits'] for course in completed_courses)
print(f"Total completed courses: {len(completed_courses)}")
print(f"Total completed credits: {total_credits}")
print(f"Credits remaining: {128 - total_credits}")

# Generate TypeScript
ts_code = """import { Course } from '../types/course'

// Completed courses for a Computer Science major
// These represent courses taken in previous semesters (typically first 2 years)
export const completedCoursesData: Course[] = [
"""

for i, course in enumerate(completed_courses):
    ts_code += "  {\n"
    ts_code += f"    id: '{course['id']}',\n"
    ts_code += f"    code: '{course['code']}',\n"
    ts_code += f"    title: '{course['title']}',\n"
    ts_code += f"    credits: {course['credits']},\n"
    ts_code += f"    professor: '{course['professor']}',\n"
    ts_code += f"    schedule: '{course['schedule']}',\n"
    ts_code += f"    location: '{course['location']}',\n"
    ts_code += f"    availableSpots: {course['availableSpots']},\n"
    ts_code += f"    totalSpots: {course['totalSpots']},\n"
    ts_code += f"    department: '{course['department']}',\n"
    desc_escaped = course['description'].replace("'", "\\'")
    ts_code += f"    description: '{desc_escaped}',\n"
    ts_code += f"    term: '{course['term']}'\n"
    ts_code += "  }"
    if i < len(completed_courses) - 1:
        ts_code += ","
    ts_code += "\n"

ts_code += "]\n"

# Write to file
with open('/Users/jonahortega/AUP/src/data/completedCourses.ts', 'w') as f:
    f.write(ts_code)

print("\n\nGenerated completedCourses.ts")
