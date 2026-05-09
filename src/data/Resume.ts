const summary = `
Web Developer with 5+ years of experience in Laravel and Vue.
Strong skill in Typescript and PHP, also interested in Game Development and Rust Programming Languages.
Focused on clean architecture.
`;

const workExperience = [
  {
    title: 'Monas Jas Hujan',
    location: 'Solo',
    job: 'Web Developer (Freelance)',
    time: 'April 2025 - May 2025',
    description: "As an Web Developer designing and building a company profile based on the client requirement along with content management system.",
    link: "https://monasjashujan.com/",
    tags: ["PHP", "Typescript", "Vue", "Laravel", "Tailwind"],
    items: [
      "Evaluating and optimizing the client requirement",
      "Building High-quality Company Profile based on Client Requirement",
      "Deploy production code into a server hosting",
    ],
  },
  {
    title: 'Universitas Muhammadiyah Madiun (Ummad)',
    location: 'Madiun',
    job: 'Web Developer (Freelance)',
    time: 'January 2025 - March 2025',
    description: "Helped Redesign Ummad's website from old looking website from 2006 to a more modern look.",
    link: "https://ummad.ac.id/",
    tags: ["PHP", "Wordpress"],
    items: [
      "Helping on redesigning UI into more modern look",
      "Improving SEO up to 40%"
    ],
  },
  {
    title: 'Fibercon',
    location: 'Solo',
    job: 'Web Developer (Freelance)',
    time: 'April 2024 - August 2024',
    description: "Building a internet billing application capable of handling multiple connection and accounting system, along with multiple user admin, technician, and customer.",
    link: null,
    tags: ["PHP", "Typescript", "Vue", "Laravel", "Tailwind", "Mikrotik"],
    items: [
      "Evaluating and optimizing based on client requirement",
      "Building a high quality system with integration of mikrotik",
      "Building realtime data flow based on mikrotik devices",
    ],
  },
  {
    title: 'IDMETAFORA',
    location: 'Yogyakarta',
    job: 'Search Engine Optimizer  (Internship)',
    time: 'April 2021 - June 2021',
    tags: ["SEO"],
    description: "Writing a high quality content with SEO friendly format and optimizing existing content.",
    link: "https://idmetafora.com/",
    items: [
      "Writing and reviewing content before publishing",
      "Improving SEO traffic up to 20%",
    ],
  }
];

const certifications = [
  {
    name: 'Belajar Pengembangan Aplikasi Flutter Intermediate',
    time: 'April 11, 2025',
    link: 'https://www.dicoding.com/certificates/JMZVEJO4QPN9'
  },
  {
    name: 'Belajar Fundamental Aplikasi Flutter',
    time: 'Feburary 1, 2025',
    link: 'https://www.dicoding.com/certificates/KEXL795O4XG2',
  },
  {
    name: 'Belajar Membuat Aplikasi Flutter untuk Pemula',
    time: 'September 20, 2024',
    link: 'https://www.dicoding.com/certificates/GRX5O5MDRP0M',
  },
  {
    name: 'Belajar Membuat Aplikasi Flutter untuk Pemula',
    time: 'September 20, 2024',
    link: 'https://www.dicoding.com/certificates/GRX5O5MDRP0M',
  },
  {
    name: 'Menjadi Back-End Developer Expert dengan JavaScript',
    time: 'March 24, 2024',
    link: 'https://www.dicoding.com/certificates/MEPJY4386P3V',
  },
  {
    name: 'Belajar Fundamental Back-End dengan JavaScript',
    time: 'December 26, 2023',
    link: 'https://www.dicoding.com/certificates/QLZ94RYRMP5D',
  },
  {
    name: 'Belajar Back-End Pemula dengan JavaScript',
    time: 'November 18, 2023',
    link: 'https://www.dicoding.com/certificates/QLZ94RYRMP5D',
  },
  {
    name: 'Belajar Dasar Pemrograman JavaScript',
    time: 'November 14, 2023',
    link: 'https://www.dicoding.com/certificates/1OP81KRW8ZQK',
  }
];

