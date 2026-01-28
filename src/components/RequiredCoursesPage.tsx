import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { degreeRequirements } from '../data/degreeRequirements'
import { availableCourses } from '../data/courses'
import { completedCoursesData } from '../data/completedCourses'
import { getDepartmentColorLight } from '../utils/departmentColors'

const RequiredCoursesPage = () => {
  const navigate = useNavigate()
  const { completedCoursesList, totalCompletedCredits } = useUser()

  // Get all courses (available + completed data)
  const allCourses = [...availableCourses, ...completedCoursesData]
  const completedCourseCodes = new Set(completedCoursesList.map(c => c.code))

  // Calculate what courses are still needed by category
  const getRequiredCoursesByCategory = () => {
    const categories: Array<{
      id: string
      category: string
      description: string
      requiredCredits: number
      completedCredits: number
      remainingCredits: number
      courses: Array<{ 
        code: string
        title: string
        credits: number
        department: string
        professor?: string
        schedule?: string
        location?: string
      }>
    }> = []

    degreeRequirements.forEach(requirement => {
      if (requirement.id === 'total') return // Skip total requirement

      let completedCredits = 0
      const neededCourses: Array<{ 
        code: string
        title: string
        credits: number
        department: string
        professor?: string
        schedule?: string
        location?: string
      }> = []

      if (requirement.requiredCourses) {
        // For specific required courses - calculate actual credits completed
        requirement.requiredCourses.forEach(code => {
          if (completedCourseCodes.has(code)) {
            const completedCourse = completedCoursesList.find(c => c.code === code)
            if (completedCourse) {
              completedCredits += completedCourse.credits
            }
          } else {
            // Find the course in available courses
            const course = allCourses.find(c => c.code === code)
            if (course) {
              neededCourses.push({
                code: course.code,
                title: course.title,
                credits: course.credits,
                department: course.department,
                professor: course.professor,
                schedule: course.schedule,
                location: course.location
              })
            }
          }
        })
      } else {
        // For credit-based requirements, calculate based on completed courses in this category
        completedCoursesList.forEach(completedCourse => {
          const fullCourse = allCourses.find(c => c.code === completedCourse.code)
          let matches = false

          if (requirement.category.includes('CCI')) {
            matches = completedCourse.code.startsWith('CCI') || 
                     completedCourse.code.includes('CCI') ||
                     (fullCourse?.code.includes('CCI') || false)
          } else if (requirement.category.includes('CCX')) {
            matches = completedCourse.code.includes('CCX') ||
                     (fullCourse?.code.includes('CCX') || false)
          } else if (requirement.category.includes('CCR')) {
            matches = completedCourse.code.includes('CCR') ||
                     (fullCourse?.code.includes('CCR') || false)
          } else if (requirement.category.includes('CCD')) {
            matches = completedCourse.code.includes('CCD') ||
                     (fullCourse?.code.includes('CCD') || false)
          } else if (requirement.category.includes('CCM')) {
            matches = completedCourse.code.includes('CCM') ||
                     (fullCourse?.code.includes('CCM') || false)
          } else if (requirement.category.includes('CCS')) {
            matches = completedCourse.code.includes('CCS') ||
                     (fullCourse?.code.includes('CCS') || false)
          } else if (requirement.category.includes('French') || requirement.category.includes('française')) {
            matches = completedCourse.code.startsWith('FR') ||
                     fullCourse?.department === 'French Studies'
          } else if (requirement.category.includes('Major')) {
            const isCS = completedCourse.code.startsWith('CS') ||
                        fullCourse?.department === 'Computer Science'
            const isMajorMath = (completedCourse.code.startsWith('MA') && 
                                (completedCourse.code.includes('CCD') || 
                                 completedCourse.code.includes('CCM') || 
                                 completedCourse.code.includes('CCR'))) ||
                               (fullCourse?.department === 'Mathematics' && 
                                (completedCourse.code.includes('CCD') || 
                                 completedCourse.code.includes('CCM') || 
                                 completedCourse.code.includes('CCR')))
            matches = isCS || isMajorMath
          } else if (requirement.category.includes('Electives')) {
            const isInOtherCategory = 
              completedCourse.code.startsWith('CCI') ||
              completedCourse.code.startsWith('FR') ||
              completedCourse.code.startsWith('EN') ||
              (completedCourse.code.startsWith('CS') && !completedCourse.code.includes('CCD') && !completedCourse.code.includes('CCR')) ||
              completedCourse.code.includes('CCX') ||
              completedCourse.code.includes('CCR') ||
              completedCourse.code.includes('CCD') ||
              completedCourse.code.includes('CCM') ||
              completedCourse.code.includes('CCS')
            matches = !isInOtherCategory
          }

          if (matches) {
            completedCredits += completedCourse.credits
          }
        })

        // Get available courses that match this category
        const relevantCourses = availableCourses
          .filter(course => {
            if (completedCourseCodes.has(course.code)) return false

            if (requirement.category.includes('CCI')) {
              return course.code.includes('CCI') || course.code.startsWith('CCI')
            } else if (requirement.category.includes('CCX')) {
              return course.code.includes('CCX')
            } else if (requirement.category.includes('CCR')) {
              return course.code.includes('CCR')
            } else if (requirement.category.includes('CCD')) {
              return course.code.includes('CCD')
            } else if (requirement.category.includes('CCM')) {
              return course.code.includes('CCM')
            } else if (requirement.category.includes('CCS')) {
              return course.code.includes('CCS')
            } else if (requirement.category.includes('French') || requirement.category.includes('française')) {
              return course.code.startsWith('FR') || course.department === 'French Studies'
            } else if (requirement.category.includes('Major')) {
              return course.code.startsWith('CS') || 
                     (course.code.startsWith('MA') && (course.code.includes('CCD') || course.code.includes('CCM') || course.code.includes('CCR'))) ||
                     course.department === 'Computer Science' ||
                     (course.department === 'Mathematics' && (course.code.includes('CCD') || course.code.includes('CCM') || course.code.includes('CCR')))
            } else if (requirement.category.includes('Electives')) {
              const isInOtherCategory = 
                course.code.startsWith('CCI') ||
                course.code.startsWith('FR') ||
                (course.code.startsWith('CS') && !course.code.includes('CCD') && !course.code.includes('CCR')) ||
                course.code.includes('CCX') ||
                course.code.includes('CCR') ||
                course.code.includes('CCD') ||
                course.code.includes('CCM') ||
                course.code.includes('CCS')
              return !isInOtherCategory
            }
            return false
          })
          .map(course => ({
            code: course.code,
            title: course.title,
            credits: course.credits,
            department: course.department,
            professor: course.professor,
            schedule: course.schedule,
            location: course.location
          }))
          .slice(0, Math.ceil((requirement.requiredCredits - completedCredits) / 4)) // Show enough courses to fulfill requirement

        neededCourses.push(...relevantCourses)
      }

      const remainingCredits = Math.max(0, requirement.requiredCredits - completedCredits)

      // Only show categories that have remaining credits
      if (remainingCredits > 0) {
        categories.push({
          id: requirement.id,
          category: requirement.category,
          description: requirement.description,
          requiredCredits: requirement.requiredCredits,
          completedCredits,
          remainingCredits,
          courses: neededCourses
        })
      }
    })

    // Sort by remaining credits (highest first)
    return categories.sort((a, b) => b.remainingCredits - a.remainingCredits)
  }

  const requiredCoursesByCategory = getRequiredCoursesByCategory()
  const totalRemaining = 128 - totalCompletedCredits

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-aup-blue via-blue-700 to-aup-blue text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img 
                src="/aup-header-logo.png" 
                alt="AUP Logo" 
                className="h-24 w-auto"
              />
              <p className="text-blue-200 text-lg">Credits Remaining - Required Courses</p>
            </div>
            <button
              onClick={() => navigate('/welcome')}
              className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors font-medium backdrop-blur-sm"
            >
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-aup-blue">
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Credits Completed</div>
            <div className="text-5xl font-bold text-aup-blue mb-2">{totalCompletedCredits}</div>
            <div className="text-sm text-gray-500">out of 128 required</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-orange-500">
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Credits Remaining</div>
            <div className="text-5xl font-bold text-orange-600 mb-2">{totalRemaining}</div>
            <div className="text-sm text-gray-500">to graduation</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Requirements Remaining</div>
            <div className="text-5xl font-bold text-green-600 mb-2">{requiredCoursesByCategory.length}</div>
            <div className="text-sm text-gray-500">categories to fulfill</div>
          </div>
        </div>

        {/* Required Courses by Category */}
        <div className="space-y-6">
          {requiredCoursesByCategory.map((category) => {
            const progressPercentage = category.requiredCredits > 0 
              ? (category.completedCredits / category.requiredCredits) * 100 
              : 0

            return (
              <div key={category.id} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{category.category}</h2>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-sm text-gray-600 mb-1">Progress</div>
                    <div className="text-2xl font-bold text-aup-blue">
                      {category.completedCredits}
                      <span className="text-lg text-gray-500 font-normal"> / {category.requiredCredits}</span>
                    </div>
                    <div className="text-sm text-orange-600 font-medium mt-1">
                      {category.remainingCredits} credits remaining
                    </div>
                  </div>
                </div>

                {category.requiredCredits > 0 && (
                  <div className="mb-6">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-aup-blue to-blue-600 h-3 rounded-full transition-all"
                        style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">
                    Courses Needed to Fulfill This Requirement:
                  </h3>
                  {category.courses.length === 0 ? (
                    <p className="text-gray-500 italic">No specific courses required. Choose from available courses in this category.</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.courses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="group border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2 flex-wrap">
                                <span className="font-bold text-xl text-aup-blue">{course.code}</span>
                                <span className="px-3 py-1 bg-orange-200 text-orange-800 text-xs font-bold rounded-full">
                                  {course.credits} Credits
                                </span>
                              </div>
                              <h3 className="font-semibold text-gray-800 text-base mb-2 leading-tight">{course.title}</h3>
                              <span className={`inline-block px-3 py-1 border rounded-lg text-xs font-medium mb-2 ${getDepartmentColorLight(course.department)}`}>
                                {course.department}
                              </span>
                            </div>
                          </div>
                          {course.professor && (
                            <div className="border-t border-orange-200 pt-3 mt-3">
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span className="font-medium">Professor:</span>
                                <span>{course.professor}</span>
                              </div>
                              {course.schedule && (
                                <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span>{course.schedule}</span>
                                </div>
                              )}
                              {course.location && course.location !== 'N/A' && (
                                <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  <span>{course.location}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RequiredCoursesPage
