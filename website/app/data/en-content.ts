import type { Course, CoursePageData } from "./content";

export const site = {
  name: "Promptly",
  primaryMessage: "AI for everyone.",
  supportingMessage:
    "Practical training to understand AI, use it well, and improve your everyday work, productivity, and creative process.",
  vision: "To become Mongolia's most trusted practical AI education brand.",
  mission:
    "Make artificial intelligence understandable, practical, and accessible to everyone through education, tools, and community.",
};

export const nav = [
  { label: "Home", target: "/" },
  { label: "Courses", target: "/courses" },
  { label: "Why Promptly", target: "/#why-promptly" },
  { label: "About", target: "/about" },
  { label: "Content", target: "/resources" },
  { label: "FAQ", target: "/#faq" },
];

export const hero = {
  eyebrow: "Practical AI training in Mongolian",
  headline: "AI for everyone.",
  description:
    "Practical training to understand AI, use it well, and improve your everyday work, productivity, and creative process.",
  supportingPoints: ["In Mongolian", "Hands-on practice", "Beginner and intermediate"],
  primaryCta: { label: "Explore courses", target: "/courses" },
  secondaryCta: { label: "Choose your level", target: "/#courses" },
};

export const problem = {
  headline: "Using AI but not getting the results you want?",
  cards: [
    {
      number: "01",
      title: "Not sure where to start",
      description:
        "There are many AI tools, but it's hard to know which one fits your needs.",
    },
    {
      number: "02",
      title: "Getting generic answers",
      description:
        "Without clear context and a well-written prompt, answers don't match your needs.",
    },
    {
      number: "03",
      title: "Can't apply it to real work",
      description:
        "You experiment with AI but struggle to turn it into a consistent daily workflow.",
    },
  ],
  transition:
    "Promptly doesn't just introduce AI tools. We build the skill to understand AI, use it well, and integrate it systematically into your work.",
};

export const courses: Course[] = [
  {
    slug: "beginner",
    name: "Promptly Beginner",
    status: "available",
    tagline: "Understand AI the right way from the start.",
    description:
      "A practical course for people with little AI knowledge or who don't know where to begin.",
    bestFor: [
      "Barely used AI before",
      "Can't get good answers from ChatGPT",
      "Want to use AI for work and study",
    ],
    topics: [
      "Core AI concepts",
      "ChatGPT and essential AI tools",
      "Prompt writing basics",
      "Text, research, images, and content",
      "Real everyday use cases",
    ],
    cta: { label: "View Beginner course", target: "/courses/beginner" },
  },
  {
    slug: "intermediate",
    name: "Promptly Intermediate",
    status: "available",
    tagline: "Make AI part of your work system.",
    description:
      "For people who already use AI and want to learn advanced prompts, workflows, and automation.",
    bestFor: [
      "Use AI regularly",
      "Want to write more advanced prompts",
      "Aiming to build workflows and automation",
      "Interested in using AI for teams and business",
    ],
    topics: [
      "Advanced prompting",
      "Context and reusable prompt systems",
      "AI-assisted research",
      "Productivity workflows",
      "Automation fundamentals",
      "Team and business use cases",
    ],
    cta: { label: "View Intermediate course", target: "/courses/intermediate" },
  },
  {
    slug: "expert",
    name: "Promptly Expert",
    status: "coming_soon",
    tagline: "Build and optimize AI systems.",
    description:
      "An advanced course on AI systems, agents, optimization, and business implementation.",
    topics: [
      "AI agents",
      "System design",
      "Advanced automation",
      "Optimization",
      "Business implementation",
    ],
    cta: { label: "Join the waitlist", target: "/courses/expert" },
  },
];

export const outcomes = {
  headline: "What will you be able to do after the course?",
  items: [
    "Choose AI tools that fit your goals",
    "Write clearer, more effective prompts",
    "Process emails, research, plans, and content faster",
    "Review and improve AI outputs",
    "Build an AI workflow tailored to your work",
    "Use AI as a consistent work system, not an experiment",
  ],
};

export const howItWorks = {
  headline: "How does the course work?",
  steps: [
    {
      number: "01",
      title: "Choose your level",
      description: "Pick the course that matches your current knowledge and goals.",
    },
    {
      number: "02",
      title: "Join the sessions",
      description:
        "Learn through clear explanations, live demonstrations, and practical examples.",
    },
    {
      number: "03",
      title: "Do real exercises",
      description: "Complete exercises matched to your own work and needs.",
    },
    {
      number: "04",
      title: "Get materials",
      description: "Use prompt templates, checklists, and implementation materials.",
    },
    {
      number: "05",
      title: "Apply it at work",
      description: "Integrate what you learned into your daily workflow.",
    },
  ],
  placeholders: [
    { label: "Course format", value: "[ONLINE_OR_OFFLINE]" },
    { label: "Total duration", value: "[COURSE_DURATION]" },
    { label: "Class capacity", value: "[CLASS_CAPACITY]" },
    { label: "Material replay", value: "[REPLAY_POLICY]" },
    { label: "Certificate", value: "[CERTIFICATE_INFORMATION]" },
  ],
};

