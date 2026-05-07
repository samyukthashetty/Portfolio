"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  ShieldCheck,
  Terminal,
  Cpu,
  Mail,
  Phone,
  ExternalLink,
  FileText,
  CheckCircle,
  Globe,
  Languages,
  Calendar,
  MapPin,
  User,
  Send,
  ArrowUpRight,
  BookOpen,
  Award,
  Menu,
  X,
  Copy,
  ChevronRight,
} from "lucide-react";

// Custom SVG Brand Icons
const Linkedin = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Github = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


// Translations dictionary
const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I am",
      title: "Bilingual Software Engineer",
      subtitle: "BackEnd Developer",
      bio: "Crafting highly performant, secure, and scalable backend architectures and RESTful APIs. Specializing in Node.js, Python, and relational/NoSQL databases with a strong capability in Japanese-English technical collaboration.",
      explore: "Explore Work",
      contact: "Get In Touch",
      yearsExp: "2.5+ Years",
      yearsExpText: "Professional Experience",
      frameworks: "5+ Core",
      frameworksText: "Backend Frameworks",
      bilingual: "JLPT N3/N4",
      bilingualText: "English & Japanese",
    },
    about: {
      title: "About Me",
      subtitle: "Who is Samyuktha?",
      p1: "I am a dedicated Backend Developer with 2.5 years of industry experience building robust server-side applications, optimizing databases, and orchestrating API workflows.",
      p2: "As a Bilingual Software Engineer, I act as a technical bridge, facilitating seamless communication between English-speaking and Japanese-speaking stakeholders, resolving requirements, and optimizing deliveries.",
      p3: "I thrive on writing clean, self-documenting code, designing efficient data schemas, and keeping application security robust with OAuth 2.0 and JWT.",
      cardTitle: "Bilingual Bridge",
      cardText: "Active N2/N1 Japanese candidate. Excellent at translating complex technical requirements and leading cross-border agile ceremonies.",
      badgeBackend: "Backend Specialist",
      badgeDatabase: "DB Architecture",
      badgeBilingual: "EN/JP Collaboration",
    },
    skills: {
      title: "Technical Expertise",
      subtitle: "My Tech Stack & Tools",
      languages: "Languages",
      backend: "Backend Frameworks",
      databases: "Databases",
      devops: "DevOps & Tools",
      security: "Security & Auth",
      levelAdvanced: "Advanced",
      levelProficient: "Proficient",
      levelFamiliar: "Familiar / Active",
    },
    experience: {
      title: "Employment History",
      subtitle: "My Professional Journey",
      company: "Nichi-In Software Solutions Pvt. Ltd.",
      role: "Bilingual Software Engineer — BackEnd Developer",
      duration: "Sept 2023 - Present",
      location: "Bengaluru, India (Hybrid)",
      bullet1Title: "Backend Development & API Implementation",
      bullet1Desc: "Developed backend services and RESTful APIs using Node.js, Django, FastAPI, KeystoneJS, and Laravel, implementing server-side business logic and integrating APIs with frontend applications and external services.",
      bullet2Title: "Database Management & Optimization",
      bullet2Desc: "Designed and managed relational database operations including data modeling, CRUD functionality, and query optimization (PostgreSQL, MySQL) to ensure efficient and reliable data processing.",
      bullet3Title: "Authentication, Validation & Performance",
      bullet3Desc: "Implemented authentication workflows (OAuth 2.0, JWT) and robust server-side validations while diagnosing complex application issues, resolving bugs, and optimizing code for substantial API performance gains.",
      bullet4Title: "Bilingual Technical Collaboration",
      bullet4Desc: "Acted as a Japanese–English bilingual software engineer, supporting direct communication with Japanese clients/stakeholders, interpreting complex requirements, and assisting technical discussions across cross-functional teams.",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Solutions I've Architected",
      role: "Role",
      techs: "Technologies",
      project1: {
        title: "Hotel Chancery Booking Management System",
        role: "Backend Engineer",
        desc: "Built containerized backend services and implemented ACL-based security with asynchronous workers to streamline booking management.",
        bullets: [
          "Designed database models and optimized PostgreSQL queries using Sequelize ORM.",
          "Implemented robust Access Control List (ACL) authorization for different staff levels.",
          "Integrated asynchronous SMTP workers for reservation email dispatching, reducing response times by 40%.",
          "Dockerized the backend application to ensure environment consistency across staging and production.",
        ],
      },
      project2: {
        title: "Tourism Web Applications (Nara, Gose & Kashiba)",
        role: "Backend Developer",
        desc: "Created and maintained backend APIs for tourism platforms, enabling dynamic content management and data delivery for multiple city-based tourism applications using KeystoneJS and PostgreSQL.",
        bullets: [
          "Engineered a scalable multi-tenant CMS infrastructure using KeystoneJS and Prisma.",
          "Constructed high-speed API endpoints to deliver dynamic local sightseeing data to mobile and web frontends.",
          "Handled robust content synchronization workflows and automated mail notifications.",
          "Ensured multilingual data storage and retrieval capability to serve international tourists.",
        ],
      },
    },
    education: {
      title: "Education & Certifications",
      subtitle: "Learning & Academic Credentials",
      degree: "B.E. in Computer Science",
      school: "Dr. T. Thimmiah Institute Of Technology",
      year: "2019 - 2023",
      cert1: "Full Stack Java Certification",
      cert1Org: "Tap Academy",
      cert2: "Japanese Language Proficiency Test",
      cert2N3: "JLPT N3 Certified (Active N2/N1 Candidate)",
      cert2N4: "JLPT N4 Certified",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's Collaborate",
      message: "I am always open to exploring new full-time backend opportunities, freelance projects, or bilingual engineering roles. Feel free to reach out via email, phone, or LinkedIn!",
      formName: "Full Name",
      formEmail: "Email Address",
      formMessage: "Your Message",
      formSend: "Send Message",
      formSending: "Sending...",
      formSuccess: "Thank you! Your message has been sent successfully (Mocked).",
      copySuccess: "Copied to clipboard!",
      clickCopy: "Click to copy",
    },
    footer: {
      rights: "All rights reserved.",
      backToTop: "Back to Top",
    },
  },
  ja: {
    nav: {
      about: "自己紹介",
      skills: "スキル",
      experience: "職歴",
      projects: "プロジェクト",
      education: "学歴・資格",
      contact: "お問い合わせ",
    },
    hero: {
      greeting: "はじめまして、",
      title: "バイリンガル ソフトウェアエンジニア",
      subtitle: "バックエンド開発者",
      bio: "Node.js、Python、各種リレーショナル/NoSQLデータベースを用いた、高可用性でセキュアなバックエンドシステムおよびRESTful APIを構築。日英の技術的架け橋として多国籍なチーム連携を得意としています。",
      explore: "実績を見る",
      contact: "連絡を取る",
      yearsExp: "2.5年以上",
      yearsExpText: "実務開発経験",
      frameworks: "5+ 種類",
      frameworksText: "バックエンド主要技術",
      bilingual: "日本語能力試験 N3/N4",
      bilingualText: "英語・日本語バイリンガル",
    },
    about: {
      title: "自己紹介",
      subtitle: "サミュクタについて",
      p1: "実務経験2.5年を有する熱意あるバックエンドエンジニアです。堅牢なサーバーサイド構築、データベース最適化、効率的なAPI設計において定評があります。",
      p2: "日英バイリンガルソフトウェアエンジニアとして、英語圏と日本語圏のステークホルダー間の円滑な意思疎通、要件の明確化、アジャイル開発のスムーズな進行をサポートします。",
      p3: "可読性の高いクリーンコードの執筆、洗練されたデータベース設計、OAuth 2.0およびJWTを用いた厳格な認証セキュリティの実装にこだわっています。",
      cardTitle: "言語と技術の架け橋",
      cardText: "現在、日本語能力試験N2/N1合格を目指して学習中。高度な技術要件の翻訳や、国境を越えたスクラム開発の進行をサポートします。",
      badgeBackend: "バックエンド専門",
      badgeDatabase: "DBアーキテクチャ",
      badgeBilingual: "日英ビジネス連携",
    },
    skills: {
      title: "技術スキル一覧",
      subtitle: "対応可能な技術とツール",
      languages: "プログラミング言語",
      backend: "バックエンド フレームワーク",
      databases: "データベース",
      devops: "DevOps・開発ツール",
      security: "セキュリティ・認証",
      levelAdvanced: "上級",
      levelProficient: "中級 (得意)",
      levelFamiliar: "初級 (実践可能)",
    },
    experience: {
      title: "職歴紹介",
      subtitle: "これまでのキャリア歩み",
      company: "日印ソフトウェアソリューションズ株式会社",
      role: "バイリンガル ソフトウェアエンジニア — バックエンド開発者",
      duration: "2023年9月 〜 現在",
      location: "インド・バンガロール (ハイブリッド)",
      bullet1Title: "バックエンド開発 & API実装",
      bullet1Desc: "Node.js、Django、FastAPI、KeystoneJS、Laravelを用いたバックエンドサービスおよびRESTful APIの開発。サーバーサイドのビジネスロジック実装、フロントエンドおよび外部サービスとのAPI連携を牽引。",
      bullet2Title: "データベース管理 & 最適化",
      bullet2Desc: "PostgreSQL、MySQL等を用いたデータモデリング、効率的なCRUD機能開発、複雑なSQLクエリの最適化。信頼性が高く高速なデータ処理設計を実施。",
      bullet3Title: "認証、検証、パフォーマンス向上",
      bullet3Desc: "OAuth 2.0やJWTによるセキュアな認証ワークフローと入力値検証の実装。バグ修正、システム診断、バックエンドコード最適化によるAPIレスポンスの大幅な向上。",
      bullet4Title: "バイリンガル技術連携・クライアント支援",
      bullet4Desc: "日英バイリンガルエンジニアとして、日本のクライアントやステークホルダーとの直接交渉を支援。複雑な日本語要件を開発チームに連携し、チームを跨ぐ技術討議を円滑に進行。",
    },
    projects: {
      title: "主要プロジェクト",
      subtitle: "手掛けたバックエンドソリューション",
      role: "役割",
      techs: "使用技術",
      project1: {
        title: "Hotel Chancery 予約管理システム",
        role: "バックエンド開発リード",
        desc: "コンテナ化されたマイクロサービス型バックエンドを構築し、ACLベースのアクセス制御と非同期タスクワーカーの導入で予約ワークフローを自動化。",
        bullets: [
          "Sequelize ORM を用いてPostgreSQLのデータスキーマ設計およびクエリ最適化を達成。",
          "役職に応じたきめ細かいアクセス制御リスト(ACL)認可システムを実装し、セキュリティを担保。",
          "SMTP非同期ワーカーを統合し、予約確認メールの配信をバックグラウンド処理。全体の応答速度を40%短縮。",
          "Dockerコンテナ化を行い、テスト環境から本番環境まで一貫したデプロイ基盤を構築。",
        ],
      },
      project2: {
        title: "観光ウェブアプリケーション（奈良・御所・香芝プロジェクト）",
        role: "バックエンドエンジニア",
        desc: "KeystoneJSとPostgreSQLを採用し、地方自治体の観光プラットフォーム向けの多言語コンテンツ配信APIおよび管理者向けCMSを設計・運用。",
        bullets: [
          "KeystoneJSとPrismaを組み合わせ、スケーラブルなマルチテナント型CMS管理画面を構築。",
          "モバイルアプリおよびWebフロントエンドへ観光地データをミリ秒単位で高速配給するAPIエンドポイントを設計。",
          "コンテンツ同期の自動化タスクおよび電子メール通知システムをSMTPで統合。",
          "訪日外国人観光客に対応するため、多言語データの格納と透過的なローカライズ取得をデータベース層でサポート。",
        ],
      },
    },
    education: {
      title: "学歴・資格",
      subtitle: "教育機関と取得済みの認定資格",
      degree: "コンピューターサイエンス工学士 (B.E.)",
      school: "Dr. T. Thimmiah Institute Of Technology",
      year: "2019年 - 2023年",
      cert1: "フルスタック Java プログラミング認定資格",
      cert1Org: "Tap Academy",
      cert2: "日本語能力試験 (JLPT)",
      cert2N3: "JLPT N3 合格 (現在N2/N1に向け学習中)",
      cert2N4: "JLPT N4 合格",
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "お気軽にご連絡ください",
      message: "現在、バックエンドエンジニア、バイリンガルエンジニアとしてのフルタイムポジション、またはフリーランスの機会を探しています。メール、お電話、またはLinkedInよりお気軽にご連絡ください！",
      formName: "お名前",
      formEmail: "メールアドレス",
      formMessage: "メッセージ内容",
      formSend: "メッセージを送信",
      formSending: "送信中...",
      formSuccess: "ありがとうございます！メッセージが正常に送信されました（モック実装）。",
      copySuccess: "クリップボードにコピーしました！",
      clickCopy: "クリックしてコピー",
    },
    footer: {
      rights: "All rights reserved.",
      backToTop: "トップに戻る",
    },
  },
};

