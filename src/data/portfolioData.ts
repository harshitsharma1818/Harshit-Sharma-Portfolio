export interface NavItem {
  id: string;
  path: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', path: '/about', label: 'About' },
  { id: 'education', path: '/education', label: 'Education' },
  { id: 'skills', path: '/skills', label: 'Skills' },
  { id: 'projects', path: '/projects', label: 'Projects' },
  { id: 'achievements', path: '/achievements', label: 'Achievements' },
  { id: 'contact', path: '/contact', label: 'Contact' },
];

export const PERSONAL_INFO = {
  name: 'Harshit Sharma',
  role: 'B.Tech Student',
  degree: 'B.Tech in Computer Science Engineering (Core)',
  college: 'JECRC University',
  location: 'Jaipur, Rajasthan, India',
  email: 'harshit.26bcon2024@jecrcu.edu.in',
  linkedinUrl: 'https://www.linkedin.com/in/harshit-sharma-38a91b424?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  githubUrl: 'https://github.com/harshitsharma1818',
  
  eyebrow: 'B.TECH CSE • JAIPUR',
  headlinePart1: 'Curious about',
  headlinePart2: 'technology.',
  highlightedLine: 'Learning. Building. Exploring.',
  shortIntro: 'Computer Science student exploring software development and AI, with a focus on turning what I learn into practical projects and useful digital experiences.',

  aboutMe: {
    heading: 'About Me',
    subtitle: 'Curious mind. Practical approach. Continuous growth.',
    paragraphs: [
      "I’m Harshit Sharma, a B.Tech Computer Science Engineering student at JECRC University, Jaipur. I’m interested in understanding how technology works and using that knowledge to build practical digital experiences.",
      "My interests include software development, artificial intelligence, web technologies, and digital productivity. I enjoy exploring new tools, strengthening my technical foundations, and turning what I learn into projects that solve useful problems."
    ],
    details: [
      { label: 'Degree', value: 'B.Tech in Computer Science Engineering (Core)' },
      { label: 'University', value: 'JECRC University' },
      { label: 'Location', value: 'Jaipur, Rajasthan, India' },
      { label: 'Email', value: 'harshit.26bcon2024@jecrcu.edu.in' }
    ]
  },

  education: {
    degree: 'B.Tech CSE (Core)',
    college: 'JECRC University',
    location: 'Jaipur, India',
    status: 'First-Year Student',
    learningAreas: [
      {
        name: 'Programming',
        detail: 'Core computational logic, data structures, and algorithmic implementation.'
      },
      {
        name: 'Computer Science Fundamentals',
        detail: 'Computer architecture, operating systems theory, and discrete structures.'
      },
      {
        name: 'Artificial Intelligence',
        detail: 'Foundational models, intelligent agent frameworks, and applied digital literacy.'
      },
      {
        name: 'Digital Technology',
        detail: 'Modern developer toolchains, version control, and emerging tech ecosystems.'
      },
      {
        name: 'Web Development',
        detail: 'Modern interface engineering, component architectures, and web standards.'
      },
      {
        name: 'Engineering Mathematics',
        detail: 'Discrete mathematics, linear algebra fundamentals, and analytical problem solving.'
      },
      {
        name: 'Problem Solving',
        detail: 'Structured algorithmic decomposition and iterative optimization.'
      }
    ]
  }
};

export interface EducationStage {
  id: string;
  stageTitle: string;
  institution: string;
  location: string;
  qualification: string;
  description: string;
  statusBadge: string;
}

export const EDUCATION_TIMELINE: EducationStage[] = [
  {
    id: 'undergrad',
    stageTitle: 'Undergraduate Education — First Year',
    qualification: 'B.Tech in Computer Science and Engineering (CSE)',
    institution: 'JECRC University, Jaipur',
    location: 'Jaipur, Rajasthan, India',
    description: 'Currently pursuing first year of B.Tech in Computer Science and Engineering (CSE). Developing strong foundations in programming, computational problem-solving, discrete mathematics, and artificial intelligence.',
    statusBadge: 'First Year'
  },
  {
    id: 'senior-secondary',
    stageTitle: 'Senior Secondary Education — Class 12',
    qualification: 'Completed Class 12',
    institution: 'Sine International School',
    location: 'Jaipur, Rajasthan, India',
    description: 'Completed Class 12 education with focus on science, mathematics, and analytical reasoning, establishing academic readiness for engineering study.',
    statusBadge: 'Completed'
  },
  {
    id: 'school',
    stageTitle: 'School Education — Class 1 to Class 10',
    qualification: 'Completed Class 1 to Class 10',
    institution: 'Warren Academy School',
    location: 'Jaipur, Rajasthan, India',
    description: 'Completed foundational primary and secondary schooling from Class 1 to Class 10, establishing strong academic discipline, analytical fundamentals, and early curiosity in computers and technology.',
    statusBadge: 'Completed'
  }
];