export const curriculum = {
  headline: "Course curriculum",
  tabs: [
    {
      label: "Beginner",
      target: "/courses/beginner",
      ctaLabel: "View full Beginner curriculum",
      modules: [
        "Module 01 — Understanding AI",
        "Module 02 — ChatGPT and essential tools",
        "Module 03 — Prompt writing basics",
        "Module 04 — Research and information processing",
        "Module 05 — Content, images, and presentations",
        "Module 06 — Everyday AI workflow",
      ],
    },
    {
      label: "Intermediate",
      target: "/courses/intermediate",
      ctaLabel: "View full Intermediate curriculum",
      modules: [
        "Module 01 — Context and advanced prompting",
        "Module 02 — Reusable prompt systems",
        "Module 03 — AI-assisted research",
        "Module 04 — Content and productivity workflows",
        "Module 05 — Automation fundamentals",
        "Module 06 — Personal AI operating system",
      ],
    },
  ],
};

export const whyPromptly = {
  headline: "Why Promptly?",
  items: [
    {
      title: "In Mongolian",
      description:
        "AI terminology explained clearly, with examples close to Mongolian everyday use.",
    },
    {
      title: "Practical application",
      description:
        "Every session focuses on real work, exercises, and applicable outcomes.",
    },
    {
      title: "Regularly updated content",
      description:
        "Course content is updated in step with changes in AI tools.",
    },
    {
      title: "Skills, not tools",
      description:
        "We don't make you memorize one platform. We teach you how to adapt to any new AI tool.",
    },
  ],
};

export const founders = {
  headline: "Who is building Promptly?",
  description:
    "Promptly is built by a two-person team that uses AI in real work, marketing, creative production, and productivity.",
  members: [
    {
      name: "[FOUNDER_1_NAME]",
      role: "[FOUNDER_1_ROLE]",
      bio: "[FOUNDER_1_SHORT_BIO]",
      linkedin: "[FOUNDER_1_LINKEDIN]",
    },
    {
      name: "[FOUNDER_2_NAME]",
      role: "[FOUNDER_2_ROLE]",
      bio: "[FOUNDER_2_SHORT_BIO]",
      linkedin: "[FOUNDER_2_LINKEDIN]",
    },
  ],
};

export const leadMagnet = {
  headline: "20 prompts to start with AI",
  description:
    "A free starter pack in Mongolian for email, research, content, planning, and productivity.",
  cta: "Get it free",
  success: "Thank you. The starter pack has been sent to your email.",
  namePlaceholder: "Your name",
  emailPlaceholder: "Email address",
};

export const resourcesPreview = {
  headline: "Learn for free with Promptly.",
  items: [
    { title: "What is AI?", type: "Reel or article" },
    { title: "3 ways to get better answers from ChatGPT", type: "Reel or carousel" },
    { title: "5 AI workflows for your job", type: "Article or video" },
  ],
  primaryCta: { label: "Follow on Instagram", target: "[INSTAGRAM_URL]" },
  secondaryCta: { label: "View all content", target: "/resources" },
};

export const proof = {
  headline: "Student results",
  launchNote:
    "Promptly is currently preparing its first courses. We don't add fake testimonials — real results from our first students will be published here.",
  launchOptions: [
    "Pilot class feedback",
    "Free workshop participant feedback",
    "Before-and-after work examples",
    "Real AI workflow demonstrations",
    "Founder-created case studies",
  ],
};

export const faq = {
  headline: "Frequently asked questions",
  items: [
    {
      question: "Do I need prior AI knowledge?",
      answer:
        "The Beginner course requires no prior knowledge. The Intermediate course suits people who have used AI at a basic level.",
    },
    {
      question: "What's the difference between Beginner and Intermediate?",
      answer:
        "Beginner focuses on AI fundamentals and everyday use. Intermediate focuses on advanced prompting, workflows, and automation.",
    },
    {
      question: "Is the course online or in person?",
      answer: "[COURSE_DELIVERY_FORMAT]",
    },
    {
      question: "How long is the course?",
      answer: "[COURSE_DURATION]",
    },
    {
      question: "Do I need to bring my own computer?",
      answer: "[DEVICE_REQUIREMENTS]",
    },
    {
      question: "Do I need a paid AI subscription?",
      answer: "[SUBSCRIPTION_REQUIREMENTS]",
    },
    {
      question: "Can I rewatch the course materials?",
      answer: "[REPLAY_POLICY]",
    },
    {
      question: "Do you provide a certificate?",
      answer: "[CERTIFICATE_INFORMATION]",
    },
    {
      question: "Can we get training for our organization?",
      answer:
        "Yes. Please send a request through the contact section about training tailored to your organization's needs.",
    },
  ],
};