const skillCategories = [
  {
    id: "languages",
    icon: Code2,
    color: "from-violet-500 to-indigo-500",
    skillsList: [
      { name: "JavaScript", level: 90, status: "advanced" },
      { name: "Python", level: 85, status: "advanced" },
      { name: "Java", level: 80, status: "proficient" },
      { name: "PHP", level: 75, status: "proficient" },
      { name: "HTML / CSS", level: 90, status: "advanced" },
    ],
  },
  {
    id: "backend",
    icon: Server,
    color: "from-indigo-500 to-cyan-500",
    skillsList: [
      { name: "Node.js / Express.js", level: 90, status: "advanced" },
      { name: "FastAPI", level: 85, status: "advanced" },
      { name: "Django", level: 80, status: "proficient" },
      { name: "Laravel", level: 75, status: "proficient" },
      { name: "KeystoneJS", level: 85, status: "proficient" },
    ],
  },
  {
    id: "databases",
    icon: Database,
    color: "from-cyan-500 to-emerald-500",
    skillsList: [
      { name: "PostgreSQL", level: 85, status: "advanced" },
      { name: "MySQL", level: 85, status: "advanced" },
      { name: "MongoDB", level: 75, status: "proficient" },
      { name: "Prisma ORM", level: 85, status: "proficient" },
      { name: "Sequelize ORM", level: 90, status: "advanced" },
    ],
  },
  {
    id: "devops",
    icon: Cpu,
    color: "from-emerald-500 to-amber-500",
    skillsList: [
      { name: "Docker", level: 80, status: "proficient" },
      { name: "GitHub Actions", level: 75, status: "proficient" },
      { name: "Postman API Testing", level: 90, status: "advanced" },
      { name: "Git & Version Control", level: 90, status: "advanced" },
    ],
  },
  {
    id: "security",
    icon: ShieldCheck,
    color: "from-amber-500 to-violet-500",
    skillsList: [
      { name: "OAuth 2.0 Flow", level: 85, status: "proficient" },
      { name: "JSON Web Tokens (JWT)", level: 90, status: "advanced" },
      { name: "ACL (Access Control List)", level: 85, status: "proficient" },
      { name: "Backend Validations", level: 95, status: "advanced" },
    ],
  },
];