export interface TechnicalInterest {
  id: string;
  num: string;
  title: string;
  focus: string;
  description: string;
  iconName: string;
}

export const TECHNICAL_INTERESTS_STATEMENT =
  "I love exploring tech gadgets, AI models, and futuristic AI assistants like JARVIS. I’m interested in building practical applications, personal portfolios, AI-powered websites, and student productivity tools while learning how technology can solve real-world problems.";

export const TECHNICAL_INTERESTS: TechnicalInterest[] = [
  {
    id: 'ai-assistants',
    num: '01',
    title: 'AI Models & Futuristic Assistants',
    focus: 'LLMs & JARVIS-Inspired AI',
    description: 'Exploring modern AI models, agentic workflows, and futuristic AI assistants like JARVIS that can automate tasks and augment human problem-solving.',
    iconName: 'Brain'
  },
  {
    id: 'ai-websites',
    num: '02',
    title: 'AI-Powered Websites & Web Apps',
    focus: 'Applied APIs & Modern Interfaces',
    description: 'Building practical web applications and intelligent interfaces by integrating modern AI APIs with React, TypeScript, and contemporary web tooling.',
    iconName: 'Globe'
  },
  {
    id: 'programming',
    num: '03',
    title: 'Programming & Problem-Solving',
    focus: 'Logic, C, C++, Python',
    description: 'Strengthening core algorithmic thinking, computational problem-solving, and procedural foundations to build real-world software that works reliably.',
    iconName: 'Code2'
  },
  {
    id: 'portfolios',
    num: '04',
    title: 'Personal Portfolios & Experiences',
    focus: 'Editorial Design & Clean UX',
    description: 'Designing distinctive, high-craft digital portfolios and web experiences that communicate personal identity and technical projects with clarity.',
    iconName: 'Sparkles'
  },
  {
    id: 'productivity',
    num: '05',
    title: 'Student Productivity Tools',
    focus: 'Organization & Workflow Automation',
    description: 'Creating focused digital tools for engineering students to track coding practice, milestone progress, technical reading, and study habits.',
    iconName: 'Layers'
  },
  {
    id: 'gadgets-fundamentals',
    num: '06',
    title: 'Tech Gadgets & CS Fundamentals',
    focus: 'Hardware, Architecture & Theory',
    description: 'Exploring the latest tech gadgets and devices while building deep foundations in computer systems, architecture, and core computing theory.',
    iconName: 'Cpu'
  }
];

export type SkillStage = 'Building Foundations' | 'Learning' | 'Practicing' | 'Exploring';

export interface SkillCategoryData {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  stageBadge: string;
  iconName: 'Sparkles' | 'Globe' | 'Bot' | 'Compass';
  skills: string[];
  keyHighlights: {
    label: string;
    detail: string;
  }[];
}

