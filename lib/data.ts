export const personalInfo = {
  name: "Abdelrahman Tarek",
  title: "AI & Data Science Engineer",
  tagline: "Building intelligent systems at the intersection of ML, Deep Learning & Generative AI",
  email: "abdelrahmantarek22503@gmail.com",
  phone: "+20 110 162 3257",
  location: "Cairo, Egypt",
  linkedin: "https://www.linkedin.com/in/abdelrahmann-tarek/",
  github: "https://github.com/AbdelrahmanTarek327",
  summary: `Electronics & Communications Engineering student at Helwan University with deep expertise in Machine Learning, Deep Learning, Computer Vision, and Generative AI. I build end-to-end AI pipelines — from raw data to production-ready systems — with a focus on healthcare AI, intelligent automation, and business intelligence. Currently advancing in Generative AI through the Digital Egypt Pioneers Initiative (DEPI) while contributing to impactful real-world projects.`,
};

export const stats = [
  { label: "Projects Completed", value: "10+", icon: "Layers" },
  { label: "Technologies Mastered", value: "20+", icon: "Code2" },
  { label: "Certifications", value: "7+", icon: "Award" },
  { label: "Internships", value: "5", icon: "Briefcase" },
];

export const experience = [
  {
    id: 1,
    role: "Generative AI Professional",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    type: "Training Program",
    period: "Dec 2025 – Present",
    current: true,
    color: "violet",
    bullets: [
      "Studying advanced Generative AI concepts: LLMs, GANs, and diffusion-based models",
      "Strengthened mathematical foundations in Statistics & Linear Algebra for AI modeling",
      "Built end-to-end ML & DL pipelines using Python for scalable AI applications",
      "Worked with NLP models, attention mechanisms, Hugging Face transformers & transfer learning",
    ],
  },
  {
    id: 2,
    role: "Deep Learning for Computer Vision",
    company: "DEY – Upskilling Programs (NTI)",
    type: "Specialization",
    period: "Jan 2026 – Feb 2026",
    current: false,
    color: "cyan",
    bullets: [
      "Implemented ANNs, CNNs, and modern deep learning architectures from scratch",
      "Designed and trained image classification models achieving high accuracy",
      "Applied transfer learning with ResNet, DenseNet, and EfficientNet",
      "Performed advanced image processing and feature extraction techniques",
    ],
  },
  {
    id: 3,
    role: "Machine Learning Intern",
    company: "National Telecommunication Institute (NTI)",
    type: "Internship",
    period: "Jul 2025 – Aug 2025",
    current: false,
    color: "violet",
    bullets: [
      "Built production-grade ML pipelines for classification and regression tasks",
      "Applied advanced feature engineering and evaluation metrics to optimize model performance",
      "Developed Python-based analytical tools for large-scale network and customer datasets",
    ],
  },
  {
    id: 4,
    role: "Data Analyst Intern",
    company: "DEY, National Telecommunication Institute (NTI)",
    type: "Internship",
    period: "May 2025 – Aug 2025",
    current: false,
    color: "cyan",
    bullets: [
      "Cleaned, transformed, and visualized complex datasets using Python and Power BI",
      "Queried large-scale datasets using SQL for business analytics and reporting",
      "Designed executive-level interactive dashboards for strategic decision-making",
    ],
  },
  {
    id: 5,
    role: "Machine Learning Intern",
    company: "Elevvo Pathways",
    type: "Internship",
    period: "May 2025 – Jun 2025",
    current: false,
    color: "emerald",
    bullets: [
      "Implemented supervised learning models using Scikit-learn on real-world clinical data",
      "Automated end-to-end data preprocessing pipelines for healthcare datasets",
      "Delivered a complete ML project for health risk prediction with documented results",
    ],
  },
  {
    id: 6,
    role: "AI Career Essentials Intern",
    company: "ALX Africa",
    type: "Program",
    period: "Apr 2025 – Jun 2025",
    current: false,
    color: "amber",
    bullets: [
      "Applied cutting-edge generative AI tools for real-world problem-solving and productivity",
      "Studied ethical AI principles, deep learning fundamentals, and prompt engineering",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "NFC-Based Healthcare System",
    subtitle: "Graduation Project",
    description:
      "A full-stack intelligent healthcare platform featuring NLP-powered Drug–Drug Interaction (DDI) detection and a bilingual Arabic/English medical chatbot for real-time patient support.",
    longDescription:
      "Built a production-ready healthcare system combining NFC technology with AI. The DDI detection model analyzes medication risks using NLP, while the bilingual chatbot provides 24/7 patient support in Arabic and English. Backend powered by FastAPI with MongoDB for scalable data management.",
    tags: ["Python", "FastAPI", "MongoDB", "NLP", "REST APIs", "LLM"],
    category: "AI / Healthcare",
    featured: true,
    github: "https://github.com/AbdelrahmanTarek327",
    gradient: "from-violet-600/20 to-cyan-600/20",
    borderColor: "border-violet-500/20",
    accentColor: "text-violet-400",
    metrics: ["DDI Detection Model", "Bilingual Chatbot", "REST API Backend"],
  },
  {
    id: 2,
    title: "EPL Match Result Predictor",
    subtitle: "NTI Internship Final Project",
    description:
      "Machine learning pipeline predicting English Premier League match outcomes (Home / Draw / Away) using 24 years of historical data with XGBoost achieving best-in-class performance.",
    longDescription:
      "Processed and engineered features from 24 years of EPL data (2000–2024). Tested multiple ML models including Logistic Regression, Random Forest, and XGBoost. Achieved highest accuracy with XGBoost through hyperparameter tuning and cross-validation.",
    tags: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Seaborn", "Matplotlib"],
    category: "ML / Sports Analytics",
    featured: true,
    github: "https://github.com/AbdelrahmanTarek327",
    gradient: "from-cyan-600/20 to-emerald-600/20",
    borderColor: "border-cyan-500/20",
    accentColor: "text-cyan-400",
    metrics: ["2000–2024 Dataset", "XGBoost Best Model", "3-Class Classification"],
  },
  {
    id: 3,
    title: "Adventure Works Sales Dashboard",
    subtitle: "Power BI Analytics",
    description:
      "Executive-level interactive sales analytics dashboard built in Power BI with advanced DAX measures, KPIs for revenue and order trends, and drill-through capabilities.",
    longDescription:
      "Transformed raw Adventure Works sales data into an actionable executive dashboard. Used Power Query for advanced data transformations, DAX for custom measures, and designed intuitive drill-through pages for granular analysis.",
    tags: ["Power BI", "DAX", "Power Query", "Data Modeling", "Analytics"],
    category: "Data Analytics / BI",
    featured: false,
    github: "https://github.com/AbdelrahmanTarek327",
    gradient: "from-amber-600/20 to-orange-600/20",
    borderColor: "border-amber-500/20",
    accentColor: "text-amber-400",
    metrics: ["KPI Dashboards", "Advanced DAX", "Drill-through Reports"],
  },
];

export const skills = [
  {
    category: "Languages & Core",
    icon: "Code2",
    color: "violet",
    items: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 82 },
      { name: "NumPy / Pandas", level: 90 },
    ],
  },
  {
    category: "Machine Learning",
    icon: "Brain",
    color: "cyan",
    items: [
      { name: "Scikit-learn", level: 88 },
      { name: "XGBoost / LightGBM", level: 82 },
      { name: "Feature Engineering", level: 85 },
    ],
  },
  {
    category: "Deep Learning",
    icon: "Cpu",
    color: "emerald",
    items: [
      { name: "TensorFlow / Keras", level: 85 },
      { name: "CNNs / Transfer Learning", level: 84 },
      { name: "NLP / Transformers", level: 78 },
    ],
  },
  {
    category: "Generative AI",
    icon: "Sparkles",
    color: "violet",
    items: [
      { name: "LLMs / Prompt Engineering", level: 80 },
      { name: "Hugging Face", level: 75 },
      { name: "GANs / Diffusion Models", level: 70 },
    ],
  },
  {
    category: "Computer Vision",
    icon: "Eye",
    color: "cyan",
    items: [
      { name: "Image Classification", level: 85 },
      { name: "Object Detection", level: 75 },
      { name: "Face Recognition", level: 72 },
    ],
  },
  {
    category: "Data & BI Tools",
    icon: "BarChart3",
    color: "amber",
    items: [
      { name: "Power BI / DAX", level: 85 },
      { name: "Power Query / Excel", level: 82 },
      { name: "FastAPI / MongoDB", level: 75 },
    ],
  },
];

