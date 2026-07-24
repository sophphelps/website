export type Experience = {
  title: string;
  organization: string;
  dates: string;
  location?: string;
  summary: string;
  highlights?: string[];
  tags?: string[];
};

// Replace placeholder URLs with your public profiles when ready.
export const externalLinks = {
  email: "mailto:YOUR_EMAIL@example.com",
  linkedin: "#placeholder-linkedin",
  github: "#placeholder-github",
  scholar: "#placeholder-google-scholar",
  orcid: "#placeholder-orcid",
};

export const researchExperiences: Experience[] = [
  {
    title: "Astrophysics Intern",
    organization: "NASA Jet Propulsion Laboratory",
    dates: "June 2025–Present",
    location: "Pasadena, California",
    summary:
      "Analyze the equivalent-width variability of Zeeman-sensitive near-infrared solar absorption lines as potential indicators of stellar magnetic activity.",
    highlights: [
      "Measured equivalent-width variability in a strongly Zeeman-sensitive Fe I line near 1565 nm using high-resolution Sun-as-a-star spectra.",
      "Used a nearby telluric H₂O feature as a control for residual atmospheric contamination.",
      "Applied periodogram analysis to search for variability associated with solar rotation.",
      "Currently extending the observational baseline and analyzing additional lines in the J band.",
    ],
  },
  {
    title: "Student Researcher",
    organization: "UCLA Ferroelectrics Research",
    dates: "March 2025–January 2026",
    summary:
      "Applied nondimensional modeling and data-driven analysis with Professor Regan to study polarization switching and reliability in Hf₀.₅Zr₀.₅O₂ ferroelectric capacitors.",
    highlights: [
      "Developed an automated literature database to extract, organize, and compare experimental parameters across HZO studies.",
      "Used Python, LaTeX, literature analysis, data organization, and quantitative modeling.",
    ],
    tags: ["Quantitative modeling", "Python", "Literature analysis", "HZO"],
  },
];

export const teachingExperiences: Experience[] = [
  {
    title: "Founder and Tutor",
    organization: "StudySTEM",
    dates: "September 2021–Present",
    summary:
      "Built a tutoring practice centered on individualized instruction and durable mentoring relationships.",
    highlights: [
      "Tutored more than 100 students over four years in mathematics and physics, from middle school through college.",
      "Generated more than $200,000 in revenue.",
      "Managed scheduling, curriculum planning, student communication, and individualized instruction.",
    ],
  },
  {
    title: "Education Research Intern",
    organization: "UCLA Undergraduate Learning Assistant Program",
    dates: "January–June 2026",
    summary:
      "Conducted classroom observations using the PAITE framework and wrote structured feedback for UCLA instructors on inclusive, evidence-based teaching practices.",
  },
  {
    title: "Pedagogy Head Learning Assistant, Physics 5A",
    organization: "UCLA",
    dates: "Fall 2025 & Spring 2026",
    summary:
      "Led the Learning Assistant team, facilitated pedagogy seminars, and supported course coordination for mechanics and energy.",
  },
  {
    title: "Learning Assistant Course Coordinator",
    organization: "UCLA",
    dates: "Spring 2025–Spring 2026",
    summary:
      "Selected Learning Assistant applicants and managed multi-section logistics across 17 STEM courses.",
  },
  {
    title: "Learning Assistant, Math 31A",
    organization: "UCLA",
    dates: "Winter 2026",
    summary: "Helped lead discussion sections in differential and integral calculus.",
  },
  {
    title: "Learning Assistant, Physics 1C",
    organization: "UCLA",
    dates: "Spring 2024",
    summary: "Helped lead discussion sections in electrodynamics, optics, and special relativity.",
  },
];

export const education = [
  { school: "University of California, Irvine", degree: "Ph.D. in Physics", dates: "Expected 2026–2031" },
  { school: "University of California, Los Angeles", degree: "B.S. in Physics", dates: "September 2022–June 2026" },
  { school: "Washington-Lee High School", degree: "Class rank: 1 of 532", dates: "September 2018–June 2022" },
];

export const awards = [
  "NSF Graduate Research Fellowship",
  "Caltech SURF@JPL Fellowship — Summer 2025",
  "NASA JPL Summer Internship Program — Summer 2026",
];

export const skills = [
  "Python", "MATLAB", "LaTeX", "Scientific computing", "Data analysis",
  "Astronomical spectroscopy", "Literature analysis", "Airtable",
  "Research communication", "Collaborative leadership", "Inclusive pedagogy",
];

export const interests = [
  "Exoplanets", "Stellar magnetic activity", "Precision radial velocities",
  "Astronomical spectroscopy", "Near-infrared instrumentation",
  "Stellar noise mitigation", "Scientific computing", "Data-driven astrophysics",
];

export const leadership: Experience[] = [
  {
    title: "External Vice President",
    organization: "Upsilon Lab",
    dates: "October 2024–June 2026",
    summary:
      "Led external communications, recruitment, and program logistics. Mentored the Exoplanets group and supported student-led technical projects.",
  },
];

// Replace these placeholders once papers and talks are public.
export const publications = ["Journal paper — forthcoming; citation and DOI placeholder"];
export const presentations = [
  "Research poster — title, venue, date, and PDF placeholder",
  "Presentation slides — title, venue, date, and PDF placeholder",
];
