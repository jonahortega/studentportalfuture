import { Link } from 'react-router-dom'

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-blue-900">AUP</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-gray-700 hover:text-blue-900">About</Link>
              <Link to="/academics" className="text-blue-900 font-semibold border-b-2 border-blue-900 pb-1">Academics</Link>
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
          <h1 className="text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl text-blue-100">Explore our academic programs and curriculum</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Undergraduate Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Undergraduate</h2>
            
            {/* Majors & Minors */}
            <div className="mb-12">
              <h3 className="text-3xl font-semibold mb-6 text-blue-900">Majors & Minors</h3>
              <p className="text-lg text-gray-700 mb-8">
                Choose from a wide range of majors and minors across disciplines including arts, sciences, business, and humanities. Our flexible curriculum allows you to combine interests and create a personalized academic path.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                  <h4 className="font-semibold mb-3 text-gray-900">Arts & Humanities</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Art History</li>
                    <li>• Comparative Literature</li>
                    <li>• Film Studies</li>
                    <li>• History</li>
                    <li>• Philosophy</li>
                  </ul>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                  <h4 className="font-semibold mb-3 text-gray-900">Social Sciences</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• International Affairs</li>
                    <li>• Psychology</li>
                    <li>• Sociology</li>
                    <li>• Political Science</li>
                    <li>• Economics</li>
                  </ul>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                  <h4 className="font-semibold mb-3 text-gray-900">Business & Management</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• International Business</li>
                    <li>• Management</li>
                    <li>• Marketing</li>
                    <li>• Finance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Global Liberal Arts Core Curriculum */}
            <div className="bg-blue-50 p-8 rounded-lg mb-12">
              <h3 className="text-3xl font-semibold mb-6 text-blue-900">Global Liberal Arts Core Curriculum</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Integrative Inquiry for the Global Explorer</h4>
                  <p className="text-gray-700 mb-4">
                    Develop critical thinking skills through interdisciplinary exploration of global issues and perspectives.
                  </p>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Critical Inquiry and Expression</h4>
                  <p className="text-gray-700 mb-4">
                    Master written and oral communication skills essential for academic and professional success.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Quantitative and Experimental Reasoning</h4>
                  <p className="text-gray-700 mb-4">
                    Build analytical and problem-solving skills through mathematics, statistics, and scientific methods.
                  </p>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Expression Française</h4>
                  <p className="text-gray-700 mb-4">
                    Achieve proficiency in French language and culture, essential for life in Paris.
                  </p>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">AUP Capstone</h4>
                  <p className="text-gray-700">
                    Complete your undergraduate education with a comprehensive capstone project that integrates your learning.
                  </p>
                </div>
              </div>
            </div>

            {/* Firstbridge */}
            <div className="mb-12">
              <h3 className="text-3xl font-semibold mb-6 text-blue-900">Firstbridge</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="h-64 bg-gray-300 rounded-lg mb-6 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop" 
                      alt="Firstbridge Program" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-lg text-gray-700">
                    Firstbridge is AUP's signature first-year program that introduces students to interdisciplinary learning and the AUP community. This unique program helps new students transition to university life while exploring complex topics from multiple perspectives.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">English Courses</h4>
                    <p className="text-gray-700 text-sm">First-year writing and communication courses designed to build strong academic foundations.</p>
                  </div>
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">The First-Year Success Program</h4>
                    <p className="text-gray-700 text-sm">Comprehensive support system to help first-year students thrive academically and socially.</p>
                  </div>
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">The Common Read</h4>
                    <p className="text-gray-700 text-sm">All first-year students read and discuss a common text, fostering intellectual community.</p>
                  </div>
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">First Year Students Visit the Loire Valley</h4>
                    <p className="text-gray-700 text-sm">An immersive cultural experience that introduces students to French history and culture.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Capabilities */}
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-900">Core Capabilities</h3>
              <p className="text-lg text-gray-700 mb-6">
                AUP graduates develop essential capabilities that prepare them for success in an interconnected world:
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl font-bold text-blue-900 mb-2">1</div>
                  <h4 className="font-semibold mb-2">Critical Thinking</h4>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl font-bold text-blue-900 mb-2">2</div>
                  <h4 className="font-semibold mb-2">Global Awareness</h4>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl font-bold text-blue-900 mb-2">3</div>
                  <h4 className="font-semibold mb-2">Communication</h4>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl font-bold text-blue-900 mb-2">4</div>
                  <h4 className="font-semibold mb-2">Cultural Competence</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Graduate Programs */}
          <div className="mb-16 border-t border-gray-200 pt-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Graduate Programs</h2>
            <p className="text-lg text-gray-700 mb-12">
              AUP offers master's degrees designed for professionals seeking to advance their careers in international contexts. Our graduate programs combine rigorous academics with practical, real-world applications.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* MA in Diplomacy and International Law */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gray-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop" 
                    alt="Diplomacy and International Law" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-900">MA in Diplomacy and International Law</h3>
                  <p className="text-gray-700 mb-4">
                    Prepare for careers in international relations, diplomacy, and law. This program combines legal analysis with diplomatic practice.
                  </p>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <p>• Program Requirements</p>
                    <p>• Career Outcomes</p>
                    <p>• Faculty</p>
                  </div>
                  <Link to="/academics/graduate/diplomacy" className="text-blue-900 hover:underline font-medium">Learn More →</Link>
                </div>
              </div>

              {/* MA in Global Communications */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gray-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                    alt="Global Communications" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-900">MA in Global Communications</h3>
                  <p className="text-gray-700 mb-4">
                    Explore digital cultures, fashion, and development communications. Choose from specialized tracks.
                  </p>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <p>• Development Communications Track</p>
                    <p>• Digital Cultures and Industries Track</p>
                    <p>• Fashion Track</p>
                    <p>• Program Requirements</p>
                    <p>• Career Outcomes</p>
                    <p>• Faculty</p>
                  </div>
                  <Link to="/academics/graduate/communications" className="text-blue-900 hover:underline font-medium">Learn More →</Link>
                </div>
              </div>

              {/* MSc in Human Rights and Data Science */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gray-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
                    alt="Human Rights and Data Science" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-900">MSc in Human Rights and Data Science</h3>
                  <p className="text-gray-700 mb-4">
                    Combine human rights advocacy with data science skills. Learn to use data to advance human rights causes.
                  </p>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <p>• Program Requirements</p>
                  </div>
                  <Link to="/academics/graduate/human-rights" className="text-blue-900 hover:underline font-medium">Learn More →</Link>
                </div>
              </div>

              {/* MA in International Affairs */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gray-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" 
                    alt="International Affairs" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-900">MA in International Affairs</h3>
                  <p className="text-gray-700 mb-4">
                    Study international relations, conflict resolution, and civil society development.
                  </p>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <p>• Program Requirements</p>
                    <p>• Career Outcomes</p>
                    <p>• Faculty</p>
                  </div>
                  <Link to="/academics/graduate/international-affairs" className="text-blue-900 hover:underline font-medium">Learn More →</Link>
                </div>
              </div>

              {/* MA in International Affairs, Conflict Resolution, and Civil Society Development */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gray-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" 
                    alt="Conflict Resolution" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-900">MA in International Affairs, Conflict Resolution, and Civil Society Development</h3>
                  <p className="text-gray-700 mb-4">
                    Specialized program focusing on peacebuilding, conflict resolution, and NGO development.
                  </p>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <p>• Program Requirements</p>
                    <p>• Career Outcomes</p>
                    <p>• Faculty</p>
                  </div>
                  <Link to="/academics/graduate/conflict-resolution" className="text-blue-900 hover:underline font-medium">Learn More →</Link>
                </div>
              </div>

              {/* MSc in International Management */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gray-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                    alt="International Management" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-900">MSc in International Management</h3>
                  <p className="text-gray-700 mb-4">
                    Develop management expertise with specialized tracks in NGO & Mission Based Management or Sustainability Systems.
                  </p>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <p>• NGO & Mission Based Management Track</p>
                    <p>• Sustainability Systems Track</p>
                    <p>• Program Requirements</p>
                    <p>• Faculty</p>
                    <p>• Career Outcomes</p>
                  </div>
                  <Link to="/academics/graduate/management" className="text-blue-900 hover:underline font-medium">Learn More →</Link>
                </div>
              </div>

              {/* MSc in Strategic Brand Management */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gray-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                    alt="Strategic Brand Management" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-900">MSc in Strategic Brand Management</h3>
                  <p className="text-gray-700 mb-4">
                    Develop expertise in brand strategy and management for global markets.
                  </p>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <p>• Program Requirements</p>
                  </div>
                  <Link to="/academics/graduate/brand-management" className="text-blue-900 hover:underline font-medium">Learn More →</Link>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link to="/academics/graduate/thesis" className="text-blue-900 hover:underline font-medium text-lg">Find Your Thesis Advisor →</Link>
            </div>
          </div>

          {/* Cultural Program */}
          <div className="mb-16 border-t border-gray-200 pt-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Cultural Program</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="h-80 bg-gray-300 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=500&fit=crop" 
                    alt="Cultural Program" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg text-gray-700">
                  AUP's Cultural Program offers study trips, cultural excursions, and immersive experiences throughout France and Europe. These programs are an integral part of the AUP experience, allowing students to learn beyond the classroom.
                </p>
              </div>
              <div className="space-y-6">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">Study Trips</h3>
                  <p className="text-gray-700 mb-4">Multi-day educational trips to destinations across Europe, exploring history, culture, and contemporary issues.</p>
                  <Link to="/academics/cultural-program/study-trips" className="text-blue-900 hover:underline">Learn More →</Link>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">Cultural Excursions</h3>
                  <p className="text-gray-700 mb-4">Day trips to museums, historical sites, and cultural events throughout France.</p>
                  <Link to="/academics/cultural-program/excursions" className="text-blue-900 hover:underline">Learn More →</Link>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">Coup de Pouce</h3>
                  <p className="text-gray-700 mb-4">Financial assistance program to help students participate in cultural activities.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">Summer Trips and Excursions</h3>
                  <p className="text-gray-700 mb-4">Extended summer programs and cultural immersion opportunities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Research Centers */}
          <div className="mb-16 border-t border-gray-200 pt-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Research Centers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Center for Critical Democracy Studies */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gray-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" 
                    alt="CCDS" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">The Center for Critical Democracy Studies</h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    Research on democracy, political theory, and social contracts. The center hosts conferences, publishes research, and supports faculty and student scholarship.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p>• Upcoming Events</p>
                    <p>• Research Projects</p>
                    <p>• Fellows' Publications</p>
                    <p>• Democracy Labs (D.Labs)</p>
                    <p>• Prison Education Workshop</p>
                    <p>• Tocqueville Challenge</p>
                    <p>• Visiting Scholars</p>
                  </div>
                  <Link to="/academics/research/ccds" className="text-blue-900 hover:underline font-medium">Learn More →</Link>
                </div>
              </div>

              {/* Center for Writers and Translators */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gray-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop" 
                    alt="CWT" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">The Center for Writers and Translators</h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    Supporting writers, translators, and literary artists through publications, events, and community engagement.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p>• The Work of the Center</p>
                    <p>• Cahiers Series</p>
                    <p>• The Muriel Sparks' Letters</p>
                    <p>• Beckett Letters</p>
                    <p>• Music & Literature</p>
                    <p>• The White Review</p>
                    <p>• That Other Word</p>
                    <p>• Community: Writers, Translators & Artists</p>
                  </div>
                  <Link to="/academics/research/cwt" className="text-blue-900 hover:underline font-medium">Learn More →</Link>
                </div>
              </div>

              {/* Schaeffer Center */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gray-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop" 
                    alt="Schaeffer Center" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">The George and Irina Schaeffer Center for the Study of Genocide, Human Rights and Conflict Prevention</h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    Dedicated to the study of genocide, human rights, and conflict prevention through research, education, and advocacy.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p>• Practicing Memory after collective violence</p>
                    <p>• Figuring Memory Seminar</p>
                    <p>• The Archives</p>
                    <p>• Fellowships, Grants and Scholarships</p>
                    <p>• The Justice Lab</p>
                    <p>• International Conferences & Workshops</p>
                  </div>
                  <Link to="/academics/research/schaeffer" className="text-blue-900 hover:underline font-medium">Learn More →</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Faculty */}
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Faculty</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Faculty Achievements</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Books</h4>
                    <p className="text-gray-700 text-sm">Faculty publications across disciplines</p>
                  </div>
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Conferences & Talks</h4>
                    <p className="text-gray-700 text-sm">Faculty presentations at international conferences</p>
                  </div>
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Publications</h4>
                    <p className="text-gray-700 text-sm">Research articles and academic contributions</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Faculty Directory</h3>
                <p className="text-gray-700 mb-6">
                  Our faculty come from renowned universities around the world, bringing diverse perspectives and expertise to the classroom.
                </p>
                <div className="space-y-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Faculty Directory</h4>
                    <p className="text-gray-700 text-sm mb-4">Search our complete faculty directory by name, department, or research interest.</p>
                    <Link to="/academics/faculty/directory" className="text-blue-900 hover:underline font-medium">View Directory →</Link>
                  </div>
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Faculty Emeriti</h4>
                    <p className="text-gray-700 text-sm">Honoring our retired faculty members and their contributions to AUP.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summer School */}
          <div className="mt-16 border-t border-gray-200 pt-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Summer School</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="h-64 bg-gray-300 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop" 
                    alt="Summer School" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">AUP Summer School</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Experience AUP during the summer with intensive courses, cultural activities, and the opportunity to earn credits while exploring Paris.
                </p>
                <div className="space-y-3 text-gray-700">
                  <p>• Intensive 3-week and 6-week programs</p>
                  <p>• Courses across all disciplines</p>
                  <p>• Cultural excursions included</p>
                  <p>• Open to AUP and visiting students</p>
                </div>
                <Link to="/academics/summer-school" className="inline-block mt-6 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 font-medium">
                  Learn More About Summer School
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