export const SKILL_EXPLORATION_CATEGORIES: SkillCategoryData[] = [
  {
    id: 'prompt-engineering-ai',
    num: '01',
    title: 'Prompt Engineering & AI',
    subtitle: 'Structuring reasoning & instruction tuning',
    description: 'Developing skills in structured prompt writing, refining AI instructions, and exploring AI models.',
    stageBadge: 'Active Development',
    iconName: 'Sparkles',
    skills: [
      'Structured Prompt Writing',
      'Refining AI Instructions',
      'Exploring AI Models',
      'Prompt Decomposition',
      'Iterative Instruction Tuning',
      'Context Framing'
    ],
    keyHighlights: [
      {
        label: 'Structured Prompt Writing',
        detail: 'Formulating clear instructions, step-by-step reasoning constraints, and deterministic output formatting.'
      },
      {
        label: 'Refining AI Instructions',
        detail: 'Iteratively refining system prompts, testing edge cases, and evaluating model alignment.'
      },
      {
        label: 'Exploring AI Models',
        detail: 'Experimenting with modern LLMs, reasoning models, and understanding differences across architectures.'
      }
    ]
  },
  {
    id: 'web-development',
    num: '02',
    title: 'Web Development',
    subtitle: 'Modern interfaces & personal web presence',
    description: 'Learning website development, personal portfolio creation, and website design.',
    stageBadge: 'Foundational Learning',
    iconName: 'Globe',
    skills: [
      'Website Development',
      'Personal Portfolio Creation',
      'Website Design',
      'Semantic HTML Structure',
      'Modern CSS & Responsive Layouts',
      'Component UI Foundations'
    ],
    keyHighlights: [
      {
        label: 'Website Development',
        detail: 'Learning clean semantic structure, fluid box model layouts, and modern front-end fundamentals.'
      },
      {
        label: 'Personal Portfolio Creation',
        detail: 'Building and refining this multi-page personal portfolio to showcase my learning journey with responsive precision.'
      },
      {
        label: 'Website Design',
        detail: 'Studying minimal editorial layouts, visual hierarchy, dark mode contrast, and typography pairing.'
      }
    ]
  },
  {
    id: 'ai-applications-automation',
    num: '03',
    title: 'AI Applications & Automation',
    subtitle: 'Intelligent tooling & assistant workflows',
    description: 'Exploring AI-powered websites, JARVIS-inspired intelligent assistants, and student productivity tools.',
    stageBadge: 'Hands-on Exploration',
    iconName: 'Bot',
    skills: [
      'AI-Powered Websites',
      'JARVIS-Inspired Assistants',
      'Student Productivity Tools',
      'Workflow Automation',
      'API Exploration',
      'Task Assistance'
    ],
    keyHighlights: [
      {
        label: 'AI-Powered Websites',
        detail: 'Investigating how modern web experiences can be augmented with dynamic AI intelligence and helpful interactions.'
      },
      {
        label: 'JARVIS-Inspired Assistants',
        detail: 'Exploring intelligent conversational assistants inspired by JARVIS to automate everyday routines and query answering.'
      },
      {
        label: 'Student Productivity Tools',
        detail: 'Designing focused utilities for engineering students to organize coursework, habit tracking, and study workflows.'
      }
    ]
  },
  {
    id: 'technology-creative-problem-solving',
    num: '04',
    title: 'Technology & Creative Problem-Solving',
    subtitle: 'Hardware curiosity & idea prototyping',
    description: 'Exploring tech gadgets, emerging technologies, practical applications, and turning ideas into useful projects.',
    stageBadge: 'Continuous Curiosity',
    iconName: 'Compass',
    skills: [
      'Tech Gadgets',
      'Emerging Technologies',
      'Practical Applications',
      'Turning Ideas into Projects',
      'Computational Thinking',
      'Curiosity-Driven Building'
    ],
    keyHighlights: [
      {
        label: 'Tech Gadgets & Hardware',
        detail: 'Staying curious about consumer gadgets, computing devices, and how hardware innovations shape daily productivity.'
      },
      {
        label: 'Emerging Technologies',
        detail: 'Tracking new developments across software engineering, artificial intelligence, and developer ecosystems.'
      },
      {
        label: 'Turning Ideas into Projects',
        detail: 'Bridging conceptual understanding with practical software experiments, converting curiosity into functioning solutions.'
      }
    ]
  }
];

export interface SkillItem {
  id: string;
  name: string;
  category: 'PROGRAMMING' | 'WEB' | 'AI & DIGITAL';
  stage: SkillStage;
  description: string;
}

export const SKILLS_CATEGORIES = ['PROGRAMMING', 'WEB', 'AI & DIGITAL'] as const;

