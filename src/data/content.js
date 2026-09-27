export const profile = {
  name: "Patrick Graham",
  title: " Senior AI & Full Stack Engineer ",
  location: "North Carolina, United States",
  pitch:
    "Full-stack and applied AI engineer building applications across frontend, backend, and model integration. Focused on LLM applications, RAG, and AI agents, with a practical approach to architecture, evaluation, and reliable delivery.",
  email: "ronaldo0207.code@gmail.com",
  linkedin: "https://www.linkedin.com/in/patrick-graham-029280p/",
  github: "https://github.com/pine-1244",
  resumes: [
    { label: "Senior AI & Full Stack Engineer", href: "./Resume.pdf" },
  ],
};

export const navSections = [
  { id: "hero", label: "Home", num: "00" },
  { id: "projects", label: "Projects", num: "01" },
  { id: "experience", label: "Experience", num: "02" },
  { id: "about", label: "About", num: "03" },
  { id: "skills", label: "Skills", num: "04" },
  { id: "education", label: "Education", num: "05" },
  { id: "contact", label: "Contact", num: "06" },
];

export const focusAreas = [
  {
    tag: "AI",
    title: "AI application engineering",
    detail:
      "Building practical LLM applications that connect models with useful product workflows.",
    stack: [
      "LLM Applications",
      "RAG Pipelines",
      "Semantic Search",
      "Prompt Engineering",
      "Structured Outputs",
      "Vector Databases",
      "Speech-to-Text (Whisper)",
      "Multilingual NLP Pipelines",
    ],
  },
  {
    tag: "Agents",
    title: "AI agent development",
    detail:
      "Designing multistep AI workflows with tool calling, APIs, context management, and human oversight.",
    stack: [
      "Tool Calling",
      "API Integration",
      "Context Management",
      "Stateful Orchestration",
      "Human-in-the-Loop Workflows",
      "LangChain",
      "Ollama",
    ],
  },
  {
    tag: "Full Stack",
    title: "Full-stack engineering",
    detail:
      "Developing maintainable applications across frontend interfaces, backend services, and REST APIs.",
    stack: [
      "React",
      "Next.js",
      "Angular",
      "Vue.js",
      "Three.js",
      "WebGL",
      "Node.js",
      "Django",
      "Python",
      "C#",
      ".NET / ASP.NET Core",
      "JavaScript",
      "TypeScript",
      "REST APIs",
    ],
  },
  {
    tag: "Quality",
    title: "Architecture & reliability",
    detail:
      "Improving application quality through thoughtful architecture, testing, monitoring, and performance work.",
    stack: [
      "Software Architecture",
      "Automated Testing",
      "Code Review",
      "Production Monitoring",
      "Error Handling",
      "Query Optimization",
      "Docker & Containerization",
      "AWS (EC2, S3, Lambda)",
      "CI/CD Pipelines",
    ],
  },
]

