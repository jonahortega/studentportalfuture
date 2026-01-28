import { Link } from 'react-router-dom'

export default function AdmissionsPage() {
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
              <Link to="/admissions" className="text-blue-900 font-semibold border-b-2 border-blue-900 pb-1">Admissions</Link>
              <Link to="/student-life" className="text-gray-700 hover:text-blue-900">Student Life</Link>
              <Link to="/support" className="text-gray-700 hover:text-blue-900">Support</Link>
            </div>
            <Link to="/login" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
              My AUP
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-2xl text-blue-100 mb-8">Start your AUP journey today</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 text-lg">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 text-lg">
              Request Information
            </button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions/undergraduate" className="px-6 py-2 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-900 transition">
              Undergraduate Admissions
            </Link>
            <Link to="/admissions/graduate" className="px-6 py-2 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-900 transition">
              Graduate Admissions
            </Link>
            <Link to="/admissions/transfer" className="px-6 py-2 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-900 transition">
              Transfer Students
            </Link>
            <Link to="/admissions/international" className="px-6 py-2 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-900 transition">
              International Students
            </Link>
            <Link to="/admissions/visit" className="px-6 py-2 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-900 transition">
              Visit Campus
            </Link>
            <Link to="/admissions/financial-aid" className="px-6 py-2 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-900 transition">
              Financial Aid
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Why AUP */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Why Choose AUP?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-blue-50 rounded-lg">
                <div className="text-5xl font-bold text-blue-900 mb-4">110</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Nationalities</h3>
                <p className="text-gray-700">Join a truly international community of students from around the world</p>
              </div>
              <div className="text-center p-8 bg-blue-50 rounded-lg">
                <div className="text-5xl font-bold text-blue-900 mb-4">56</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Languages</h3>
                <p className="text-gray-700">Experience multilingual learning in the heart of Paris</p>
              </div>
              <div className="text-center p-8 bg-blue-50 rounded-lg">
                <div className="text-5xl font-bold text-blue-900 mb-4">93%</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Employment Rate</h3>
                <p className="text-gray-700">Graduates employed or in graduate school within one year</p>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Application Process</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Undergraduate */}
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                <div className="h-48 bg-gray-300 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop" 
                    alt="Undergraduate Admissions" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Undergraduate Admissions</h3>
                <p className="text-gray-700 mb-6">
                  Join a diverse community of students from over 110 nationalities. AUP welcomes applications from students worldwide. We offer rolling admissions with no application fee.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="text-blue-900 font-bold mr-3">1.</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Submit Application</h4>
                      <p className="text-gray-600 text-sm">Complete your online application with all required documents</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-900 font-bold mr-3">2.</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Submit Documents</h4>
                      <p className="text-gray-600 text-sm">Official transcripts, personal statement, letters of recommendation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-900 font-bold mr-3">3.</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Receive Decision</h4>
                      <p className="text-gray-600 text-sm">Rolling admissions - decisions typically within 2-3 weeks</p>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 font-medium">
                  Apply Now
                </button>
              </div>

              {/* Graduate */}
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                <div className="h-48 bg-gray-300 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop" 
                    alt="Graduate Admissions" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Graduate Admissions</h3>
                <p className="text-gray-700 mb-6">
                  Pursue advanced degrees in international affairs, communications, management, and more. Our graduate programs are designed for professionals seeking to advance their careers.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="text-blue-900 font-bold mr-3">1.</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Choose Your Program</h4>
                      <p className="text-gray-600 text-sm">Select from our master's degree programs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-900 font-bold mr-3">2.</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Submit Application</h4>
                      <p className="text-gray-600 text-sm">Complete application with statement of purpose and resume</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-900 font-bold mr-3">3.</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Interview</h4>
                      <p className="text-gray-600 text-sm">Selected candidates may be invited for an interview</p>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 font-medium">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          {/* Admission Requirements */}
          <div className="mb-16 bg-gray-50 p-12 rounded-lg">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Admission Requirements</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Undergraduate</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>High school diploma or equivalent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Official transcripts (minimum 3.0 GPA recommended)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Personal statement (500-750 words)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Two letters of recommendation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>English proficiency test (TOEFL/IELTS) if applicable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>No application fee</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Graduate</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Bachelor's degree from accredited institution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Official transcripts (minimum 3.0 GPA)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Statement of purpose (750-1000 words)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Two letters of recommendation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Resume/CV</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>English proficiency test if applicable</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">International Students</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Visa documentation (student visa required)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Health insurance coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Financial documentation for visa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Immigration services support available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">✓</span>
                    <span>Pre-arrival orientation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Financial Aid & Scholarships */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Financial Aid & Scholarships</h2>
            <div className="bg-blue-50 p-12 rounded-lg mb-8">
              <p className="text-lg text-gray-700 mb-8">
                AUP is committed to making education accessible. We offer a variety of scholarships, grants, and financial aid options to help make your AUP education affordable.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-900">Merit Scholarships</h3>
                  <p className="text-gray-700 mb-4">
                    Awarded based on academic excellence, leadership, and achievements. No separate application required - all applicants are automatically considered.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Presidential Scholarship - up to 50% tuition</li>
                    <li>• Dean's Scholarship - up to 40% tuition</li>
                    <li>• Excellence Scholarship - up to 30% tuition</li>
                    <li>• Achievement Scholarship - up to 20% tuition</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-900">Need-Based Aid</h3>
                  <p className="text-gray-700 mb-4">
                    Financial assistance for students with demonstrated financial need. Requires submission of financial aid application and supporting documents.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Need-based grants</li>
                    <li>• Work-study opportunities</li>
                    <li>• Payment plans</li>
                    <li>• Emergency financial assistance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-900">International Student Grants</h3>
                  <p className="text-gray-700 mb-4">
                    Special funding opportunities specifically for international students to help offset the costs of studying abroad.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• International Merit Awards</li>
                    <li>• Cultural Diversity Scholarships</li>
                    <li>• Regional Scholarships</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-900">Graduate Assistantships</h3>
                  <p className="text-gray-700 mb-4">
                    Work-study opportunities for graduate students, providing both financial support and professional experience.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Teaching assistantships</li>
                    <li>• Research assistantships</li>
                    <li>• Administrative positions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 font-semibold text-lg">
                Apply for Financial Aid
              </button>
            </div>
          </div>

          {/* Visit Campus */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Visit Campus</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="h-80 bg-gray-300 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=500&fit=crop" 
                    alt="AUP Campus" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Schedule a Visit</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Visit our campus in the heart of Paris. We offer campus tours, information sessions, and the opportunity to sit in on classes. Experience what it's like to be an AUP student.
                </p>
                <div className="space-y-4">
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Campus Tours</h4>
                    <p className="text-gray-700 text-sm">Guided tours of our facilities and campus spaces</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Information Sessions</h4>
                    <p className="text-gray-700 text-sm">Learn about academics, student life, and admissions</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Class Visits</h4>
                    <p className="text-gray-700 text-sm">Sit in on actual classes to experience AUP academics</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-blue-900">Virtual Campus Tour</h3>
                <p className="text-gray-700 mb-6">
                  Can't visit in person? Take our virtual campus tour to explore AUP from anywhere in the world.
                </p>
                <div className="h-64 bg-gray-300 rounded-lg mb-6 flex items-center justify-center">
                  <p className="text-gray-500">Virtual Tour Video</p>
                </div>
                <button className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 font-medium">
                  Take Virtual Tour
                </button>
              </div>
            </div>
          </div>

          {/* Contact Admissions */}
          <div className="bg-blue-900 text-white p-12 rounded-lg">
            <h2 className="text-4xl font-bold mb-8">Contact Admissions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Admissions Office</h3>
                <p className="text-blue-100 mb-6 text-lg">
                  The American University of Paris<br />
                  129, rue de l'Université<br />
                  75007 Paris, France
                </p>
                <div className="space-y-3 text-blue-100">
                  <p><strong className="text-white">Phone:</strong> +33 (0)1 40 62 07 20</p>
                  <p><strong className="text-white">Email:</strong> admissions@aup.edu</p>
                  <p><strong className="text-white">Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM CET</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-blue-100 mb-6">
                  Have questions? Our admissions team is here to help. Reach out via email, phone, or schedule a virtual meeting.
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-gray-100 font-medium">
                    Schedule a Meeting
                  </button>
                  <button className="w-full border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 font-medium">
                    Request Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
