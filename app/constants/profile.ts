export const introduction: string = `
I have 8+ years of professional experience as a Front-end and Full-Stack Developer, primarily working with MERN and MEAN stacks (MongoDB, Express.js, Angular, React.js, Node.js, Next.js). My expertise is about 70% frontend and 30% backend, with a strong focus on building scalable, performant, and user-friendly applications.

On the frontend, I specialize in React, Next.js, and Angular, ensuring responsive UI/UX using Tailwind CSS, Redux for state management, and component-based architectures. On the backend, I have experience working with Node.js, Express, and FastAPI (Python) for API development, and I use GraphQL and REST APIs to efficiently handle data.

Beyond development, I have a strong understanding of CI/CD pipelines and cloud infrastructure. I have experience setting up Jenkins, GitHub Actions, and Docker/Kubernetes to ensure smooth deployments. I’ve worked with AWS services like EC2, EKS, and S3 to manage scalable applications efficiently.
`;

export type ProfileExperience = {
  title: string;
  company: string;
  location?: string;
  period: string; // e.g., Jan 2023 – Present
  start?: string; // e.g., 2023-01
  end?: string;   // e.g., 2024-08 or Present
  bullets: string[];
  icon: string;
  iconBg?: string;
  slug?: string;
  details?: string;
};

export const experiences: ProfileExperience[] = [
  {
    title: "Full Stack Developer",
    company: "Franklin Templeton",
    location: "San Mateo, CA",
    period: "Jan 2023 – Present",
    start: "2023-01",
    end: "Present",
    slug: "franklin-templeton",
    details:
      "At Franklin Templeton, I delivered an Investment Dashboard enabling portfolio analytics for global investors. I built a responsive UI with Next.js, Tailwind CSS, and TypeScript; integrated Recharts for visualizations; managed state with Redux and secured auth with NextAuth. I developed REST & GraphQL APIs using FastAPI (Python) and Node.js, and automated CI/CD through Jenkins and GitHub Actions. Deployments ran on AWS (EC2, EKS, S3) with Docker and Kubernetes for scalability and reliability.",
    bullets: [
      "Developed and enhanced an Investment Dashboard using Next.js and TypeScript for fast, scalable UX.",
      "Built and optimized backend with FastAPI (Python) and GraphQL for efficient, secure APIs.",
      "Designed responsive UI with Tailwind CSS; integrated Recharts for interactive analytics.",
      "Managed state with Redux; integrated NextAuth for secure authentication.",
      "Designed and maintained CI/CD pipelines with Jenkins and GitHub Actions.",
      "Containerized and orchestrated with Docker and Kubernetes; deployed on AWS (EC2, EKS, S3).",
      "Implemented Cypress E2E testing; contributed in Agile ceremonies and code reviews.",
    ],
    icon: "/web.webp",
    iconBg: "hsl(var(--color-black-100))",
  },
  {
    title: "Full Stack Developer",
    company: "American Express (AMEX)",
    location: "Palo Alto, CA",
    period: "Jul 2021 – Dec 2022",
    start: "2021-07",
    end: "2022-12",
    slug: "american-express",
    details:
      "Contributed across the MERN stack modernizing payments platform features. Implemented JWT authentication, optimized MongoDB via schema design and Redis caching, and improved developer experience with Babel/Webpack pipelines in an Agile team.",
    bullets: [
      "Delivered MERN full-stack features; implemented React new lifecycle patterns and Error Boundaries.",
      "Built SPAs with React Router; optimized state with Redux, redux-thunk, and related tooling.",
      "Developed MongoDB schemas and queries; implemented JWT-based auth.",
      "Built Express controllers with Mongoose; improved performance with Redis caching.",
      "Used Babel and Webpack for modern builds; followed Agile/Scrum processes.",
    ],
    icon: "/web.webp",
    iconBg: "hsl(var(--color-black-100))",
  },
  {
    title: "React Developer",
    company: "UnitedHealth Group",
    location: "Hayward, CA",
    period: "Mar 2020 – Jun 2021",
    start: "2020-03",
    end: "2021-06",
    slug: "unitedhealth-group",
    details:
      "Built SPAs with React and integrated Express/MongoDB APIs. Implemented real-time features with Socket.IO and ZMQ and ensured quality with Jasmine/Mocha/Chai tests.",
    bullets: [
      "Built SPAs with React; implemented services, controllers, and reusable components.",
      "Developed Express.js APIs with MongoDB persistence; used Redis for caching.",
      "Used Socket.IO and ZMQ for real-time feeds; wrote unit tests with Jasmine/Mocha/Chai.",
      "Implemented responsive UIs with HTML5/CSS3/Bootstrap; tracked work in JIRA.",
    ],
    icon: "/web.webp",
    iconBg: "hsl(var(--color-black-100))",
  },
  {
    title: "UI Developer",
    company: "Whitebox Learning, Inc.",
    location: "India",
    period: "May 2018 – Dec 2019",
    start: "2018-05",
    end: "2019-12",
    slug: "whitebox-learning",
    details:
      "Built admin UI and data visualizations with jQuery/UI; ensured W3C-compliant, cross-browser UX and AJAX-powered integrations.",
    bullets: [
      "Created printable chart reports and interactive UI with jQuery and jQuery UI components.",
      "Implemented admin pages; ensured W3C compliance and cross-browser compatibility.",
      "Integrated backend via AJAX; optimized responsiveness and UX.",
    ],
    icon: "/web.webp",
    iconBg: "hsl(var(--color-black-100))",
  },
  {
    title: "UI Developer",
    company: "Soft Bridge Technologies",
    location: "India",
    period: "May 2016 – Apr 2018",
    start: "2016-05",
    end: "2018-04",
    slug: "soft-bridge-technologies",
    details:
      "Redesigned e-commerce UI and implemented responsive, cross-browser features using AngularJS, HTML5, CSS3, and JavaScript.",
    bullets: [
      "Redesigned e-commerce UI with HTML5, CSS3, AngularJS, and JavaScript.",
      "Implemented validation, AJAX, and cross-browser fixes; improved responsive layouts.",
      "Built reusable CSS and JavaScript modules; collaborated with designers for pixel-true UI.",
    ],
    icon: "/web.webp",
    iconBg: "hsl(var(--color-black-100))",
  },
];

