// Alumni testimonials and success stories
const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Senior Product Manager',
    company: 'Microsoft India',
    batch: 'MBA 2022',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    quote: 'SSB\'s industry-focused curriculum and the peaceful environment of Puttaparthi helped me develop both technical skills and inner strength for leadership roles. The faculty\'s mentorship and real-world projects prepared me for the challenges in the tech industry.',
    achievement: '40% salary hike',
    growth: '+40%',
    currentPackage: '₹28L',
    previousRole: 'Associate Product Manager at Flipkart',
    keySkills: ['Product Strategy', 'Data Analytics', 'Team Leadership'],
    linkedIn: 'https://linkedin.com/in/priya-sharma-ssb',
    industry: 'Technology'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    company: 'TechStart Solutions',
    batch: 'PGDM 2021',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    quote: 'The entrepreneurship focus at SSB and the spiritual atmosphere of Puttaparthi gave me the confidence to start my own venture and scale it successfully. The alumni network has been instrumental in my startup journey.',
    achievement: '₹50Cr valuation',
    growth: '₹50Cr',
    currentPackage: 'Founder equity',
    previousRole: 'Senior Consultant at Deloitte',
    keySkills: ['Entrepreneurship', 'Business Strategy', 'Team Building'],
    linkedIn: 'https://linkedin.com/in/rajesh-kumar-ssb',
    industry: 'Technology/Startup'
  },
  {
    id: 3,
    name: 'Anitha Reddy',
    role: 'Vice President - Finance',
    company: 'HDFC Bank',
    batch: 'MBA 2020',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    quote: 'The values-based education at SSB shaped not just my career but my character. Puttaparthi teaches you humility along with ambition for sustainable success. The finance specialization gave me a strong foundation.',
    achievement: 'Youngest VP',
    growth: 'VP Level',
    currentPackage: '₹45L',
    previousRole: 'Assistant Vice President',
    keySkills: ['Financial Planning', 'Risk Management', 'Strategic Leadership'],
    linkedIn: 'https://linkedin.com/in/anitha-reddy-ssb',
    industry: 'Banking & Finance'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'Director - Operations',
    company: 'Amazon India',
    batch: 'PGDM 2019',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    quote: 'SSB\'s focus on operations management and supply chain gave me the practical knowledge I needed to excel at Amazon. The collaborative learning environment and industry projects made all the difference.',
    achievement: 'Director role at 28',
    growth: '3x Growth',
    currentPackage: '₹52L',
    previousRole: 'Operations Manager at Flipkart',
    keySkills: ['Supply Chain', 'Operations Strategy', 'Process Optimization'],
    linkedIn: 'https://linkedin.com/in/vikram-singh-ssb',
    industry: 'E-commerce/Logistics'
  },
  {
    id: 5,
    name: 'Kavya Menon',
    role: 'Head of Marketing',
    company: 'Swiggy',
    batch: 'MBA 2021',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
    quote: 'The marketing specialization at SSB combined with the spiritual learning in Puttaparthi taught me authentic brand building. My professors were industry veterans who shared real insights beyond textbooks.',
    achievement: 'Head of Marketing',
    growth: '2.5x Role',
    currentPackage: '₹38L',
    previousRole: 'Senior Marketing Manager at Zomato',
    keySkills: ['Digital Marketing', 'Brand Strategy', 'Customer Acquisition'],
    linkedIn: 'https://linkedin.com/in/kavya-menon-ssb',
    industry: 'Food Tech'
  },
  {
    id: 6,
    name: 'Arjun Patel',
    role: 'Senior Consultant',
    company: 'McKinsey & Company',
    batch: 'MBA 2020',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    quote: 'SSB\'s case-study approach and the analytical thinking developed through the program prepared me perfectly for consulting. The diversity of the batch and faculty insights were invaluable.',
    achievement: 'McKinsey Consultant',
    growth: 'Top Tier',
    currentPackage: '₹48L',
    previousRole: 'Business Analyst at Bain',
    keySkills: ['Strategy Consulting', 'Problem Solving', 'Client Management'],
    linkedIn: 'https://linkedin.com/in/arjun-patel-ssb',
    industry: 'Consulting'
  }
];

// Statistics about alumni success
export const alumniStats = {
  totalAlumni: 2000,
  averagePackageIncrease: '65%',
  averagePackage: '₹14.2L',
  highestPackage: '₹52L',
  entrepreneursCreated: 45,
  companiesStarted: 32,
  totalFunding: '₹200Cr+',
  topCompanies: [
    'Microsoft', 'Amazon', 'Google', 'McKinsey', 'Deloitte', 
    'HDFC Bank', 'ICICI Bank', 'TCS', 'Infosys', 'Flipkart'
  ],
  industriesRepresented: [
    'Technology', 'Banking & Finance', 'Consulting', 'E-commerce',
    'Healthcare', 'Manufacturing', 'Retail', 'Education'
  ],
  geographicReach: {
    india: '85%',
    international: '15%',
    topCities: ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Chennai', 'Pune']
  }
};

