export const personalInfo = {
  name: "Abdelrahman Tarek",
  title: "AI & Machine Learning Engineer",
  tagline:
    "I build machine learning and generative AI applications — with a focus on data pipelines, LLMs, RAG systems, and practical AI solutions.",
  email: "abdelrahmantarek22503@gmail.com",
  phone: "+20 110 162 3257",
  location: "Cairo, Egypt",
  linkedin: "https://www.linkedin.com/in/abdelrahmann-tarek/",
  github: "https://github.com/AbdelrahmanTarek327",
  summary: `I'm an Electronics and Communications Engineering graduate from Helwan University, with a practical focus on machine learning, data analysis, and generative AI.

I've worked across ML pipelines, NLP-based healthcare applications, Power BI dashboards, and LLM/RAG systems. Most of my experience comes from internships, structured training programs, and self-directed projects — I'm early in my career, but I've built real things.

I recently completed the DEPI Generative AI program, and I'm actively looking for full-time roles in AI, ML, or data engineering.`,
};

export const experience = [
  {
    id: 1,
    role: "Generative AI Professional",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    type: "Training Program",
    period: "Dec 2025 – Mar 2026",
    current: false,
    tags: ["LLMs", "Diffusion Models", "Hugging Face", "NLP", "Transformers"],
  },
  {
    id: 2,
    role: "Deep Learning for Computer Vision",
    company: "DEY – Upskilling Programs (NTI)",
    type: "Specialization",
    period: "Jan 2026 – Feb 2026",
    current: false,
    tags: ["CNNs", "ResNet / DenseNet", "Transfer Learning", "Image Classification"],
  },
  {
    id: 3,
    role: "Machine Learning Intern",
    company: "National Telecommunication Institute (NTI)",
    type: "Internship",
    period: "Jul 2025 – Aug 2025",
    current: false,
    tags: ["ML Pipelines", "Feature Engineering", "Classification", "Python"],
  },
  {
    id: 4,
    role: "Data Analyst Intern",
    company: "DEY, National Telecommunication Institute (NTI)",
    type: "Internship",
    period: "May 2025 – Aug 2025",
    current: false,
    tags: ["Power BI", "SQL", "Python", "Executive Dashboards"],
  },
  {
    id: 5,
    role: "Machine Learning Intern",
    company: "Elevvo Pathways",
    type: "Internship",
    period: "May 2025 – Jun 2025",
    current: false,
    tags: ["Scikit-learn", "Clinical Data", "Health Risk Prediction"],
  },
  {
    id: 6,
    role: "AI Career Essentials",
    company: "ALX Africa",
    type: "Program",
    period: "Apr 2025 – Jun 2025",
    current: false,
    tags: ["Generative AI Tools", "Prompt Engineering", "AI Ethics"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Drug–Drug Interaction Detection System",
    subtitle: "Graduation Project",
    description:
      "An NLP-based system that detects potential drug–drug interactions using a retrieval-augmented generation pipeline. The system queries OpenFDA and RxNorm for real pharmacological data, stores it in MongoDB, and serves a bilingual medical chatbot via a FastAPI backend. NFC-enabled medication lookup was integrated for a hardware prototype.",
    tags: ["Python", "FastAPI", "MongoDB", "NLP", "LLM", "RAG", "OpenFDA", "RxNorm"],
    category: "AI / Healthcare",
    featured: true,
    github: "https://github.com/AbdelrahmanTarek327/nfc-demo0",
    metrics: ["RAG pipeline over OpenFDA + RxNorm", "Bilingual chatbot (EN/AR)", "FastAPI + MongoDB backend", "NFC medication lookup"],
    architecture: ["NFC Reader", "FastAPI", "MongoDB", "NLP Engine", "LLM Chatbot"],
  },
  {
    id: 2,
    title: "EPL Match Result Predictor",
    subtitle: "NTI Internship",
    description:
      "A classification pipeline trained on 24 years of English Premier League match data (2000–2024). Compared multiple models — Logistic Regression, Random Forest, and XGBoost — with XGBoost achieving the best 3-class prediction accuracy (home win / draw / away win).",
    tags: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Matplotlib"],
    category: "ML / Sports Analytics",
    featured: true,
    github: "https://github.com/AbdelrahmanTarek327/EPL-Match-Prediction",
    metrics: ["2000–2024 match data", "3-class outcome prediction", "XGBoost best performer"],
    architecture: [],
  },
  {
    id: 3,
    title: "Kidney Disease Risk Prediction",
    subtitle: "Elevvo Pathways Internship",
    description:
      "A supervised ML pipeline for chronic kidney disease classification from clinical biomarker data. Built end-to-end: data cleaning, feature selection, model training, and evaluation using multiple classifiers.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    category: "ML / Healthcare",
    featured: false,
    github: "https://github.com/AbdelrahmanTarek327/kidney-disease-classification",
    metrics: ["Clinical biomarker dataset", "Multi-classifier comparison"],
    architecture: [],
  },
  {
    id: 4,
    title: "Adventure Works Sales Dashboard",
    subtitle: "Power BI Analytics",
    description:
      "An executive Power BI dashboard built on the Adventure Works dataset. Includes advanced DAX measures, KPI cards, sales by region and product category, and drill-through reports for management-level analysis.",
    tags: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    category: "Data Analytics / BI",
    featured: false,
    github: "https://github.com/AbdelrahmanTarek327/AdventureWorks-PowerBI-Project",
    metrics: ["KPI dashboards", "Advanced DAX", "Drill-through by region"],
    architecture: [],
  },
];

export const skills = [
  {
    category: "Programming",
    items: ["Python", "SQL", "C++"],
  },
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "XGBoost", "LightGBM", "Feature Engineering", "Model Evaluation"],
  },
  {
    category: "Deep Learning & CV",
    items: ["TensorFlow", "Keras", "CNNs", "Transfer Learning", "Image Classification", "OpenCV"],
  },
  {
    category: "Generative AI",
    items: ["LLMs", "Prompt Engineering", "RAG", "Hugging Face", "Diffusion Models", "Agentic AI"],
  },
  {
    category: "Data & BI",
    items: ["Pandas", "NumPy", "Matplotlib", "Power BI", "DAX", "Power Query", "Excel"],
  },
  {
    category: "Development",
    items: ["FastAPI", "MongoDB", "Git", "GitHub", "Linux", "REST APIs"],
  },
];

export const certifications = [
  { title: "Future AWS AI Scientist", issuer: "Udacity Nanodegree" },
  { title: "Generative AI Summer Training", issuer: "NVIDIA DLI × ITI" },
  { title: "Data Science Essentials with Python", issuer: "Cisco Networking Academy" },
  { title: "IBM Data Analytics Professional", issuer: "IBM × MCIT Egypt" },
  { title: "Introducing Generative AI with AWS", issuer: "Udacity" },
  { title: "Machine Learning Foundations", issuer: "AWS Educate" },
  { title: "AI & Machine Learning Foundations", issuer: "SprintUp by Sprints" },
];

export const education = {
  degree: "Bachelor's in Electronics & Communications Engineering",
  university: "Helwan University",
  location: "Cairo, Egypt",
  period: "Sep 2021 – Jul 2026",
  grade: "Very Good",
  focus: ["Signal Processing", "Digital Communications", "Machine Learning", "Control Systems"],
};
