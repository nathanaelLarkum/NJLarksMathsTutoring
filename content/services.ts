export type YearGroup = {
  year: string;
  keyStage: string;
  topics: string[];
  description: string;
};

export const yearGroups: YearGroup[] = [
  {
    year: "Year 7",
    keyStage: "KS3",
    description:
      "Building strong foundations in secondary maths. We focus on number skills, early algebra, and building confidence from the outset.",
    topics: ["Number & place value", "Fractions & decimals", "Basic algebra", "Geometry basics", "Data & statistics"],
  },
  {
    year: "Year 8",
    keyStage: "KS3",
    description:
      "Deepening understanding and broadening the range of topics. We build on Year 7 skills and introduce more complex concepts.",
    topics: ["Ratio & proportion", "Equations & inequalities", "Area & perimeter", "Probability", "Linear graphs"],
  },
  {
    year: "Year 9",
    keyStage: "KS3/KS4",
    description:
      "A pivotal year where many schools begin GCSE content. We set students up for success by consolidating fundamentals and starting GCSE preparation.",
    topics: ["Quadratics", "Trigonometry intro", "Circle geometry", "Simultaneous equations", "Scatter graphs"],
  },
  {
    year: "Year 10",
    keyStage: "KS4",
    description:
      "GCSE content in full swing. We work systematically through the curriculum, focusing on understanding and exam technique.",
    topics: ["Algebra & functions", "Shape & space", "Vectors", "Sequences", "Real-life graphs"],
  },
  {
    year: "Year 11",
    keyStage: "KS4",
    description:
      "Exam preparation is key. We focus on past papers, identifying gaps, and building the confidence needed to perform in the GCSE.",
    topics: ["Past paper practice", "Exam technique", "Revision strategy", "Higher/Foundation tier", "Formulae recall"],
  },
];

export const sessionTypes = [
  {
    duration: "30 Minutes",
    icon: "⚡",
    idealFor: "Quick focused top-up",
    description:
      "Great for revisiting one specific topic, checking homework, or a focused burst of practice. Ideal for younger students or those with shorter attention spans.",
    bestFor: ["Year 7–8 students", "Specific topic recap", "Homework support"],
  },
  {
    duration: "60 Minutes",
    icon: "⭐",
    idealFor: "The most popular length",
    description:
      "The sweet spot — enough time to warm up, cover meaningful content, practise, and consolidate. Suitable for all year groups and learning goals.",
    bestFor: ["All year groups", "Regular weekly sessions", "Steady progression"],
  },
  {
    duration: "90 Minutes",
    icon: "🎯",
    idealFor: "Deep dives & exam technique",
    description:
      "For when you need to go further. Great for working through a longer topic, exam technique practice, or intensive preparation before tests.",
    bestFor: ["Year 9–11", "Exam preparation", "Challenging topics"],
  },
  {
    duration: "2 Hours",
    icon: "🚀",
    idealFor: "Intensive revision",
    description:
      "Maximum depth in a single session. Ideal for holiday revision, catching up after absences, or comprehensive GCSE preparation.",
    bestFor: ["Year 10–11", "Holiday revision", "Big catch-up sessions"],
  },
];