// Industry-wise breakdown
export const industryBreakdown = {
  technology: {
    percentage: 35,
    averagePackage: '₹22L',
    topRoles: ['Product Manager', 'Software Engineer', 'Data Scientist', 'Tech Lead'],
    companies: ['Microsoft', 'Amazon', 'Google', 'Apple', 'Adobe']
  },
  consulting: {
    percentage: 20,
    averagePackage: '₹25L',
    topRoles: ['Consultant', 'Business Analyst', 'Manager', 'Principal'],
    companies: ['McKinsey', 'BCG', 'Bain', 'Deloitte', 'PwC']
  },
  banking: {
    percentage: 25,
    averagePackage: '₹18L',
    topRoles: ['Relationship Manager', 'Credit Analyst', 'Investment Banker', 'VP'],
    companies: ['HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra', 'Yes Bank']
  },
  entrepreneurship: {
    percentage: 8,
    averageValuation: '₹15Cr',
    topSectors: ['FinTech', 'EdTech', 'HealthTech', 'E-commerce'],
    fundingReceived: '₹200Cr+'
  },
  others: {
    percentage: 12,
    averagePackage: '₹15L',
    sectors: ['Manufacturing', 'Retail', 'Healthcare', 'Government']
  }
};

// Success milestones
export const successMilestones = [
  {
    year: '2019',
    milestone: 'First alumni reaches C-Suite position',
    name: 'Suresh Reddy (MBA 2015)',
    company: 'Tech Mahindra',
    role: 'Chief Strategy Officer'
  },
  {
    year: '2020',
    milestone: 'First unicorn startup founded',
    name: 'Rahul Sharma (PGDM 2017)',
    company: 'FinFlow Solutions',
    valuation: '₹1000Cr+'
  },
  {
    year: '2021',
    milestone: 'Highest package placement',
    name: 'Preethi Nair (MBA 2021)',
    company: 'Google',
    package: '₹52L'
  },
  {
    year: '2022',
    milestone: '100% placement record achieved',
    batch: 'MBA & PGDM 2022',
    companies: '150+ companies',
    averagePackage: '₹14.2L'
  },
  {
    year: '2023',
    milestone: 'Alumni network crosses 2000',
    globalReach: '15 countries',
    topPositions: 'VP level and above: 150+'
  },
  {
    year: '2024',
    milestone: 'Record entrepreneurship rate',
    startups: '32 companies founded',
    totalFunding: '₹200Cr+',
    sectors: 'FinTech, EdTech, HealthTech'
  }
];

// Notable achievements by batch
export const batchAchievements = {
  '2015': {
    notableAlumni: 5,
    averageExperience: '9 years',
    topAchievement: 'First C-Suite executive',
    industries: ['Technology', 'Banking', 'Consulting']
  },
  '2016': {
    notableAlumni: 8,
    averageExperience: '8 years',
    topAchievement: 'Multiple VP-level positions',
    industries: ['Technology', 'E-commerce', 'Banking']
  },
  '2017': {
    notableAlumni: 12,
    averageExperience: '7 years',
    topAchievement: 'First unicorn startup',
    industries: ['FinTech', 'Technology', 'Consulting']
  },
  '2018': {
    notableAlumni: 15,
    averageExperience: '6 years',
    topAchievement: 'Highest entrepreneurship rate',
    industries: ['Technology', 'E-commerce', 'Healthcare']
  },
  '2019': {
    notableAlumni: 18,
    averageExperience: '5 years',
    topAchievement: 'Record international placements',
    industries: ['Technology', 'Consulting', 'Banking']
  },
  '2020': {
    notableAlumni: 22,
    averageExperience: '4 years',
    topAchievement: 'Youngest VP at major bank',
    industries: ['Banking', 'Technology', 'Consulting']
  },
  '2021': {
    notableAlumni: 25,
    averageExperience: '3 years',
    topAchievement: 'Highest package ever',
    industries: ['Technology', 'Consulting', 'E-commerce']
  },
  '2022': {
    notableAlumni: 28,
    averageExperience: '2 years',
    topAchievement: '100% placement record',
    industries: ['Technology', 'Banking', 'Consulting']
  }
};

// Testimonial categories
export const testimonialCategories = [
  {
    name: 'Technology Leaders',
    icon: '💻',
    color: 'from-blue-500 to-blue-600',
    testimonials: testimonials.filter(t => t.industry.includes('Technology'))
  },
  {
    name: 'Banking & Finance',
    icon: '🏦',
    color: 'from-green-500 to-green-600',
    testimonials: testimonials.filter(t => t.industry.includes('Banking'))
  },
  {
    name: 'Entrepreneurs',
    icon: '🚀',
    color: 'from-purple-500 to-purple-600',
    testimonials: testimonials.filter(t => t.role.includes('Founder') || t.industry.includes('Startup'))
  },
  {
    name: 'Consultants',
    icon: '📊',
    color: 'from-orange-500 to-orange-600',
    testimonials: testimonials.filter(t => t.industry.includes('Consulting'))
  }
];

// Quick testimonial highlights for homepage
export const quickTestimonials = [
  {
    name: 'Priya Sharma',
    role: 'Senior Product Manager, Microsoft',
    quote: 'SSB transformed my career trajectory completely.',
    achievement: '40% salary hike',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO, TechStart',
    quote: 'The entrepreneurship spirit at SSB is unmatched.',
    achievement: '₹50Cr valuation',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Anitha Reddy',
    role: 'VP Finance, HDFC Bank',
    quote: 'Values-based education shaped my leadership style.',
    achievement: 'Youngest VP',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face'
  }
];

export default testimonials;