export const finalCta = {
  headline: "Ready to stop just watching AI and start using it?",
  primaryCta: { label: "Choose Beginner", target: "/courses/beginner" },
  secondaryCta: { label: "Choose Intermediate", target: "/courses/intermediate" },
};

export const coursePages: Record<string, CoursePageData> = {
  beginner: {
    slug: "beginner",
    levelLabel: "Beginner level",
    name: "Promptly Beginner",
    headline: "Understand AI the right way from the start.",
    description:
      "A practical course for people with little AI knowledge or who don't know where to begin.",
    bestFor: [
      "Barely used AI before",
      "Can't get good answers from ChatGPT",
      "Want to use AI for work and study",
    ],
    outcomes: [
      "Understand the core principles of AI and ChatGPT",
      "Choose the AI tools that fit you",
      "Write solid basic prompts",
      "Use AI for research, text, and content",
      "Start your everyday AI workflow",
    ],
    modules: curriculum.tabs[0].modules,
    primaryCta: "Register for Beginner",
    waitlist: false,
  },
  intermediate: {
    slug: "intermediate",
    levelLabel: "Intermediate level",
    name: "Promptly Intermediate",
    headline: "Make AI part of your work system.",
    description:
      "For people who already use AI and want to learn advanced prompts, workflows, and automation.",
    bestFor: [
      "Use AI regularly",
      "Want to write more advanced prompts",
      "Aiming to build workflows and automation",
      "Interested in using AI for teams and business",
    ],
    outcomes: [
      "Master advanced prompting techniques",
      "Build reusable prompt systems",
      "Conduct AI-assisted research",
      "Optimize your productivity workflows",
      "Gain foundations to implement automation",
    ],
    modules: curriculum.tabs[1].modules,
    primaryCta: "Register for Intermediate",
    waitlist: false,
  },
  expert: {
    slug: "expert",
    levelLabel: "Advanced level",
    name: "Promptly Expert",
    headline: "Promptly Expert is coming soon.",
    description:
      "An advanced course on AI systems, agents, optimization, and business implementation. Launch date, price, and registration will be announced soon.",
    bestFor: [],
    outcomes: [],
    modules: [
      "AI agents",
      "System design",
      "Advanced automation",
      "Optimization",
      "Business implementation",
    ],
    primaryCta: "Join the waitlist",
    waitlist: true,
  },
};

export const registration = {
  title: "Register for a course",
  fields: {
    name: "Full name",
    email: "Email",
    phone: "Phone number",
    course: "Selected course",
    level: "Your AI experience level",
    expectation: "What you hope to gain from the course",
  },
  levelOptions: ["Haven't used AI", "Use it occasionally", "Use it regularly", "Use it systematically at work"],
  submit: "Submit registration",
  success: "Your registration has been received. The Promptly team will contact you soon.",
};

export const waitlist = {
  title: "Waitlist",
  description: "Register to be the first to know when the Expert course opens.",
  emailPlaceholder: "Email address",
  submit: "Join",
  success: "Thank you. You've been added to the waitlist.",
};

export const contact = {
  headline: "Contact us",
  description:
    "Write to us about courses, organizational training, or any other questions.",
  email: "[CONTACT_EMAIL]",
  form: {
    name: "Your name",
    email: "Email address",
    message: "Message",
    submit: "Send",
    success: "Message sent. We'll reply soon.",
  },
};

export const footerCols = [
  {
    title: "Courses",
    links: [
      { label: "Beginner", target: "/courses/beginner" },
      { label: "Intermediate", target: "/courses/intermediate" },
      { label: "Expert — Coming soon", target: "/courses/expert" },
    ],
  },
  {
    title: "Promptly",
    links: [
      { label: "About", target: "/about" },
      { label: "Content", target: "/resources" },
      { label: "AI Literacy test", target: "/test" },
      { label: "Newsletter", target: "/#free-resource" },
      { label: "Contact", target: "/contact" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", target: "[INSTAGRAM_URL]" },
      { label: "Facebook", target: "[FACEBOOK_URL]" },
      { label: "YouTube", target: "[YOUTUBE_URL]" },
      { label: "LinkedIn", target: "[LINKEDIN_URL]" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", target: "/privacy" },
      { label: "Terms and conditions", target: "/terms" },
      { label: "Refund policy", target: "/refund-policy" },
    ],
  },
];

export const socials = [
  { label: "Instagram", target: "[INSTAGRAM_URL]" },
  { label: "Facebook", target: "[FACEBOOK_URL]" },
  { label: "YouTube", target: "[YOUTUBE_URL]" },
  { label: "LinkedIn", target: "[LINKEDIN_URL]" },
];

export const legal = {
  privacy: {
    title: "Privacy policy",
    description: "How Promptly collects, uses, and protects your personal information.",
  },
  terms: {
    title: "Terms and conditions",
    description: "The basic terms for using the Promptly website and courses.",
  },
  refund: {
    title: "Refund policy",
    description: "The conditions and process for refunding course payments.",
  },
};
