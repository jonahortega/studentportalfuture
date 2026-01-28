import { Link } from 'react-router-dom'

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-blue-900">AUP</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-gray-700 hover:text-blue-900">About</Link>
              <Link to="/academics" className="text-gray-700 hover:text-blue-900">Academics</Link>
              <Link to="/admissions" className="text-gray-700 hover:text-blue-900">Admissions</Link>
              <Link to="/student-life" className="text-gray-700 hover:text-blue-900">Student Life</Link>
              <Link to="/support" className="text-blue-900 font-semibold border-b-2 border-blue-900 pb-1">Support</Link>
            </div>
            <Link to="/login" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
              My AUP
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Support Services</h1>
          <p className="text-2xl text-blue-100">Resources and assistance for students, faculty, and staff</p>
        </div>
      </section>

      {/* Resources For */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Resources For</h2>
          <div className="grid md:grid-cols-5 gap-4">
            <Link to="/login" className="bg-white border-2 border-blue-900 p-6 rounded-lg text-center hover:bg-blue-50 transition shadow-md">
              <h3 className="font-semibold text-blue-900 text-lg">Current Students</h3>
              <p className="text-gray-600 text-sm mt-2">Access your portal, courses, and student services</p>
            </Link>
            <Link to="/admissions" className="bg-white border border-gray-300 p-6 rounded-lg text-center hover:bg-gray-50 transition">
              <h3 className="font-semibold text-gray-900">Prospective Students</h3>
              <p className="text-gray-600 text-sm mt-2">Learn about AUP and the application process</p>
            </Link>
            <div className="bg-white border border-gray-300 p-6 rounded-lg text-center hover:bg-gray-50 transition cursor-pointer">
              <h3 className="font-semibold text-gray-900">Faculty & Staff</h3>
              <p className="text-gray-600 text-sm mt-2">Faculty resources and staff services</p>
            </div>
            <div className="bg-white border border-gray-300 p-6 rounded-lg text-center hover:bg-gray-50 transition cursor-pointer">
              <h3 className="font-semibold text-gray-900">Parents & Families</h3>
              <p className="text-gray-600 text-sm mt-2">Information for parents and family members</p>
            </div>
            <div className="bg-white border border-gray-300 p-6 rounded-lg text-center hover:bg-gray-50 transition cursor-pointer">
              <h3 className="font-semibold text-gray-900">Alumni</h3>
              <p className="text-gray-600 text-sm mt-2">Alumni benefits and resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Student Support Services */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Student Support Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                <div className="h-32 bg-gray-300 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" 
                    alt="Academic Support" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Academic Support</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Academic Advising</li>
                  <li>• Tutoring Services</li>
                  <li>• Writing Center</li>
                  <li>• Study Skills Workshops</li>
                  <li>• Learning accommodations</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                <div className="h-32 bg-gray-300 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" 
                    alt="Career Services" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Career Services</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Career Counseling</li>
                  <li>• Internship Placement</li>
                  <li>• Job Search Support</li>
                  <li>• Alumni Networking</li>
                  <li>• Resume and interview prep</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                <div className="h-32 bg-gray-300 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" 
                    alt="IT Services" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-900">IT Services</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Technical Support</li>
                  <li>• Software Access</li>
                  <li>• Network Services</li>
                  <li>• Digital Resources</li>
                  <li>• Get IT Help</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Financial Services */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Financial Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Student Accounting</h3>
                <p className="text-gray-700 mb-6">
                  Comprehensive support for all financial matters related to your AUP education.
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Undergraduate Tuition & Fees</h4>
                      <p className="text-sm text-gray-600">Detailed breakdown of costs for undergraduate programs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Graduate Tuition & Fees</h4>
                      <p className="text-sm text-gray-600">Costs for master's degree programs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Payments and Procedures</h4>
                      <p className="text-sm text-gray-600">How to pay tuition and fees, payment plans available</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Tuition Refunds</h4>
                      <p className="text-sm text-gray-600">Refund policies and procedures</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">U.S. Tax Information</h4>
                      <p className="text-sm text-gray-600">Tax forms and information for U.S. students</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Taxes for non EU packages</h4>
                      <p className="text-sm text-gray-600">Tax information for international students</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">•</span>
                    <div>
                      <h4 className="font-semibold">Third-Party Payments / 529 Plans</h4>
                      <p className="text-sm text-gray-600">Information about third-party payment options</p>
                    </div>
                  </li>
                </ul>
                <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 font-medium">
                  View Tuition & Fees
                </button>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Scholarships, Awards & Grants</h3>
                <p className="text-gray-700 mb-6">
                  AUP offers various financial assistance programs to help make education accessible.
                </p>
                <div className="space-y-4">
                  <div className="border border-gray-200 bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Slosberg Travel Grant</h4>
                    <p className="text-gray-700 text-sm mb-2">Financial assistance for study trips and cultural excursions</p>
                    <Link to="/support/scholarships/slosberg" className="text-blue-900 hover:underline text-sm">Apply for Slosberg Travel Grant →</Link>
                  </div>
                  <div className="border border-gray-200 bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">The Barbara Reno Senior Prize for Excellence in Filmmaking</h4>
                    <p className="text-gray-700 text-sm">Recognition and prize for outstanding film students</p>
                  </div>
                  <div className="border border-gray-200 bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Sin-ming Shaw Award for Excellence</h4>
                    <p className="text-gray-700 text-sm">Award for academic excellence and achievement</p>
                  </div>
                </div>
                <button className="w-full mt-6 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 font-medium">
                  Apply for Aid
                </button>
              </div>
            </div>
          </div>

          {/* Health & Wellness */}
          <div className="mb-16 bg-blue-50 p-12 rounded-lg">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Health & Wellness</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Health Care</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Health Care Plan</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Cost - Affordable health insurance options</li>
                      <li>• Opting out - Using your own insurance</li>
                      <li>• Reimbursement - How to get reimbursed</li>
                      <li>• Hospitalization - Coverage information</li>
                      <li>• Useful Tips - Health care in France</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Finding Medical Providers</h4>
                    <p className="text-gray-700 text-sm">Directory of English-speaking doctors and medical facilities in Paris</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Immunization</h4>
                    <p className="text-gray-700 text-sm">Required vaccinations and health forms for enrollment</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Counseling & Support</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Guidance Counseling</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Counseling Program - Policies, Procedures and Confidentiality</li>
                      <li>• Additional Counseling Resources</li>
                      <li>• Suicide Prevention</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Wellness Programs</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Sexual Misconduct Prevention</li>
                      <li>• Alcohol and Substance Abuse support</li>
                      <li>• Support for our Diverse Communities</li>
                      <li>• Time Management workshops</li>
                      <li>• Wellness resources and events</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IT Services */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">IT Services</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Get started</h3>
                <p className="text-gray-700 text-sm">Set up your AUP accounts and access</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Service Catalog</h3>
                <p className="text-gray-700 text-sm">All available IT services and resources</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Security, policies and procedures</h3>
                <p className="text-gray-700 text-sm">IT security guidelines and best practices</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Get IT Help</h3>
                <p className="text-gray-700 text-sm">Contact IT support for assistance</p>
              </div>
            </div>
          </div>

          {/* Student Grievance Procedure */}
          <div className="mb-16 border-t border-gray-200 pt-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Student Grievance Procedure</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 mb-6">
                AUP is committed to providing a fair and transparent process for addressing student concerns and grievances. If you have a concern about academic, administrative, or student life matters, we have procedures in place to help.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Academic Grievances</h4>
                  <p className="text-gray-700 text-sm">Concerns about grades, academic policies, or faculty conduct</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Administrative Grievances</h4>
                  <p className="text-gray-700 text-sm">Issues with administrative services or policies</p>
                </div>
              </div>
              <Link to="/support/grievance" className="inline-block mt-6 text-blue-900 hover:underline font-medium">
                Learn More About Grievance Procedures →
              </Link>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-blue-900 text-white p-12 rounded-lg">
            <h2 className="text-4xl font-bold mb-8">Get Help</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Student Life Help Desk</h3>
                <p className="text-blue-100 mb-4">General student life questions and support</p>
                <p className="text-white font-medium">helpdesk@aup.edu</p>
                <p className="text-blue-100 text-sm mt-2">Monday - Friday, 9 AM - 5 PM</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">IT Services</h3>
                <p className="text-blue-100 mb-4">Technical support and assistance</p>
                <p className="text-white font-medium">it@aup.edu</p>
                <p className="text-blue-100 text-sm mt-2">24/7 online support available</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Emergency</h3>
                <p className="text-blue-100 mb-4">24/7 emergency support and crisis intervention</p>
                <p className="text-white font-medium text-2xl">+33 (0)1 40 62 07 20</p>
                <p className="text-blue-100 text-sm mt-2">Available 24/7 for emergencies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
