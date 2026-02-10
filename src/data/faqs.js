const faqs = [
  // Admissions & Programs
  {
    id: 1,
    category: 'Admissions',
    question: 'What programs does SSB offer?',
    answer: 'SSB offers two flagship programs: MBA (Master of Business Administration) and PGDM (Post Graduate Diploma in Management). Both are 2-year full-time programs with multiple specializations including Finance, Marketing, HR, Operations, Business Analytics, and Entrepreneurship.'
  },
  {
    id: 2,
    category: 'Admissions',
    question: 'What are the eligibility criteria for admission?',
    answer: 'Candidates must have a Bachelor\'s degree in any discipline from a recognized university with minimum 50% marks (45% for SC/ST candidates). Final year students can also apply. There is no age limit for admission.'
  },
  {
    id: 3,
    category: 'Admissions',
    question: 'What is the admission process?',
    answer: 'The admission process consists of: 1) Online application submission, 2) Entrance test (aptitude covering quantitative, verbal, and logical reasoning), 3) Personal interview with panel of experts, 4) Final selection based on overall performance. The entire process takes about 3-4 weeks.'
  },
  {
    id: 4,
    category: 'Admissions',
    question: 'Do you accept CAT/MAT/XAT scores?',
    answer: 'Yes, we accept CAT, MAT, XAT, CMAT, and ATMA scores. Candidates can also appear for our institute-specific entrance test if they haven\'t taken any of these national level tests.'
  },
  {
    id: 5,
    category: 'Admissions',
    question: 'What are the application deadlines?',
    answer: 'Applications typically open in November and close in May for the July intake. Early applications are encouraged as we follow a rolling admission process. Final deadline is usually end of May, but seats may fill up earlier.'
  },

  // Fees & Financial Aid
  {
    id: 6,
    category: 'Fees',
    question: 'What is the fee structure?',
    answer: 'MBA: ₹4.5 lakhs total (₹2.25 lakhs per year), PGDM: ₹5.2 lakhs total (₹2.6 lakhs per year). This includes tuition, library, lab, and exam fees. Additional costs for hostel, mess, and personal expenses are separate.'
  },
  {
    id: 7,
    category: 'Fees',
    question: 'Are scholarships available?',
    answer: 'Yes, we offer multiple scholarship programs: Merit scholarships for top 10% students (up to 50% fee waiver), Need-based scholarships for economically disadvantaged students, Alumni-sponsored scholarships, and Special scholarships for women and differently-abled candidates.'
  },
  {
    id: 8,
    category: 'Fees',
    question: 'Can I pay fees in installments?',
    answer: 'Yes, fees can be paid in installments. Typically, 50% at the time of admission and remaining 50% at the beginning of each semester. We also have tie-ups with banks for education loans at attractive interest rates.'
  },

  // Campus & Facilities
  {
    id: 9,
    category: 'Campus',
    question: 'Where is the campus located?',
    answer: 'Our campus is located in Puttaparthi, Anantapur District, Andhra Pradesh. Puttaparthi is well-connected by road and rail, approximately 3 hours from Bangalore and 4 hours from Hyderabad.'
  },
  {
    id: 10,
    category: 'Campus',
    question: 'Is hostel accommodation available?',
    answer: 'Yes, we provide separate hostel facilities for men and women with 24/7 security, Wi-Fi connectivity, mess facilities, recreational areas, and study rooms. Hostel fees are approximately ₹80,000 per year including accommodation and meals.'
  },
  {
    id: 11,
    category: 'Campus',
    question: 'What facilities are available on campus?',
    answer: 'Our campus features: Modern classrooms with AV equipment, Digital library with 50,000+ books and online resources, Computer labs with latest software, Gymnasium and sports facilities, Cafeteria and mess, Medical facility, Wi-Fi enabled campus, Conference halls, and Recreation center.'
  },
  {
    id: 12,
    category: 'Campus',
    question: 'Is the campus Wi-Fi enabled?',
    answer: 'Yes, our entire campus including hostels, classrooms, library, and common areas have high-speed Wi-Fi connectivity. Students get individual login credentials with unlimited data access for academic purposes.'
  },

  // Placements & Career
  {
    id: 13,
    category: 'Placements',
    question: 'What is the placement record?',
    answer: 'We maintain an excellent placement record with 95%+ placement rate consistently over the past 5 years. Our students are placed in top companies like Google, Microsoft, Amazon, TCS, Infosys, Deloitte, HDFC Bank, and many more.'
  },
  {
    id: 14,
    category: 'Placements',
    question: 'What are the average and highest packages?',
    answer: 'For 2023-24 batch: Highest package: ₹45 LPA (Google), Average package: ₹14.2 LPA, Median package: ₹10.5 LPA. Packages vary by specialization, with Analytics and Technology roles generally commanding higher salaries.'
  },
  {
    id: 15,
    category: 'Placements',
    question: 'Which companies visit for recruitment?',
    answer: 'Top recruiters include: Technology: Google, Microsoft, Amazon, IBM; Consulting: Deloitte, Accenture, PwC, EY; Banking: HDFC, ICICI, Axis Bank; IT Services: TCS, Infosys, Wipro; E-commerce: Flipkart, Paytm, Swiggy. Over 200+ companies visit annually.'
  },
  {
    id: 16,
    category: 'Placements',
    question: 'What support is provided for placements?',
    answer: 'Our Placement Cell provides: Resume building workshops, Mock interviews and GD practice, Aptitude and technical training, Soft skills development, Career counseling, Alumni mentorship program, Industry interaction sessions, and Internship opportunities.'
  },

  // Academic & Curriculum
  {
    id: 17,
    category: 'Academic',
    question: 'What is the curriculum structure?',
    answer: 'The curriculum is divided into 4 trimesters. First year covers core subjects like Finance, Marketing, Operations, HR, and Analytics. Second year focuses on specialization subjects, electives, live projects, and dissertation. The curriculum is regularly updated based on industry feedback.'
  },
  {
    id: 18,
    category: 'Academic',
    question: 'Are there international exposure opportunities?',
    answer: 'Yes, we offer: Student exchange programs with partner universities abroad, International study tours to countries like Singapore, UAE, International internship opportunities, Global case study competitions, and Guest lectures by international faculty.'
  },
  {
    id: 19,
    category: 'Academic',
    question: 'What is the faculty-student ratio?',
    answer: 'We maintain an excellent faculty-student ratio of 1:15, ensuring personalized attention and mentoring. Our faculty comprises experienced academicians and industry professionals with Ph.D. and extensive industry experience.'
  },
  {
    id: 20,
    category: 'Academic',
    question: 'Are there research opportunities?',
    answer: 'Yes, students can participate in faculty research projects, present papers at conferences, publish in journals, and work on industry-sponsored research. We also encourage dissertation projects addressing real business problems.'
  },

  // Student Life & Activities
  {
    id: 21,
    category: 'Student Life',
    question: 'What extracurricular activities are available?',
    answer: 'We have active student clubs including: Marketing Club, Finance Club, HR Club, Entrepreneurship Cell, Cultural Committee, Sports Committee, Social Service Club, and Technical Club. Regular events include annual fest, business competitions, cultural programs, and sports tournaments.'
  },
  {
    id: 22,
    category: 'Student Life',
    question: 'Is there an alumni network?',
    answer: 'Yes, we have a strong alumni network of 2000+ graduates working in top companies globally. The alumni association organizes regular meetups, mentoring sessions, guest lectures, and job referrals. Alumni are actively involved in placement activities and curriculum advisory.'
  },

  // Location & Transport
  {
    id: 23,
    category: 'Location',
    question: 'How do I reach Puttaparthi?',
    answer: 'Puttaparthi is accessible by: Air - Nearest airports are Bangalore (150 km) and Hyderabad (200 km); Train - Puttaparthi Railway Station is well connected; Road - Regular bus services from major cities. We provide pickup services from railway station during admission time.'
  },
  {
    id: 24,
    category: 'Location',
    question: 'What are the advantages of studying in Puttaparthi?',
    answer: 'Puttaparthi offers: Peaceful and spiritual environment for focused study, Very safe and secure location, Pollution-free atmosphere, Low cost of living, Rich cultural heritage, Proximity to tech hubs like Bangalore, and Strong value-based education tradition.'
  },

  // Specializations
  {
    id: 25,
    category: 'Specializations',
    question: 'What specializations are offered?',
    answer: 'MBA: Marketing, Finance, HR, Operations Management. PGDM: Business Analytics & Data Science, Entrepreneurship & Innovation, International Business, Digital Business & Technology. Students can also opt for dual specializations in PGDM program.'
  },
  {
    id: 26,
    category: 'Specializations',
    question: 'Can I change my specialization after first year?',
    answer: 'Yes, specialization selection happens at the end of first year based on academic performance and interest. Students get to interact with faculty and alumni from different specializations before making their choice.'
  }
];

