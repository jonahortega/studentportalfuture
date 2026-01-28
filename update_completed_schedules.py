#!/usr/bin/env python3
"""
Update completed courses schedules to use AUP period times
"""
import re

# AUP Period times
AUP_PERIODS = [
    {'period': 1, 'start': '09:00', 'end': '10:20'},
    {'period': 2, 'start': '10:35', 'end': '11:55'},
    {'period': 3, 'start': '12:10', 'end': '13:30'},
    {'period': 4, 'start': '13:45', 'end': '15:05'},
    {'period': 5, 'start': '15:20', 'end': '16:40'},
    {'period': 6, 'start': '16:55', 'end': '18:15'},
    {'period': 7, 'start': '18:30', 'end': '19:50'},
]

DAY_COMBINATIONS = [
    ['Mon', 'Wed'],
    ['Tue', 'Thu'],
    ['Mon'],
    ['Wed'],
    ['Fri'],
    ['Tue'],
    ['Thu'],
]

# Read the completed courses file
with open('/Users/jonahortega/AUP/src/data/completedCourses.ts', 'r') as f:
    content = f.read()

# Find all schedule entries and update them
def replace_completed_schedule(match):
    # For completed courses, use "Completed" or assign a period
    import random
    period = random.choice(AUP_PERIODS)
    days = random.choice(DAY_COMBINATIONS)
    days_str = ', '.join(days)
    # Keep "Completed" for completed courses but use period format
    return f"schedule: 'Completed ({days_str} {period['start']}-{period['end']})'"

# Only update if schedule is not already "Completed"
schedule_pattern = r"schedule:\s*'(?!Completed)([^']+)'"
updated_content = re.sub(schedule_pattern, replace_completed_schedule, content)

# Write back
with open('/Users/jonahortega/AUP/src/data/completedCourses.ts', 'w') as f:
    f.write(updated_content)

print("Updated completed courses schedules")