export const projects = [

  {
    tag: "PROJ-01",
    year: "2026",
    title: "Rosie",
    subtitle: "AI answering service marketing website",
    problem:
      "Small business owners need a clear way to evaluate AI phone support that can answer customer questions, handle appointment requests, and capture calls outside business hours.",
    approach: [
      "Presented AI answering features, including business-specific responses, appointment booking, call transfers, and call summaries, in focused product sections.",
      "Explained setup using business website and Google profile information, supported by customer testimonials and pricing information.",
      "Included free-trial calls to action and account login access to guide prospective and existing customers.",
    ],
    result:
      "A product website that helps small businesses understand Rosie’s capabilities, evaluate pricing, and start a trial.",
    // Suggested website stack; confirm against your implementation.
    stack: [
      "Framer",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "OpenAI API",
      "LangChain",
      "RAG",
      "pgvector",
      "Prompt Engineering",
    ],
    link: "https://heyrosie.com/",
    images: [
      {
        src: "/rosie/rosie1.jpg",
        alt: "Rosie website screenshot 1",
      },
      {
        src: "/rosie/rosie2.jpg",
        alt: "Rosie website screenshot 2",
      },
      {
        src: "/rosie/rosie3.jpg",
        alt: "Rosie website screenshot 3",
      },
      {
        src: "/rosie/rosie4.jpg",
        alt: "Rosie website screenshot 4",
      },
      {
        src: "/rosie/rosie5.jpg",
        alt: "Rosie website screenshot 5",
      },
    ],
  },
  {
    tag: "PROJ-02",
    year: "",
    title: "Presspage",
    subtitle: "PR software and AI brand visibility marketing website",
    problem:
      "Communications teams need a clear way to evaluate tools for publishing news, managing media relationships, and understanding how AI systems represent their brands.",
    approach: [
      "Organized product capabilities into brand visibility, brand governance, and PR operations, with dedicated feature and solution pages.",
      "Presented newsroom publishing, media distribution, content approval, and AI visibility features through product descriptions and visual previews.",
      "Included customer stories, educational resources, product plans, and demo booking links to support the evaluation process.",
    ],
    result:
      "A product website that helps communications teams explore PR software, understand available capabilities, and request a personalized demonstration.",
    // Suggested stack, not verified. Keep only technologies you actually used.
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "OpenAI API",
      "LangChain",
      "RAG",
      "pgvector",
      "Prompt Engineering",
    ],
    link: "https://presspage.com/",
    images: [
      {
        src: "/presspage/presspage1.jpg",
        alt: "Presspage website screenshot 1",
      },
      {
        src: "/presspage/presspage2.jpg",
        alt: "Presspage website screenshot 2",
      },
      {
        src: "/presspage/presspage3.jpg",
        alt: "Presspage website screenshot 3",
      },
      {
        src: "/presspage/presspage4.jpg",
        alt: "Presspage website screenshot 4",
      },
      {
        src: "/presspage/presspage5.jpg",
        alt: "Presspage website screenshot 5",
      },
    ],
  },
  {
    tag: "PROJ-03",
    year: "2026",
    title: "Tenzo",
    subtitle: "Restaurant reporting and intelligence marketing website",
    problem:
      "Restaurant operators need a clear way to evaluate software that connects fragmented business data, simplifies reporting, and supports better operational decisions.",
    approach: [
      "Organized product capabilities into focused sections covering data integration, automated reporting, performance analysis, demand forecasting, and AI-powered insights.",
      "Highlighted use cases for restaurant leaders and managers, supported by customer testimonials, integration information, and product demonstrations.",
      "Included demo requests, product tours, FAQs, and account login access to guide prospective and existing customers.",
    ],
    result:
      "A product website that helps restaurant teams understand Tenzo’s capabilities, explore integrations, and request a demonstration.",
    // Add only technologies confirmed in your implementation.
    stack: ["React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "RESTful APIs",
      "Python",
      "Rust",
      "OpenAI",
      "Anthropic",
      "LangGraph",
      "LangChain",
      "LlamaIndex",
      "pgvector",
      "Milvus",
      "Redis",
      "Docker",
      "AWS",
      "Azure",
      "LangSmith",],
    link: "https://www.gotenzo.com/",
    // Replace these paths with your actual screenshot files.
    images: [
      {
        src: "/tenzo/tenzo1.jpg",
        alt: "Tenzo website screenshot 1",
      },
      {
        src: "/tenzo/tenzo2.jpg",
        alt: "Tenzo website screenshot 2",
      },
      {
        src: "/tenzo/tenzo3.jpg",
        alt: "Tenzo website screenshot 3",
      },
      {
        src: "/tenzo/tenzo4.jpg",
        alt: "Tenzo website screenshot 4",
      },
      {
        src: "/tenzo/tenzo5.jpg",
        alt: "Tenzo website screenshot 5",
      },
      {
        src: "/tenzo/tenzo6.jpg",
        alt: "Tenzo website screenshot 6",
      },
      {
        src: "/tenzo/tenzo7.jpg",
        alt: "Tenzo website screenshot 7",
      },
    ],
  },
  // {
  //   tag: "PROJ-04",
  //   year: "2026",
  //   title: "AlphaCorp AI",
  //   subtitle: "AI engineering and automation services website",
  //   problem:
  //     "Businesses need a clear way to evaluate AI engineering partners that can connect proprietary data, automate workflows, and deliver reliable production systems.",
  //   approach: [
  //     "Presented service offerings in focused sections covering custom AI agents, RAG pipelines, intelligent automation, and evaluation and monitoring.",
  //     "Highlighted client projects, team expertise, and customer testimonials to help visitors assess technical capabilities and relevant experience.",
  //     "Explained the delivery process from discovery through deployment, with service details, FAQs, and consultation calls to action.",
  //   ],
  //   result:
  //     "A services website that helps businesses understand AlphaCorp AI’s expertise, explore relevant solutions, and book an introductory consultation.",
  //   // Confirm the project year above.
  //   // Advertised company technologies; retain only those you used.
  //   stack: [
  //     "Python",
  //     "TypeScript",
  //     "Rust",
  //     "OpenAI",
  //     "Anthropic",
  //     "LangGraph",
  //     "LangChain",
  //     "LlamaIndex",
  //     "pgvector",
  //     "Milvus",
  //     "Redis",
  //     "Docker",
  //     "AWS",
  //     "Azure",
  //     "LangSmith",
  //   ],
  //   link: "https://alphacorp.ai/",
  //   // Replace these paths with your actual screenshot files.
  //   images: [
  //     {
  //       src: "/alphacorp/alphacorp1.jpg",
  //       alt: "AlphaCorp AI website screenshot 1",
  //     },
  //     {
  //       src: "/alphacorp/alphacorp2.jpg",
  //       alt: "AlphaCorp AI website screenshot 2",
  //     },
  //     {
  //       src: "/alphacorp/alphacorp3.jpg",
  //       alt: "AlphaCorp AI website screenshot 3",
  //     },
  //     {
  //       src: "/alphacorp/alphacorp4.jpg",
  //       alt: "AlphaCorp AI website screenshot 4",
  //     },
  //     {
  //       src: "/alphacorp/alphacorp5.jpg",
  //       alt: "AlphaCorp AI website screenshot 5",
  //     },
  //   ],
  // },
  {
    tag: "PROJ-04",
    year: "2026",
    title: "AnswerForce",
    subtitle: "AI-powered answering service and customer communication platform",
    problem:
      "Businesses need a reliable way to handle customer calls, capture leads, schedule appointments, and maintain responsive communication without requiring internal teams to be available around the clock.",
    approach: [
      "Organized the platform experience around core communication capabilities including 24/7 call answering, lead capture, appointment scheduling, message handling, and customer support workflows.",
      "Structured service and industry-specific content to help businesses understand how AnswerForce can support different operational needs while integrating with existing tools and workflows.",
      "Implemented clear conversion paths through service exploration, consultation requests, customer stories, FAQs, and supporting resources to move prospective customers from discovery to engagement.",
    ],
    result:
      "A customer communication platform and marketing experience that helps businesses understand AnswerForce’s services, evaluate relevant use cases, and connect with a team for 24/7 customer engagement support.",

    // Add only technologies confirmed in your implementation.
    stack: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "RESTful APIs",
      "Python",
      "Rust",
      "FileMaker",
      "OpenAI",
      "Anthropic",
      "LangGraph",
      "LangChain",
      "LlamaIndex",
      "pgvector",
      "Milvus",
      "Redis",
      "Docker",
      "AWS",
      "Azure",
      "LangSmith",
    ],

    link: "https://www.answerforce.com/",

    // Replace these paths with your actual screenshot files.
    images: [
      {
        src: "/answerforce/answerforce1.jpg",
        alt: "AnswerForce website screenshot 1",
      },
      {
        src: "/answerforce/answerforce2.jpg",
        alt: "AnswerForce website screenshot 2",
      },
      {
        src: "/answerforce/answerforce3.jpg",
        alt: "AnswerForce website screenshot 3",
      },
      {
        src: "/answerforce/answerforce4.jpg",
        alt: "AnswerForce website screenshot 4",
      },
      {
        src: "/answerforce/answerforce5.jpg",
        alt: "AnswerForce website screenshot 5",
      },
    ],
  },
  {
    tag: "PROJ-05",
    year: "2026",
    title: "Vistex",
    subtitle: "Enterprise revenue management solutions website",
    problem:
      "Businesses need a clear way to evaluate enterprise solutions for managing complex pricing, rebates, royalties, and incentive programs while improving visibility into revenue and profitability.",
    approach: [
      "Organized solution offerings into focused sections covering price management, rebates, channel programs, royalties, and trade promotions.",
      "Presented industry-specific use cases and enterprise product options, supported by customer references and educational resources.",
      "Highlighted analytics, business AI, and advisory services, with navigation to solution details and contact options.",
    ],
    result:
      "A corporate website that helps enterprise buyers explore Vistex’s solutions, identify relevant industry applications, and connect with the team.",
    // Suggested full-stack technologies; retain only those you used.
    stack: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "RESTful APIs",
      "Python",
      "FastAPI",
      "OpenAI API",
    ],
    link: "https://www.vistex.com/",
    // Replace these paths with your actual screenshot files.
    images: [
      {
        src: "/vistex/vistex1.jpg",
        alt: "Vistex website screenshot 1",
      },
      {
        src: "/vistex/vistex2.jpg",
        alt: "Vistex website screenshot 2",
      },
      {
        src: "/vistex/vistex3.jpg",
        alt: "Vistex website screenshot 3",
      },
      {
        src: "/vistex/vistex4.jpg",
        alt: "Vistex website screenshot 4",
      },
      {
        src: "/vistex/vistex5.jpg",
        alt: "Vistex website screenshot 5",
      },
      {
        src: "/vistex/vistex6.jpg",
        alt: "Vistex website screenshot 6",
      },
    ],
  },
  {
    tag: "PROJ-06",
    year: "2026",
    title: "6sense",
    subtitle: "AI-powered revenue intelligence and B2B marketing website",
    problem:
      "B2B sales and marketing teams need a clear way to evaluate tools that identify potential buyers, prioritize accounts, and coordinate personalized outreach using buying signals.",
    approach: [
      "Presented platform capabilities in focused sections covering intent data, predictive modeling, revenue marketing, and sales intelligence.",
      "Highlighted conversational AI, automated email outreach, and connected workflows to explain how teams can turn buyer insights into action.",
      "Supported product exploration with customer stories, integration information, educational resources, and demo booking calls to action.",
    ],
    result:
      "A product website that helps revenue teams understand 6sense’s capabilities, explore relevant use cases, and request a demonstration.",
    // Suggested full-stack technologies; retain only those you used.
    stack: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "RESTful APIs",
      "Python",
      "FastAPI",
      "OpenAI API",
      "LangChain",
      "LangGraph",
      "RAG",
      "pgvector",
      "Prompt Engineering",
      "Tool Calling",
      "Structured Outputs",
      "LLM Evaluation",
      "LangSmith",
    ],
    link: "https://6sense.com/",
    // Replace these paths with your actual screenshot files.
    images: [
      {
        src: "/6sense/6sense1.jpg",
        alt: "6sense website screenshot 1",
      },
      {
        src: "/6sense/6sense2.jpg",
        alt: "6sense website screenshot 2",
      },
      {
        src: "/6sense/6sense3.jpg",
        alt: "6sense website screenshot 3",
      },
      {
        src: "/6sense/6sense4.jpg",
        alt: "6sense website screenshot 4",
      },
      {
        src: "/6sense/6sense5.jpg",
        alt: "6sense website screenshot 5",
      },
      {
        src: "/6sense/6sense6.jpg",
        alt: "6sense website screenshot 6",
      },
      {
        src: "/6sense/6sense7.jpg",
        alt: "6sense website screenshot 7",
      },
    ],
  },
];