export type ProfileProject = {
  name: string;
  company: string;
  location?: string;
  role: string;
  period: string; // e.g., 2023 – Present
  start?: string; // e.g., 2023-01
  end?: string;   // e.g., 2024-08 or Present
  description: string;
  details?: string;
  slug: string;
  tags: { name: string; color: string }[];
  image: string;
  deploy_link: string;
  platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web";
  source_code_link?: string;
};

export const projectsIntro: string = `
A selection of projects reflecting my stack and impact, including finance-focused analytics platforms and modern, scalable UIs.
`;

export const projects: ProfileProject[] = [
  {
    name: "Investment Dashboard",
    company: "Franklin Templeton",
    location: "San Mateo, CA",
    role: "Full Stack Developer",
    period: "2023 – Present",
    start: "2023-01",
    end: "Present",
    slug: "franklin-templeton-investment-dashboard",
    description:
      "Platform for global investors to analyze portfolios and make informed decisions.",
    details:
      "Built a responsive UI with Next.js, Tailwind CSS, and TypeScript; managed state with Redux; integrated Recharts for interactive analytics. Developed and optimized REST & GraphQL APIs using FastAPI (Python) and Node.js; integrated NextAuth for secure authentication. Automated CI/CD with Jenkins and GitHub Actions; containerized with Docker and orchestrated via Kubernetes; deployed on AWS (EC2, EKS, S3).",
    tags: [
      { name: "next", color: "blue-text-gradient" },
      { name: "typescript", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "redux", color: "pink-text-gradient" },
      { name: "recharts", color: "orange-text-gradient" },
      { name: "fastapi", color: "orange-text-gradient" },
      { name: "graphql", color: "green-text-gradient" },
      { name: "docker", color: "orange-text-gradient" },
      { name: "kubernetes", color: "orange-text-gradient" },
      { name: "aws", color: "green-text-gradient" },
    ],
    image: "/projectimg/issuetracker.png",
    deploy_link: "#",
    platform: "Web",
  },
  {
    name: "Payments Platform Enhancements",
    company: "American Express",
    location: "Palo Alto, CA",
    role: "Full Stack Developer",
    period: "2021 – 2022",
    start: "2021-07",
    end: "2022-12",
    slug: "amex-payments-platform",
    description:
      "Enhanced MERN-based platform with secure auth, optimized state, and scalable APIs.",
    details:
      "Implemented new features across the MERN stack with React Router and Redux; introduced JWT-based auth and improved MongoDB performance via schema tuning and Redis caching. Adopted modern build tooling (Babel, Webpack) and Agile workflows.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "redux", color: "pink-text-gradient" },
      { name: "node", color: "orange-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "jwt", color: "orange-text-gradient" },
    ],
    image: "/projectimg/mern.png",
    deploy_link: "#",
    platform: "Web",
  },
];


