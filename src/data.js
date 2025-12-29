import wsu from "./assets/wsu.jpeg";
import deakin from "./assets/deakin.png";

export const NAV_LINKS = [
  { name: "Projects", href: "#projects" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" },
];

export const EDUCATION = [
  {
    title: "Western Sydney University",
    image: wsu,
    date: "2018 - 2020",
    degree: "Diploma in Engineering",
    achievements: [
      "Dean's Merit List recipient",
      "Western Sydney University Refugee Scholarship",
    ],
  },
  {
    title: "Deakin University",
    image: deakin,
    date: "2020 - 2024",
    degree: "Bachelor of Cyber Security",
    achievements: [
      "Member of Deakin Capture the Flag",
      "Deakin Student Support Scholarship",
    ],
  },
];