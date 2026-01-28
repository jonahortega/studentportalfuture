import { Link } from 'react-router-dom'

export default function StudentLifePage() {
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
              <Link to="/student-life" className="text-blue-900 font-semibold border-b-2 border-blue-900 pb-1">Student Life</Link>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Student Life</h1>
          <p className="text-2xl text-blue-100">Experience life in Paris as an AUP student</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Student Organizations */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Student Organizations</h2>
            <p className="text-lg text-gray-700 mb-8">
              Get involved in over 30 student clubs and organizations covering interests from academics to arts, culture, and sports. Student organizations are a vital part of the AUP community, providing opportunities for leadership, friendship, and personal growth.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                <div className="h-40 bg-gray-300 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" 
                    alt="Academic Clubs" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Academic Clubs</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Model United Nations</li>
                  <li>• Debate Society</li>
                  <li>• Pre-Law Society</li>
                  <li>• Economics Club</li>
                  <li>• Psychology Society</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                <div className="h-40 bg-gray-300 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" 
                    alt="Cultural Organizations" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Cultural Organizations</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• International student associations</li>
                  <li>• Cultural clubs by region</li>
                  <li>• Language exchange groups</li>
                  <li>• Heritage celebration groups</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                <div className="h-40 bg-gray-300 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" 
                    alt="Arts & Media" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Arts & Media</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Film club</li>
                  <li>• Photography society</li>
                  <li>• Theater group</li>
                  <li>• Creative writing club</li>
                  <li>• Music ensemble</li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Link to="/student-life/organizations" className="text-blue-900 hover:underline font-medium text-lg">
                View All Student Organizations →
              </Link>
            </div>
          </div>

          {/* Housing */}
          <div className="mb-16 border-t border-gray-200 pt-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Housing</h2>
            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">Housing Offer for 2025-2026</h3>
              <p className="text-lg text-gray-700 mb-6">
                AUP offers several residence options in prime Paris locations, all within easy access to campus. Our housing office provides comprehensive support for finding accommodation, understanding leases, and navigating Paris housing.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Housing Requirement</h4>
                  <p className="text-gray-700 text-sm mb-4">First-year students are required to live in AUP-approved housing.</p>
                  <h4 className="font-semibold mb-3 text-gray-900">How to Register</h4>
                  <p className="text-gray-700 text-sm">Complete your housing application through the student portal.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Housing & Disability Accommodations</h4>
                  <p className="text-gray-700 text-sm mb-4">Special accommodations available for students with disabilities.</p>
                  <h4 className="font-semibold mb-3 text-gray-900">Payment and Refund Policies</h4>
                  <p className="text-gray-700 text-sm">Clear information about housing costs and payment schedules.</p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gray-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop" 
                    alt="AUP Annonciation" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2 text-gray-900">AUP Annonciation</h4>
                  <p className="text-gray-600 text-sm">Modern residence in central Paris</p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gray-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop" 
                    alt="AUP BLUM" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2 text-gray-900">AUP BLUM</h4>
                  <p className="text-gray-600 text-sm">Student residence with community spaces</p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gray-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop" 
                    alt="AUP Jouffroy" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2 text-gray-900">AUP Jouffroy d'Abbans</h4>
                  <p className="text-gray-600 text-sm">Historic building with modern amenities</p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gray-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop" 
                    alt="Cambronne" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2 text-gray-900">Cambronne</h4>
                  <p className="text-gray-600 text-sm">Comfortable student housing option</p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/student-life/housing" className="text-blue-900 hover:underline font-medium text-lg">
                View All Housing Options & Prices →
              </Link>
            </div>
          </div>

          {/* Life in Paris */}
          <div className="mb-16 border-t border-gray-200 pt-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Paris</h2>
            <div className="grid md:grid-cols-2 gap-12 mb-8">
              <div>
                <div className="h-96 bg-gray-300 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=500&fit=crop" 
                    alt="Life in Paris" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">An Urban Campus in the Heart of Paris</h3>
                <p className="text-lg text-gray-700">
                  Paris has always been the place where individuals come to shine bright. Make your mark! Living in Paris is an integral part of the AUP experience, offering endless opportunities for cultural enrichment, language learning, and personal growth.
                </p>
              </div>
              <div className="space-y-6">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-blue-900">Banking</h4>
                  <p className="text-gray-700 mb-4">Guidance on opening French bank accounts and managing finances as an international student.</p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Recommended banks for students</li>
                    <li>• Required documents</li>
                    <li>• Student account benefits</li>
                  </ul>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-blue-900">Safety in Paris</h4>
                  <p className="text-gray-700 mb-4">Resources and tips for staying safe in the city, including emergency contacts and safety protocols.</p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Emergency contacts</li>
                    <li>• Safety tips</li>
                    <li>• AUP security services</li>
                  </ul>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-blue-900">Cultural Excursions</h4>
                  <p className="text-gray-700 mb-4">Organized trips to museums, historical sites, and cultural events throughout France.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-blue-900">Student Jobs</h4>
                  <p className="text-gray-700 mb-4">Information about part-time work opportunities for students, including work authorization and job resources.</p>
                </div>
              </div>
            </div>

            {/* Daily Life */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-900">Daily Life</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Transportation</h4>
                  <p className="text-gray-700 text-sm mb-4">Navigate Paris with the Métro, buses, and bike-sharing systems. Student discounts available.</p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Navigo student pass</li>
                    <li>• Vélib bike sharing</li>
                    <li>• Public transport maps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Food & Shopping</h4>
                  <p className="text-gray-700 text-sm mb-4">Discover Parisian markets, cafés, and student-friendly dining options throughout the city.</p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Student-friendly restaurants</li>
                    <li>• Markets and grocery stores</li>
                    <li>• Budget dining guide</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Inexpensive Entertainment</h4>
                  <p className="text-gray-700 text-sm mb-4">Enjoy museums, concerts, and cultural events with student discounts and free admission days.</p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Free museum days</li>
                    <li>• Student discounts</li>
                    <li>• Cultural events calendar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Support Services */}
          <div className="mb-16 border-t border-gray-200 pt-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Support Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Student Life Help Desk</h3>
                <p className="text-gray-700 mb-4">One-stop support for all student life questions and concerns. Open Monday-Friday, 9 AM - 5 PM.</p>
                <p className="text-blue-900 font-medium">helpdesk@aup.edu</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Student Accounting Services</h3>
                <p className="text-gray-700 mb-4">Tuition, fees, payments, and financial aid assistance. Get help with billing questions and payment plans.</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Undergraduate Tuition & Fees</li>
                  <li>• Graduate Tuition & Fees</li>
                  <li>• Payments and Procedures</li>
                  <li>• Tuition Refunds</li>
                  <li>• U.S. Tax Information</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Student Immigration Services</h3>
                <p className="text-gray-700 mb-4">Visa support and immigration documentation for international students. Comprehensive guidance throughout your studies.</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• New Students</li>
                  <li>• Returning Students</li>
                  <li>• Under-18 Students</li>
                  <li>• Summer Students</li>
                  <li>• Part-Time Students</li>
                  <li>• EU Students and Dual citizenship</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Diversity and Inclusion</h3>
                <p className="text-gray-700 mb-4">Support for LGBTQ+ students, diversity council, and inclusive community initiatives.</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• LGBTQ+ Resources</li>
                  <li>• Diversity Council</li>
                  <li>• Support for our Diverse Communities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Health & Well-being */}
          <div className="mb-16 border-t border-gray-200 pt-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Health & Well-being</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Health Care Plan</h3>
                <p className="text-gray-700 mb-6">
                  Comprehensive health insurance coverage for all students. AUP requires all students to have health insurance coverage.
                </p>
                <div className="space-y-4">
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Cost</h4>
                    <p className="text-gray-700 text-sm">Affordable health insurance options for students</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Opting out</h4>
                    <p className="text-gray-700 text-sm">Information about using your own insurance plan</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Reimbursement</h4>
                    <p className="text-gray-700 text-sm">How to get reimbursed for medical expenses</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Finding Medical Providers</h4>
                    <p className="text-gray-700 text-sm">Directory of English-speaking doctors and medical facilities</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Immunization</h4>
                    <p className="text-gray-700 text-sm">Required vaccinations and health forms</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Guidance Counseling</h3>
                <p className="text-gray-700 mb-6">
                  Free and confidential counseling services available to all students. Our counselors are trained to help with a wide range of concerns.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Counseling Program</h4>
                    <p className="text-gray-700 text-sm">Policies, Procedures and Confidentiality information</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Additional Counseling Resources</h4>
                    <p className="text-gray-700 text-sm">External resources and referrals</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-900">Suicide Prevention</h4>
                    <p className="text-gray-700 text-sm">Resources and support for mental health crises</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-gray-900">Wellness Programs</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Sexual Misconduct Prevention</li>
                    <li>• Alcohol and Substance Abuse support</li>
                    <li>• Time Management workshops</li>
                    <li>• Stress management resources</li>
                    <li>• Wellness workshops and events</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Student Leadership */}
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Student Leadership & Awards</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Student Leadership Opportunities</h3>
                <p className="text-gray-700 mb-6">
                  Develop leadership skills through various roles in student government, clubs, and organizations.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Student Government Association</li>
                  <li>• Club leadership positions</li>
                  <li>• Peer mentor programs</li>
                  <li>• Orientation leaders</li>
                  <li>• Resident assistants</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">PAS Awards</h3>
                <p className="text-gray-700 mb-6">
                  Recognition for outstanding student achievement and contributions to the AUP community.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Academic Excellence Awards</li>
                  <li>• Leadership Awards</li>
                  <li>• Community Service Awards</li>
                  <li>• Student Organization Awards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
