import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { availableCourses } from '../data/courses'
import { completedCoursesData } from '../data/completedCourses'
import { degreeRequirements } from '../data/degreeRequirements'
import { getDepartmentColorLight } from '../utils/departmentColors'

const CompletedCoursesPage = () => {
  const navigate = useNavigate()
  const { completedCoursesList, totalCompletedCredits } = useUser()

  const getFullCourseInfo = (code: string) => {
    return availableCourses.find(c => c.code === code) || 
           completedCoursesData.find(c => c.code === code)
  }

  const progressPercentage = (totalCompletedCredits / 128) * 100

  // Organize completed courses by category
  const organizeCoursesByCategory = () => {
    const completedCourseCodes = new Set(completedCoursesList.map(c => c.code))
    
    const categories: Array<{
      id: string
      category: string
      courses: Array<{ code: string; title: string; credits: number; professor: string; department: string }>
      totalCredits: number
    }> = []

    // Process each degree requirement category
    degreeRequirements.forEach(requirement => {
      if (requirement.id === 'total') return

      const categoryCourses: Array<{ code: string; title: string; credits: number; professor: string; department: string }> = []
      
      if (requirement.requiredCourses) {
        // For categories with specific required courses
        requirement.requiredCourses.forEach(courseCode => {
          if (completedCourseCodes.has(courseCode)) {
            const completedCourse = completedCoursesList.find(c => c.code === courseCode)
            if (completedCourse) {
              const fullCourse = getFullCourseInfo(courseCode)
              categoryCourses.push({
                code: completedCourse.code,
                title: completedCourse.title,
                credits: completedCourse.credits,
                professor: completedCourse.professor,
                department: fullCourse?.department || 'General'
              })
            }
          }
        })
      } else {
        // For credit-based categories, match by category type
        // Track which courses have already been assigned to avoid duplicates
        const assignedCourses = new Set<string>()
        
        // First, assign courses that are in requiredCourses arrays
        degreeRequirements.forEach(req => {
          if (req.requiredCourses) {
            req.requiredCourses.forEach(code => {
              if (completedCourseCodes.has(code)) {
                assignedCourses.add(code)
              }
            })
          }
        })

        completedCoursesList.forEach(completedCourse => {
          // Skip if already assigned to a specific requirement category
          if (assignedCourses.has(completedCourse.code)) {
            return
          }

          const fullCourse = getFullCourseInfo(completedCourse.code)
          let matches = false

          if (requirement.category.includes('CCI')) {
            // CCI courses (FirstBridge, etc.)
            matches = completedCourse.code.startsWith('CCI') || 
                     completedCourse.code.includes('CCI') ||
                     (fullCourse?.code.includes('CCI') || false)
          } else if (requirement.category.includes('CCX')) {
            // CCX courses
            matches = completedCourse.code.includes('CCX') ||
                     (fullCourse?.code.includes('CCX') || false)
          } else if (requirement.category.includes('CCR')) {
            // CCR courses (already handled by requiredCourses, but check for others)
            matches = completedCourse.code.includes('CCR') ||
                     (fullCourse?.code.includes('CCR') || false)
          } else if (requirement.category.includes('CCD')) {
            // CCD courses
            matches = completedCourse.code.includes('CCD') ||
                     (fullCourse?.code.includes('CCD') || false)
          } else if (requirement.category.includes('CCM')) {
            // CCM courses
            matches = completedCourse.code.includes('CCM') ||
                     (fullCourse?.code.includes('CCM') || false)
          } else if (requirement.category.includes('CCS')) {
            // CCS courses
            matches = completedCourse.code.includes('CCS') ||
                     (fullCourse?.code.includes('CCS') || false)
          } else if (requirement.category.includes('French') || requirement.category.includes('française')) {
            // French language courses
            matches = completedCourse.code.startsWith('FR') ||
                     fullCourse?.department === 'French Studies'
          } else if (requirement.category.includes('Major')) {
            // Major requirements - CS courses and related math courses
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
            // Electives - courses not in other categories
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
            categoryCourses.push({
              code: completedCourse.code,
              title: completedCourse.title,
              credits: completedCourse.credits,
              professor: completedCourse.professor,
              department: fullCourse?.department || 'General'
            })
            assignedCourses.add(completedCourse.code)
          }
        })
      }

      if (categoryCourses.length > 0) {
        const totalCredits = categoryCourses.reduce((sum, c) => sum + c.credits, 0)
        categories.push({
          id: requirement.id,
          category: requirement.category,
          courses: categoryCourses,
          totalCredits
        })
      }
    })

    return categories
  }

  const categorizedCourses = organizeCoursesByCategory()

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
              <p className="text-blue-200 text-lg">Academic Transcript - Completed Courses</p>
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
        {/* Enhanced Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-aup-blue transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Courses Completed</div>
              <div className="bg-blue-100 rounded-full p-3">
                <svg className="w-6 h-6 text-aup-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <div className="text-5xl font-bold text-aup-blue mb-2">{completedCoursesList.length}</div>
            <div className="text-sm text-gray-500">Total courses</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500 transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Credits Completed</div>
              <div className="bg-green-100 rounded-full p-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="text-5xl font-bold text-green-600 mb-2">{totalCompletedCredits}</div>
            <div className="text-sm text-gray-500">out of 128 required</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500 transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Credits Remaining</div>
              <div className="bg-purple-100 rounded-full p-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="text-5xl font-bold text-purple-600 mb-2">{128 - totalCompletedCredits}</div>
            <div className="text-sm text-gray-500">to graduation</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-gray-800">Degree Progress</h3>
            <span className="text-sm font-bold text-aup-blue">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-aup-blue to-blue-600 h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
              style={{ width: `${progressPercentage}%` }}
            >
              {progressPercentage > 10 && (
                <span className="text-xs font-bold text-white">{Math.round(progressPercentage)}%</span>
              )}
            </div>
          </div>
        </div>

        {/* Completed Courses by Category */}
        {completedCoursesList.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-xl text-gray-500 mb-2">No completed courses yet</p>
              <p className="text-sm text-gray-400">Start registering for courses to build your transcript</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {categorizedCourses.map((category) => {
              const requirement = degreeRequirements.find(r => r.id === category.id)
              const requiredCredits = requirement?.requiredCredits || 0
              const progressPercentage = requiredCredits > 0 
                ? (category.totalCredits / requiredCredits) * 100 
                : 0

              return (
                <div key={category.id} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">{category.category}</h2>
                      {requirement && (
                        <p className="text-sm text-gray-600">{requirement.description}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600 mb-1">Credits Completed</div>
                      <div className="text-2xl font-bold text-aup-blue">
                        {category.totalCredits}
                        {requiredCredits > 0 && (
                          <span className="text-lg text-gray-500 font-normal"> / {requiredCredits}</span>
                        )}
                      </div>
                      {requiredCredits > 0 && category.totalCredits < requiredCredits && (
                        <div className="text-sm text-orange-600 font-medium mt-1">
                          {requiredCredits - category.totalCredits} credits remaining
                        </div>
                      )}
                      {requiredCredits > 0 && category.totalCredits >= requiredCredits && (
                        <div className="text-sm text-green-600 font-medium mt-1">
                          ✓ Requirement fulfilled
                        </div>
                      )}
                    </div>
                  </div>

                  {requiredCredits > 0 && (
                    <div className="mb-6">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-aup-blue to-blue-600 h-3 rounded-full transition-all"
                          style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.courses.map((course, index) => {
                      const fullCourse = getFullCourseInfo(course.code)
                      return (
                        <div
                          key={index}
                          className="group border-2 border-green-200 bg-gradient-to-br from-green-50 to-white rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2 flex-wrap">
                                <span className="font-bold text-xl text-aup-blue">{course.code}</span>
                                <span className="px-3 py-1 bg-green-200 text-green-800 text-xs font-bold rounded-full">
                                  {course.credits} Credits
                                </span>
                              </div>
                              <h3 className="font-semibold text-gray-800 text-base mb-2 leading-tight">{course.title}</h3>
                              <span className={`inline-block px-3 py-1 border rounded-lg text-xs font-medium mb-2 ${getDepartmentColorLight(course.department)}`}>
                                {course.department}
                              </span>
                            </div>
                            <div className="bg-green-100 rounded-full p-2 ml-2">
                              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                          <div className="border-t border-green-200 pt-3 mt-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                              <span className="font-medium">Professor:</span>
                              <span>{course.professor}</span>
                            </div>
                            {fullCourse && fullCourse.location !== 'N/A' && (
                              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>{fullCourse.location}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default CompletedCoursesPage

