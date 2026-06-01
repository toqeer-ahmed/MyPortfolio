export const portfolioData = {
  name: 'Toqeer Ahmed',
  title: 'Machine Learning Engineer',
  tagline:
    'Building intelligent systems that transform ideas into real-world impact.',
  location: 'Pakistan',
  email: 'toqeer@example.com',
  phone: '+92-300-XXXXXXX',
  description:
    'A passionate Software Engineering student at GIKI, deeply committed to building transformative AI solutions. Specialized in machine learning, deep learning, and scalable software systems. Proven track record of shipping production AI applications and leading technical initiatives.',
}

export const skills = {
  programming: [
    'Python',
    'JavaScript',
    'TypeScript',
    'Java',
    'C++',
    'C',
    'SQL',
    'NoSQL',
  ],
  aiml: [
    'TensorFlow',
    'PyTorch',
    'Scikit-Learn',
    'OpenCV',
    'NLP',
    'CNNs',
    'Transfer Learning',
    'Deep Learning',
    'Model Optimization',
  ],
  backend: ['Node.js', 'Express.js', 'Flask', 'Django', 'REST APIs', 'Spring Boot'],
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  tools: ['Git', 'Linux', 'Jupyter', 'Google Colab', 'Docker', 'Jira', 'OCR'],
  platforms: ['Vercel', 'Railway', 'AWS', 'GCP', 'Heroku'],
}

export const projects = [
  {
    id: 1,
    title: 'Explainable Multimodal Medical Diagnosis System',
    description:
      'Advanced AI system for medical diagnosis combining computer vision and NLP with explainability features',
    shortDescription: 'CNN + BERT architecture for X-ray analysis',
    technologies: ['Python', 'TensorFlow', 'BERT', 'OpenCV', 'Grad-CAM'],
    features: [
      'Chest X-ray analysis using CNN',
      'Clinical text processing with BERT',
      'Explainability using Grad-CAM',
      'ROC-AUC evaluation metrics',
    ],
    metrics: {
      accuracy: '94.2%',
      precision: '92.8%',
      datasets: '10k+ images',
    },
    link: '#',
    github: '#',
    image: '/projects/medical-diagnosis.jpg',
    category: 'AI/ML',
  },
  {
    id: 2,
    title: 'Looks Maximizer',
    description:
      'Production-ready AI application for intelligent image processing and analysis deployed on Vercel',
    shortDescription: 'ONNX Runtime deployment with sub-3s inference',
    technologies: ['Python', 'ONNX', 'FastAPI', 'React', 'Vercel', 'Railway'],
    features: [
      'Multi-model inference pipeline',
      'ONNX Runtime optimization',
      'Sub-3 second inference time',
      'Production deployment',
    ],
    metrics: {
      inferenceTime: '<3s',
      uptime: '99.9%',
      users: '5k+',
    },
    link: 'https://looks-maximizer.com',
    github: '#',
    image: '/projects/looks-maximizer.jpg',
    category: 'Full Stack',
  },
  {
    id: 3,
    title: 'Intelligent Resume & Career Advisor',
    description:
      'AI-powered platform for resume optimization and career guidance using advanced NLP techniques',
    shortDescription: 'BERT + SBERT + TF-IDF for skill matching',
    technologies: ['Python', 'BERT', 'SBERT', 'TF-IDF', 'Flask', 'React'],
    features: [
      'Resume parsing and analysis',
      'Skill-gap identification',
      'Career recommendations',
      'Similarity matching',
    ],
    metrics: {
      accuracy: '96.5%',
      resumes: '50k+',
      matches: '100k+',
    },
    link: '#',
    github: '#',
    image: '/projects/career-advisor.jpg',
    category: 'NLP',
  },
  {
    id: 4,
    title: 'MindMate',
    description:
      'Comprehensive mental health and emotion recognition platform with real-time analysis',
    shortDescription: 'Spring Boot + React + CNN emotion recognition',
    technologies: ['Spring Boot', 'React', 'CNN', 'PostgreSQL', 'JWT'],
    features: [
      'Real-time emotion recognition',
      'JWT authentication',
      'Secure data storage',
      'Design patterns implementation',
    ],
    metrics: {
      users: '10k+',
      accuracy: '91.3%',
      sessions: '50k+',
    },
    link: '#',
    github: '#',
    image: '/projects/mindmate.jpg',
    category: 'Full Stack',
  },
  {
    id: 5,
    title: 'E-Commerce Store',
    description: 'Full-stack e-commerce platform with payment integration and analytics',
    shortDescription: 'Node.js + Express + PostgreSQL deployment',
    technologies: ['Node.js', 'Express', 'React', 'PostgreSQL', 'Stripe'],
    features: [
      'Product catalog management',
      'Shopping cart functionality',
      'Payment integration',
      'Order tracking',
    ],
    metrics: {
      products: '1000+',
      transactions: '50k+',
      revenue: 'Growing',
    },
    link: '#',
    github: '#',
    image: '/projects/ecommerce.jpg',
    category: 'Full Stack',
  },
]

