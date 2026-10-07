import type { Profile } from '../types/cv.types';

interface UseProfileReturn {
  profile: Profile;
}

export const useProfile = (): UseProfileReturn => {

  const profile: Profile = {
    fullName: "Nuria Olivares",
    title: "Senior Software Engineer | Full Stack",
    summary: "Full-stack Software Engineer with 4+ years delivering end-to-end features across Java/Spring Boot backends and Angular/React frontends in large-scale, high-availability enterprise environments. Proven track record designing and owning RESTful APIs, micro-services architectures, and production-critical systems serving millions of users. Experienced in CI/CD pipelines, cloud infrastructure (AWS), observability practices, and cross-functional collaboration in agile teams. Background in Engineering Physics brings a rigorous, systems-thinking approach to complex technical problems, trained in probabilistic modeling, signal processing, and mathematical methods. Founded and built a SaaS platform end-to-end as sole technical owner.",
    email: "nuriaolivaresroyo@gmail.com",
    phone: "+971 502828579",
    linkedin: "https://www.linkedin.com/in/nuria-olivares-royo/",
    github: "https://github.com/NuriaOlivares",
  
    experiences: [
      {
        id: 1,
        role: "Senior Software Engineer",
        company: "ADP (Automatic Data Processing)",
        description: ["Transitioned from frontend specialist to full-stack contributor in under 6 months, becoming a key bridge between the Scrum Master and the development team", "Designed and delivered full-stack features across a Typescript Angular frontend and Java 17/21 Spring Boot backend, supporting business-critical payroll and HR workflows for enterprise clients at scale.", "Built and maintained RESTful APIs using an API-first approach, ensuring backward compatibility and enabling seamless cross-product integration across the company's main platform suite.", "Developed all frontend components to WCAG AA standard, and identified and resolved pre-existing a11y and i18n gaps across the flagship product, improving compliance and reach across global enterprise deployments.", "Delivered a new end-to-end product integration workflow from scratch in 1 sprint (vs. 3+ sprint average), collaborating directly with SAP teams to enable cross-system data flows.", "Implemented new frontend functionality that increased end-user productivity by 10x, identified through direct user feedback analysis and delivered via Angular components.", "Contributed to observability practices across backend micro-services using structured logging and Splunk, reducing mean time to diagnose production incidents.", "Resolved recurring customer-impacting downtime by diagnosing and fixing data inconsistencies at the database and service layer, improving platform reliability within SLA.", "Mentored 5+ engineers (junior and senior) through onboarding and integration into the development team, reducing ramp-up time and improving team delivery consistency."],
        startDate: "2022-09",
        endDate: "2026-01",
      },
      {
        id: 2,
        role: "Business Analyst",
        company: "Bluecap Consulting",
        description: ["Developed and automated SQL-based workflows to build IFRS 9-compliant impairment models, streamlining expected credit loss calculations across large datasets for multiple banking clients.", "Built a new data environment for a top-tier Spanish bank to enable default probability analysis across mortgage and loan portfolios.", "Automated big data query integration into client-ready reporting decks, improving iteration speed by 1.5x."],
        startDate: "2021-02",
        endDate: "2021-09",
      },
      {
        id: 3,
        role: "Junior Systems Auditor",
        company: "PricewaterhouseCoopers",
        description: ["Assessed IT general controls, database security, infrastructure, and business process controls across multiple financial clients as part of external audit engagements.", "Analyzed journal entries and financial application controls to evaluate risk exposure in client reporting processes."],
        startDate: "2020-09",
        endDate: "2021-02",
      },
    ],
  
    projects: [
      {
        id: 1,
        name: "Kaptura Software (Co-Founder & CTO)",
        description: ["Architected and built a full-stack cloud-native platform using Javascript React (frontend) and Java Spring Boot (backend), with a modular architecture designed to support future scaling as transaction volume grew.", "Designed and implemented JWT-based authentication and role-based access control securing multi-role API access across clinics and laboratories.", "Built and deployed infrastructure on AWS (EC2, RDS, S3) with Dockerized services and automated CI/CD pipelines, owning the full deployment lifecycle from development to production.", "Designed scalable database schemas in MySQL using Hibernate ORM to handle high volumes of clinic and laboratory transactions reliably.", "Integrated third-party payment processing (Stripe) and automated email notification workflows using Java Mail Sender, reducing manual intervention by an estimated 10–40%.", "Owned end-to-end product delivery: technical design, development, deployment, IT, and production support with no dedicated ops team."],
        techStack: "React, Java Spring Boot, AWS (EC2, RDS, S3), Docker, MySQL, Hibernate, JWT, Stripe, Java Mail Sender, CI/CD",
        url: "https://centrica.app",
      },
      {
        id: 2,
        name: "DESY Beamline Intensity Workflow",
        description: ["Developed an end-to-end Python workflow to compute Beamline theoretical intensity output in under 6 weeks, as part of the DESY Summer Student Program scholarship at the German Synchrotron."],
        techStack: "Python",
      },
    ],
  
    skills: [
      // LANGUAGES
      { id: 1, name: "Java (8, 17, 21)", category: "LANGUAGES", categoryDisplayName: "Languages", displayOrder: 1 },
      { id: 2, name: "TypeScript", category: "LANGUAGES", categoryDisplayName: "Languages", displayOrder: 2 },
      { id: 3, name: "JavaScript", category: "LANGUAGES", categoryDisplayName: "Languages", displayOrder: 3 },
      { id: 4, name: "Python", category: "LANGUAGES", categoryDisplayName: "Languages", displayOrder: 4 },
      { id: 5, name: "SQL", category: "LANGUAGES", categoryDisplayName: "Languages", displayOrder: 5 },
      // FRAMEWORKS_AND_APIS
      { id: 6, name: "Angular", category: "FRAMEWORKS_AND_APIS", categoryDisplayName: "Frameworks & APIs", displayOrder: 1 },
      { id: 7, name: "AngularJS", category: "FRAMEWORKS_AND_APIS", categoryDisplayName: "Frameworks & APIs", displayOrder: 2 },
      { id: 8, name: "React", category: "FRAMEWORKS_AND_APIS", categoryDisplayName: "Frameworks & APIs", displayOrder: 3 },
      { id: 9, name: "Spring Boot", category: "FRAMEWORKS_AND_APIS", categoryDisplayName: "Frameworks & APIs", displayOrder: 4 },
      { id: 10, name: "Spring", category: "FRAMEWORKS_AND_APIS", categoryDisplayName: "Frameworks & APIs", displayOrder: 5 },
      { id: 11, name: "Hibernate", category: "FRAMEWORKS_AND_APIS", categoryDisplayName: "Frameworks & APIs", displayOrder: 6 },
      { id: 12, name: "RESTful APIs", category: "FRAMEWORKS_AND_APIS", categoryDisplayName: "Frameworks & APIs", displayOrder: 7 },
      { id: 13, name: "Micro-services", category: "FRAMEWORKS_AND_APIS", categoryDisplayName: "Frameworks & APIs", displayOrder: 8 },
      { id: 14, name: "JWT", category: "FRAMEWORKS_AND_APIS", categoryDisplayName: "Frameworks & APIs", displayOrder: 9 },
      { id: 15, name: "HTML5", category: "FRAMEWORKS_AND_APIS", categoryDisplayName: "Frameworks & APIs", displayOrder: 10 },
      { id: 16, name: "CSS3", category: "FRAMEWORKS_AND_APIS", categoryDisplayName: "Frameworks & APIs", displayOrder: 11 },
      { id: 17, name: "Bootstrap", category: "FRAMEWORKS_AND_APIS", categoryDisplayName: "Frameworks & APIs", displayOrder: 12 },
      // CLOUD_AND_DEVOPS
      { id: 18, name: "AWS (EC2, RDS, S3)", category: "CLOUD_AND_DEVOPS", categoryDisplayName: "Cloud & DevOps", displayOrder: 1 },
      { id: 19, name: "Docker", category: "CLOUD_AND_DEVOPS", categoryDisplayName: "Cloud & DevOps", displayOrder: 2 },
      { id: 20, name: "CI/CD Pipelines", category: "CLOUD_AND_DEVOPS", categoryDisplayName: "Cloud & DevOps", displayOrder: 3 },
      { id: 21, name: "Jenkins", category: "CLOUD_AND_DEVOPS", categoryDisplayName: "Cloud & DevOps", displayOrder: 4 },
      { id: 22, name: "Bitbucket Pipelines", category: "CLOUD_AND_DEVOPS", categoryDisplayName: "Cloud & DevOps", displayOrder: 5 },
      { id: 23, name: "Nginx", category: "CLOUD_AND_DEVOPS", categoryDisplayName: "Cloud & DevOps", displayOrder: 6 },
      { id: 24, name: "Apache", category: "CLOUD_AND_DEVOPS", categoryDisplayName: "Cloud & DevOps", displayOrder: 7 },
      // DATABASES
      { id: 25, name: "MySQL", category: "DATABASES", categoryDisplayName: "Databases", displayOrder: 1 },
      { id: 26, name: "PostgreSQL", category: "DATABASES", categoryDisplayName: "Databases", displayOrder: 2 },
      { id: 27, name: "Redis", category: "DATABASES", categoryDisplayName: "Databases", displayOrder: 3 },
      { id: 28, name: "Splunk", category: "DATABASES", categoryDisplayName: "Databases", displayOrder: 4 },
      { id: 29, name: "Maven", category: "DATABASES", categoryDisplayName: "Databases", displayOrder: 5 },
      // TESTING_AND_QUALITY
      { id: 30, name: "JUnit", category: "TESTING_AND_QUALITY", categoryDisplayName: "Testing & Quality", displayOrder: 1 },
      { id: 31, name: "Mockito", category: "TESTING_AND_QUALITY", categoryDisplayName: "Testing & Quality", displayOrder: 2 },
      { id: 32, name: "Jest", category: "TESTING_AND_QUALITY", categoryDisplayName: "Testing & Quality", displayOrder: 3 },
      { id: 33, name: "Integration Testing", category: "TESTING_AND_QUALITY", categoryDisplayName: "Testing & Quality", displayOrder: 4 },
      { id: 34, name: "Secure Coding Practices", category: "TESTING_AND_QUALITY", categoryDisplayName: "Testing & Quality", displayOrder: 5 },
      // PRACTICES_AND_METHODOLOGIES
      { id: 35, name: "API-first Design", category: "PRACTICES_AND_METHODOLOGIES", categoryDisplayName: "Practices & Methodologies", displayOrder: 1 },
      { id: 36, name: "Accessibility (a11y)", category: "PRACTICES_AND_METHODOLOGIES", categoryDisplayName: "Practices & Methodologies", displayOrder: 2 },
      { id: 37, name: "i18n", category: "PRACTICES_AND_METHODOLOGIES", categoryDisplayName: "Practices & Methodologies", displayOrder: 3 },
      { id: 38, name: "Structured Logging", category: "PRACTICES_AND_METHODOLOGIES", categoryDisplayName: "Practices & Methodologies", displayOrder: 4 },
      { id: 39, name: "Agile / Scrum", category: "PRACTICES_AND_METHODOLOGIES", categoryDisplayName: "Practices & Methodologies", displayOrder: 5 },
    ],
  
    education: [
      {
        id: 1,
        institution: "Polytechnic University of Catalonia (UPC)",
        degree: "Bachelor's in Engineering Physics",
        startDate: "2016-09",
        endDate: "2020-06",
        displayOrder: 1,
      },
      {
        id: 2,
        institution: "UNIR",
        degree: "Master's in Design and Management of Technological Projects",
        startDate: "2020-11",
        endDate: "2021-10",
        displayOrder: 2,
      },
      {
        id: 3,
        institution: "HarvardX (via edX)",
        degree: "CS50's Introduction to Programming with Python",
        startDate: "2026-06",
        endDate: "2026-07",
        displayOrder: 3,
      },
      {
        id: 4,
        institution: "HarvardX (via edX)",
        degree: "CS50's Introduction to Artificial Intelligence with Python",
        startDate: "2026-07",
        endDate: "2026-09",
        displayOrder: 4,
      },
      {
        id: 5,
        institution: "Deutsches Elektronen-Synchrotron (DESY)",
        degree: "Summer Research Program (scholarship)",
        location: "Hamburg, Germany",
        startDate: "2019-06",
        endDate: "2019-09",
        description: "Awarded the Summer Student Program scholarship. Developed an end-to-end Python workflow to compute Beamline theoretical intensity output in under 6 weeks.",
        displayOrder: 5,
      },
    ],
  
    certifications: [
      {
        id: 1,
        name: "Professional Certificate in Design and Development of Webpages",
        issueDate: "2022",
        displayOrder: 1,
      },
      {
        id: 2,
        name: "High Distinction in University Access Examinations (9+/10)",
        issueDate: "2016",
        displayOrder: 2,
      },
    ],
  
    languages: [
      { id: 1, name: "Spanish", level: "NATIVE", levelDisplayName: "Native", displayOrder: 1 },
      { id: 2, name: "Catalan", level: "NATIVE", levelDisplayName: "Native", displayOrder: 2 },
      { id: 3, name: "English", level: "PROFESSIONAL", levelDisplayName: "Fluent", displayOrder: 3 },
      { id: 4, name: "French", level: "CONVERSATIONAL", levelDisplayName: "Intermediate", displayOrder: 4 },
      { id: 4, name: "Arabic", level: "BEGINNER", levelDisplayName: "Beginner", displayOrder: 4 },
    ],
  };

  return { profile };
};