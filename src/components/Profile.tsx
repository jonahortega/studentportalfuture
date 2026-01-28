import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../types/user'
import { useUser } from '../context/UserContext'

interface ProfileProps {
  user: User
}

const Profile = ({ user }: ProfileProps) => {
  const navigate = useNavigate()
  const { totalCompletedCredits, completedCoursesList } = useUser()
  const [selectedGradeType, setSelectedGradeType] = useState<string>('')
  const [showAdminMenu, setShowAdminMenu] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-aup-blue to-blue-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img 
                src="/aup-header-logo.png" 
                alt="AUP Logo" 
                className="h-24 w-auto"
              />
              <p className="text-blue-200 mt-1">Student Profile</p>
            </div>
            <button
              onClick={() => navigate('/welcome')}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors font-medium"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="flex items-center mb-8">
            <div className="bg-aup-blue rounded-full p-6 mr-6">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-lg text-gray-600 mt-1">{user.year}</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Personal Information */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <div className="text-lg text-gray-900 font-medium">{user.firstName}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <div className="text-lg text-gray-900 font-medium">{user.lastName}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">AUP Email Address</label>
                  <div className="text-lg text-gray-900 font-medium">{user.email}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Student ID Number</label>
                  <div className="text-lg text-gray-900 font-medium">{user.idNumber}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Academic Year</label>
                  <div className="text-lg text-gray-900 font-medium">{user.year}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Major</label>
                  <div className="text-lg text-gray-900 font-medium">{user.major}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Academic Counselor</label>
                  <div className="text-lg text-gray-900 font-medium">{user.counselor}</div>
                </div>
              </div>
            </div>

            {/* Academic Progress */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Academic Progress</h3>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600">Completed Courses</div>
                    <div className="text-2xl font-bold text-aup-blue">{completedCoursesList.length}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Credits Completed</div>
                    <div className="text-2xl font-bold text-aup-blue">{totalCompletedCredits}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Unofficial Transcript */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Unofficial Transcript</h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-gray-700">
                  <a href="#" className="text-aup-blue hover:underline font-medium">
                    View Unofficial Transcript
                  </a>
                  <span className="text-gray-500 text-sm ml-2">(Link will be available soon)</span>
                </p>
              </div>
            </div>

            {/* Grades */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Grades</h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <label htmlFor="gradeType" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Grade Type
                </label>
                <select
                  id="gradeType"
                  value={selectedGradeType}
                  onChange={(e) => setSelectedGradeType(e.target.value)}
                  className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aup-blue focus:border-transparent outline-none"
                >
                  <option value="">-- Select Grade Type --</option>
                  <option value="midterm">Mid Term Grades</option>
                  <option value="final">Final Grades</option>
                  <option value="narrative">Narrative Grades</option>
                </select>
                {selectedGradeType && (
                  <div className="mt-4 p-4 bg-white rounded border border-gray-200">
                    <p className="text-gray-600">
                      {selectedGradeType === 'midterm' && 'Mid Term Grades will be displayed here.'}
                      {selectedGradeType === 'final' && 'Final Grades will be displayed here.'}
                      {selectedGradeType === 'narrative' && 'Narrative Grades will be displayed here.'}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Admin Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Admin Section</h3>
              
              <div className="bg-gray-50 rounded-lg border border-gray-200">
                <button
                  onClick={() => setShowAdminMenu(!showAdminMenu)}
                  className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-800">Admin</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${showAdminMenu ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showAdminMenu && (
                  <div className="border-t border-gray-200 p-4 space-y-2">
                    <button
                      onClick={() => navigate('/admin/holds')}
                      className="w-full text-left px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-aup-blue hover:bg-blue-50 transition-colors flex items-center justify-between group"
                    >
                      <span className="font-medium text-gray-800 group-hover:text-aup-blue">My Holds</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-aup-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => navigate('/admin/billing')}
                      className="w-full text-left px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-aup-blue hover:bg-blue-50 transition-colors flex items-center justify-between group"
                    >
                      <span className="font-medium text-gray-800 group-hover:text-aup-blue">Billing</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-aup-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => navigate('/admin/financial-aid')}
                      className="w-full text-left px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-aup-blue hover:bg-blue-50 transition-colors flex items-center justify-between group"
                    >
                      <span className="font-medium text-gray-800 group-hover:text-aup-blue">My Financial Aid</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-aup-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => navigate('/admin/housing')}
                      className="w-full text-left px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-aup-blue hover:bg-blue-50 transition-colors flex items-center justify-between group"
                    >
                      <span className="font-medium text-gray-800 group-hover:text-aup-blue">My Housing</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-aup-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => navigate('/admin/tax-forms')}
                      className="w-full text-left px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-aup-blue hover:bg-blue-50 transition-colors flex items-center justify-between group"
                    >
                      <span className="font-medium text-gray-800 group-hover:text-aup-blue">My 1098T Tax Forms</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-aup-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => window.open('https://my.aup.edu/job', '_blank')}
                      className="w-full text-left px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-aup-blue hover:bg-blue-50 transition-colors flex items-center justify-between group"
                    >
                      <span className="font-medium text-gray-800 group-hover:text-aup-blue">Job & Internships</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-aup-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                    <button
                      onClick={() => window.open('https://aup.campuslabs.com/engage/', '_blank')}
                      className="w-full text-left px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-aup-blue hover:bg-blue-50 transition-colors flex items-center justify-between group"
                    >
                      <span className="font-medium text-gray-800 group-hover:text-aup-blue">AUP Engage</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-aup-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
