export const portfolioData = {
  personal: {
    name: "Hanane Bellala",
    title: "Computer Science Student & Fullstack Developer",
    email: "mh_bellala@esi.dz",
    phone: "+213 555 123 456",
    location: "Algiers, Algeria",
    linkedin: "https://www.linkedin.com/in/hanane-bellala/",
    github: "https://github.com/Hananebellala",
    behance: "https://www.behance.net/bellalahanane",
    resumeUrl: "/assets/Hanane_Bellala_Resume.pdf",
  },

  socialLinks: [
    { id: "linkedin", label: "Hanane Bellala",    platform: "LinkedIn", url: "https://www.linkedin.com/in/hanane-bellala/", icon: "linkedin" },
    { id: "github",   label: "Hananebellala",     platform: "GitHub",   url: "https://github.com/Hananebellala",           icon: "github"   },
    { id: "behance",  label: "BELLALA HANANE",    platform: "Behance",  url: "https://www.behance.net/bellalahanane",       icon: "behance"  },
    { id: "email",    label: "mh_bellala@esi.dz", platform: "Email",    url: "mailto:mh_bellala@esi.dz",                   icon: "mail"     },
  ],

  about: {
    greeting: "hi.",
    headline: "I am Hanane",
    bio: "My name is Hanane Bellala, I am a 4th-year Computer Science Student at ESI (Algiers), specializing in information systems and software engineering. Experienced in designing and implementing full-stack systems, enterprise architecture models, and agile management frameworks. Trained in key modern frameworks (Python, React, Flutter, Node.js) and business BPM, ERP and software projects. Passionate about building scalable, secure AI systems that integrate business needs, data intelligence, and modern architectures.",
    resumeCta: "Download Resume",
  },

  projects: [
    {
      id: "quality-plus",
      title: "Quality+",
      subtitle: "Enterprise Quality Management & Audit Platform",
      category: "Fullstack Web & Enterprise Architecture",
      description: "An enterprise-grade platform built to streamline internal quality audits, non-conformity issue tracking, and compliance reporting with intuitive real-time KPI dashboards.",
      highlights: [
        "Custom workflow engine for ISO quality compliance checklists",
        "Real-time analytics dashboards for audit KPIs and status tracking",
        "Role-based access control (RBAC) with secure document handling",
      ],
      tags: ["React", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS"],
      link: "#",
      github: "https://github.com/Hananebellala",
    },
    {
      id: "switch-it",
      title: "Switch It",
      subtitle: "Smart Home Automation & Device Management",
      category: "Mobile Application / IoT & Smart Living",
      description: "A cross-platform mobile application that empowers users to remotely monitor, schedule, and automate electrical appliances for optimized energy efficiency.",
      highlights: [
        "Real-time device control and dynamic energy analytics",
        "Personalized automation routines and scheduling engine",
        "Sleek mobile UI designed in Figma with fluid animations",
      ],
      tags: ["Flutter", "Dart", "Firebase", "IoT Protocols", "Figma"],
      link: "#",
      github: "https://github.com/Hananebellala",
    },
    {
      id: "healio",
      title: "Healio",
      subtitle: "Digital Healthcare & Teleconsultation Portal",
      category: "Healthcare Platform / Fullstack System",
      description: "A complete digital health portal connecting patients with certified medical practitioners, featuring real-time booking, electronic health records (EHR), and teleconsultations.",
      highlights: [
        "Encrypted patient medical records and appointment scheduling",
        "Integrated doctor prescription management system",
        "Responsive, accessible web interface tailored for patients and clinicians",
      ],
      tags: ["React", "Django REST", "Python", "PostgreSQL", "Tailwind CSS"],
      link: "#",
      github: "https://github.com/Hananebellala",
    },
    {
      id: "mousa-coffee",
      title: "Mousa Coffee",
      subtitle: "Smart Travel Companion & Local Experience Guide",
      category: "Mobile Application / Lifestyle",
      description: "An all-in-one lifestyle brand app featuring curated local experiences, smart product ordering, and community-driven coffee culture.",
      highlights: [
        "Interactive product browsing and smart ordering engine",
        "Personalized recommendations and community reviews",
        "Polished mobile UI with premium brand identity design",
      ],
      tags: ["Flutter", "Node.js", "MongoDB", "Figma", "Express"],
      link: "#",
      github: "https://github.com/Hananebellala",
    },
  ],

  beyondWork: {
    subtitle: "Community, social and volunteering experiences",
    items: [
      {
        id: "aiesec",
        role: "AIESEC Exchange Participant",
        tagline: "Global Youth Leadership & Cross-Cultural Exchange",
        location: "Cairo, Egypt",
        period: "Global Volunteer Program",
        description: "Passionate about global outreach, intercultural exchange experience in Cairo, Egypt. Leading youth development programs, cross-cultural team events, and youth empowerment projects. Honed communication, adaptability, and international collaboration skills.",
        photos: [
          { assetKey: "egypt1", caption: "Cairo Urban Exploration" },
          { assetKey: "egypt2", caption: "Nile Sunset & Cultural Dialogue" },
          { assetKey: "egypt3", caption: "International Exchange Cohort" },
          { assetKey: "egypt4", caption: "Giza Pyramids Visit" },
        ],
      },
    ],
  },
}
