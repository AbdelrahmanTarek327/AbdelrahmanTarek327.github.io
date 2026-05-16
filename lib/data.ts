export const personalInfo = {
  name: "Abdelrahman Tarek",
  title: "AI & Data Science Engineer",
  tagline: "I design and deploy intelligent systems — from NLP-powered healthcare platforms to production ML pipelines that drive measurable impact.",
  email: "abdelrahmantarek22503@gmail.com",
  phone: "+20 110 162 3257",
  location: "Cairo, Egypt",
  linkedin: "https://www.linkedin.com/in/abdelrahmann-tarek/",
  github: "https://github.com/AbdelrahmanTarek327",
  summary: `Electronics & Communications Engineer at Helwan University, specializing in architecting end-to-end AI systems — from NLP-driven medical platforms to scalable ML pipelines. I engineer solutions at the intersection of healthcare AI, predictive analytics, and generative intelligence.

My work spans designing DDI detection models, building RAG-powered multilingual chatbots, engineering XGBoost prediction systems, and transforming raw data into executive-grade Power BI intelligence. Currently advancing through DEPI's Generative AI program, deepening expertise in LLMs, RAG architectures, and diffusion models.`,
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
    title: "AI-Driven Drug Interaction Detection System",
    subtitle: "Graduation Project",
    problem: "Medication errors from undetected drug-drug interactions cause thousands of preventable adverse clinical events annually in hospital settings.",
    solution: "Engineered a full-stack NFC-based healthcare platform with NLP-powered DDI detection and a bilingual Arabic/English AI medical assistant — bringing intelligent medication safety to point-of-care.",
    description:
      "Production-ready healthcare system combining NFC patient identification with AI-driven medication safety. The DDI detection engine uses transformer-based NLP to flag risk interactions in real time, while the bilingual LLM chatbot delivers 24/7 patient support.",
    impact: [
      "Automated DDI detection via transformer-based NLP",
      "Bilingual AI chatbot (Arabic + English) for patient support",
      "FastAPI + MongoDB for scalable backend services",
      "NFC for instant patient record retrieval at point-of-care",
    ],
    tags: ["Python", "FastAPI", "MongoDB", "NLP", "REST APIs", "LLM", "NFC"],
    category: "AI / Healthcare",
    featured: true,
    github: "https://github.com/AbdelrahmanTarek327",
    gradient: "from-violet-600/25 to-cyan-600/20",
    borderColor: "border-violet-500/20",
    accentColor: "text-violet-400",
    metrics: ["DDI NLP Model", "Bilingual LLM Chatbot", "FastAPI + MongoDB"],
    architecture: ["NFC Reader", "FastAPI", "MongoDB", "NLP Engine", "LLM Chatbot"],
  },
  {
    id: 2,
    title: "EPL Match Result Predictor",
    subtitle: "NTI Internship Final Project",
    problem: "Football match outcomes depend on dozens of correlated variables spanning seasons, making classical heuristic approaches unreliable.",
    solution: "ML pipeline ingesting 24 years of Premier League data, benchmarking Logistic Regression, Random Forest, and XGBoost — with XGBoost delivering best-in-class 3-class accuracy after hyperparameter tuning.",
    description:
      "Machine learning system predicting English Premier League match outcomes using 24 years of historical data. XGBoost achieved the highest accuracy across Home Win / Draw / Away Win classification.",
    impact: [
      "24-year dataset (2000–2024) processed and engineered",
      "3-class classification: Home Win / Draw / Away Win",
      "XGBoost outperformed RF and Logistic Regression",
      "Cross-validation and hyperparameter tuning pipeline",
    ],
    tags: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Seaborn", "Matplotlib"],
    category: "ML / Sports Analytics",
    featured: true,
    github: "https://github.com/AbdelrahmanTarek327",
    gradient: "from-cyan-600/25 to-emerald-600/20",
    borderColor: "border-cyan-500/20",
    accentColor: "text-cyan-400",
    metrics: ["2000–2024 Dataset", "XGBoost Champion", "3-Class Prediction"],
    architecture: [],
  },
  {
    id: 3,
    title: "Kidney Disease Risk Prediction",
    subtitle: "Elevvo Pathways Internship",
    problem: "Early-stage chronic kidney disease progresses silently, with most cases detected too late for effective intervention due to limited screening tools.",
    solution: "End-to-end supervised ML pipeline with automated clinical data preprocessing, feature engineering from biomarkers, and an optimized risk classifier for health screening workflows.",
    description:
      "Health risk prediction system using clinical indicators to classify kidney disease risk. Automated the full pipeline from raw data ingestion to production-ready model output.",
    impact: [
      "Automated preprocessing pipeline for clinical datasets",
      "Feature engineering from kidney biomarker indicators",
      "Benchmarked multiple Scikit-learn classifiers",
      "Documented results for healthcare team handoff",
    ],
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    category: "ML / Healthcare",
    featured: false,
    github: "https://github.com/AbdelrahmanTarek327",
    gradient: "from-emerald-600/25 to-cyan-600/15",
    borderColor: "border-emerald-500/20",
    accentColor: "text-emerald-400",
    metrics: ["Clinical Dataset", "Risk Classifier", "Automated Pipeline"],
    architecture: [],
  },
  {
    id: 4,
    title: "Adventure Works Sales Dashboard",
    subtitle: "Power BI Analytics",
    problem: "Raw multi-region sales data lacked executive-level visibility — leadership couldn't identify performance gaps or forecast trends from raw exports.",
    solution: "Interactive Power BI dashboard with advanced DAX measures, drill-through KPI pages, and Power Query transformations that turn messy transactional data into strategic intelligence.",
    description:
      "Executive-grade sales analytics dashboard with interactive drill-through, custom DAX measures, and automated data transformation via Power Query.",
    impact: [
      "KPIs: total revenue, tax, subtotal, and order trends",
      "Advanced DAX measures for business logic",
      "Drill-through by region, product, and time period",
      "Power Query for complex multi-source transformations",
    ],
    tags: ["Power BI", "DAX", "Power Query", "Data Modeling", "Analytics"],
    category: "Data Analytics / BI",
    featured: false,
    github: "https://github.com/AbdelrahmanTarek327",
    gradient: "from-amber-600/25 to-orange-600/15",
    borderColor: "border-amber-500/20",
    accentColor: "text-amber-400",
    metrics: ["KPI Dashboards", "Advanced DAX", "Drill-through Reports"],
    architecture: [],
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

export const blogPosts = [
  {
    id: 1,
    title: "Building RAG Systems for Medical AI",
    excerpt: "How retrieval-augmented generation transforms healthcare chatbots with always-current drug knowledge bases — and why it outperforms fine-tuning for safety-critical domains.",
    category: "Generative AI",
    categoryColor: "violet",
    readTime: "5 min read",
    href: "https://www.linkedin.com/in/abdelrahmann-tarek/",
  },
  {
    id: 2,
    title: "XGBoost vs Deep Learning for Tabular Prediction",
    excerpt: "A practical benchmark on sports analytics data — why XGBoost still dominates structured tabular problems and when neural networks should replace it.",
    category: "Machine Learning",
    categoryColor: "cyan",
    readTime: "7 min read",
    href: "https://www.linkedin.com/in/abdelrahmann-tarek/",
  },
  {
    id: 3,
    title: "Designing Executive Power BI Dashboards",
    excerpt: "Translating ML model outputs and business KPIs into drill-through Power BI dashboards with advanced DAX — a framework for non-technical stakeholders.",
    category: "Data Analytics",
    categoryColor: "amber",
    readTime: "4 min read",
    href: "https://www.linkedin.com/in/abdelrahmann-tarek/",
  },
  {
    id: 4,
    title: "Transfer Learning for Medical Imaging",
    excerpt: "Achieving strong accuracy on kidney disease classification with ResNet and EfficientNet fine-tuning — lessons learned from limited clinical dataset sizes.",
    category: "Computer Vision",
    categoryColor: "emerald",
    readTime: "6 min read",
    href: "https://www.linkedin.com/in/abdelrahmann-tarek/",
  },
];
