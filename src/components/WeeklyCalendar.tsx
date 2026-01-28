import { RegisteredCourse } from '../types/course'
import { buildWeeklySchedule, timeToMinutes } from '../utils/scheduleParser'
import { getDepartmentColor } from '../utils/departmentColors'

interface WeeklyCalendarProps {
  courses: RegisteredCourse[]
}

const WeeklyCalendar = ({ courses }: WeeklyCalendarProps) => {
  const weeklySchedule = buildWeeklySchedule(courses)
  
  // AUP Period times
  const aupPeriods = [
    { period: 1, start: '09:00', end: '10:20', label: 'Period 1: 9:00AM-10:20AM' },
    { period: 2, start: '10:35', end: '11:55', label: 'Period 2: 10:35AM-11:55AM' },
    { period: 3, start: '12:10', end: '13:30', label: 'Period 3: 12:10PM-1:30PM' },
    { period: 4, start: '13:45', end: '15:05', label: 'Period 4: 1:45PM-3:05PM' },
    { period: 5, start: '15:20', end: '16:40', label: 'Period 5: 3:20PM-4:40PM' },
    { period: 6, start: '16:55', end: '18:15', label: 'Period 6: 4:55PM-6:15PM' },
    { period: 7, start: '18:30', end: '19:50', label: 'Period 7: 6:30PM-7:50PM' },
  ]

  const getSlotPosition = (startTime: string, endTime: string) => {
    const startMinutes = timeToMinutes(startTime)
    const endMinutes = timeToMinutes(endTime)
    const dayStart = 9 * 60 // 9:00 AM (Period 1 start)
    const dayEnd = 20 * 60 // 8:00 PM (after Period 7)
    const totalMinutes = dayEnd - dayStart
    
    const top = ((startMinutes - dayStart) / totalMinutes) * 100
    const height = ((endMinutes - startMinutes) / totalMinutes) * 100
    
    return { top: `${top}%`, height: `${height}%` }
  }

  const getCourseColor = (course: RegisteredCourse) => {
    return getDepartmentColor(course.department)
  }

  // Calculate period heights for display
  const periodHeights = aupPeriods.map(period => {
    const start = timeToMinutes(period.start)
    const end = timeToMinutes(period.end)
    const dayStart = 9 * 60
    const dayEnd = 20 * 60
    const totalMinutes = dayEnd - dayStart
    return {
      period: period.period,
      start: period.start,
      end: period.end,
      label: period.label,
      height: ((end - start) / totalMinutes) * 100,
      top: ((start - dayStart) / totalMinutes) * 100
    }
  })

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Weekly Schedule</h2>
      
      {courses.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p>No courses registered</p>
          <p className="text-sm mt-2">Register for courses to see your schedule</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header with day names */}
            <div className="grid grid-cols-6 gap-2 mb-2">
              <div className="text-sm font-semibold text-gray-600 p-2 bg-gray-50 rounded-t-lg">Period</div>
              {weeklySchedule.map(day => (
                <div 
                  key={day.day} 
                  className="text-sm font-semibold text-gray-700 p-2 text-center border-b-2 border-aup-blue bg-gray-50 rounded-t-lg"
                >
                  {day.day.substring(0, 3)}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="relative border border-gray-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-6 gap-0">
                {/* Period column */}
                <div className="border-r border-gray-200 bg-gray-50">
                  {periodHeights.map((period) => (
                    <div
                      key={period.period}
                      className="border-b border-gray-200 text-xs p-2 flex flex-col justify-center"
                      style={{ 
                        minHeight: '80px',
                        height: `${Math.max(period.height * 6, 80)}px`
                      }}
                    >
                      <span className="font-semibold text-gray-700">P{period.period}</span>
                      <span className="text-xs text-gray-500 mt-1">{period.start} - {period.end}</span>
                    </div>
                  ))}
                </div>

                {/* Day columns */}
                {weeklySchedule.map((daySchedule) => (
                  <div key={daySchedule.day} className="relative border-r border-gray-200 last:border-r-0" style={{ minHeight: '560px' }}>
                    {/* Period background sections */}
                    {periodHeights.map((period) => (
                      <div
                        key={period.period}
                        className="absolute left-0 right-0 border-b border-gray-200 bg-gray-50/30"
                        style={{
                          top: `${period.top}%`,
                          height: `${period.height}%`
                        }}
                      />
                    ))}

                    {/* Course blocks */}
                    {daySchedule.slots.map((slot, slotIndex) => {
                      const position = getSlotPosition(slot.startTime, slot.endTime)
                      const colorClass = getCourseColor(slot.course)
                      
                      return (
                        <div
                          key={`${slot.course.id}-${slotIndex}`}
                          className={`absolute left-0 right-0 ${colorClass} text-white rounded-lg p-2 shadow-lg hover:shadow-xl transition-all z-10 border-l-4 border-white/50 m-1 hover:scale-[1.02] cursor-pointer`}
                          style={{
                            top: position.top,
                            height: position.height,
                            minHeight: '60px'
                          }}
                        >
                          <div className="text-xs font-bold mb-1 drop-shadow-sm">{slot.course.code}</div>
                          <div className="text-xs opacity-95 line-clamp-2 font-medium">{slot.course.title}</div>
                          <div className="text-xs opacity-80 mt-1 font-medium">
                            {slot.startTime} - {slot.endTime}
                          </div>
                          <div className="text-xs opacity-80">{slot.course.location}</div>
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Period Legend */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">AUP Period Schedule:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                {aupPeriods.map(period => (
                  <div key={period.period} className="text-xs text-gray-600 bg-gray-50 p-2 rounded border border-gray-200">
                    <span className="font-semibold">P{period.period}:</span> {period.start} - {period.end}
                  </div>
                ))}
              </div>
            </div>

            {/* Course Legend */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Registered Courses:</h3>
              <div className="flex flex-wrap gap-2">
                {courses.map(course => (
                  <div key={course.id} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded ${getCourseColor(course)}`} />
                    <span className="text-xs text-gray-700">{course.code} - {course.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WeeklyCalendar
