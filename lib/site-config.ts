/**
 * Central content file for the portfolio.
 * Replace every value marked "PLACEHOLDER" with your real information.
 */

export const siteConfig = {
  name: 'MD Raihan',
  role: 'CSE Student | Competitive Programmer | Aspiring Software Engineer',
  shortIntro:
    'I am a Computer Science and Engineering student at Jashore University of Science and Technology, passionate about problem solving, competitive programming, software engineering, and web development.',
  futureGoal: 'Higher Studies Abroad',
  location: 'Bangladesh',
  university: 'Jashore University of Science and Technology (JUST)',
  department: 'Computer Science and Engineering (CSE)',
  academicStatus: '3rd Year, 1st Semester',

  // PLACEHOLDER: drop your resume at /public/resume.pdf (same name) or change this path.
  resumeUrl: '/resume.pdf',

  links: {
    // PLACEHOLDER: replace with your real email address.
    email: 'your.email@example.com',
    // PLACEHOLDER: replace with your real GitHub profile URL.
    github: 'https://github.com/your-username',
    // PLACEHOLDER: replace with your real LinkedIn profile URL.
    linkedin: 'https://www.linkedin.com/in/your-profile',
  },
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'competitive-programming', label: 'CP' },
  { id: 'journey', label: 'Journey' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
] as const

export const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['C', 'C++', 'Python'],
  },
  {
    title: 'Web Development',
    items: ['HTML', 'CSS'],
  },
  {
    title: 'Competitive Programming',
    items: ['C++', 'Problem Solving', 'Data Structures & Algorithms'],
  },
  {
    title: 'Tools & Technologies',
    items: ['Git', 'GitHub', 'VS Code'],
  },
  {
    title: 'Currently Learning',
    items: ['JavaScript', 'Advanced Data Structures & Algorithms'],
  },
]

export type Project = {
  name: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  placeholder?: boolean
}

// PLACEHOLDER: replace these with your real projects.
export const projects: Project[] = [
  {
    name: 'Personal Portfolio Website',
    description:
      'A personal portfolio website showcasing my education, skills, projects, competitive programming journey, and learning progress as a CSE student.',
    technologies: ['HTML', 'CSS', 'Next.js', 'Tailwind CSS', 'GitHub', 'Vercel'],
    githubUrl: '#',
    liveUrl: '#',
    placeholder: true,
  },
  {
    name: 'Web Development Projects',
    description:
      'A collection of frontend projects built while learning and practicing web development, focusing on responsive layouts, styling, and user interface design.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: '#',
    liveUrl: '#',
    placeholder: true,
  },
  {
    name: 'Competitive Programming Solutions',
    description:
      'A collection of competitive programming problems and solutions focused on problem solving, algorithms, data structures, and improving coding skills.',
    technologies: ['C++', 'Data Structures', 'Algorithms'],
    githubUrl: '#',
    liveUrl: '#',
    placeholder: true,
  },
]

// PLACEHOLDER: add your profile URLs. Leave url empty to show "Profile link coming soon".
export const cpProfiles = [
  { name: 'Codeforces', url: 'https://codeforces.com/profile/Raihan20' },
  { name: 'CodeChef', url: 'https://www.codechef.com/users/raihan20' },
  { name: 'AtCoder', url: 'https://atcoder.jp/users/Raihan20' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/Raihan20/' },
  { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/12mdraihan34' },
  { name: 'VJudge', url: 'https://vjudge.net/user/Raihan20' },
  { name: 'LightOJ', url: 'https://lightoj.com/user/user-qypngbus' },
]

export const cpFocusAreas = [
  {
    title: 'Problem Solving',
    description:
      'Breaking problems into smaller parts, analyzing constraints, handling edge cases, and improving through regular practice.',
  },
  {
    title: 'Data Structures',
    description:
      'Learning and practicing data structures to organize, store, and process data efficiently.',
  },
  {
    title: 'Algorithms',
    description:
      'Studying and applying algorithms for searching, sorting, greedy techniques, dynamic programming, and other problem-solving patterns.',
  },
  {
    title: 'Time & Space Complexity',
    description:
      'Understanding time and space complexity to analyze solutions and choose efficient approaches.',
  },
  {
    title: 'Contest Practice',
    description:
      'Practicing programming contests to improve speed, accuracy, implementation skills, and problem-solving under time constraints.',
  },
]

export const journey = [
  {
    title: 'C / C++',
    description:
      'Started with the fundamentals of programming: syntax, control flow, functions, memory, and writing structured code in C and C++.',
  },
  {
    title: 'Competitive Programming',
    description:
      'Began solving algorithmic problems regularly to strengthen logical thinking, speed, and familiarity with data structures and algorithms.',
  },
  {
    title: 'HTML & CSS',
    description:
      'Explored the building blocks of the web, learning how to structure content semantically and style responsive layouts.',
  },
  {
    title: 'Python',
    description:
      'Picked up Python for its readability and versatility, using it for scripting, practice problems, and experimenting with new ideas.',
  },
  {
    title: 'Web Development',
    description:
      'Currently learning to combine HTML, CSS, and JavaScript to build interactive, well-structured web applications.',
    current: true,
  },
]

// PLACEHOLDER: replace with real achievements when available.
export const achievements = [
  { title: 'Achievement Title', description: 'Add a short description, the event or platform, and the date.' },
  { title: 'Achievement Title', description: 'Add a short description, the event or platform, and the date.' },
  { title: 'Achievement Title', description: 'Add a short description, the event or platform, and the date.' },
]