export const techBadges = [
  "Python", "TensorFlow", "Keras", "Scikit-learn", "XGBoost",
  "NumPy", "Pandas", "FastAPI", "MongoDB", "SQL",
  "Power BI", "DAX", "Hugging Face", "OpenCV", "Matplotlib",
  "Seaborn", "NLP", "LLMs", "CNNs", "REST APIs",
];

export const certifications = [
  {
    title: "Future AWS AI Scientist",
    issuer: "Udacity Nanodegree Program",
    icon: "aws",
    color: "amber",
  },
  {
    title: "Generative AI Summer Training",
    issuer: "NVIDIA Deep Learning Institute (DLI) × ITI",
    icon: "nvidia",
    color: "emerald",
  },
  {
    title: "Data Science Essentials with Python",
    issuer: "Cisco Networking Academy",
    icon: "cisco",
    color: "cyan",
  },
  {
    title: "IBM Data Analytics Professional",
    issuer: "IBM × MCIT Egypt",
    icon: "ibm",
    color: "violet",
  },
  {
    title: "Introducing Generative AI with AWS",
    issuer: "Udacity",
    icon: "aws",
    color: "amber",
  },
  {
    title: "Machine Learning Foundations",
    issuer: "AWS Educate",
    icon: "aws",
    color: "amber",
  },
  {
    title: "AI & Machine Learning Foundations",
    issuer: "SprintUp by Sprints",
    icon: "general",
    color: "violet",
  },
];

export const education = {
  degree: "Bachelor's in Electronics & Communications Engineering",
  university: "Helwan University",
  location: "Cairo, Egypt",
  period: "Sep 2021 – Jul 2026",
  grade: "Very Good",
  focus: ["Signal Processing", "Digital Communications", "Machine Learning", "Control Systems"],
};
