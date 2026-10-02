"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CursorTrail } from "@/components/CursorTrail";
import { Nav } from "@/components/Nav";
import { ProjectItem } from "@/components/ProjectItem";

const experience = [
  {
    role: "Forward Deployed Software Engineer Intern",
    org: "Merble • New York City, NY",
    period: "June 2026 - August 2026",
    bullets: [
      <>Building <strong className="text-neutral-200 font-semibold">4 OAuth-based marketplace integrations</strong> for two major CRMs, replacing one-off manual setups with a scalable model.</>,
      <>Engineering a layoff signal pipeline reconciling federal WARN Act filings, improving distress detection across <strong className="text-neutral-200 font-semibold">8.7M+ worker records</strong>.</>,
    ],
  },
  {
    role: "Data Engineering Intern",
    org: "Just Food • Lawrence, KS",
    period: "January 2026 - May 2026",
    bullets: [
      <>Led the redesign and deployment of the official website to improve user experience and digital presence.</>,
      <>Analyzed <strong className="text-neutral-200 font-semibold">50,000+ donor records</strong> using SQL and Excel to uncover trends for historical performance tracking.</>,
    ],
  },
  {
    role: "Undergraduate Research Engineer",
    org: "Dr. Karthik Srinivasan, KU School of Business • Lawrence, KS",
    period: "December 2025 - Present",
    bullets: [
      <>Co-authoring a journal submission to the Journal of Information Systems analyzing <strong className="text-neutral-200 font-semibold">777,902 human-preference observations</strong> across <strong className="text-neutral-200 font-semibold">362 LLMs</strong>.</>,
      <>Quantified Pareto concentration in frontier AI: <strong className="text-neutral-200 font-semibold">8 of 25 orgs</strong> produce elite-tier models, and <strong className="text-neutral-200 font-semibold">9 of 37 months</strong> drive <strong className="text-neutral-200 font-semibold">80%</strong> of rating progress.</>,
    ],
  },
];

const awards = [
  { title: "Kirkendall Ideation Awards", detail: "1st Place", date: "January 2025" },
  { title: "Jayhawk Discovery Challenge (Entrepreneurship)", detail: "1st Place", date: "December 2025" },
  { title: "Analytics Information Operations Case Competition", detail: "1st Place", date: "November 2025" },
  { title: "Manhattan University International Analytics Competition", detail: "Best Poster Award", date: "May 2025" },
];

const honors = [
  "International Excellence Award",
  "Black-Babcock Excellence Award",
  "Undergraduate Research Award",
  "University Honors Program",
];

const featuredProjects = [
  {
    title: "NexusAID",
    tag: "HackKU — Overall Winner, General Track 1st Place",
    desc: <>End-to-end blockchain-powered humanitarian payment pipeline on <strong className="text-neutral-200 font-semibold">XRP Ledger</strong>, tokenizing fiat donations into RLUSD stablecoins with full transaction transparency from donation to disbursement. Gasless recipient wallets are dynamically provisioned per Humanitarian ID, with SMS-based fallback via Twilio for internet-blackout crisis zones.</>,
    link: "https://github.com/bhumikaguptaa/NexusAid",
  },
  {
    title: "TapGuard",
    tag: "UPenn Blockchain Hackathon — Winner, TRON Track",
    desc: <>End-to-end cross-chain cryptocurrency payment solution for point-of-sale and e-commerce, built as a &ldquo;tap to pay&rdquo; experience bridging traditional retail with decentralized finance. Includes a high-performance dual-chain settlement engine with automated backend reconciliation on the <strong className="text-neutral-200 font-semibold">TRON network</strong>.</>,
    link: "https://github.com/bhumikaguptaa/TapGuard",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ cursor: "none" }} className="flex flex-col items-center font-mono w-full">
      <CursorTrail />
      <Nav />

      <div className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center"
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              Bhumika{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-800">
                Gupta
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-neutral-400 font-light">
              Business Analytics & Mathematics @ University of Kansas
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
              <Link
                href="https://github.com/bhumikaguptaa"
                target="_blank"
                className="hover:text-rose-500 transition-colors cursor-none"
              >
                github.com/bhumikaguptaa
              </Link>
              <span>•</span>
              <Link
                href="https://linkedin.com/in/bhumikagupta9"
                target="_blank"
                className="hover:text-rose-500 transition-colors cursor-none"
              >
                linkedin.com/in/bhumikagupta9
              </Link>
              <span>•</span>
              <Link
                href={`mailto:${"guptabhumika220605@gmail.com"}`}
                className="hover:text-rose-500 transition-colors cursor-none"
              >
                Email Me
              </Link>
              <span>•</span>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="hover:text-rose-500 transition-colors cursor-none"
              >
                Resume
              </Link>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-neutral-400 mt-8">
              I enjoy tackling complex, data-heavy problems, particularly in the blockchain, fintech and entrepreneurial spaces.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-56 h-72 md:w-64 md:h-80 shrink-0 mx-auto md:mx-0"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-rose-600/40 to-rose-900/10 rounded-2xl blur-xl" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-neutral-800">
              <Image
                src="/profile.jpg"
                alt="Bhumika Gupta"
                fill
                sizes="(min-width: 768px) 16rem, 14rem"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.section>

        {/* Experience */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-24 scroll-mt-20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-rose-600 rounded-full"></span>
            Experience
          </h3>
          <div className="space-y-12 border-l border-neutral-800 pl-8 ml-3 relative">
            {experience.map((item, i) => (
              <div className="relative group" key={i}>
                <div className="absolute -left-[39px] top-1 h-4 w-4 rounded-full border-2 border-neutral-800 bg-neutral-950 group-hover:border-rose-600 transition-colors" />
                <h4 className="text-xl font-semibold text-neutral-100 group-hover:text-rose-500 transition-colors">
                  {item.role}
                </h4>
                <p className="text-sm text-neutral-500 mb-2">
                  {item.period} • {item.org}
                </p>
                <ul className="space-y-1.5">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="text-neutral-400 leading-relaxed text-sm flex gap-2">
                      <span className="text-rose-700 mt-1.5 shrink-0">▪</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="scroll-mt-20"
        >
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 bg-rose-600 rounded-full"></span>
            Featured Projects
          </h3>

          <p
            onClick={() => router.push("/projects")}
            className="text-xl mb-8 text-neutral-400 font-light hover:text-rose-500 hover:cursor-pointer cursor-none"
          >
            Full List of Projects
          </p>

          <div className="space-y-12 pl-8 ml-3 relative">
            {featuredProjects.map((p, i) => (
              <ProjectItem key={i} title={p.title} tag={p.tag} desc={p.desc} link={p.link} />
            ))}
          </div>
        </motion.section>

        {/* Awards & Honors */}
        <motion.section
          id="awards"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24 scroll-mt-20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-rose-600 rounded-full"></span>
            Awards & Honors
          </h3>
          <div className="space-y-12 border-l border-neutral-800 pl-8 ml-3 relative mb-10">
            {awards.map((a, i) => (
              <div className="relative group" key={i}>
                <div className="absolute -left-[39px] top-1 h-4 w-4 rounded-full border-2 border-neutral-800 bg-neutral-950 group-hover:border-rose-600 transition-colors" />
                <h4 className="text-xl font-semibold text-neutral-100 group-hover:text-rose-500 transition-colors">
                  {a.title}
                </h4>
                <p className="text-sm text-neutral-500 mb-2">{a.date}</p>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-950/40 border border-rose-800/60 rounded-full text-xs font-semibold text-rose-300">
                  🏆 {a.detail}
                </span>
              </div>
            ))}
          </div>

          <h4 className="text-lg font-semibold text-neutral-200 mb-4">Honors & Scholarships</h4>
          <div className="flex flex-wrap gap-3">
            {honors.map((h, i) => (
              <span
                key={i}
                className="text-sm font-mono font-semibold text-rose-300 border border-rose-900/60 px-4 py-2 rounded-lg bg-rose-950/40"
              >
                {h}
              </span>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
