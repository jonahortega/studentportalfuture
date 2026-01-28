import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function AboutPage() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-blue-900">AUP</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-blue-900 font-semibold border-b-2 border-blue-900 pb-1">About</Link>
              <Link to="/academics" className="text-gray-700 hover:text-blue-900">Academics</Link>
              <Link to="/admissions" className="text-gray-700 hover:text-blue-900">Admissions</Link>
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
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About AUP</h1>
          <p className="text-xl text-blue-100">Discover our history, mission, and vision for global education</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* History of AUP */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">History of AUP</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="h-64 bg-gray-300 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop" 
                    alt="AUP History" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  Founded in 1962, The American University of Paris has been providing an American-style liberal arts education in the heart of Paris for over 60 years. AUP was established to offer students from around the world the opportunity to study in an international environment while maintaining the academic rigor and values of American higher education.
                </p>
              </div>
              <div className="space-y-4">
                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">Location</h3>
                  <p className="text-gray-700">129, rue de l'Université, 75007 Paris, France</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">Founding History</h3>
                  <p className="text-gray-700">Learn about the visionaries who established AUP and their mission to create a truly international university.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">Honorary Degree Recipients</h3>
                  <p className="text-gray-700">Distinguished individuals who have received honorary degrees from AUP.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">AUP History Timeline</h3>
                  <p className="text-gray-700">Explore key moments in AUP's development over six decades.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">Faces of AUP</h3>
                  <p className="text-gray-700">Meet the people who shaped AUP: Dr. Lloyd A. DeLamater, Marie Louise Viborel DeLamater, Col. Karl S. Cate, Raymond D. Flowers, Walter J. Brennan.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Core Values */}
          <div className="mb-16 bg-blue-50 p-12 rounded-lg">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Mission & Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Our Mission</h3>
                <p className="text-lg text-gray-700 mb-6">
                  AUP launches vibrant, confident individuals with the curiosity to explore, passion to engage, and capability to lead. Because we believe the world needs more independent thinkers, AUP gives you the freedom and opportunity to pursue your passions with creativity and purpose.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Vision Statement</h4>
                    <p className="text-gray-700">To be the leading American university in Europe, recognized for academic excellence and global engagement.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Core Values</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Academic Excellence</li>
                      <li>Global Perspective</li>
                      <li>Cultural Diversity</li>
                      <li>Critical Thinking</li>
                      <li>Social Responsibility</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Vision and Leadership</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">President</h4>
                    <p className="text-gray-700 mb-4">About the President</p>
                    <p className="text-gray-700 mb-4">Past Presidents</p>
                    <p className="text-gray-700">The Presidential Award for Distinguished Achievement</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Leadership</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Board of Trustees</li>
                      <li>• Leadership Team</li>
                      <li>• AUP Alumni Association Board</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Strategic Plan</h4>
                    <p className="text-gray-700">Our roadmap for the future of AUP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AUP Recognition */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">AUP Recognition</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Delivering Academic Excellence</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Accreditation</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Middle States Commission on Higher Education</li>
                      <li>• Memberships</li>
                      <li>• Partnerships and Consortia</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Institutional Effectiveness</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Institutional Research</li>
                      <li>• Assessment Structure</li>
                      <li>• Assessment Process</li>
                      <li>• Assessment Calendar</li>
                      <li>• Assessment Resources</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Awards</h3>
                <p className="text-gray-700 mb-4">AUP has received recognition for excellence in international education and student outcomes.</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Retention and Graduation Rates</p>
                  <p>• Student Right to Know</p>
                  <p>• State Nonprofit Disclosures</p>
                  <p>• Publications</p>
                  <p>• Gender Equality Plan</p>
                </div>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Alumni Success</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Undergraduate Outcomes</h4>
                    <p className="text-gray-700 text-sm">93% employed or in graduate school within one year of graduation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Graduate Outcomes</h4>
                    <p className="text-gray-700 text-sm">Advanced career opportunities in international organizations, NGOs, and global businesses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Campus Development */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Campus Development</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="h-80 bg-gray-300 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=500&fit=crop" 
                    alt="AUP Campus" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">AUP Makes Université History</h3>
                <p className="text-lg text-gray-700 mb-4">
                  The AUP campus is expanding, with a new, flagship building on the historical Rue de l'Université, and other modernized campus spaces.
                </p>
                <Link to="/campus-tour" className="text-blue-900 hover:underline font-medium">Online Campus Tour →</Link>
              </div>
              <div className="space-y-4">
                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition">
                  <h4 className="font-semibold mb-2 text-gray-900">Combes Student Life Center</h4>
                  <p className="text-gray-700 text-sm">A hub for student activities, organizations, and community engagement.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition">
                  <h4 className="font-semibold mb-2 text-gray-900">Grenelle Teaching and Mentoring Center</h4>
                  <p className="text-gray-700 text-sm">State-of-the-art classrooms and faculty offices designed for collaborative learning.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition">
                  <h4 className="font-semibold mb-2 text-gray-900">Quai d'Orsay Learning Commons</h4>
                  <p className="text-gray-700 text-sm">Modern library and study spaces with extensive digital resources.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition">
                  <h4 className="font-semibold mb-2 text-gray-900">The Monttessuy Center for the Arts</h4>
                  <p className="text-gray-700 text-sm">Dedicated space for artistic expression, exhibitions, and performances.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition">
                  <h4 className="font-semibold mb-2 text-gray-900">Campus Development History</h4>
                  <p className="text-gray-700 text-sm">Learn about the evolution of AUP's campus over the decades.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Arts at AUP */}
          <div className="bg-gray-50 p-12 rounded-lg">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Arts at AUP</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="h-64 bg-gray-300 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop" 
                    alt="AUP Fine Arts Gallery" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">AUP Fine Arts Gallery</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Permanent Collection</p>
                  <p>• History</p>
                  <p>• Curators</p>
                  <p>• Past Exhibitions</p>
                  <p>• Policies</p>
                  <p>• Call for Submissions</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Cultural Programs</h3>
                <p className="text-gray-700 mb-6">
                  AUP's commitment to the arts extends beyond the classroom, with regular exhibitions, performances, and cultural events that enrich the campus community.
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-900 pl-4">
                    <h4 className="font-semibold mb-2">Exhibitions</h4>
                    <p className="text-gray-600 text-sm">Regular art exhibitions featuring student, faculty, and visiting artist work</p>
                  </div>
                  <div className="border-l-4 border-blue-900 pl-4">
                    <h4 className="font-semibold mb-2">Performances</h4>
                    <p className="text-gray-600 text-sm">Theater, music, and dance performances throughout the academic year</p>
                  </div>
                  <div className="border-l-4 border-blue-900 pl-4">
                    <h4 className="font-semibold mb-2">Workshops</h4>
                    <p className="text-gray-600 text-sm">Hands-on artistic workshops and masterclasses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
