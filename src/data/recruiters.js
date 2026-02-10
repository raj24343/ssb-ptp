// Company logos for logo cloud
const recruiters = [
  // Technology Giants
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png',
  
  // Indian IT Services
  'https://upload.wikimedia.org/wikipedia/commons/1/19/Infosys_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_Tata.png',
  'https://upload.wikimedia.org/wikipedia/commons/0/0c/Wipro_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/9e/HCL_Technologies_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/7/7e/Tech_Mahindra_New_Logo.svg',
  
  // Consulting Firms
  'https://upload.wikimedia.org/wikipedia/commons/5/5d/Accenture.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/01/Deloitte_Logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/8/8e/PwC_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/3c/EY_logo_2019.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a0/KPMG_logo.svg',
  
  // Financial Services
  'https://upload.wikimedia.org/wikipedia/commons/0/0e/HDFC_Bank_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/1/1c/ICICI_Bank_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/c/c7/Axis_Bank_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/e/e8/Kotak_Mahindra_Bank_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/6c/Yes_Bank_SVG_Logo.svg'
];

// Detailed recruiter information
export const recruiterDetails = [
  // Technology Companies
  {
    id: 1,
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    sector: 'Technology',
    type: 'MNC',
    founded: 1998,
    headquarters: 'Mountain View, CA',
    employees: '156,000+',
    description: 'Global technology leader in search, advertising, and cloud computing',
    rolesOffered: ['Product Manager', 'Business Analyst', 'Marketing Manager', 'Operations Manager'],
    packages: {
      min: 18,
      max: 45,
      average: 28
    },
    visitFrequency: 'Annual',
    lastVisit: '2024',
    hiredStudents: 12,
    website: 'https://google.com'
  },
  {
    id: 2,
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    sector: 'Technology',
    type: 'MNC',
    founded: 1975,
    headquarters: 'Redmond, WA',
    employees: '221,000+',
    description: 'Leading software and cloud services company',
    rolesOffered: ['Program Manager', 'Business Development', 'Sales Manager', 'Consultant'],
    packages: {
      min: 16,
      max: 40,
      average: 25
    },
    visitFrequency: 'Annual',
    lastVisit: '2024',
    hiredStudents: 15,
    website: 'https://microsoft.com'
  },
  {
    id: 3,
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    sector: 'E-commerce/Cloud',
    type: 'MNC',
    founded: 1994,
    headquarters: 'Seattle, WA',
    employees: '1,600,000+',
    description: 'World\'s largest e-commerce and cloud computing company',
    rolesOffered: ['Area Manager', 'Business Analyst', 'Product Manager', 'Operations Manager'],
    packages: {
      min: 14,
      max: 35,
      average: 22
    },
    visitFrequency: 'Bi-annual',
    lastVisit: '2024',
    hiredStudents: 20,
    website: 'https://amazon.com'
  },

  // Indian IT Giants
  {
    id: 4,
    name: 'Tata Consultancy Services',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_Tata.png',
    sector: 'IT Services',
    type: 'Indian MNC',
    founded: 1968,
    headquarters: 'Mumbai, India',
    employees: '615,000+',
    description: 'India\'s largest IT services and consulting company',
    rolesOffered: ['Management Trainee', 'Business Analyst', 'Project Manager', 'Consultant'],
    packages: {
      min: 6,
      max: 18,
      average: 8.5
    },
    visitFrequency: 'Annual',
    lastVisit: '2024',
    hiredStudents: 35,
    website: 'https://tcs.com'
  },
  {
    id: 5,
    name: 'Infosys',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Infosys_logo.svg',
    sector: 'IT Services',
    type: 'Indian MNC',
    founded: 1981,
    headquarters: 'Bangalore, India',
    employees: '336,000+',
    description: 'Global leader in next-generation digital services and consulting',
    rolesOffered: ['Systems Engineer', 'Business Analyst', 'Consultant', 'Project Lead'],
    packages: {
      min: 5.5,
      max: 16,
      average: 7.8
    },
    visitFrequency: 'Annual',
    lastVisit: '2024',
    hiredStudents: 42,
    website: 'https://infosys.com'
  },

  // Consulting Firms
  {
    id: 6,
    name: 'Deloitte',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Deloitte_Logo.png',
    sector: 'Consulting',
    type: 'MNC',
    founded: 1845,
    headquarters: 'London, UK',
    employees: '415,000+',
    description: 'Global professional services network providing audit, consulting, and advisory services',
    rolesOffered: ['Business Analyst', 'Consultant', 'Manager', 'Senior Consultant'],
    packages: {
      min: 12,
      max: 28,
      average: 18
    },
    visitFrequency: 'Annual',
    lastVisit: '2024',
    hiredStudents: 8,
    website: 'https://deloitte.com'
  },
  {
    id: 7,
    name: 'Accenture',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Accenture.svg',
    sector: 'Consulting',
    type: 'MNC',
    founded: 1989,
    headquarters: 'Dublin, Ireland',
    employees: '738,000+',
    description: 'Global professional services company with leading capabilities in digital, cloud and security',
    rolesOffered: ['Business Analyst', 'Technology Consultant', 'Strategy Consultant', 'Manager'],
    packages: {
      min: 10,
      max: 25,
      average: 15
    },
    visitFrequency: 'Annual',
    lastVisit: '2024',
    hiredStudents: 18,
    website: 'https://accenture.com'
  },

  // Banking & Financial Services
  {
    id: 8,
    name: 'HDFC Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/HDFC_Bank_Logo.svg',
    sector: 'Banking',
    type: 'Indian',
    founded: 1994,
    headquarters: 'Mumbai, India',
    employees: '177,000+',
    description: 'India\'s largest private sector bank by assets',
    rolesOffered: ['Management Trainee', 'Relationship Manager', 'Credit Analyst', 'Branch Manager'],
    packages: {
      min: 7,
      max: 20,
      average: 11
    },
    visitFrequency: 'Annual',
    lastVisit: '2024',
    hiredStudents: 25,
    website: 'https://hdfcbank.com'
  },
  {
    id: 9,
    name: 'ICICI Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/ICICI_Bank_Logo.svg',
    sector: 'Banking',
    type: 'Indian',
    founded: 1994,
    headquarters: 'Mumbai, India',
    employees: '121,000+',
    description: 'Leading private sector bank offering comprehensive financial services',
    rolesOffered: ['Probationary Officer', 'Relationship Manager', 'Business Analyst', 'Credit Manager'],
    packages: {
      min: 6.5,
      max: 18,
      average: 10.5
    },
    visitFrequency: 'Annual',
    lastVisit: '2024',
    hiredStudents: 22,
    website: 'https://icicibank.com'
  },

  // E-commerce & Startups
  {
    id: 10,
    name: 'Flipkart',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png',
    sector: 'E-commerce',
    type: 'Indian',
    founded: 2007,
    headquarters: 'Bangalore, India',
    employees: '50,000+',
    description: 'India\'s leading e-commerce marketplace',
    rolesOffered: ['Product Manager', 'Business Analyst', 'Category Manager', 'Operations Manager'],
    packages: {
      min: 12,
      max: 32,
      average: 18
    },
    visitFrequency: 'Annual',
    lastVisit: '2024',
    hiredStudents: 14,
    website: 'https://flipkart.com'
  }
];

