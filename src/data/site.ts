// ---------------------------------------------------------------------------
// Site content. Edit this file to change the text that appears across the
// site. Projects live in src/content/projects/ as Markdown files.
//
// Anything left empty ("" or []) is simply not shown, so the site never
// displays template text. `npm run deploy` also refuses to publish if it
// finds placeholder text in the build.
// ---------------------------------------------------------------------------

// Square photo shown on the home and About pages (it is displayed as a circle).
import avatar from "../assets/avatar.jpg";

export type Link = { label: string; url: string };
export type Job = {
  role: string;
  company: string;
  period: string;
  summary: string;
  /** Optional bullet points shown under the summary. */
  highlights?: string[];
};
export type Education = { degree: string; school: string; period: string };

// Most recent first. The section is hidden while this is empty.
const experience: Job[] = [
  {
    role: "Software Engineer",
    company: "Celloscope Ltd",
    period: "Jul 2025 – Present",
    summary: "Mobile engineer on the Flutter team behind a commercial bank’s mobile banking app.",
    highlights: [
      "Migrated a feature’s data layer in a fintech app",
      "Implemented token interceptors to handle authorised remote calls",
      "Split the shared Android and iOS deployment script into a separate flow for each platform",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Celloscope Ltd",
    period: "Jan 2023 – Jun 2025",
    summary:
      "Built and shipped Flutter apps for banking, insurance, and university admissions, and set up their test and release pipelines.",
    highlights: [
      "Set up CI/CD pipelines for the test and production deployments of an educational app",
      "Automated iOS code signing in the deployment script and managed profiles and certificates with Fastlane",
      "Redesigned an existing informative app and published two iOS apps to the App Store",
      "Implemented maps with location markers, reverse geocoding, and local and push notifications",
      "Wrote unit, widget, and integration tests, and fixed the coverage calculation script in the CI/CD pipeline",
      "Fixed an app lifecycle issue that was hurting the user experience and resolved iOS storage permission problems",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Spectrum Engineering Consortium Ltd",
    period: "May 2022 – Dec 2022",
    summary: "Worked on a student admission system and an informative app, both in Flutter.",
    highlights: [
      "Developed a student admission system with the team",
      "Designed and developed an informative app",
      "Refactored two mobile applications into a structured codebase",
    ],
  },
  {
    role: "Trainee Software Engineer",
    company: "Spectrum Engineering Consortium Ltd",
    period: "Nov 2021 – Apr 2022",
    summary: "Started out on documentation and content work before moving into app development.",
    highlights: [
      "Prepared the user manual for a converter tool",
      "Rewrote and proofread tender documents",
      "Worked on a newsletter project",
    ],
  },
];

// Most recent first. Hidden while empty.
const education: Education[] = [
  { degree: "BSc in Computer Science and Engineering", school: "Daffodil International University", period: "2021" },
  { degree: "Higher Secondary Certificate, Science", school: "Ideal College, Dhanmondi", period: "2016" },
  { degree: "Secondary School Certificate, Science", school: "Pabna Zilla School", period: "2014" },
];

export const site = {
  name: "Sakib Abdullah",
  role: "Software Engineer",
  tagline: "I build cross-platform mobile apps with Flutter, along with the tests and release pipelines that keep them shipping.",
  // Small badge above the heading on the home page. Set to "" to hide it.
  availability: "Open to new opportunities",
  avatar,

  // Used for the <meta name="description"> tag and link previews.
  description:
    "Portfolio of Sakib Abdullah, a software engineer in Dhaka building Flutter mobile apps for banking, insurance, and education, with a focus on clean architecture, testing, and CI/CD.",

  // The address visitors should write to. Set to "" to hide the email row.
  email: "abd.sakib075@gmail.com",

  // Shown on the About page. The first paragraph also appears on the home page.
  bio: [
    "I’m a software engineer at Celloscope in Dhaka, where I’ve spent the last three and a half years building mobile apps with Flutter. My work has shipped to banks, regulators, and universities: a mobile banking app and a fee payment platform for a commercial bank, an online service for an insurance regulator, and admission systems for public universities.",
    "I care about the unglamorous parts that make an app dependable: clean architecture, unit and widget tests, and release pipelines that get builds onto the App Store and Play Store without manual steps. Along the way I’ve refactored legacy codebases, automated iOS code signing with Fastlane, reviewed code, and mentored junior developers.",
    "I graduated with a BSc in Computer Science and Engineering from Daffodil International University in 2021, started out at Spectrum Engineering Consortium, and joined Celloscope in 2023.",
  ],

  skills: [
    "Flutter",
    "Dart",
    "Java",
    "Android",
    "iOS",
    "Flutter Bloc",
    "Clean Architecture",
    "Unit & Widget Testing",
    "Fastlane",
    "CI/CD",
    "Firebase",
    "Push Notifications",
    "Git",
    "Ruby",
  ],

  experience,
  education,

  // Profiles shown in the footer and on the Contact page.
  socials: [
    { label: "GitHub", url: "https://github.com/SakibAbdullah75" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/abdsakib" },
  ] satisfies Link[],

  // Shown in the side panel on the Contact page. Empty values are hidden.
  contact: {
    responseTime: "Usually within a day",
    location: "Dhaka, Bangladesh",
    openTo: ["Full-time roles", "Freelance projects", "Open-source collaboration"],
    // Optional contact form. Create a free access key at https://web3forms.com,
    // paste it here, and a "Send a message" form appears on the Contact page.
    formAccessKey: "",
  },

  // Links shown in the header. The order here is the order on the page.
  nav: [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
