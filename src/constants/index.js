import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `I’m an aspiring full stack developer with a strong passion for crafting robust and scalable web applications. While I’m at the beginning of my professional journey, I’ve been actively learning and building with front-end technologies like React and Next.js, along with back-end tools such as Node.js, MySQL, PostgreSQL, and MongoDB.

Recently, I’ve taken my learning further by exploring Cloudflare and Hono for building high-performance edge applications. I’ve also published an NPM package, experimented with webhook integrations, containerized applications using Docker, and set up CI/CD pipelines to automate deployments and improve code quality.

My goal is to continuously grow as a developer and leverage this diverse and evolving skill set to build innovative solutions that offer great user experiences and real-world impact.`;

// export const EXPERIENCES = [
//   {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   },
//   {
//     year: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//   },
// ];

export const PROJECTS = [
  {
    title: "BitCrate - A gaming console website",
    image: project1,
    description: [
      "Developed an interactive gaming console website using Next.js, TypeScript, and Three.js, delivering a futuristic 3D UI experience with smooth animations and physics-based interactions.",
      "Optimized performance using Vercel for fast deployments and Prismic CMS for dynamic content management, ensuring seamless scalability and maintainability.",
      "Enhanced user engagement by integrating Matter.js for real-time physics, improving interactivity and visual appeal, leading to a more immersive experience"
    ],

    technologies: ["Next.js", "Three.js", "React.js","TypeScript", "TailwindCSS", "Prismic", "PostgreSQL", "Prisma"],
    link: "https://bit-crate.vercel.app/"
  },
  {
    title: "BlogiFy",
    image: project2,
    description:[
      `Developed Blogify, a full-stack blog platform using TypeScript, PostgreSQL, Prisma, and TailwindCSS, with a focus on clean
       architecture and modular design`,
      `Deployed the backend on Cloudflare Workers and managed environment variables via wrangler.toml for seamless
       serverless deployment.`,
      `Published a reusable npm package with shared zod input validation schemas used across both frontend and backend for
       consistent data validation`
    ],
      
    technologies: ["React.js","TypeScript", 'Cloudflare', 'Hono',"TailwindCSS", "PostgreSQL", "Prisma"],
    link: "https://blogify-liard-eight.vercel.app/"
  },
  {
    title: "College Dashboard",
    image: project3,
    description:[
      `Developed an Attendance Portal of my college which can help faculty to check for the attendance, semester wise marks,
branch and year for a student.`,
      `This Attendance Portal also contains the records of teachers (only UI). Tech stack used is : Typescript, Tailwind CSS and
Next.js.
`,
      `Optimized performance using Vercel for fast deployments and Next.js for better optimization, folders and files structure
using App Router.
`,
      `The Focus was to make it’s UI/UX pretty and interactive using react’s chart library, different custom colors by adding them in
the tailwind’s config file` 
    ],
      
    technologies: ["Next.js", "React.js","TypeScript", "TailwindCSS", "PostgreSQL", "Prisma"],
    link: "https://attendance-app-admin-panel-yeb8.vercel.app/admin"
  },
  {
    title: "Electra - Ecommerce for buying electric stuffs",
    image: project4,
    description:[
      `Developed a smooth E-Commerce website which sells electric items with sleek design and animations`,
      `Tech stack used is : Typescript, Tailwind CSS and Next.js.`,
      `Optimized performance using Vercel for fast deployments and Next.js for better optimization, folders and files structure
using App Router.`
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Prisma"],
    link: "https://electra-ui-fogp-o1xl7tier-anuj-dubeys-projects.vercel.app/"
  },
];

export const CONTACT = {
  address: "Rohini, New Delhi",
  phoneNo: "+91 8383848256 ",
  email: "anujd2408@gmail.com",
};