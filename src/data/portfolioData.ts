export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string; // Part-Time / Full-Time
  period: string; // e.g. "April 2026 - July 2026"
  category: 'va' | 'shopify' | 'outreach' | 'teaching';
  bullets: string[];
  skillsHighlighted: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; level?: string }[];
}

export interface WorkSample {
  id: string;
  title: string;
  subtitle: string;
  category: 'shopify' | 'outreach' | 'admin';
  client: string;
  description: string;
  deliverables: string[];
  keyHighlights: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "LERRIZA JIMENEZ",
    tagline: "Virtual Assistant · Shopify Product Listing Specialist · Lead Generation & Outreach",
    location: "Quezon, Nueva Ecija, Philippines",
    phone: "(+63) 926-780-2533",
    email: "jimenezlerriza@gmail.com",
    onlineJobsProfile: "https://www.onlinejobs.ph/jobseekers/info/4204401",
    picturePath: "/assets/profile.png",
    summary: "Results-driven Virtual Assistant with 9 years of teaching experience and hands-on experience in administration, Shopify product listing, and Instagram cold outreach. Skilled in product listing and optimization, lead generation, customer communication, data entry, email and calendar management, documentation, and administrative support. Detail-oriented, organized, and adaptable, with strong communication skills and the ability to work independently in a remote environment.",
    yearsExperience: "9+ Years Professional Experience",
    availability: "Available for Remote & Part-Time Projects",
  },

  technicalSetup: {
    laptop: "Lenovo Laptop – AMD Ryzen 5 Processor",
    os: "Windows Operating System",
    internet: "Reliable High-Speed Internet Connection",
    workSetup: "Dedicated Remote-Ready Workspace",
    availabilityHours: "Flexible Overlapping Hours for Remote Teams",
  },

  skills: [
    {
      title: "Virtual Assistance & Administrative Support",
      description: "Comprehensive administrative management, calendar coordination, email triage, and file documentation.",
      iconName: "Briefcase",
      skills: [
        { name: "Administrative Support" },
        { name: "Data Entry & Validation" },
        { name: "Email & Inbox Management" },
        { name: "Documentation Management" },
        { name: "Appointment Scheduling" },
        { name: "Time & Priority Management" },
        { name: "Customer Communication" },
        { name: "Organization & Filing Systems" },
      ]
    },
    {
      title: "Shopify Store & Product Operations",
      description: "End-to-end product listing creation, pricing updates, image optimization, and collection management.",
      iconName: "ShoppingBag",
      skills: [
        { name: "Shopify Store Management" },
        { name: "Shopify Product Listing & Optimization" },
        { name: "Product Uploads & Copywriting" },
        { name: "Variant & Inventory Management" },
        { name: "Product Research & Sourcing" },
        { name: "Collection Structuring" },
      ]
    },
    {
      title: "Lead Generation & Outreach",
      description: "Strategic Instagram cold outreach, prospect research, personalized DM messaging, and lead tracking.",
      iconName: "Send",
      skills: [
        { name: "Instagram Cold Outreach" },
        { name: "Lead Generation & Prospecting" },
        { name: "Outreach Message Personalization" },
        { name: "Conversation & Follow-Up Management" },
        { name: "Prospect CRM Tracking" },
      ]
    },
    {
      title: "Software & Digital Tools",
      description: "Proficiency in modern remote workspace tools, office suites, and collaboration platforms.",
      iconName: "Wrench",
      skills: [
        { name: "Google Workspace" },
        { name: "Microsoft Office Suite" },
        { name: "Canva" },
        { name: "GoHighLevel" },
        { name: "Trello" },
        { name: "Calendly" },
        { name: "Zoom" },
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      id: "click-academy",
      role: "VIRTUAL ASSISTANT",
      company: "Click Academy",
      type: "Part-Time",
      period: "April 2026 - July 2026",
      category: "va",
      bullets: [
        "Provided administrative and virtual assistance, including data entry, online research, file organization, and documentation.",
        "Managed emails, records, and day-to-day administrative tasks accurately and efficiently.",
        "Maintained organized files and completed assigned tasks on time."
      ],
      skillsHighlighted: ["Administrative Support", "Data Entry", "Online Research", "File Organization", "Email Management"]
    },
    {
      id: "jt-media-outreach",
      role: "INSTAGRAM COLD OUTREACH SPECIALIST",
      company: "JT Media",
      type: "Part-Time",
      period: "June 2026",
      category: "outreach",
      bullets: [
        "Conduct Instagram cold messaging to identify and connect with potential clients and leads.",
        "Research prospects and personalize outreach messages based on their business and needs.",
        "Manage conversations, follow-ups, and lead information to support lead generation.",
        "Maintain professional and consistent communication with prospects through Instagram."
      ],
      skillsHighlighted: ["Instagram Cold Outreach", "Lead Generation", "Prospect Research", "Conversation Management", "Communication"]
    },
    {
      id: "gold-stones-shopify",
      role: "SHOPIFY PRODUCT LISTER",
      company: "Gold and Stones Store",
      type: "Part-Time",
      period: "June 2026",
      category: "shopify",
      bullets: [
        "Created and uploaded Shopify product listings, including titles, descriptions, pricing, images, and product details.",
        "Organized product information and ensured listings were accurate, complete, and customer-friendly.",
        "Updated product details, collections, and inventory as needed.",
        "Maintained a professional and organized Shopify store presentation."
      ],
      skillsHighlighted: ["Shopify Product Listing", "Product Details & Descriptions", "Inventory Update", "Store Presentation"]
    },
    {
      id: "jojo-bragais-shopify",
      role: "SHOPIFY PRODUCT LISTER",
      company: "Jojo Bragais – JT Media",
      type: "Part-Time",
      period: "June 2026",
      category: "shopify",
      bullets: [
        "Created and managed Shopify product listings, including product titles, descriptions, pricing, images, and variants.",
        "Organized and uploaded product information accurately and efficiently.",
        "Updated product details and collections to keep the store organized and up to date.",
        "Ensured product listings were clear, accurate, and visually appealing."
      ],
      skillsHighlighted: ["Shopify Product Management", "Product Variants", "Visual Store Presentation", "Collection Updates"]
    },
    {
      id: "deped-teacher",
      role: "PUBLIC ELEMENTARY SCHOOL TEACHER",
      company: "Department of Education, Philippines",
      type: "Full-Time",
      period: "May 2014 – March 2024",
      category: "teaching",
      bullets: [
        "Delivered daily classroom instruction and prepared lesson plans and learning materials for young learners.",
        "Managed records, reports, documentation, and administrative tasks with accuracy and attention to detail.",
        "Served as Program Coordinator, handling coordination, scheduling, meetings, and school activities.",
        "Communicated and coordinated with parents, teachers, staff, and other stakeholders.",
        "Facilitated webinars, meetings, and training sessions.",
        "Managed multiple priorities and deadlines while maintaining strong organization and time management."
      ],
      skillsHighlighted: ["10 Years Leadership & Admin", "Program Coordination", "Stakeholder Communication", "Webinar Facilitation", "Documentation"]
    }
  ] as ExperienceItem[],

  education: {
    degree: "Bachelor of Science in Elementary Education",
    institution: "Nueva Ecija University of Science and Technology",
    period: "2008 – 2012",
    location: "Nueva Ecija, Philippines"
  },

  languages: [
    { language: "English", proficiency: "Proficient" },
    { language: "Filipino", proficiency: "Native" }
  ],

  workSamples: [
    {
      id: "shopify-sample",
      title: "Shopify Store Product Upload & Listing Architecture",
      subtitle: "Gold and Stones Store & Jojo Bragais (JT Media)",
      category: "shopify",
      client: "E-Commerce Clients",
      description: "Complete Shopify listing workflows including title optimization, formatted descriptions, price rules, high-res image gallery uploads, and multi-option variant configurations (sizes, colors, materials).",
      deliverables: [
        "Optimized Product Titles & Bulleted Feature Descriptions",
        "Multi-variant SKU & Pricing Matrix Setup",
        "Collection Assignment & Tag Categorization",
        "High-Resolution Image Sourcing & Gallery Formatting"
      ],
      keyHighlights: [
        "Ensured 100% accurate product detail formatting",
        "Maintained store aesthetic standards across new releases",
        "Handled complex variant configurations cleanly"
      ]
    },
    {
      id: "outreach-sample",
      title: "Instagram Lead Prospecting & Personalized Outreach",
      subtitle: "JT Media Outreach Campaign",
      category: "outreach",
      client: "JT Media",
      description: "Targeted outreach workflow for Instagram lead generation. Conducted account auditing, crafted individualized opener messages, managed follow-up sequences, and logged qualified prospect data.",
      deliverables: [
        "Target Prospect Account Identification & Qualification",
        "Customized Opener Messaging Based on Business Needs",
        "Multi-Touch Follow-Up Calendar Tracking",
        "Lead Pipeline Status Documentation"
      ],
      keyHighlights: [
        "Consistent brand tone and courteous professional communication",
        "Structured follow-up schedule ensuring zero dropped leads",
        "Detailed lead notes prepared for seamless sales transition"
      ]
    },
    {
      id: "admin-sample",
      title: "Virtual Assistance & Administrative Records Management",
      subtitle: "Click Academy & School Program Coordination",
      category: "admin",
      client: "Click Academy & Department of Education",
      description: "Execution of administrative workflows including email management, meeting scheduling via Calendly & Zoom, document archive organization, and event coordination.",
      deliverables: [
        "Inbox Triage & Standardized Email Drafting",
        "Cloud Storage File Structure & Naming Standardization",
        "Webinar & Meeting Schedule Coordination",
        "Activity Report & Documentation Preparation"
      ],
      keyHighlights: [
        "10+ years of proven documentation and organizational precision",
        "High adaptability in remote collaboration and online tools",
        "Reliable execution on tight deadline schedules"
      ]
    }
  ] as WorkSample[]
};