export const experience = [
  {
    role: "Senior AI & Full Stack Engineer",
    company: "Ptolemay",
    companyUrl: "",
    location: "Walnut, CA",
    period: "Jun 2024 - May 2026",
    summary:
      "Developed AI-powered applications across frontend interfaces, backend services, and LLM integrations, translating business requirements into practical product features.",
    impact: [],
    work: [
      {
        tag: "01",
        type: "AI Engineering",
        title: "Retrieval-Augmented Generation",
        bullets: [
          "Built retrieval-augmented generation pipelines connecting document processing, semantic search, and source attribution to support knowledge discovery.",
        ],
        stack: ["RAG", "Document Processing", "Semantic Search"],
      },
      {
        tag: "02",
        type: "AI Agent Development",
        title: "Multistep Agent Workflows",
        bullets: [
          "Developed agentic workflows using tool calling, structured outputs, and API integrations to support multistep tasks.",
        ],
        stack: ["Tool Calling", "Structured Outputs", "API Integration"],
      },
      {
        tag: "03",
        type: "Performance",
        title: "Response Quality and Efficiency",
        bullets: [
          "Optimized retrieval, prompt construction, and backend processing to improve response quality, latency, and efficiency.",
        ],
        stack: ["Retrieval Optimization", "Prompt Engineering", "Backend Processing"],
      },
      {
        tag: "04",
        type: "Quality & Reliability",
        title: "Application Architecture and Reliability",
        bullets: [
          "Contributed to architecture reviews, automated testing, and production monitoring, with an emphasis on maintainability and reliable execution.",
        ],
        stack: ["Software Architecture", "Automated Testing", "Production Monitoring"],
      },
    ],
  },
  {
    role: "AI / Machine Learning Engineer",
    company: "SolidBrain",
    companyUrl: "",
    location: "Austin, TX",
    period: "Jul 2021 - May 2023",
    summary:
      "Developed machine learning workflows covering data preparation, experimentation, model evaluation, and application integration.",
    impact: [],
    work: [
      {
        tag: "01",
        type: "Machine Learning",
        title: "Reusable ML Pipelines",
        bullets: [
          "Built reusable Python pipelines for data transformation and model development, supporting consistent and reproducible experiments.",
        ],
        stack: ["Python", "Data Transformation", "Machine Learning"],
      },
      {
        tag: "02",
        type: "Model Evaluation",
        title: "Performance Evaluation and Error Analysis",
        bullets: [
          "Evaluated model performance against business requirements, using baseline comparisons and error analysis to guide improvements.",
        ],
        stack: ["Model Evaluation", "Baseline Comparisons", "Error Analysis"],
      },
      {
        tag: "03",
        type: "Applied AI",
        title: "LLM and Retrieval Prototypes",
        bullets: [
          "Explored LLM and retrieval-based prototypes during the later part of the role, assessing their usefulness for document processing and knowledge retrieval.",
        ],
        stack: ["LLMs", "Document Processing", "Knowledge Retrieval"],
      },
      {
        tag: "04",
        type: "Application Integration",
        title: "AI Workflow Integration",
        bullets: [
          "Collaborated with software engineers and business stakeholders to define acceptance criteria and integrate AI capabilities into application workflows.",
        ],
        stack: ["AI Integration", "Acceptance Criteria", "Application Workflows"],
      },
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "DataArt",
    companyUrl: "",
    location: "New York, NY",
    period: "Sep 2018 - Feb 2020",
    summary:
      "Developed full-stack application features, translating business requirements into maintainable frontend components and backend services.",
    impact: [],
    work: [
      {
        tag: "01",
        type: "Full-Stack Engineering",
        title: "Maintainable Application Development",
        bullets: [
          "Developed full-stack application features, translating business requirements into maintainable frontend components and backend services.",
        ],
        stack: ["Frontend Development", "Backend Development"],
      },
      {
        tag: "02",
        type: "API Development",
        title: "API Design and Integration",
        bullets: [
          "Designed and integrated APIs with consistent validation, error handling, and database access.",
        ],
        stack: ["APIs", "Validation", "Error Handling", "Database Integration"],
      },
      {
        tag: "03",
        type: "Performance",
        title: "Application Performance Optimization",
        bullets: [
          "Improved application performance through query optimization and more efficient backend processing.",
        ],
        stack: ["Query Optimization", "Backend Processing"],
      },
      {
        tag: "04",
        type: "Quality & Reliability",
        title: "Production Support and Delivery",
        bullets: [
          "Investigated production issues, identified root causes, and implemented fixes to improve reliability.",
          "Collaborated with product and quality assurance teams on technical planning, code reviews, testing, and releases.",
        ],
        stack: ["Root-Cause Analysis", "Code Review", "Testing", "Release Delivery"],
      },
    ],
  },
  {
    role: "Full Stack Developer",
    company: "XeoDev",
    companyUrl: "",
    location: "Orlando, FL",
    period: "Apr 2014 - Feb 2017",
    summary:
      "Developed and maintained web applications using React, Node.js, Python, and Django, implementing features across frontend and backend layers.",
    impact: [],
    work: [
      {
        tag: "01",
        type: "Frontend Development",
        title: "Responsive User Interfaces",
        bullets: [
          "Built responsive interfaces and reusable components that connected user workflows with application services.",
        ],
        stack: ["React", "Responsive Interfaces", "Reusable Components"],
      },
      {
        tag: "02",
        type: "Backend Development",
        title: "Application APIs and Business Logic",
        bullets: [
          "Implemented API endpoints supporting business logic, input validation, and database operations.",
        ],
        stack: ["Node.js", "Python", "Django", "APIs"],
      },
      {
        tag: "03",
        type: "Performance",
        title: "Application Responsiveness",
        bullets: [
          "Improved application responsiveness through frontend optimization and more efficient data retrieval.",
        ],
        stack: ["Frontend Optimization", "Data Retrieval"],
      },
      {
        tag: "04",
        type: "Quality Assurance",
        title: "Cross-Browser Quality and Releases",
        bullets: [
          "Worked with designers, developers, and testers to resolve defects, improve browser compatibility, and support application releases.",
        ],
        stack: ["Browser Compatibility", "Testing", "Release Support"],
      },
    ],
  },
];

export const skillGroups = [
  {
    label: "AI application engineering",
    items: [
      "LLM Applications",
      "RAG Pipelines",
      "Semantic Search",
      "Prompt Engineering",
      "Structured Outputs",
      "Vector Databases",
      "Multilingual NLP Pipelines",
      "Embeddings",
      "Speech-to-Text (Whisper)",
      "Image Generation (Stable Diffusion / ComfyUI)",
      "Text-to-Speech Pipelines",
      "Document Parsing & Chunking",
    ],
  },
  {
    label: "AI agent development",
    items: [
      "Tool Calling",
      "API Integration",
      "Context Management",
      "Stateful Orchestration",
      "Human-in-the-Loop Workflows",
      "Multi-Agent Workflows",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "Ollama (Local Model Orchestration)",
      "MCP (Model Context Protocol)",
      "Agent Memory Systems",
    ],
  },
  {
    label: "Model development",
    items: [
      "Data Preprocessing",
      "Feature Engineering",
      "Model Evaluation",
      "Error Analysis",
      "Fine-Tuning",
      "Dataset Curation",
      "Model Benchmarking",
      "A/B Testing for Models",
    ],
  },
  {
    label: "Backend engineering",
    items: [
      "Node.js",
      "Django",
      "FastAPI",
      "Python",
      "C#",
      ".NET / ASP.NET Core",
      "REST APIs",
      "GraphQL",
      "Backend Processing",
      "Error Handling",
      "Async Job Queues (Celery, BullMQ)",
      "WebSocket Streaming",
      "Stripe / Payment Integration",
    ],
  },
  {
    label: "Frontend engineering",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Vue.js",
      "Three.js",
      "WebGL",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Frontend / Backend Integration",
      "Responsive UI Design",
    ],
  },
  {
    label: "Architecture & reliability",
    items: [
      "Software Architecture",
      "Modular Applications",
      "Automated Testing",
      "Code Review",
      "Production Monitoring",
      "Query Optimization",
      "Application Responsiveness",
      "Docker & Containerization",
      "AWS (EC2, S3, Lambda, CloudWatch)",
      "CI/CD Pipelines",
      "Database Design (PostgreSQL, MongoDB, Redis)",
      "Incident Response & Recovery Documentation",
      "Root-Cause Debugging",
      "Load Balancing & Scalability Planning",
    ],
  },
];

export const education = [
  {
    period: "Mar 2008 - Sep 2012",
    title: "Bachelor of Engineering, AI",
    org: "Cornell University",
    detail: "",
  },
  {
    period: "Apr 2001 - Mar 2004",
    title: "Bachelor of Science, Computer Science",
    org: "University of Miami",
    detail: "",
  },
];
