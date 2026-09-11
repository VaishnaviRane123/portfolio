import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "novabank",
    number: "01",
    title: "NovaBank",
    subtitle: "AI-Enhanced Banking Management System",

    description:
      "A modern full-stack banking management system designed to simulate real-world digital banking operations while integrating AI-assisted financial features, fraud-risk analysis and personalized spending insights.",

    image: "/projects/novabank.png",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "AI",
    ],

    features: [
      "User registration and authentication",
      "Customer and admin roles",
      "KYC registration",
      "Savings and current accounts",
      "Multiple accounts per user",
      "Deposits and withdrawals",
      "User-to-user money transfers",
      "Transaction history and filtering",
      "Loan applications and repayment tracking",
      "Admin account management",
      "Account freeze and block functionality",
      "AI banking assistant",
      "Fraud-risk analysis",
      "Spending insights",
      "Transaction categorization",
      "Dispute management",
      "Reconciliation and mismatch detection",
      "Banking reports",
    ],

    github: "https://github.com/VaishnaviRane123/BankingSystem",

    featured: true,
  },

  {
    slug: "ai-voice-translator",
    number: "02",
    title: "AI Voice Translator",
    subtitle: "AI-Based Speech Translation Web Application",

    description:
      "A full-stack web application that enables speech-to-speech translation across multiple languages using AI-powered speech recognition and translation technologies.",

    image: "/projects/ai-voice-translator.png",

    technologies: [
      "Python",
      "Whisper",
      "Argos Translate",
      "Coqui TTS",
      "Flask",
      "Streamlit",
    ],

    features: [
      "Voice input",
      "Speech recognition",
      "Multilingual translation",
      "Text-to-speech",
      "AI-powered processing",
      "Web interface",
    ],

    github: "https://github.com/VaishnaviRane123/AI-VOICE-TRANSLATOR",
  },

  {
    slug: "student-management-system",
    number: "03",
    title: "Student Management System",
    subtitle: "Role-Based Academic Management Platform",

    description:
      "A comprehensive student management application for managing students, faculty and administrative operations with database integration.",

    image: "/projects/student-management.png",

    technologies: [
      "Java",
      "Spring Boot",
      "JSP",
      "MySQL",
      "Hibernate",
      "Maven",
    ],

    features: [
      "Student management",
      "Faculty management",
      "Admin management",
      "Authentication",
      "Role-based access",
      "Database management",
    ],

    github:
      "https://github.com/VaishnaviRane123/Student-Management-System",
  },

  {
    slug: "redbus",
    number: "04",
    title: "RedBus",
    subtitle: "Full-Stack Bus Booking Web Application",

    description:
      "A full-stack bus booking platform with user-facing booking functionality, admin management modules, secure authentication, and payment processing. Deployed on AWS EC2 for high availability.",

    image: "/projects/redbus.png",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "AWS EC2",
      "JavaScript",
    ],

    features: [
      "Bus search by route and date",
      "Route management",
      "User authentication and booking",
      "Payment processing",
      "Admin dashboard",
      "Scalable data storage with MongoDB",
      "REST API communication",
      "Deployed on AWS EC2",
    ],

    github: "https://github.com/VaishnaviRane123/RedBusMaster",
  },

  {
    slug: "library-management-system",
    number: "05",
    title: "Library Management System",
    subtitle: "Java Desktop Application",

    description:
      "A desktop-based Library Management System built using Java Swing with MySQL database integration for managing students, books, issue and return operations and reports.",

    image: "/projects/library-management.png",

    technologies: [
      "Java",
      "Java Swing",
      "MySQL",
      "JDBC",
    ],

    features: [
      "Student registration",
      "Book management",
      "Book issue and return",
      "Database integration",
      "Statistical reporting",
    ],

    github: "https://github.com/VaishnaviRane123/Library-Management-System",
  },
];
