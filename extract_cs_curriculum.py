#!/usr/bin/env python3
"""
Extract complete Computer Science major curriculum from Excel
"""
import pandas as pd
import json
import re

def extract_cs_curriculum(excel_path):
    """Extract all CS major requirements"""
    
    df = pd.read_excel(excel_path, sheet_name='Degree Planning Worksheet', header=None)
    
    requirements = {
        'glacc_core': {
            'cci': [],  # Integrative Inquiry
            'ccx': [],  # Experiential Learning
            'ccr': [],  # Research, Interpretation and Writing
            'ccd': [],  # Digital Literacy (fulfilled by major)
            'ccm': [],  # Quantitative Reasoning (fulfilled by major)
            'ccs': [],  # Experimental Reasoning
        },
        'language': {
            'french': []
        },
        'major_requirements': [],
        'electives': {
            'open_electives': 0,
            'minor_electives': 0
        },
        'total_credits': 128
    }
    
    course_pattern = re.compile(r'([A-Z]{2,4}\d{4})')
    prerequisite_pattern = re.compile(r'\(([^)]+)\)')
    
    current_section = None
    i = 0
    
    while i < len(df):
        row = df.iloc[i]
        row_text = ' '.join([str(val) for val in row.values if pd.notna(val)])
        
        # Detect section headers
        if 'GLACC' in row_text or 'Global Liberal' in row_text:
            current_section = 'glacc'
        elif 'Integrative Inquiry' in row_text or 'CCI' in row_text:
            current_section = 'cci'
        elif 'Experiential Learning' in row_text or 'CCX' in row_text:
            current_section = 'ccx'
        elif 'Research, Interpretation and Writing' in row_text or 'CCR' in row_text:
            current_section = 'ccr'
        elif 'Digital Literacy' in row_text or 'CCD' in row_text:
            current_section = 'ccd'
        elif 'Quantitative Reasoning' in row_text or 'CCM' in row_text:
            current_section = 'ccm'
        elif 'Experimental Reasoning' in row_text or 'CCS' in row_text:
            current_section = 'ccs'
        elif 'Expression française' in row_text or 'FR)' in row_text:
            current_section = 'french'
        elif 'Major Requirements' in row_text or 'Computer Science' in row_text and 'Major' in row_text:
            current_section = 'major'
        elif 'Open Electives' in row_text or 'Minor' in row_text:
            current_section = 'electives'
        
        # Extract course information
        if course_pattern.search(row_text):
            course_code_match = course_pattern.search(row_text)
            if course_code_match:
                course_code = course_code_match.group(1)
                
                # Extract prerequisites
                prereq_match = prerequisite_pattern.search(row_text)
                prerequisites = []
                if prereq_match:
                    prereq_text = prereq_match.group(1)
                    prereq_codes = course_pattern.findall(prereq_text)
                    prerequisites = prereq_codes
                
                # Extract course title (text before the course code or after)
                title_match = re.search(r'([A-Z][^:]+?):\s*([^\(]+)', row_text)
                if title_match:
                    course_title = title_match.group(2).strip()
                else:
                    # Try to get title from the row
                    title_parts = row_text.split(course_code)
                    if len(title_parts) > 0:
                        course_title = title_parts[0].split(':')[-1].strip()
                    else:
                        course_title = f"Course {course_code}"
                
                # Get credits (usually 4)
                credits = 4
                credits_match = re.search(r'(\d+)\s*(?:CR|credits?|cr)', row_text, re.IGNORECASE)
                if credits_match:
                    credits = int(credits_match.group(1))
                
                course_info = {
                    'code': course_code,
                    'title': course_title,
                    'credits': credits,
                    'prerequisites': prerequisites,
                    'raw_text': row_text
                }
                
                # Add to appropriate section
                if current_section == 'cci':
                    requirements['glacc_core']['cci'].append(course_info)
                elif current_section == 'ccx':
                    requirements['glacc_core']['ccx'].append(course_info)
                elif current_section == 'ccr':
                    requirements['glacc_core']['ccr'].append(course_info)
                elif current_section == 'ccd':
                    requirements['glacc_core']['ccd'].append(course_info)
                elif current_section == 'ccm':
                    requirements['glacc_core']['ccm'].append(course_info)
                elif current_section == 'ccs':
                    requirements['glacc_core']['ccs'].append(course_info)
                elif current_section == 'french':
                    requirements['language']['french'].append(course_info)
                elif current_section == 'major':
                    requirements['major_requirements'].append(course_info)
        
        # Count electives (look for empty rows or "Select" in electives section)
        if current_section == 'electives':
            if 'Select' in row_text or pd.isna(row.values[0]) or str(row.values[0]).strip() == '':
                # Count empty elective slots
                if 'Open Electives' in str(df.iloc[max(0, i-2):i+2].values):
                    requirements['electives']['open_electives'] += 4  # Usually 4 credits per course
        
        i += 1
    
    # Also read the full data to find all courses
    print("\n\nFull course extraction from all rows:")
    all_courses_found = []
    for idx, row in df.iterrows():
        for col_idx, val in enumerate(row.values):
            if pd.notna(val):
                val_str = str(val).strip()
                if course_pattern.search(val_str):
                    all_courses_found.append({
                        'row': idx,
                        'col': col_idx,
                        'text': val_str
                    })
    
    print(f"Total courses found: {len(all_courses_found)}")
    
    # Save results
    output = {
        'requirements': requirements,
        'all_courses_found': all_courses_found[:50],  # First 50 for inspection
        'total_courses_found': len(all_courses_found)
    }
    
    with open('/Users/jonahortega/AUP/cs_curriculum_extracted.json', 'w') as f:
        json.dump(output, f, indent=2, default=str)
    
    print("\n\nExtracted curriculum saved to: cs_curriculum_extracted.json")
    print(f"\nRequirements summary:")
    print(f"  CCI courses: {len(requirements['glacc_core']['cci'])}")
    print(f"  CCR courses: {len(requirements['glacc_core']['ccr'])}")
    print(f"  CCS courses: {len(requirements['glacc_core']['ccs'])}")
    print(f"  French courses: {len(requirements['language']['french'])}")
    print(f"  Major requirements: {len(requirements['major_requirements'])}")
    
    return requirements

if __name__ == "__main__":
    excel_path = "/Users/jonahortega/Downloads/school work/Computer Science 25-26.xlsx"
    extract_cs_curriculum(excel_path)
