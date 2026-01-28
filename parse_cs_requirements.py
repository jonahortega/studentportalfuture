#!/usr/bin/env python3
"""
Parse Computer Science major requirements from Excel file
"""
import pandas as pd
import json
import re

def parse_cs_requirements(excel_path):
    """Parse the CS major requirements from the Excel file"""
    
    # Read the main worksheet
    df = pd.read_excel(excel_path, sheet_name='Degree Planning Worksheet', header=None)
    
    print("Excel file structure:")
    print(f"Shape: {df.shape}")
    print("\nFirst 30 rows:")
    for i in range(min(30, len(df))):
        row = df.iloc[i]
        non_null = [str(val) for val in row.values if pd.notna(val) and str(val).strip()]
        if non_null:
            print(f"Row {i}: {non_null[:5]}")
    
    # Try to find the structure
    requirements = {
        'core_requirements': [],
        'major_requirements': [],
        'language_requirements': [],
        'electives': [],
        'total_credits': 128
    }
    
    # Look for course codes and requirements
    course_pattern = re.compile(r'([A-Z]{2,4}\d{4})')
    
    all_courses = []
    for idx, row in df.iterrows():
        row_str = ' '.join([str(val) for val in row.values if pd.notna(val)])
        
        # Find course codes
        matches = course_pattern.findall(row_str)
        if matches:
            # Try to extract course info
            for col_idx, val in enumerate(row.values):
                if pd.notna(val):
                    val_str = str(val).strip()
                    if course_pattern.search(val_str):
                        # This might be a course
                        course_info = {
                            'row': idx,
                            'col': col_idx,
                            'text': val_str
                        }
                        all_courses.append(course_info)
    
    print(f"\n\nFound {len(all_courses)} potential course entries")
    print("Sample courses:")
    for course in all_courses[:20]:
        print(f"  {course['text']}")
    
    # Save full data for inspection
    output = {
        'all_courses': all_courses,
        'raw_data_sample': df.head(50).to_dict('records')
    }
    
    with open('/Users/jonahortega/AUP/cs_requirements_analysis.json', 'w') as f:
        json.dump(output, f, indent=2, default=str)
    
    print(f"\n\nFull analysis saved to: cs_requirements_analysis.json")
    
    # Also try to read as a more structured format
    print("\n\nTrying to read with different headers...")
    for header_row in [0, 1, 2, 3]:
        try:
            df_header = pd.read_excel(excel_path, sheet_name='Degree Planning Worksheet', header=header_row)
            print(f"\nWith header={header_row}:")
            print(f"Columns: {list(df_header.columns)[:10]}")
            if len(df_header) > 0:
                print(f"First row: {df_header.iloc[0].to_dict()}")
        except:
            pass

if __name__ == "__main__":
    excel_path = "/Users/jonahortega/Downloads/school work/Computer Science 25-26.xlsx"
    parse_cs_requirements(excel_path)