export const SKILLS_LIST: SkillItem[] = [
  // PROGRAMMING
  {
    id: 'c',
    name: 'C',
    category: 'PROGRAMMING',
    stage: 'Building Foundations',
    description: 'Developing low-level computing intuition through procedural syntax, pointer manipulation, and memory fundamentals.'
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'PROGRAMMING',
    stage: 'Building Foundations',
    description: 'Studying object-oriented principles, Standard Template Library (STL), and algorithmic efficiency.'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'PROGRAMMING',
    stage: 'Practicing',
    description: 'Writing scripts for algorithmic problem solving, text processing, and prototyping AI workflows.'
  },

  // WEB
  {
    id: 'html',
    name: 'HTML',
    category: 'WEB',
    stage: 'Building Foundations',
    description: 'Crafting clean, accessible, and standards-compliant semantic document architecture.'
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'WEB',
    stage: 'Practicing',
    description: 'Mastering modern styling systems, Flexbox, CSS Grid, custom properties, and fluid typography.'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'WEB',
    stage: 'Learning',
    description: 'Exploring modern ECMAScript, asynchronous event loops, DOM manipulation, and functional patterns.'
  },
  {
    id: 'webdev',
    name: 'Web Development',
    category: 'WEB',
    stage: 'Learning',
    description: 'Assembling component-based web interfaces using React, TypeScript, and modern build tooling.'
  },

  // AI & DIGITAL
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    category: 'AI & DIGITAL',
    stage: 'Exploring',
    description: 'Understanding machine learning paradigms, prompt reasoning patterns, and practical automation tools.'
  },
  {
    id: 'genai',
    name: 'Generative AI',
    category: 'AI & DIGITAL',
    stage: 'Exploring',
    description: 'Leveraging LLMs for code synthesis, research synthesis, creative ideation, and digital productivity.'
  },
  {
    id: 'productivity',
    name: 'Digital Productivity',
    category: 'AI & DIGITAL',
    stage: 'Practicing',
    description: 'Structuring knowledge bases, utilizing Git version control, and adopting disciplined development workflows.'
  }
];

export interface ProjectItem {
  id: string;
  num: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  status: 'COMPLETED' | 'IN PROGRESS' | 'COMING SOON';
  liveUrl?: string;
}

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'p-01',
    num: '01',
    title: 'Personal Portfolio Website',
    shortDescription: 'A multi-page editorial portfolio created to chronicle my undergraduate CSE journey. Built with React, TypeScript, React Router, Tailwind CSS, and Framer Motion.',
    technologies: ['React', 'TypeScript', 'React Router', 'Tailwind CSS', 'Framer Motion'],
    status: 'COMPLETED',
    liveUrl: '/'
  },
  {
    id: 'p-02',
    num: '02',
    title: 'AI Website Project',
    shortDescription: 'An interactive exploration of artificial intelligence concepts, integrating modern API workflows to help students grasp challenging engineering topics.',
    technologies: ['Python', 'Generative AI APIs', 'React', 'Tailwind CSS'],
    status: 'IN PROGRESS'
  },
  {
    id: 'p-03',
    num: '03',
    title: 'Student Productivity Project',
    shortDescription: 'A focused digital organization tool crafted for engineering students to track coding practice, semester milestones, and technical reading.',
    technologies: ['JavaScript', 'HTML5', 'Modern CSS', 'Local Storage'],
    status: 'COMING SOON'
  }
];

export interface AchievementCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export const ACHIEVEMENTS_DATA: AchievementCategory[] = [
  {
    id: 'certifications',
    title: 'Certifications',
    description: 'Formal technical certifications and professional coursework.',
    items: ['More milestones coming soon.']
  },
  {
    id: 'courses',
    title: 'Courses',
    description: 'Completed technical specialization courses and university workshops.',
    items: ['Digital Data & AI Literacy (Ongoing Academic Coursework)', 'More milestones coming soon.']
  },
  {
    id: 'hackathons',
    title: 'Hackathons',
    description: 'Collaborative coding competitions, sprints, and engineering hackathons.',
    items: ['More milestones coming soon.']
  },
  {
    id: 'awards',
    title: 'Awards',
    description: 'Academic honors, merit recognitions, and university distinctions.',
    items: ['More milestones coming soon.']
  },
  {
    id: 'other',
    title: 'Other Milestones',
    description: 'Community contributions, technical leadership, and creative initiatives.',
    items: ['More milestones coming soon.']
  }
];
