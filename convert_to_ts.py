#!/usr/bin/env python3
import json
import re

# Read the parsed courses
with open('parsed_courses_v2.json', 'r') as f:
    content = f.read()
    # Find the JSON array
    json_start = content.find('[')
    if json_start != -1:
        courses_json = content[json_start:]
        courses = json.loads(courses_json)
    else:
        courses = []

# Filter out graduate courses (codes starting with 5xxx are typically graduate)
undergrad_courses = [c for c in courses if not (len(c['code']) >= 4 and c['code'][-4].isdigit() and int(c['code'][-4]) >= 5)]

# Fix departments - map discipline codes to full names
dept_mapping = {
    'AB': 'Arabic',
    'AH': 'Art History',
    'AN': 'Anthropology',
    'AR': 'Art',
    'BI': 'Biology',
    'BU': 'Business',
    'CH': 'Chemistry',
    'CM': 'Communication',
    'CS': 'Computer Science',
    'EC': 'Economics',
    'EN': 'English',
    'FR': 'French',
    'GE': 'Geography',
    'HI': 'History',
    'IS': 'International Studies',
    'LI': 'Literature',
    'MA': 'Mathematics',
    'MU': 'Music',
    'PH': 'Philosophy',
    'PO': 'Political Science',
    'PS': 'Psychology',
    'SO': 'Sociology',
    'SP': 'Spanish',
    'TH': 'Theater',
}

# Extract department from course code
for course in undergrad_courses:
    code = course['code']
    dept_code = re.match(r'([A-Z]{2,4})', code)
    if dept_code:
        dept_abbr = dept_code.group(1)
        course['department'] = dept_mapping.get(dept_abbr, course.get('department', 'General'))
    
    # Ensure description is not empty
    if not course.get('description') or course['description'] == f"Course in {course['department']}":
        course['description'] = f"An undergraduate course in {course['department']}."

print(f"Processing {len(undergrad_courses)} undergraduate courses")

# Generate TypeScript code
ts_code = "import { Course } from '../types/course'\n\n"
ts_code += "export const availableCourses: Course[] = [\n"

for i, course in enumerate(undergrad_courses):
    ts_code += "  {\n"
    ts_code += f"    id: '{course['id']}',\n"
    ts_code += f"    code: '{course['code']}',\n"
    title_escaped = course['title'].replace("'", "\\'")
    ts_code += f"    title: '{title_escaped}',\n"
    ts_code += f"    credits: {course['credits']},\n"
    ts_code += f"    professor: '{course['professor']}',\n"
    ts_code += f"    schedule: '{course['schedule']}',\n"
    ts_code += f"    location: '{course['location']}',\n"
    ts_code += f"    availableSpots: {course['availableSpots']},\n"
    ts_code += f"    totalSpots: {course['totalSpots']},\n"
    ts_code += f"    department: '{course['department']}',\n"
    # Escape quotes in description
    desc = course['description'].replace("'", "\\'").replace("\n", " ")
    ts_code += f"    description: '{desc}',\n"
    ts_code += f"    term: '{course['term']}'"
    
    if 'prerequisites' in course and course['prerequisites']:
        prereqs = "', '".join(course['prerequisites'])
        ts_code += f",\n    prerequisites: ['{prereqs}']"
    
    ts_code += "\n  }"
    if i < len(undergrad_courses) - 1:
        ts_code += ","
    ts_code += "\n"

ts_code += "]\n"

# Write to file
with open('src/data/courses.ts', 'w') as f:
    f.write(ts_code)

print(f"Generated TypeScript file with {len(undergrad_courses)} courses")