export const experience = [
  {
    id: 1,
    title: 'ACM Society Management Head',
    organization: 'GIKI',
    period: '2023 - Present',
    description: 'Leading and organizing technical events, workshops, and competitions',
    achievements: [
      'Organized 15+ technical workshops',
      'Mentored 50+ students',
      'Coordinated annual programming contest',
    ],
  },
  {
    id: 2,
    title: 'SOPHEP Sponsorship & Liaison Head',
    organization: 'GIKI',
    period: '2023 - Present',
    description: 'Secured sponsorships and managed partnerships',
    achievements: [
      'Secured 1M+ PKR in sponsorships',
      'Established 10+ corporate partnerships',
      'Managed event logistics',
    ],
  },
  {
    id: 3,
    title: 'Mission Smile Co-Founder',
    organization: 'Social Entrepreneurship',
    period: '2022 - Present',
    description: 'Co-founded social initiative focused on community development',
    achievements: [
      'Reached 1000+ community members',
      'Organized 20+ community events',
      'Developed educational programs',
    ],
  },
  {
    id: 4,
    title: 'ICPC Participant',
    organization: 'International Programming Competition',
    period: '2022 - 2023',
    description: 'Competed in ACM ICPC programming competition',
    achievements: [
      'Advanced to regional finals',
      'Solved 50+ algorithmic problems',
      'Ranked top 10% nationally',
    ],
  },
  {
    id: 5,
    title: 'C++ Workshop Mentor',
    organization: 'GIKI',
    period: '2023 - Present',
    description: 'Mentored junior students in C++ programming',
    achievements: [
      'Trained 100+ students',
      'Created comprehensive curriculum',
      'Organized practice sessions',
    ],
  },
]

export const education = {
  university: 'Ghulam Ishaq Khan Institute (GIKI)',
  degree: 'BS Software Engineering',
  year: '2022 - 2026',
  gpa: '3.8/4.0',
  coursework: [
    'Artificial Intelligence',
    'Deep Learning',
    'Data Structures',
    'Algorithms',
    'Software Engineering',
    'Databases',
    'Operating Systems',
    'Web Engineering',
    'Computer Networks',
    'Machine Learning',
  ],
}

export const certifications = [
  {
    id: 1,
    title: 'Machine Learning Specialization',
    issuer: 'Stanford Online (Coursera)',
    date: '2023',
    link: '#',
    skills: ['Machine Learning', 'Supervised Learning', 'Neural Networks'],
  },
  {
    id: 2,
    title: 'Deep Neural Networks Specialization',
    issuer: 'DeepLearning.AI (Coursera)',
    date: '2023',
    link: '#',
    skills: ['Deep Learning', 'CNNs', 'RNNs', 'Sequence Models'],
  },
]

export const achievements = [
  {
    id: 1,
    title: 'ICPC National Programming Contest',
    description: 'Advanced to national finals in ACM ICPC competition',
    date: '2023',
    category: 'Competition',
    icon: '🏆',
  },
  {
    id: 2,
    title: 'Best Project Award',
    description: 'Won best AI project award in university competition',
    date: '2023',
    category: 'Award',
    icon: '🥇',
  },
  {
    id: 3,
    title: 'Project Commercialization',
    description: 'Successfully commercialized Looks Maximizer platform',
    date: '2023',
    category: 'Entrepreneurship',
    icon: '💼',
  },
  {
    id: 4,
    title: 'Technical Leadership',
    description: 'Led multiple technical teams and organized events',
    date: '2023',
    category: 'Leadership',
    icon: '👥',
  },
]

export const socialLinks = [
  { label: 'GitHub', url: 'https://github.com', icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { label: 'Email', url: 'mailto:toqeer@example.com', icon: 'mail' },
]

export const statistics = {
  projects: 15,
  technologies: 20,
  leadership: 5,
  competitions: 8,
}