// Recruitment statistics
export const recruitmentStats = {
  totalCompanies: recruiterDetails.length,
  averagePackage: 14.2,
  highestPackage: 45,
  placementRate: 95.5,
  sectors: [
    { name: 'Technology', percentage: 35, count: 45 },
    { name: 'Consulting', percentage: 20, count: 28 },
    { name: 'Banking & Finance', percentage: 25, count: 35 },
    { name: 'E-commerce', percentage: 12, count: 16 },
    { name: 'Manufacturing', percentage: 8, count: 11 }
  ],
  topPackages: [
    { company: 'Google', package: 45, role: 'Product Manager' },
    { company: 'Microsoft', package: 40, role: 'Program Manager' },
    { company: 'Amazon', package: 35, role: 'Product Manager' },
    { company: 'Flipkart', package: 32, role: 'Senior Product Manager' },
    { company: 'Deloitte', package: 28, role: 'Senior Consultant' }
  ]
};

// Sector-wise breakdown
export const sectorBreakdown = {
  technology: {
    companies: recruiterDetails.filter(c => c.sector.includes('Technology')),
    avgPackage: 24.5,
    topRoles: ['Product Manager', 'Business Analyst', 'Program Manager', 'Operations Manager']
  },
  consulting: {
    companies: recruiterDetails.filter(c => c.sector === 'Consulting'),
    avgPackage: 16.5,
    topRoles: ['Business Analyst', 'Consultant', 'Manager', 'Senior Consultant']
  },
  banking: {
    companies: recruiterDetails.filter(c => c.sector === 'Banking'),
    avgPackage: 10.8,
    topRoles: ['Management Trainee', 'Relationship Manager', 'Credit Analyst', 'Branch Manager']
  },
  itServices: {
    companies: recruiterDetails.filter(c => c.sector === 'IT Services'),
    avgPackage: 8.2,
    topRoles: ['Management Trainee', 'Business Analyst', 'Project Manager', 'Consultant']
  }
};

// Placement process timeline
export const placementProcess = [
  {
    phase: 'Pre-placement',
    duration: 'July - August',
    activities: [
      'Resume building workshops',
      'Mock interviews and group discussions',
      'Aptitude test preparation',
      'Soft skills training'
    ]
  },
  {
    phase: 'Company Registration',
    duration: 'September - October',
    activities: [
      'Company pre-placement talks',
      'Job description sharing',
      'Student registration for companies',
      'Eligibility criteria confirmation'
    ]
  },
  {
    phase: 'Campus Recruitment',
    duration: 'November - February',
    activities: [
      'Written tests and online assessments',
      'Technical and HR interviews',
      'Group discussions and case studies',
      'Final selection and offer letters'
    ]
  },
  {
    phase: 'Post-placement',
    duration: 'March - May',
    activities: [
      'Additional placement drives',
      'Internship to full-time conversions',
      'Alumni network leveraging',
      'Career guidance and counseling'
    ]
  }
];

export default recruiters;