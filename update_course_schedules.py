#!/usr/bin/env python3
"""
Update all course schedules to use AUP period times
"""
import re

# AUP Period times
AUP_PERIODS = [
    {'period': 1, 'start': '09:00', 'end': '10:20', 'display': '9:00AM-10:20AM'},
    {'period': 2, 'start': '10:35', 'end': '11:55', 'display': '10:35AM-11:55AM'},
    {'period': 3, 'start': '12:10', 'end': '13:30', 'display': '12:10PM-1:30PM'},
    {'period': 4, 'start': '13:45', 'end': '15:05', 'display': '1:45PM-3:05PM'},
    {'period': 5, 'start': '15:20', 'end': '16:40', 'display': '3:20PM-4:40PM'},
    {'period': 6, 'start': '16:55', 'end': '18:15', 'display': '4:55PM-6:15PM'},
    {'period': 7, 'start': '18:30', 'end': '19:50', 'display': '6:30PM-7:50PM'},
]

# Day combinations for courses
DAY_COMBINATIONS = [
    ['Mon', 'Wed'],
    ['Tue', 'Thu'],
    ['Mon'],
    ['Wed'],
    ['Fri'],
    ['Tue'],
    ['Thu'],
    ['Mon', 'Wed', 'Fri'],
    ['Tue', 'Thu'],
]

def get_schedule_for_course(course_id):
    """Assign a schedule based on course ID to distribute courses across periods"""
    period_index = (course_id - 1) % len(AUP_PERIODS)
    day_index = (course_id - 1) % len(DAY_COMBINATIONS)
    
    period = AUP_PERIODS[period_index]
    days = DAY_COMBINATIONS[day_index]
    
    days_str = ', '.join(days)
    schedule = f"{days_str} {period['start']}-{period['end']}"
    
    return schedule, period

# Read the courses file
with open('/Users/jonahortega/AUP/src/data/courses.ts', 'r') as f:
    content = f.read()

# Find all course entries and update schedules
# Pattern to match schedule lines: schedule: '...',
schedule_pattern = r"schedule:\s*'([^']+)'"

def replace_schedule(match):
    # Extract the full match to get context
    full_match = match.group(0)
    
    # Find the course ID from context (look backwards for id: 'X')
    start_pos = match.start()
    context_before = content[max(0, start_pos-500):start_pos]
    
    # Find the most recent id field
    id_match = re.search(r"id:\s*'(\d+)'", context_before[::-1])
    if id_match:
        course_id = int(id_match.group(1))
        new_schedule, _ = get_schedule_for_course(course_id)
        return f"schedule: '{new_schedule}'"
    
    # Fallback: use a random period
    import random
    period = random.choice(AUP_PERIODS)
    days = random.choice(DAY_COMBINATIONS)
    days_str = ', '.join(days)
    new_schedule = f"{days_str} {period['start']}-{period['end']}"
    return f"schedule: '{new_schedule}'"

# Replace all schedules
updated_content = re.sub(schedule_pattern, replace_schedule, content)

# Write back
with open('/Users/jonahortega/AUP/src/data/courses.ts', 'w') as f:
    f.write(updated_content)

print("Updated all course schedules to use AUP period times")
