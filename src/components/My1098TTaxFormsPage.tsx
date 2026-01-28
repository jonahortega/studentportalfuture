import { useNavigate } from 'react-router-dom'

const My1098TTaxFormsPage = () => {
  const navigate = useNavigate()

  const taxForms = [
    {
      date: '1/28/2025',
      document: '1098T Form',
      description: '1098T Form - 2024 EUR'
    }
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
              <p className="text-blue-200 mt-1">My 1098T Tax Forms</p>
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">My Tax Forms</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">List of Documents</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase border-b">Image</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase border-b">Date</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase border-b">Document</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase border-b">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {taxForms.map((form, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm">
                        <a
                          href="#"
                          className="text-aup-blue hover:underline font-medium"
                          onClick={(e) => {
                            e.preventDefault()
                            // Placeholder for PDF link - will be implemented later
                            alert('PDF link will be available soon')
                          }}
                        >
                          View
                        </a>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">{form.date}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{form.document}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{form.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mt-6">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> You will need Adobe Acrobat Reader plug-in installed on your browser in order to see the document in a browser. 
              To save document to your hard drive, right click on "View" link and select "Save Link as".
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default My1098TTaxFormsPage
