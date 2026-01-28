import { useNavigate } from 'react-router-dom'

const FinancialAidPage = () => {
  const navigate = useNavigate()

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
              <p className="text-blue-200 mt-1">My Financial Aid</p>
            </div>
            <button
              onClick={() => navigate('/profile')}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors font-medium"
            >
              Back to Profile
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">My Financial Aid</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Financial Aid Overview</h3>
              <p className="text-gray-700 mb-4">
                Your financial aid information will be displayed here. This includes grants, scholarships, loans, and work-study awards.
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-gray-600 text-sm">Financial aid details will be available once your application is processed.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Award Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white rounded border border-gray-200">
                  <span className="text-gray-700">Total Financial Aid Awarded:</span>
                  <span className="font-semibold text-gray-900">€ 0.00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded border border-gray-200">
                  <span className="text-gray-700">Disbursed Amount:</span>
                  <span className="font-semibold text-gray-900">€ 0.00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded border border-gray-200">
                  <span className="text-gray-700">Pending Disbursement:</span>
                  <span className="font-semibold text-gray-900">€ 0.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinancialAidPage
