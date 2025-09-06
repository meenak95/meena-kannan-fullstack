export const skillsData = [
  // Programming Languages
  {
    id: 1,
    name: "Java",
    category: "programming",
    proficiency: 95,
    years_experience: 9,
    description: "Expert-level Java development with Spring ecosystem, microservices, and enterprise applications."
  },
  {
    id: 2,
    name: "JavaScript",
    category: "programming",
    proficiency: 90,
    years_experience: 8,
    description: "Advanced JavaScript development including ES6+, TypeScript, and modern frameworks."
  },
  {
    id: 3,
    name: "TypeScript",
    category: "programming",
    proficiency: 85,
    years_experience: 6,
    description: "Strong TypeScript skills for scalable frontend and backend development."
  },
  {
    id: 4,
    name: "Python",
    category: "programming",
    proficiency: 80,
    years_experience: 5,
    description: "Python for data analysis, automation, and backend development."
  },

  // Frontend Technologies
  {
    id: 5,
    name: "Angular",
    category: "frontend",
    proficiency: 92,
    years_experience: 7,
    description: "Expert Angular development with RxJS, state management, and performance optimization."
  },
  {
    id: 6,
    name: "React",
    category: "frontend",
    proficiency: 88,
    years_experience: 6,
    description: "Proficient in React with hooks, context, and modern development patterns."
  },
  {
    id: 7,
    name: "HTML5/CSS3",
    category: "frontend",
    proficiency: 95,
    years_experience: 9,
    description: "Expert in semantic HTML, responsive design, and modern CSS techniques."
  },
  {
    id: 8,
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: 90,
    years_experience: 4,
    description: "Advanced Tailwind CSS for rapid UI development and responsive design."
  },

  // Backend Technologies
  {
    id: 9,
    name: "Spring Boot",
    category: "backend",
    proficiency: 95,
    years_experience: 8,
    description: "Expert Spring Boot development with microservices, security, and cloud integration."
  },
  {
    id: 10,
    name: "Spring Security",
    category: "backend",
    proficiency: 88,
    years_experience: 7,
    description: "Advanced Spring Security implementation for authentication and authorization."
  },
  {
    id: 11,
    name: "REST APIs",
    category: "backend",
    proficiency: 95,
    years_experience: 9,
    description: "Design and development of scalable RESTful APIs and microservices."
  },
  {
    id: 12,
    name: "GraphQL",
    category: "backend",
    proficiency: 75,
    years_experience: 3,
    description: "GraphQL API development and schema design."
  },

  // Cloud Technologies
  {
    id: 13,
    name: "AWS",
    category: "cloud",
    proficiency: 85,
    years_experience: 6,
    description: "AWS services including EC2, S3, Lambda, RDS, and cloud architecture."
  },
  {
    id: 14,
    name: "Docker",
    category: "cloud",
    proficiency: 88,
    years_experience: 5,
    description: "Containerization with Docker and container orchestration."
  },
  {
    id: 15,
    name: "Kubernetes",
    category: "cloud",
    proficiency: 80,
    years_experience: 4,
    description: "Kubernetes orchestration and cloud-native application deployment."
  },
  {
    id: 16,
    name: "Azure",
    category: "cloud",
    proficiency: 75,
    years_experience: 3,
    description: "Microsoft Azure cloud services and solutions."
  },

  // Database Technologies
  {
    id: 17,
    name: "PostgreSQL",
    category: "database",
    proficiency: 90,
    years_experience: 8,
    description: "Advanced PostgreSQL database design, optimization, and administration."
  },
  {
    id: 18,
    name: "MySQL",
    category: "database",
    proficiency: 85,
    years_experience: 7,
    description: "MySQL database development and performance tuning."
  },
  {
    id: 19,
    name: "MongoDB",
    category: "database",
    proficiency: 80,
    years_experience: 5,
    description: "NoSQL database design and development with MongoDB."
  },
  {
    id: 20,
    name: "Redis",
    category: "database",
    proficiency: 85,
    years_experience: 6,
    description: "Redis caching and in-memory data structure store."
  },

  // DevOps Tools
  {
    id: 21,
    name: "Git",
    category: "devops",
    proficiency: 95,
    years_experience: 9,
    description: "Advanced Git version control and collaboration workflows."
  },
  {
    id: 22,
    name: "Jenkins",
    category: "devops",
    proficiency: 85,
    years_experience: 6,
    description: "CI/CD pipeline development and automation with Jenkins."
  },
  {
    id: 23,
    name: "Terraform",
    category: "devops",
    proficiency: 75,
    years_experience: 4,
    description: "Infrastructure as Code with Terraform for cloud provisioning."
  },
  {
    id: 24,
    name: "Linux",
    category: "devops",
    proficiency: 90,
    years_experience: 8,
    description: "Linux system administration and shell scripting."
  },

  // Testing Technologies
  {
    id: 25,
    name: "JUnit",
    category: "testing",
    proficiency: 90,
    years_experience: 8,
    description: "Unit testing and test-driven development with JUnit."
  },
  {
    id: 26,
    name: "Mockito",
    category: "testing",
    proficiency: 85,
    years_experience: 7,
    description: "Mocking framework for Java unit testing."
  },
  {
    id: 27,
    name: "Selenium",
    category: "testing",
    proficiency: 80,
    years_experience: 5,
    description: "Automated testing with Selenium WebDriver."
  },
  {
    id: 28,
    name: "Cypress",
    category: "testing",
    proficiency: 75,
    years_experience: 3,
    description: "End-to-end testing with Cypress framework."
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Government Digital Services Platform",
    company: "NCS Singapore",
    duration: "Dec 2021 - Present",
    category: "government",
    description: "Led the development of a comprehensive digital services platform for government agencies, serving over 2 million citizens. The platform handles citizen services, document management, and digital identity verification.",
    highlights: [
      "Architected microservices-based platform serving 2M+ citizens",
      "Implemented secure authentication and authorization systems",
      "Reduced processing time by 60% through automation",
      "Led a team of 8 developers across multiple workstreams",
      "Integrated with 15+ government systems and databases"
    ],
    technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "AWS", "Docker", "Kubernetes", "Redis", "Jenkins"]
  },
  {
    id: 2,
    title: "Financial Transaction Processing System",
    company: "NCS Singapore",
    duration: "Mar 2022 - Aug 2023",
    category: "fintech",
    description: "Developed a high-performance financial transaction processing system capable of handling 100,000+ transactions per minute with 99.99% uptime. The system processes payments, transfers, and financial data validation.",
    highlights: [
      "Built high-throughput system processing 100K+ transactions/minute",
      "Achieved 99.99% system uptime with fault-tolerant architecture",
      "Implemented real-time fraud detection and prevention",
      "Reduced transaction processing time by 40%",
      "Ensured PCI DSS compliance and security standards"
    ],
    technologies: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes", "JUnit"]
  },
  {
    id: 3,
    title: "AI-Powered Document Processing",
    company: "BlackStraw.AI",
    duration: "May 2021 - Nov 2021",
    category: "ai",
    description: "Developed an AI-powered document processing system that automatically extracts, classifies, and processes various document types using machine learning algorithms and natural language processing.",
    highlights: [
      "Implemented ML models for document classification and data extraction",
      "Achieved 95% accuracy in document processing",
      "Reduced manual processing time by 80%",
      "Integrated with multiple document management systems",
      "Built scalable processing pipeline for large document volumes"
    ],
    technologies: ["Python", "TensorFlow", "FastAPI", "MongoDB", "Docker", "AWS", "Apache Airflow", "Celery"]
  },
  {
    id: 4,
    title: "Real Estate Management System",
    company: "HDB (via AllTech Systems)",
    duration: "Aug 2019 - Dec 2020",
    category: "real-estate",
    description: "Developed a comprehensive real estate management system for public housing in Singapore, managing property listings, tenant applications, maintenance requests, and financial transactions.",
    highlights: [
      "Built end-to-end property management solution for 1M+ housing units",
      "Implemented automated tenant application processing",
      "Integrated with government databases and payment systems",
      "Reduced application processing time by 50%",
      "Ensured data security and privacy compliance"
    ],
    technologies: ["Java", "Spring Boot", "Angular", "Oracle Database", "AWS", "Docker", "Jenkins", "JUnit"]
  },
  {
    id: 5,
    title: "Healthcare Data Analytics Platform",
    company: "Wolters Kluwer",
    duration: "Jul 2018 - Jul 2019",
    category: "ai",
    description: "Developed a healthcare data analytics platform that processes patient data, generates insights, and provides predictive analytics for healthcare providers and administrators.",
    highlights: [
      "Built data processing pipeline for healthcare analytics",
      "Implemented predictive models for patient outcomes",
      "Ensured HIPAA compliance and data security",
      "Reduced data processing time by 70%",
      "Integrated with multiple healthcare systems"
    ],
    technologies: ["Java", "Spring Boot", "Python", "PostgreSQL", "Apache Spark", "Docker", "AWS", "JUnit"]
  },
  {
    id: 6,
    title: "E-Learning Management System",
    company: "SysArc Infomatix",
    duration: "May 2016 - Jul 2018",
    category: "government",
    description: "Developed a comprehensive e-learning management system for educational institutions, featuring course management, student tracking, assessment tools, and progress analytics.",
    highlights: [
      "Built scalable e-learning platform for 50K+ students",
      "Implemented real-time collaboration features",
      "Developed assessment and grading automation",
      "Created comprehensive reporting and analytics dashboard",
      "Ensured accessibility compliance and mobile responsiveness"
    ],
    technologies: ["Java", "Spring Boot", "Angular", "MySQL", "Redis", "Docker", "Jenkins", "JUnit"]
  }
];
