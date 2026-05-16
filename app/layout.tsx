import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdelrahman Tarek | AI & Data Science Engineer",
  description:
    "Portfolio of Abdelrahman Tarek — AI & Data Science Engineer specializing in Machine Learning, Deep Learning, Computer Vision, and Generative AI. Based in Cairo, Egypt.",
  keywords: [
    "Abdelrahman Tarek",
    "Data Scientist",
    "Machine Learning Engineer",
    "Deep Learning",
    "Generative AI",
    "Computer Vision",
    "NLP",
    "Python",
    "TensorFlow",
    "Cairo Egypt",
  ],
  authors: [{ name: "Abdelrahman Tarek" }],
  creator: "Abdelrahman Tarek",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abdelrahman Tarek | AI & Data Science Engineer",
    description:
      "Portfolio of Abdelrahman Tarek — AI & Data Science Engineer specializing in ML, DL, Computer Vision, and Generative AI.",
    siteName: "Abdelrahman Tarek Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Tarek | AI & Data Science Engineer",
    description:
      "Portfolio of Abdelrahman Tarek — AI & Data Science Engineer specializing in ML, DL, Computer Vision, and Generative AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="canonical" href="https://AbdelrahmanTarek327.github.io" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
