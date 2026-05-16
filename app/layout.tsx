import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdelrahman Tarek | AI & Machine Learning Engineer",
  description:
    "Portfolio of Abdelrahman Tarek — AI & ML Engineer specializing in NLP-powered healthcare systems, predictive ML pipelines, computer vision, and generative AI. Based in Cairo, Egypt.",
  keywords: [
    "Abdelrahman Tarek",
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
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
    title: "Abdelrahman Tarek | AI & Machine Learning Engineer",
    description:
      "AI & ML Engineer specializing in NLP-powered healthcare systems, predictive pipelines, and generative AI.",
    siteName: "Abdelrahman Tarek Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Tarek | AI & Machine Learning Engineer",
    description:
      "AI & ML Engineer specializing in NLP-powered healthcare systems, predictive pipelines, and generative AI.",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="canonical" href="https://AbdelrahmanTarek327.github.io" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
