import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">AUP</h1>
            </Link>
            <div className="hidden lg:flex items-center space-x-1">
              <Link to="/about" className="px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded">About</Link>
              <Link to="/academics" className="px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded">Academics</Link>
              <Link to="/admissions" className="px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded">Admissions</Link>
              <Link to="/student-life" className="px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded">Student Life</Link>
              <Link to="/support" className="px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded">Support</Link>
              <Link to="/apply" className="px-4 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded">Apply</Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <span>Resources for:</span>
                <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                  <option>Current Students</option>
                  <option>Prospective Students</option>
                  <option>Faculty & Staff</option>
                  <option>Parents & Families</option>
                  <option>Alumni</option>
                </select>
              </div>
              <button
                onClick={() => navigate('/login')}
                className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 font-medium"
              >
                My AUP
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Featured Story */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                László Krasznahorkai, friend of AUP's Center for Writers and Translators, Awarded Nobel Prize for Literature
              </h1>
              <p className="text-xl mb-6 text-blue-100">
                AUP professor Daniel Medin first met László Krasznahorkai in 2009, beginning a collaboration between the author and the Center for Writers and Translators. This year, Krasznahorkai became the 2025 Nobel Prize Laureate for Literature.
              </p>
              <Link to="/news" className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Read more
              </Link>
            </div>
            <div className="h-96 bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop" 
                alt="Nobel Prize Winner" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Featured Stories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-6">
              <div className="w-32 h-32 bg-gray-300 rounded-lg flex-shrink-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop" 
                  alt="Student Success" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">From BA to MA: Leen Al Daqqaq</h3>
                <p className="text-gray-600 mb-3">
                  Leen Al Daqqaq's journey at AUP began when she was seventeen. Today, she's completing her second degree at AUP with a career in diplomacy in view.
                </p>
                <Link to="/news" className="text-blue-900 hover:underline font-medium">Discover More →</Link>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-32 h-32 bg-gray-300 rounded-lg flex-shrink-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop" 
                  alt="First Year Students" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">First Year Students Visit the Loire Valley</h3>
                <p className="text-gray-600 mb-3">
                  The First Year trip to the Loire Valley is the perfect moment for new AUP students to connect and immerse themselves in French culture.
                </p>
                <Link to="/news" className="text-blue-900 hover:underline font-medium">Read More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Development Feature */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="h-96 bg-gray-300 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop" 
                  alt="AUP Campus" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">AUP Makes Université History:</h2>
                <h3 className="text-3xl font-bold mb-6 text-blue-900">A Flagship Building for a Global Community</h3>
                <p className="text-lg text-gray-700 mb-6">
                  The AUP campus is expanding, with a new, flagship building on the historical Rue de l'Université, and other modernized campus spaces.
                </p>
                <Link to="/about/campus" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900">AUP NEWS & <span className="text-blue-900">EVENTS</span></h2>
            <Link to="/news" className="text-blue-900 hover:underline font-medium">More News →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gray-300 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" 
                  alt="Care as Method" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Care as Method: CCDS Reflection on Seminar Series</h3>
                <Link to="/news" className="text-blue-900 hover:underline font-medium">READ MORE →</Link>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gray-300 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" 
                  alt="Alumni Association" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">The American University of Paris Launches Alumni Association</h3>
                <p className="text-gray-600 mb-3">Uniting over 23,000 alumni worldwide to foster community and professional growth</p>
                <Link to="/news" className="text-blue-900 hover:underline font-medium">Read more →</Link>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gray-300 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" 
                  alt="Writer in Residence" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Alice Blackhurst: AUP's 2025 Writer in Residence</h3>
                <p className="text-gray-600 mb-3">AUP Announces its seventh Paris Writer in Residence</p>
                <Link to="/news" className="text-blue-900 hover:underline font-medium">Read more →</Link>
              </div>
            </div>
          </div>

          {/* Events Calendar Preview */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Upcoming Events</h3>
            <div className="space-y-4">
              <div className="flex gap-6 items-start border-b border-gray-200 pb-4">
                <div className="text-center min-w-[80px]">
                  <div className="text-2xl font-bold text-blue-900">22</div>
                  <div className="text-sm text-gray-600">JAN</div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">Fashion Cultures and Histories – Research Seminar: Fashion & Migration/s</h4>
                  <p className="text-sm text-gray-600">22 January 2026 | 18h00 - 19h30</p>
                  <p className="text-gray-700 mt-2">Fashion Cultures and Histories – Research Seminar Series, AUP / IHTP-CNRS edition...</p>
                </div>
              </div>
              <div className="flex gap-6 items-start border-b border-gray-200 pb-4">
                <div className="text-center min-w-[80px]">
                  <div className="text-2xl font-bold text-blue-900">02</div>
                  <div className="text-sm text-gray-600">FEB</div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">Book Launch: Demos Rising, Democracy and the Popular Construction of Public Power in France, 1800–1850</h4>
                  <p className="text-sm text-gray-600">02 February 2026 | 18h00 - 20h00</p>
                  <p className="text-gray-700 mt-2">A political history exploring the concept of demos in the French government during...</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Link to="/events" className="text-blue-900 hover:underline font-medium">More Events →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* AUP Community Stats */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">AUP <span className="text-blue-900">COMMUNITY</span></h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Students */}
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-6xl font-bold text-blue-900 mb-4">1,283</div>
              <div className="text-2xl font-semibold text-gray-900 mb-6">Students</div>
              <div className="space-y-2 text-gray-700">
                <p className="text-lg">110 Nationalities</p>
                <p className="text-lg">56 Languages & Dialects</p>
                <p className="text-lg font-semibold">63% Speak 2+ Languages</p>
              </div>
              <p className="mt-6 text-gray-600 italic">
                AUP launches vibrant, confident individuals with the curiosity to explore, passion to engage, and capability to lead. Because we believe the world needs more independent thinkers, AUP gives you the freedom and opportunity to pursue your passions with creativity and purpose.
              </p>
            </div>
            {/* Faculty */}
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-6xl font-bold text-blue-900 mb-4">171</div>
              <div className="text-2xl font-semibold text-gray-900 mb-6">Professors</div>
              <div className="space-y-2 text-gray-700">
                <p className="text-lg">51 Women</p>
                <p className="text-lg">77 Speak 3+ Languages</p>
                <p className="text-lg">28 Nationalities</p>
              </div>
              <p className="mt-6 text-gray-600 italic">
                At AUP, the practice of traditional liberal arts is anything but traditional. Professors act as both mentors and collaborators, pushing you to question ideas and reflect on varied topics.
              </p>
            </div>
            {/* Alumni */}
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-6xl font-bold text-blue-900 mb-4">23,000</div>
              <div className="text-2xl font-semibold text-gray-900 mb-6">Alumni</div>
              <div className="space-y-2 text-gray-700">
                <p className="text-lg">in 146 Countries</p>
                <p className="text-lg font-semibold">9/10 speak 2+ languages</p>
                <p className="text-lg font-semibold">93% job within 1 year</p>
              </div>
              <p className="mt-6 text-gray-600 italic">
                We measure the success of our mission by the impact our graduates have on the world. Many alumni take on leadership roles in international organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AUP In Focus Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">AUP <span className="text-blue-900">IN FOCUS</span></h2>
          <div className="mb-8 text-center">
            <p className="text-lg text-gray-700 mb-4">Discover more about AUP</p>
            <div className="flex flex-wrap justify-center gap-2">
              <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800">By Interest</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Admissions</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">University</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Experiential Learning</button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-64 bg-gray-300 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop" 
                  alt="AUP Story" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-blue-900 font-semibold mb-2">STORY CATEGORY</p>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Story Title</h3>
                <p className="text-gray-600 mb-4">Story subtitle and description</p>
                <Link to="/stories" className="text-blue-900 hover:underline font-medium">Read More →</Link>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-64 bg-gray-300 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop" 
                  alt="AUP Story" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-blue-900 font-semibold mb-2">STORY CATEGORY</p>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Story Title</h3>
                <p className="text-gray-600 mb-4">Story subtitle and description</p>
                <Link to="/stories" className="text-blue-900 hover:underline font-medium">Read More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">An Urban Campus in the Heart of Paris</h2>
              <p className="text-xl text-gray-700 mb-8">
                Paris has always been the place where individuals come to shine bright. Make your mark!
              </p>
              <Link to="/about/campus" className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition text-lg">
                Explore Paris
              </Link>
            </div>
            <div className="h-96 bg-gray-300 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop" 
                alt="Paris Campus" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6">THE AMERICAN UNIVERSITY OF PARIS</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                129, rue de l'Université<br />
                75007 Paris, France<br />
                +33 (0)1 40 62 07 20<br />
                admissions@aup.edu
              </p>
              <p className="text-gray-500 text-sm italic mt-4">Etablissement d'Enseignement Supérieur Privé</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quicklinks</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/calendar" className="hover:text-white transition">Academic Calendar</Link></li>
                <li><Link to="/emergency" className="hover:text-white transition">Emergency</Link></li>
                <li><Link to="/admissions" className="hover:text-white transition">Application</Link></li>
                <li><Link to="/student-life/housing" className="hover:text-white transition">Housing</Link></li>
                <li><Link to="/campus-map" className="hover:text-white transition">Campus Map</Link></li>
                <li><Link to="/academics/faculty" className="hover:text-white transition">Faculty</Link></li>
                <li><Link to="/academics/courses" className="hover:text-white transition">Course Catalog</Link></li>
                <li><Link to="/social-media" className="hover:text-white transition">Social Media</Link></li>
                <li><Link to="/employment" className="hover:text-white transition">Employment</Link></li>
                <li><Link to="/support/tuition" className="hover:text-white transition">Tuition</Link></li>
                <li><Link to="/support/student-rights" className="hover:text-white transition">Student Right to Know</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Gateways</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/login" className="hover:text-white transition">Admitted Students</Link></li>
                <li><Link to="/alumni" className="hover:text-white transition">Alumni</Link></li>
                <li><Link to="/admissions" className="hover:text-white transition">Prospective Students</Link></li>
                <li><Link to="/login" className="hover:text-white transition">Current Students</Link></li>
                <li><Link to="/faculty-staff" className="hover:text-white transition">Faculty & Staff</Link></li>
                <li><Link to="/parents" className="hover:text-white transition">Parents & Families</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Connect</h4>
              <div className="flex space-x-4 mb-6">
                <a href="https://facebook.com/auparis" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Facebook</a>
                <a href="https://twitter.com/auparis" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Twitter</a>
                <a href="https://instagram.com/auparis" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Instagram</a>
                <a href="https://youtube.com/auparis" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Youtube</a>
                <a href="https://linkedin.com/school/auparis" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Linkedin</a>
              </div>
              <div className="border-t border-gray-800 pt-6">
                <h4 className="font-semibold mb-4">Main Menu</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link to="/about" className="hover:text-white">Academics</Link></li>
                  <li><Link to="/admissions" className="hover:text-white">Admissions</Link></li>
                  <li><Link to="/student-life" className="hover:text-white">Student life</Link></li>
                  <li><Link to="/support" className="hover:text-white">Support AUP</Link></li>
                  <li><Link to="/about" className="hover:text-white">About AUP</Link></li>
                  <li><Link to="/legal" className="hover:text-white">Mentions Legales</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 The American University of Paris. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
