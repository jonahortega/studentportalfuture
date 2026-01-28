import { useNavigate } from 'react-router-dom'

const BillingPage = () => {
  const navigate = useNavigate()

  // Sample billing data
  const billingData = [
    { term: 'Spring 2026', date: '5/16/2025', description: 'Tuition Award UDG', debits: '€ 0.00', credits: '€ 7,511.00' },
    { term: 'Spring 2026', date: '1/6/2026', description: 'MSH semester full cov health insurance', debits: '€ 745.00', credits: '€ 0.00' },
    { term: 'Spring 2026', date: '1/6/2026', description: 'Tuition fees Undergrad', debits: '€ 18,432.00', credits: '€ 0.00' },
    { term: 'Spring 2026', date: '1/8/2026', description: 'Refund Check 9587.6 USD', debits: '€ 8,143.71', credits: '€ 0.00' },
    { term: 'Spring 2026', date: '7/1/2026', description: 'PPLUS Loan USD 20106', debits: '€ 0.00', credits: '€ 17,078.04' },
    { term: 'Spring 2026', date: '7/1/2026', description: 'SFU Loan USD 3216', debits: '€ 0.00', credits: '€ 2,731.67' },
  ]

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
              <p className="text-blue-200 mt-1">Billing</p>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Billing</h2>
          
          {/* Billing Table */}
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase border-b">Term</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase border-b">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase border-b">Description</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase border-b">Debits</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase border-b">Credits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {billingData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{row.term}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{row.date}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{row.description}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 text-right">{row.debits}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 text-right">{row.credits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pending Financial Aid */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Pending Financial Aid</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase border-b">Term</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase border-b">Date</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase border-b">Description</th>
                    <th className="px-4 py-2 text-right text-xs font-semibold text-gray-700 uppercase border-b">Debits</th>
                    <th className="px-4 py-2 text-right text-xs font-semibold text-gray-700 uppercase border-b">Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={5} className="px-4 py-3 text-sm text-gray-600 text-center">
                      No pending Financial Aid found.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pending Housing Charges */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Pending Housing Charges</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase border-b">Term</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase border-b">Date</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase border-b">Description</th>
                    <th className="px-4 py-2 text-right text-xs font-semibold text-gray-700 uppercase border-b">Debits</th>
                    <th className="px-4 py-2 text-right text-xs font-semibold text-gray-700 uppercase border-b">Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={5} className="px-4 py-3 text-sm text-gray-600 text-center">
                      No pending Housing Charges found.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Balance Summary */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Balance Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">** Previous Balance:</span>
                <span className="text-gray-900">€ 0.01</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">** Current Balance:</span>
                <span className="text-gray-900">€ 0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Pending Financial Aid:</span>
                <span className="text-gray-900">€ 0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Pending Housing Charges:</span>
                <span className="text-gray-900">€ 0.00</span>
              </div>
              <div className="border-t border-gray-300 pt-2 mt-2">
                <div className="flex justify-between">
                  <span className="font-bold text-gray-800">** Overall Balance:</span>
                  <span className="font-bold text-gray-900">€ 0.01</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3 italic">
                **Balances with a – (minus) are credits on your account. If your overall balance has a minus symbol you do not owe this amount.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillingPage
