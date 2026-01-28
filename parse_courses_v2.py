#!/usr/bin/env python3
import re
import json
import pdfplumber

def parse_courses(pdf_path):
    courses = []
    seen_codes = set()  # Track unique course codes (undergraduate only)
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
    
    # Split text into sections by course pattern
    # Pattern: COURSE TITLE (COURSECODE) followed by description
    course_sections = re.split(r'([A-Z][A-Z\s&,:\-\'\(\)]+)\s*\(([A-Z]{2,4}\d{4})\)', full_text)
    
    i = 1  # Start at 1 because section 0 is text before first course
    while i < len(course_sections) - 1:
        title = course_sections[i].strip()
        code = course_sections[i + 1]
        course_text = course_sections[i + 2] if i + 2 < len(course_sections) else ""
        
        # Extract description (text until "Discipline:" or "• Offered")
        desc_match = re.search(r'^(.+?)(?:Discipline:|• Offered|$)', course_text, re.DOTALL)
        description = ""
        if desc_match:
            description = desc_match.group(1).strip()
            # Clean up description
            description = re.sub(r'\s+', ' ', description)
            description = description[:500]  # Limit length
        
        # Extract discipline/department
        dept_match = re.search(r'Discipline:\s*[A-Z]{2,4}\s*\(([^)]+)\)', course_text)
        department = "General"
        if dept_match:
            department = dept_match.group(1).strip()
        
        # Extract level
        level_match = re.search(r'Level:\s*(\w+)', course_text)
        level = "Undergraduate"
        if level_match:
            level = level_match.group(1)
        
        # Only process undergraduate courses (skip graduate)
        if level != "Undergraduate":
            i += 3
            continue
        
        # Skip if we've already seen this course code
        if code in seen_codes:
            i += 3
            continue
        
        seen_codes.add(code)
        
        # Extract credits
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
                prerequisites = list(set(prereq_codes))  # Remove duplicates
        
        # Generate default schedule and location
        schedules = [
            'Mon, Wed 10:00-11:30', 'Tue, Thu 14:00-15:30', 'Mon 13:00-16:00',
            'Wed, Fri 11:00-12:30', 'Tue, Thu 09:00-10:30', 'Mon, Wed 15:00-16:30',
            'Tue 13:00-16:00', 'Mon, Wed, Fri 10:00-11:00', 'Thu 14:00-17:00',
            'Wed 18:00-21:00', 'Mon, Wed 13:00-14:30', 'Tue, Thu 10:00-11:30',
            'Mon, Wed, Fri 09:00-10:00', 'Tue, Thu 13:00-14:30', 'Mon, Wed 15:00-16:30',
            'Wed 14:00-17:00', 'Tue, Thu 11:00-12:30', 'Mon, Wed, Fri 11:00-12:00',
            'Mon, Tue, Wed 10:00-11:00', 'Thu, Fri 14:00-15:30'
        ]
        locations = [
            'Room 201', 'Room 305', 'Room 501', 'Room 102', 'Room 401',
            'Studio A', 'Room 301', 'Room 205', 'Room 402', 'Room 403',
            'Room 404', 'Room 405', 'Room 406', 'Room 407', 'Room 408', 'Room 409',
            'Room 101', 'Room 202', 'Room 303', 'Room 410', 'Room 501', 'Room 502'
        ]
        
        schedule = schedules[course_id % len(schedules)]
        location = locations[course_id % len(locations)]
        
        # Assign professor
        professor = professors[prof_index % len(professors)]
        prof_index += 1
        
        # Determine term (default to Spring 2026)
        term = 'Spring 2026'
        if 'Fall 2025' in course_text or 'Fall 2026' in course_text:
            term = 'Fall 2026'
        elif 'Spring 2026' in course_text or 'Spring 2027' in course_text:
            term = 'Spring 2026'
        elif 'Summer' in course_text:
            term = 'Spring 2026'  # Map summer to spring
        
        # Generate spots
        total_spots = 20 + (course_id % 15)  # 20-35 spots
        available_spots = max(3, total_spots - (course_id % 10))  # At least 3 available
        
        # Clean title
        title = title.strip()
        
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
            'term': term
        }
        
        # Add prerequisites if they exist
        if prerequisites:
            course['prerequisites'] = prerequisites
        
        courses.append(course)
        course_id += 1
        
        i += 3
    
    return courses

if __name__ == "__main__":
    pdf_path = "/Users/jonahortega/Downloads/school work/AUP Course Catalog 22-Jan-2026.pdf"
    courses = parse_courses(pdf_path)
    
    print(f"Found {len(courses)} unique undergraduate courses")
    print(json.dumps(courses, indent=2))
