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
  email: 'mdraihan20104@gmail.com',
  phone: '+8801522131107',
  github: 'https://github.com/mdraihan2010',
  linkedin: 'https://www.linkedin.com/in/md-raihan-428101346/',
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
  { id: 'certifications', label: 'Certifications' },
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
    title: 'C / C++ Foundation',
    description:
      'Built a strong programming foundation by learning programming fundamentals, control flow, functions, problem solving, and structured coding with C and C++.',
  },
  {
    title: 'Python',
    description:
      'Completed Python Basics and Intermediate Python, covering core programming concepts, functions, data structures, file handling, exception handling, and more.',
  },
  {
    title: 'Web Development',
    description:
      'Learned HTML and CSS and started building frontend projects. Currently progressing with JavaScript to build more interactive web applications.',
    current: true,
  },
  {
    title: 'Competitive Programming',
    description:
      'Practicing problem solving with C++ while developing skills in data structures, algorithms, time and space complexity, and contest problem solving.',
  },
  {
    title: 'Academic Growth',
    description:
      'Developing knowledge through university coursework including Operating Systems, Database Management Systems, Software Engineering, Artificial Intelligence, and Numerical Analysis.',
  },
  {
    title: 'Future Goals',
    description:
      'Planning to progress toward advanced data structures and algorithms, full-stack web development, software engineering, research, and higher studies abroad.',
  },
]

// PLACEHOLDER: replace with real achievements when available.
export const achievements = [
  {
    title: 'CodeChef — 500 Difficulty Problems Completed',
    description:
      'Successfully completed all the practice problems of 500 difficulty rating by CodeChef, strengthening problem-solving and competitive programming skills.',
    date: '17 Jan 2025',
  },
  {
    title: 'Inter-Department Programming Contest — Participant',
    description:
      'Participated in the Inter-Department Programming Contest organized by the Department of Computer Science and Engineering, Jashore University of Science and Technology (JUST).',
    date: '26 May 2025',
  },
  {
    title: 'Research, Publication & Higher Studies Workshop',
    description:
      'Successfully completed the five-day “From Idea to Impact: A Premier Workshop on Research, Publication, and Higher Studies” organized by JUST Research Society in collaboration with Research & Integrated Thoughts (RIT) and the Office of the Students Counselling & Guidance, JUST.',
    date: 'May 2026',
  },
]

export const certifications = [
  {
    title: 'C Programming',
    issuer: '10 Minute School',
    description:
      'Successfully completed the সহজ ভাষায় C PROGRAMMING online course.',
    date: '26 Jun 2025',
    certificateUrl: '/certificates/c-programming.pdf',
  },
  {
    title: 'Basic Quran Tajweed',
    issuer: 'Tahzib Institute',
    description:
      'Successfully completed the Basic Quran Tajweed course.',
    date: '15 Feb 2026',
    certificateUrl: '/certificates/quran-tajweed.pdf',
  },
  {
    title: 'MS Word 2007 for Beginners',
    issuer: 'Mind Luster',
    description:
      'Successfully completed the MS Word 2007 for Beginners course.',
    date: '23 Feb 2026',
    certificateUrl: '/certificates/ms-word-2007-for-beginners.pdf',
  },
  {
    title: 'Excel Essentials for Workplace Productivity',
    issuer: 'Passport to Earning Bangladesh',
    description:
      'Successfully completed the Excel Essentials for Workplace Productivity certification.',
    date: '05 Apr 2026',
    certificateUrl: '/certificates/excel.pdf',
  },
]
