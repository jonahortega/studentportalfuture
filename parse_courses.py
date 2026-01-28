#!/usr/bin/env python3
import re
import json
import pdfplumber

def parse_courses(pdf_path):
    courses = []
    course_id = 1
    
    # Default professor names pool
    professors = [
        'David Sturman', 'Georgi Stojanov', 'Marco Pascucci', 'Ruth Corran',
        'Six Seven', 'Lebron James', 'Barack Mobamba', 'Sarah Johnson',
        'Michael Chen', 'Emma Williams', 'James Anderson', 'Maria Garcia',
        'Robert Taylor', 'Lisa Brown', 'Thomas Wilson', 'Jennifer Martinez'
    ]
    prof_index = 0
    
    with pdfplumber.open(pdf_path) as pdf:
        full_text = ""
        for page in pdf.pages:
            full_text += page.extract_text() + "\n"
    
    # Split by course pattern - courses start with course code in parentheses
    # Pattern: COURSE TITLE (COURSECODE)
    course_pattern = r'([A-Z][A-Z\s&,:\-\']+(?:\([^)]+\))?)\s*\(([A-Z]{2,4}\d{4})\)'
    
    # Find all course matches
    matches = list(re.finditer(course_pattern, full_text))
    
    for i, match in enumerate(matches):
        title = match.group(1).strip()
        code = match.group(2)
        
        # Get text after this match until next match or end
        start_pos = match.end()
        if i + 1 < len(matches):
            end_pos = matches[i + 1].start()
        else:
            end_pos = len(full_text)
        
        course_text = full_text[start_pos:end_pos]
        
        # Extract course details
        credits = 4  # Default
        credits_match = re.search(r'Credits:\s*(\d+)', course_text)
        if credits_match:
            credits = int(credits_match.group(1))
        
        # Extract prerequisites
        prerequisites = []
        prereq_match = re.search(r'Pre-requisites:\s*([^\n]+)', course_text)
        if prereq_match:
            prereq_text = prereq_match.group(1).strip()
            if prereq_text and prereq_text.lower() not in ['none', 'n/a', '']:
                # Extract course codes from prerequisites
                prereq_codes = re.findall(r'([A-Z]{2,4}\d{4})', prereq_text)
                prerequisites = prereq_codes
        
        # Extract description (text between course code and "Discipline:")
        desc_match = re.search(r'\)\s*(.+?)\s*Discipline:', course_text, re.DOTALL)
        description = ""
        if desc_match:
            description = desc_match.group(1).strip()
            # Clean up description
            description = re.sub(r'\s+', ' ', description)
            description = description[:500]  # Limit length
        
        # Extract department/discipline
        dept_match = re.search(r'Discipline:\s*([A-Z]{2,4})\s*\(([^)]+)\)', course_text)
        department = "General"
        if dept_match:
            department = dept_match.group(2).strip()
        
        # Extract level
        level_match = re.search(r'Level:\s*(\w+)', course_text)
        level = "Undergraduate"
        if level_match:
            level = level_match.group(1)
        
        # Skip graduate-only courses for now (focus on undergraduate)
        if level == "Graduate" and not code.startswith(('AB', 'AH')):  # Keep some for reference
            continue
        
        # Generate default schedule and location
        schedules = [
            'Mon, Wed 10:00-11:30', 'Tue, Thu 14:00-15:30', 'Mon 13:00-16:00',
            'Wed, Fri 11:00-12:30', 'Tue, Thu 09:00-10:30', 'Mon, Wed 15:00-16:30',
            'Tue 13:00-16:00', 'Mon, Wed, Fri 10:00-11:00', 'Thu 14:00-17:00',
            'Wed 18:00-21:00', 'Mon, Wed 13:00-14:30', 'Tue, Thu 10:00-11:30',
            'Mon, Wed, Fri 09:00-10:00', 'Tue, Thu 13:00-14:30', 'Mon, Wed 15:00-16:30',
            'Wed 14:00-17:00', 'Tue, Thu 11:00-12:30', 'Mon, Wed, Fri 11:00-12:00'
        ]
        locations = [
            'Room 201', 'Room 305', 'Room 501', 'Room 102', 'Room 401',
            'Studio A', 'Room 301', 'Room 205', 'Room 402', 'Room 403',
            'Room 404', 'Room 405', 'Room 406', 'Room 407', 'Room 408', 'Room 409'
        ]
        
        schedule = schedules[course_id % len(schedules)]
        location = locations[course_id % len(locations)]
        
        # Assign professor
        professor = professors[prof_index % len(professors)]
        prof_index += 1
        
        # Determine term (default to Spring 2026)
        term = 'Spring 2026'
        if 'Fall' in course_text:
            term = 'Fall 2026'
        elif 'Spring' in course_text:
            term = 'Spring 2026'
        
        # Generate spots
        total_spots = 20 + (course_id % 15)  # 20-35 spots
        available_spots = max(3, total_spots - (course_id % 10))  # At least 3 available
        
        course = {
            'id': str(course_id),
            'code': code,
            'title': title,
            'credits': credits,
            'professor': professor,
            'schedule': schedule,
            'location': location,
            'availableSpots': available_spots,
            'totalSpots': total_spots,
            'department': department,
            'description': description if description else f'Course in {department}',
            'term': term,
            'prerequisites': prerequisites if prerequisites else None
        }
        
        # Remove None prerequisites
        if course['prerequisites'] is None:
            del course['prerequisites']
        
        courses.append(course)
        course_id += 1
    
    return courses

if __name__ == "__main__":
    pdf_path = "/Users/jonahortega/Downloads/school work/AUP Course Catalog 22-Jan-2026.pdf"
    courses = parse_courses(pdf_path)
    
    print(f"Found {len(courses)} courses")
    print(json.dumps(courses, indent=2))
