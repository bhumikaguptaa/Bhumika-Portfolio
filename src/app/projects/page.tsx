"use client";

import Link from "next/link";
import { CursorTrail } from "@/components/CursorTrail";
import { ProjectItem } from "@/components/ProjectItem";

const projectsList = [
  {
    title: "NexusAID",
    description:
      "Engineered an end-to-end blockchain-powered humanitarian payment pipeline on XRP Ledger, tokenizing fiat donations into RLUSD stablecoins with full transaction transparency from donation to disbursement. Architected a gasless recipient wallet system dynamically provisioning XRPL wallets tied to Humanitarian IDs, with SMS-based fallback via Twilio enabling fund access in internet-blackout crisis zones.",
    tag: "HackKU 2026",
    link: "https://github.com/bhumikaguptaa/NexusAid",
    win: "Overall Winner, General Track 1st Place",
  },
  {
    title: "TapGuard",
    description:
      "Engineered an end-to-end cross-chain cryptocurrency payment solution for point-of-sale and e-commerce platforms — a “tap to pay” solution bridging traditional retail with decentralized finance. Architected a high-performance dual-chain settlement engine to process stablecoin payments with automated backend reconciliation on the TRON network, significantly reducing transaction overhead and latency for merchants.",
    tag: "UPenn Blockchain Hackathon 2026",
    link: "https://github.com/bhumikaguptaa/TapGuard",
    win: "Winner, TRON Track",
  },
];

export default function ProjectsPage() {
  return (
    <div
      style={{ cursor: "none" }}
      className="bg-gradient-to-br font-mono from-neutral-950 to-black animated-gradient min-h-screen"
    >
      <CursorTrail />
      <section className="py-20 mx-auto max-w-4xl px-6">
        <Link
          href="/"
          className="text-sm text-neutral-500 hover:text-rose-500 transition-colors cursor-none"
        >
          ← Back
        </Link>

        <h1 className="text-4xl font-bold mt-6 mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-800">
            Full List of Projects
          </span>
        </h1>

        <div className="space-y-12 pl-8 ml-3 relative border-l border-neutral-800">
          {projectsList.map((item, index) => (
            <ProjectItem
              key={index}
              title={item.title}
              desc={item.description}
              tag={item.tag}
              link={item.link}
              win={item.win}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