const project = [
  {
    title: 'Touhou: Dream Matrix',
    link: null,
    description: 'Rogue-lite Touhou fan game with color palettes inspired by Gameboy and 8-bit Game with my very own game engine with streamlined tooling and building the executable',
    time: '2026 - Present',
    tags: [
      'Lily Engine', 'C', 'Web Assembly', 'Cross-platform',
    ],
  },
  {
    title: 'Remi-lang',
    link: 'https://github.com/UnknownRori/remi-lang',
    description: 'A hobby compiled programming language with C style and with Remilia Scarlet way of wording capable to be compiled to Windows and Linux via Assembly before creating executable.',
    time: '2025 - Present',
    tags: [
      'Rust', 'Compiler'
    ],
  },
  {
    title: 'Kosuzu Want Peace',
    link: 'https://raykeju.itch.io/kosuzu-game',
    description: 'Touhou Game Jam 2026 collaborate with Arzummy, Derbruhniko, Raykeju with 3D Rail shooter style with crazy amount of bullet, My tasks is to provide BGM for the game and providing a feedback in development',
    time: '2026',
    tags: [
      'GDevelop', 'FL Studio', 'MuseScore',
    ],
  },
  {
    title: 'Escape Velocity',
    link: 'https://unknownrori.itch.io/escape-velocity',
    description: 'Delivering game in 3 for Mini Game Jam with Energy Theme, vertical shooter with retro style feels and limited color palettes capable running both Windows, Linux, and the Web with high performance code and small binary size',
    time: '2025',
    tags: [
      'C', 'Web Assembly', 'Raylib',
    ],
  },
  {
    title: 'HTTP 1.1 Server',
    link: 'https://github.com/UnknownRori/codecrafters-http-server-rust',
    description: 'HTTP 1.1 Server from scratch written in Rust capable handling multiple connection with API inspired with Express.js',
    time: '2023',
    tags: [
      'Rust', 'HTTP Protocol'
    ],
  },
  {
    title: 'Rin',
    link: 'https://github.com/UnknownRori/Rin',
    description: 'Minimalistic PHP Web Framework inspired by Laravel and Express.js, a simple but fast.',
    time: '2023',
    tags: [
      'PHP', 'Framework'
    ],
  },
  {
    title: 'Raphael',
    link: 'https://github.com/UnknownRori/raphael-zig',
    description: 'High performant and simple to use local search engine that index your local directories, focused on Obsidian.md vault',
    time: '2025',
    tags: [
      'Zig', 'Search Engine'
    ],
  },
  {
    title: 'Monas Jas Hujan',
    link: 'https://monasjashujan.com/',
    description: 'Company Website for Monas Jas Hujan',
    time: '2025',
    tags: [
      'Laravel', 'Vue', 'Tailwind',
    ],
  },
  {
    title: 'Unfinished Matrix Dream',
    link: 'https://unknownrori.bandcamp.com/album/unfinished-matrix-dream',
    description: 'High quality Touhou Remix 8-Bit Gameboy Cover with real a Gameboy sound',
    time: '2025',
    tags: [
      'Music', '8-Bit', 'VGM'
    ],
  },
];

const education = [
  {
    title: 'Bachelor Degree in Computer',
    link: 'https://www.amikomsolo.ac.id/',
    time: '2025 - 2027',
    location: 'STMIK AMIKOM Surakarta',
  },
  {
    title: 'Associate Degree in Computer',
    link: 'https://www.amikomsolo.ac.id/',
    time: '2022 - 2025',
    location: 'STMIK AMIKOM Surakarta',
  },
];

const generalKnowledge = ["Testing", "OOP", "Clean Architecture", "Web Standard", "Accessibility", "PWA", "Operating System"];
const programmingLanguage = ["PHP", "Typescript", "Javascript", "HTML", "CSS", "Go", "Rust", "C", "C++", "Tailwind", "React", "Vue", "Git", "Markdown",
  "YAML", "REST API", "Excalidraw", "NeoVim", "Obsidian", "FL Studio", "Krita", "MySQL", "Sqlite"];
const spokenLanguage = ["English (Limited)", "Indonesian (Native)", "German (Elementary)", "Japanese (Elementary)"];

export {
  workExperience,
  project,
  education,
  certifications,
  summary,
  generalKnowledge, programmingLanguage, spokenLanguage,
}