// Category-wise organization
export const faqCategories = [
  {
    name: 'Admissions',
    icon: '📚',
    color: 'from-blue-500 to-blue-600',
    faqs: faqs.filter(faq => faq.category === 'Admissions')
  },
  {
    name: 'Fees & Financial Aid',
    icon: '💰',
    color: 'from-green-500 to-green-600',
    faqs: faqs.filter(faq => faq.category === 'Fees')
  },
  {
    name: 'Campus & Facilities',
    icon: '🏫',
    color: 'from-purple-500 to-purple-600',
    faqs: faqs.filter(faq => faq.category === 'Campus')
  },
  {
    name: 'Placements & Career',
    icon: '💼',
    color: 'from-orange-500 to-orange-600',
    faqs: faqs.filter(faq => faq.category === 'Placements')
  },
  {
    name: 'Academic & Curriculum',
    icon: '🎓',
    color: 'from-indigo-500 to-indigo-600',
    faqs: faqs.filter(faq => faq.category === 'Academic')
  },
  {
    name: 'Student Life',
    icon: '🎭',
    color: 'from-pink-500 to-pink-600',
    faqs: faqs.filter(faq => faq.category === 'Student Life')
  },
  {
    name: 'Location & Transport',
    icon: '📍',
    color: 'from-teal-500 to-teal-600',
    faqs: faqs.filter(faq => faq.category === 'Location')
  },
  {
    name: 'Specializations',
    icon: '🎯',
    color: 'from-red-500 to-red-600',
    faqs: faqs.filter(faq => faq.category === 'Specializations')
  }
];

// Quick access FAQs (most frequently asked)
export const quickFAQs = [
  faqs.find(faq => faq.id === 1), // What programs does SSB offer?
  faqs.find(faq => faq.id === 6), // What is the fee structure?
  faqs.find(faq => faq.id === 13), // What is the placement record?
  faqs.find(faq => faq.id === 9), // Where is the campus located?
  faqs.find(faq => faq.id === 3), // What is the admission process?
  faqs.find(faq => faq.id === 10) // Is hostel accommodation available?
];

export default faqs;