export default function Home() {
  const [lang, setLang] = useState<"en" | "ja">("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("languages");
  const [copiedText, setCopiedText] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Contact Form States
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 5000);
    }, 1500);
  };

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      setMobileMenuOpen(false);
      const headerOffset = 90; // Height of the fixed nav bar + extra breathing space
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] bg-grid-pattern text-slate-800 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Dynamic Ambient Background Blobs */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-violet-600/10 glow-blur animate-float-slow" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-600/10 glow-blur animate-float-medium" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/3 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-600/10 glow-blur animate-float-slow" />

      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200 bg-[#f8fafc]/80 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => smoothScroll(e, "hero")}
            className="flex items-center gap-2 font-mono text-xl font-bold tracking-tight text-slate-900"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Samyuktha.P()
            </span>
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-8 lg:flex">
             {Object.entries(t.nav).map(([key, label], idx) => (
              <motion.a
                key={key}
                href={`#${key}`}
                onClick={(e) => smoothScroll(e, key)}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 hover:underline hover:underline-offset-8 hover:decoration-indigo-500 hover:decoration-2 cursor-pointer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                {label}
              </motion.a>
            ))}

            {/* Language Switcher Toggle */}
            <div className="ml-4 flex rounded-full bg-slate-100 p-1 border border-slate-200">
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  lang === "en"
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ja")}
                className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  lang === "ja"
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                日本語
              </button>
            </div>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* Language Switcher (Mobile) */}
            <div className="flex rounded-full bg-slate-100 p-1 border border-slate-200 scale-90">
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wider transition-all cursor-pointer ${
                  lang === "en"
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
                    : "text-slate-500"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ja")}
                className={`rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wider transition-all cursor-pointer ${
                  lang === "ja"
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
                    : "text-slate-500"
                }`}
              >
                JA
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#f8fafc]/95 backdrop-blur-lg pt-24"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <div className="flex flex-col items-center gap-6 px-6">
              {Object.entries(t.nav).map(([key, label], idx) => (
                <motion.a
                  key={key}
                  href={`#${key}`}
                  onClick={(e) => smoothScroll(e, key)}
                  className="text-lg font-semibold text-slate-800 transition-colors hover:text-indigo-600 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="mx-auto max-w-7xl px-6 pt-24 pb-10 md:px-12 lg:pt-32 lg:pb-14">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Hero Left Info */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-100 px-3.5 py-1 text-sm font-semibold tracking-wider text-violet-700">
                <Globe size={14} className="animate-spin-slow" />
                {t.hero.greeting}
              </div>
              
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Samyuktha P
              </h1>
              
              <div className="mt-3 flex flex-wrap items-center gap-3 text-lg font-bold sm:text-2xl md:text-3xl">
                <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  {t.hero.title}
                </span>
                <span className="hidden text-slate-300 sm:inline">|</span>
                <span className="text-slate-500">{t.hero.subtitle}</span>
              </div>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                {t.hero.bio}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  onClick={(e) => smoothScroll(e, "projects")}
                  className="group flex h-12 items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-6 font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] hover:shadow-indigo-600/40"
                >
                  {t.hero.explore}
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => smoothScroll(e, "contact")}
                  className="flex h-12 items-center rounded-lg border border-slate-200 bg-white px-6 font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:text-slate-900 shadow-sm"
                >
                  {t.hero.contact}
                </a>
              </div>

              {/* Quick Social / Direct Info Pills */}
              <div className="mt-10 flex flex-wrap gap-4 text-slate-600">
                <button
                  onClick={() => handleCopy("samyukthap1709@gmail.com", "email")}
                  className="group flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium transition-colors hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900"
                >
                  <Mail size={13} className="text-violet-600" />
                  samyukthap1709@gmail.com
                  <Copy size={11} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  {copiedText === "email" && <span className="text-emerald-600 font-semibold">{t.contact.copySuccess}</span>}
                </button>

                <button
                  onClick={() => handleCopy("+918310186185", "phone")}
                  className="group flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium transition-colors hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900"
                >
                  <Phone size={13} className="text-indigo-600" />
                  +91 8310186185
                  <Copy size={11} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  {copiedText === "phone" && <span className="text-emerald-600 font-semibold">{t.contact.copySuccess}</span>}
                </button>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium transition-colors hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900"
                >
                  <Linkedin size={13} className="text-cyan-600" />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visuals (System/Backend Architecture Mockup) */}
          <div className="lg:col-span-5">
            <motion.div
              className="relative mx-auto max-w-[420px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {/* Glassmorphic decorative layout represents actual technical visual skill */}
              <div className="glass-card relative rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500" />
                    <span className="h-3 w-3 rounded-full bg-amber-500" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="font-mono text-xs text-slate-400">API_GATEWAY_v2.0.json</span>
                </div>

                <div className="mt-4 space-y-4 font-mono text-xs">
                  {/* API Call Route Mockup */}
                  <div className="rounded-lg bg-slate-50 p-3 border border-slate-100">
                    <div className="flex items-center justify-between text-indigo-600">
                      <span>GET /api/v1/auth/session</span>
                      <span className="rounded bg-indigo-50 px-1 py-0.5 text-[10px] font-semibold text-indigo-700">200 OK</span>
                    </div>
                    <div className="mt-1.5 text-slate-400">{"{"} token: "JWT-OAuth2.0-Active" {"}"}</div>
                  </div>

                  {/* Controller Flow */}
                  <div className="flex items-center justify-center py-1">
                    <div className="h-6 w-0.5 bg-gradient-to-b from-indigo-500 to-cyan-400" />
                  </div>

                  {/* Business Logic Service Mockup */}
                  <div className="rounded-lg bg-slate-50 p-3 border border-slate-100">
                    <div className="flex items-center justify-between text-cyan-600">
                      <span>Service: BookingWorker</span>
                      <span className="rounded bg-cyan-50 px-1 py-0.5 text-[10px] font-semibold text-cyan-700">Active</span>
                    </div>
                    <p className="mt-1.5 text-[11px] text-slate-600">
                      → Executing async ACL check...<br />
                      → Querying PostgreSQL (Pool 14ms)<br />
                      → Pushing task to SMTP worker
                    </p>
                  </div>

                  {/* DB Connection */}
                  <div className="flex items-center justify-center py-1">
                    <div className="h-6 w-0.5 bg-gradient-to-b from-cyan-400 to-emerald-400" />
                  </div>

                  {/* Postgres Mockup */}
                  <div className="rounded-lg bg-slate-50 p-3 border border-slate-100">
                    <div className="flex items-center justify-between text-emerald-600">
                      <span>DB: PostgreSQL</span>
                      <span className="rounded bg-emerald-50 px-1 py-0.5 text-[10px] font-semibold text-emerald-700">Connected</span>
                    </div>
                    <p className="mt-1.5 text-[11px] text-slate-600">
                      SELECT * FROM bookings WHERE city_id = $1;<br />
                      <span className="text-slate-400">// Rows: 24 (Optimized index utilized)</span>
                    </p>
                  </div>
                </div>

                {/* Overlap elements */}
                <div className="absolute -right-4 -bottom-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 p-4 text-center shadow-lg sm:-right-6">
                  <div className="text-xl font-extrabold text-white">2.5+</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-violet-200">Years Exp</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Highlight Stats Bar */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 md:mt-12">
          <motion.div 
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm text-center sm:text-left cursor-pointer"
            whileHover={{ scale: 1.03, y: -4, boxShadow: "0 15px 30px rgba(99, 102, 241, 0.05)" }}
          >
            <h4 className="text-2xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent sm:text-3xl">{t.hero.yearsExp}</h4>
            <p className="mt-1 text-sm text-slate-500 font-semibold">{t.hero.yearsExpText}</p>
          </motion.div>
          <motion.div 
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm text-center cursor-pointer"
            whileHover={{ scale: 1.03, y: -4, boxShadow: "0 15px 30px rgba(99, 102, 241, 0.05)" }}
          >
            <h4 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent sm:text-3xl">{t.hero.frameworks}</h4>
            <p className="mt-1 text-sm text-slate-500 font-semibold">{t.hero.frameworksText}</p>
          </motion.div>
          <motion.div 
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm text-center sm:text-right cursor-pointer"
            whileHover={{ scale: 1.03, y: -4, boxShadow: "0 15px 30px rgba(99, 102, 241, 0.05)" }}
          >
            <h4 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent sm:text-3xl">{t.hero.bilingual}</h4>
            <p className="mt-1 text-sm text-slate-500 font-semibold">{t.hero.bilingualText}</p>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-10 md:px-12 lg:py-14">
        <div className="text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-violet-600">{t.about.title}</h2>
          <h3 className="mt-2 text-3xl font-extrabold bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent sm:text-4xl pb-1">{t.about.subtitle}</h3>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-indigo-500" />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* About Text Content */}
          <div className="space-y-6 lg:col-span-7">
            <p className="text-lg leading-relaxed text-slate-600">
              {t.about.p1}
            </p>
            <p className="text-slate-600 leading-relaxed">
              {t.about.p2}
            </p>
            <p className="text-slate-600 leading-relaxed">
              {t.about.p3}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-full bg-violet-50 border border-violet-100 px-4 py-1.5 text-xs font-semibold text-violet-700">
                {t.about.badgeBackend}
              </span>
              <span className="rounded-full bg-indigo-50 border border-indigo-100 px-4 py-1.5 text-xs font-semibold text-indigo-700">
                {t.about.badgeDatabase}
              </span>
              <span className="rounded-full bg-cyan-50 border border-cyan-100 px-4 py-1.5 text-xs font-semibold text-cyan-700">
                {t.about.badgeBilingual}
              </span>
            </div>
          </div>

          {/* About Decorative Bilingual Card */}
          <div className="lg:col-span-5">
            <motion.div
              className="glass-card overflow-hidden rounded-2xl border border-slate-100 p-6 cursor-pointer"
              whileHover={{ scale: 1.03, y: -6, boxShadow: "0 25px 50px rgba(99, 102, 241, 0.08)" }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600 border border-indigo-100">
                  <Languages size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{t.about.cardTitle}</h4>
                  <p className="text-xs text-slate-400">English ↔ Japanese Tech Alignment</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <blockquote className="border-l-2 border-indigo-500 pl-4 italic text-slate-600 text-sm">
                  {lang === "en"
                    ? "\"Effectively resolving requirements and reducing communications gaps between clients and engineering squads is my core priority.\""
                    : "「お客様と開発チームの間の意思疎通を円滑にし、複雑な要件を齟齬なく実装へと導くことを最も重視しています。」"}
                </blockquote>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {t.about.cardText}
                </p>

                {/* Language Stats */}
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>English (Professional)</span>
                      <span>Native / Bilingual</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full" style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>Japanese (Bilingual / Technical)</span>
                      <span>JLPT N3 Certified (Active N2/N1)</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full bg-violet-500 rounded-full" style={{ width: "75%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mx-auto max-w-7xl px-6 py-10 md:px-12 lg:py-14">
        <div className="text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-violet-600">{t.skills.title}</h2>
          <h3 className="mt-2 text-3xl font-extrabold bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent sm:text-4xl pb-1">{t.skills.subtitle}</h3>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-indigo-500" />
        </div>

        {/* Tab selection */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {skillCategories.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeTab === cat.id
                    ? "border-indigo-600/20 bg-indigo-50 text-indigo-700 shadow-sm"
                    : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-950"
                }`}
              >
                <CatIcon size={16} />
                {t.skills[cat.id as keyof typeof t.skills]}
              </button>
            );
          })}
        </div>

        {/* Skills display grids */}
        <div className="mx-auto mt-8 max-w-3xl">
          <AnimatePresence mode="wait">
            {skillCategories.map((cat) => {
              if (cat.id !== activeTab) return null;
              return (
                <motion.div
                  key={cat.id}
                  className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    {cat.skillsList.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-800">{skill.name}</span>
                          <span className="text-xs font-semibold text-slate-400">
                            {skill.status === "advanced" && t.skills.levelAdvanced}
                            {skill.status === "proficient" && t.skills.levelProficient}
                            {skill.status === "familiar" && t.skills.levelFamiliar}
                          </span>
                        </div>
                        <div className="relative h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${cat.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="mx-auto max-w-7xl px-6 py-10 md:px-12 lg:py-14">
        <div className="text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-violet-600">{t.experience.title}</h2>
          <h3 className="mt-2 text-3xl font-extrabold bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent sm:text-4xl pb-1">{t.experience.subtitle}</h3>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-indigo-500" />
        </div>

        {/* Timeline Core */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Vertical Glowing Line */}
          <div className="glow-timeline-line absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent sm:left-1/2 sm:-ml-[1px]" />

          <div className="space-y-12">
            {/* Employment Card */}
            <div className="relative flex flex-col sm:flex-row sm:justify-between">
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#f8fafc] bg-indigo-600 text-white sm:left-1/2 sm:-ml-4 z-10 shadow-lg shadow-indigo-600/20">
                <Calendar size={14} />
              </div>

              {/* Timeline Card - Left / Main Content */}
              <div className="ml-12 sm:ml-0 sm:w-[45%]">
                <motion.div
                  className="glass-card rounded-2xl border border-slate-100 p-6 shadow-xl"
                  whileHover={{ scale: 1.01 }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-flex rounded-md bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">
                    {t.experience.duration}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">{t.experience.role}</h3>
                  <p className="text-sm font-medium text-indigo-600">{t.experience.company}</p>

                  <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin size={12} />
                    {t.experience.location}
                  </div>
                </motion.div>
              </div>

              {/* Timeline Card - Right / Expanded Details */}
              <div className="ml-12 mt-4 sm:ml-0 sm:mt-0 sm:w-[45%]">
                <motion.div
                  className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-4 text-sm text-slate-600">
                    <div className="flex gap-2.5 items-start">
                      <ChevronRight size={16} className="mt-0.5 shrink-0 text-violet-500" />
                      <div>
                        <strong className="text-slate-800 block font-semibold mb-0.5">{t.experience.bullet1Title}</strong>
                        <p className="text-slate-500 text-xs leading-relaxed">{t.experience.bullet1Desc}</p>
                      </div>
                    </div>
                    <div className="flex gap-2.5 items-start">
                      <ChevronRight size={16} className="mt-0.5 shrink-0 text-indigo-500" />
                      <div>
                        <strong className="text-slate-800 block font-semibold mb-0.5">{t.experience.bullet2Title}</strong>
                        <p className="text-slate-500 text-xs leading-relaxed">{t.experience.bullet2Desc}</p>
                      </div>
                    </div>
                    <div className="flex gap-2.5 items-start">
                      <ChevronRight size={16} className="mt-0.5 shrink-0 text-cyan-500" />
                      <div>
                        <strong className="text-slate-800 block font-semibold mb-0.5">{t.experience.bullet3Title}</strong>
                        <p className="text-slate-500 text-xs leading-relaxed">{t.experience.bullet3Desc}</p>
                      </div>
                    </div>
                    <div className="flex gap-2.5 items-start">
                      <ChevronRight size={16} className="mt-0.5 shrink-0 text-emerald-500" />
                      <div>
                        <strong className="text-slate-800 block font-semibold mb-0.5">{t.experience.bullet4Title}</strong>
                        <p className="text-slate-500 text-xs leading-relaxed">{t.experience.bullet4Desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-10 md:px-12 lg:py-14">
        <div className="text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-violet-600">{t.projects.title}</h2>
          <h3 className="mt-2 text-3xl font-extrabold bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent sm:text-4xl pb-1">{t.projects.subtitle}</h3>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-indigo-500" />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Project 1: Chancery */}
          <motion.div
            className="glass-card flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 shadow-xl cursor-pointer"
            whileHover={{ scale: 1.03, y: -8, boxShadow: "0 30px 60px rgba(99, 102, 241, 0.12)" }}
            whileTap={{ scale: 0.99 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-6 md:p-8">
              {/* Graphic Header Representation */}
              <div className="mb-6 rounded-xl bg-gradient-to-br from-violet-50 to-indigo-50 p-5 border border-violet-100">
                <div className="flex items-center justify-between">
                  <div className="rounded-lg bg-violet-100/60 p-2 text-violet-600 border border-violet-200">
                    <Server size={22} />
                  </div>
                  <span className="font-mono text-[10px] font-semibold text-violet-600">SYSTEM_CHANCERY_V1</span>
                </div>
                <div className="mt-4 flex items-center gap-1.5 font-mono text-[11px] text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  POSTGRES_POOL ACTIVE (24ms latency)
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900">{t.projects.project1.title}</h3>
              <p className="mt-1.5 text-xs text-indigo-600 font-semibold">{t.projects.role}: {t.projects.project1.role}</p>
              
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {t.projects.project1.desc}
              </p>

              {/* Bullets */}
              <ul className="mt-6 space-y-2.5 text-xs text-slate-500 leading-relaxed">
                {t.projects.project1.bullets.map((bullet, index) => (
                  <li key={index} className="flex gap-2 items-start">
                    <CheckCircle size={13} className="mt-0.5 shrink-0 text-violet-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 md:px-8">
              <div className="flex flex-wrap gap-2">
                <span className="rounded bg-white px-2.5 py-1 text-[11px] font-bold text-slate-600 border border-slate-200 shadow-sm">Express.js</span>
                <span className="rounded bg-white px-2.5 py-1 text-[11px] font-bold text-slate-600 border border-slate-200 shadow-sm">PostgreSQL</span>
                <span className="rounded bg-white px-2.5 py-1 text-[11px] font-bold text-slate-600 border border-slate-200 shadow-sm">Sequelize</span>
                <span className="rounded bg-white px-2.5 py-1 text-[11px] font-bold text-slate-600 border border-slate-200 shadow-sm">Docker</span>
                <span className="rounded bg-white px-2.5 py-1 text-[11px] font-bold text-slate-600 border border-slate-200 shadow-sm">SMTP</span>
              </div>
            </div>
          </motion.div>

          {/* Project 2: Tourism Platform */}
          <motion.div
            className="glass-card flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 shadow-xl cursor-pointer"
            whileHover={{ scale: 1.03, y: -8, boxShadow: "0 30px 60px rgba(99, 102, 241, 0.12)" }}
            whileTap={{ scale: 0.99 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="p-6 md:p-8">
              {/* Graphic Header Representation */}
              <div className="mb-6 rounded-xl bg-gradient-to-br from-cyan-50 to-emerald-50 p-5 border border-cyan-100">
                <div className="flex items-center justify-between">
                  <div className="rounded-lg bg-cyan-100/60 p-2 text-cyan-600 border border-cyan-200">
                    <Database size={22} />
                  </div>
                  <span className="font-mono text-[10px] font-semibold text-cyan-600">MULTI_TENANT_API_V3</span>
                </div>
                <div className="mt-4 flex items-center gap-1.5 font-mono text-[11px] text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
                  PRISMA_ENGINE FULLY IN_SYNC
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900">{t.projects.project2.title}</h3>
              <p className="mt-1.5 text-xs text-indigo-600 font-semibold">{t.projects.role}: {t.projects.project2.role}</p>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {t.projects.project2.desc}
              </p>

              {/* Bullets */}
              <ul className="mt-6 space-y-2.5 text-xs text-slate-500 leading-relaxed">
                {t.projects.project2.bullets.map((bullet, index) => (
                  <li key={index} className="flex gap-2 items-start">
                    <CheckCircle size={13} className="mt-0.5 shrink-0 text-cyan-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 md:px-8">
              <div className="flex flex-wrap gap-2">
                <span className="rounded bg-white px-2.5 py-1 text-[11px] font-bold text-slate-600 border border-slate-200 shadow-sm">KeystoneJS</span>
                <span className="rounded bg-white px-2.5 py-1 text-[11px] font-bold text-slate-600 border border-slate-200 shadow-sm">PostgreSQL</span>
                <span className="rounded bg-white px-2.5 py-1 text-[11px] font-bold text-slate-600 border border-slate-200 shadow-sm">Prisma</span>
                <span className="rounded bg-white px-2.5 py-1 text-[11px] font-bold text-slate-600 border border-slate-200 shadow-sm">SMTP</span>
                <span className="rounded bg-white px-2.5 py-1 text-[11px] font-bold text-slate-600 border border-slate-200 shadow-sm">Multilingual API</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Academic Credentials */}
      <section id="education" className="mx-auto max-w-7xl px-6 py-10 md:px-12 lg:py-14">
        <div className="text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-violet-600">{t.education.title}</h2>
          <h3 className="mt-2 text-3xl font-extrabold bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent sm:text-4xl pb-1">{t.education.subtitle}</h3>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-indigo-500" />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Degree */}
          <motion.div
            className="glass-card rounded-2xl border border-slate-100 p-6 flex flex-col justify-between cursor-pointer"
            whileHover={{ scale: 1.04, y: -6, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.08)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div>
              <div className="rounded-xl bg-violet-50 p-3 text-violet-600 border border-violet-100 w-fit">
                <BookOpen size={20} />
              </div>
              <h4 className="mt-5 text-base font-bold text-slate-900">{t.education.degree}</h4>
              <p className="mt-1 text-sm text-slate-500">{t.education.school}</p>
            </div>
            <span className="mt-6 inline-block font-mono text-xs font-semibold text-slate-400">{t.education.year}</span>
          </motion.div>

          {/* Java Certification */}
          <motion.div
            className="glass-card rounded-2xl border border-slate-100 p-6 flex flex-col justify-between cursor-pointer"
            whileHover={{ scale: 1.04, y: -6, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.08)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div>
              <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600 border border-indigo-100 w-fit">
                <Award size={20} />
              </div>
              <h4 className="mt-5 text-base font-bold text-slate-900">{t.education.cert1}</h4>
              <p className="mt-1 text-sm text-slate-500">{t.education.cert1Org}</p>
            </div>
            <span className="mt-6 inline-block font-mono text-xs font-semibold text-slate-400">Full Stack Java</span>
          </motion.div>

          {/* JLPT Credentials */}
          <motion.div
            className="glass-card rounded-2xl border border-slate-100 p-6 flex flex-col justify-between cursor-pointer"
            whileHover={{ scale: 1.04, y: -6, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.08)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div>
              <div className="rounded-xl bg-cyan-50 p-3 text-cyan-600 border border-cyan-100 w-fit">
                <Languages size={20} />
              </div>
              <h4 className="mt-5 text-base font-bold text-slate-900">{t.education.cert2}</h4>
              <div className="mt-3 space-y-1 text-xs text-slate-500">
                <p className="flex items-center gap-1.5 text-slate-800 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {t.education.cert2N3}
                </p>
                <p className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                  {t.education.cert2N4}
                </p>
              </div>
            </div>
            <span className="mt-6 inline-block font-mono text-xs font-semibold text-slate-400">Active Bilingual</span>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-10 md:px-12 lg:py-14">
        <div className="text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-violet-600">{t.contact.title}</h2>
          <h3 className="mt-2 text-3xl font-extrabold bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent sm:text-4xl pb-1">{t.contact.subtitle}</h3>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-indigo-500" />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          {/* Contact Information & Copy Pills */}
          <div className="space-y-6 lg:col-span-5">
            <p className="text-base leading-relaxed text-slate-600">
              {t.contact.message}
            </p>

            <div className="space-y-4 pt-4">
              <div
                onClick={() => handleCopy("samyukthap1709@gmail.com", "direct_email")}
                className="group flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-violet-50 p-2.5 text-violet-600 border border-violet-100">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Email Address</span>
                    <span className="text-sm font-bold text-slate-900">samyukthap1709@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-semibold">
                  {copiedText === "direct_email" ? (
                    <span className="text-emerald-500">{t.contact.copySuccess}</span>
                  ) : (
                    <span className="flex items-center gap-1 group-hover:text-slate-700 transition-colors">
                      <Copy size={11} /> {t.contact.clickCopy}
                    </span>
                  )}
                </div>
              </div>

              <div
                onClick={() => handleCopy("+918310186185", "direct_phone")}
                className="group flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-indigo-50 p-2.5 text-indigo-600 border border-indigo-100">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Phone Number</span>
                    <span className="text-sm font-bold text-slate-900">+91 8310186185</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-semibold">
                  {copiedText === "direct_phone" ? (
                    <span className="text-emerald-400">{t.contact.copySuccess}</span>
                  ) : (
                    <span className="flex items-center gap-1 group-hover:text-slate-700 transition-colors">
                      <Copy size={11} /> {t.contact.clickCopy}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleFormSubmit} className="glass-card rounded-2xl border border-slate-100 p-6 md:p-8 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="form-name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.contact.formName}</label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-indigo-500/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500/60 shadow-inner"
                  />
                </div>
                <div>
                  <label htmlFor="form-email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.contact.formEmail}</label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-indigo-500/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500/60 shadow-inner"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="form-message" className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.contact.formMessage}</label>
                <textarea
                  id="form-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1.5 block w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-indigo-500/60 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500/60 resize-none shadow-inner"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={formStatus === "sending" || formStatus === "success"}
                  className="group flex h-11 items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-6 font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.01] hover:shadow-indigo-600/30 disabled:opacity-50 animate-pulse-slow"
                >
                  {formStatus === "idle" && (
                    <>
                      {t.contact.formSend}
                      <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                  {formStatus === "sending" && t.contact.formSending}
                  {formStatus === "success" && t.contact.formSuccess}
                </button>

                <AnimatePresence>
                  {formStatus === "success" && (
                    <motion.p
                      className="text-xs font-bold text-emerald-600"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {t.contact.formSuccess}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 py-8 border-t border-slate-200 md:px-12">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-slate-400">
            &copy; 2026 Samyuktha P. {t.footer.rights}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1 text-xs text-slate-500 transition-colors hover:text-slate-900 cursor-pointer"
          >
            {t.footer.backToTop}
            <ChevronRight size={14} className="-rotate-90" />
          </button>
        </div>
      </footer>
    </div>
  );
}
