"use client"

import { useState } from "react"
import {
  SiNodedotjs, SiVercel, SiReact, SiPostgresql,
  SiKubernetes, SiDocker, SiApachekafka, SiPython
} from "react-icons/si"
import { FaAmazon } from "react-icons/fa"

type StackId = "node" | "vercel" | "react" | "postgres" | "aws" | "k8s" | "docker" | "kafka" | "python"

const stacks: { id: StackId; label: string; icon: React.ComponentType<{ className?: string }>; color: string; cardId: string }[] = [
  { id: "node",    label: "Node.js",     icon: SiNodedotjs,         color: "#6DA55F", cardId: "backend"    },
  { id: "vercel",  label: "Vercel",      icon: SiVercel,            color: "#ffffff", cardId: "deploy"     },
  { id: "react",   label: "React.js",    icon: SiReact,             color: "#61DAFB", cardId: "frontend"   },
  { id: "postgres",label: "PostgreSQL",  icon: SiPostgresql,        color: "#4169E1", cardId: "database"   },
  { id: "aws",     label: "AWS",         icon: FaAmazon,            color: "#FF9900", cardId: "infra"      },
  { id: "k8s",     label: "Kubernetes",  icon: SiKubernetes,        color: "#326CE5", cardId: "containers" },
  { id: "docker",  label: "Docker",      icon: SiDocker,            color: "#2496ED", cardId: "containers" },
  { id: "kafka",   label: "Kafka",       icon: SiApachekafka,       color: "#ffffff", cardId: "messaging"  },
  { id: "python",  label: "Python AI",   icon: SiPython,            color: "#3776AB", cardId: "ai"         },
]

const cards: {
  id: string
  label: string
  title: string
  description: string
  stackIds: StackId[]
  col: string
  accent?: string
}[] = [
  {
    id: "backend",
    label: "Runtime Layer",
    title: "Event-Driven Backend",
    description: "High-throughput Node.js services handle concurrent call processing with non-blocking I/O — built for thousands of simultaneous live sessions.",
    stackIds: ["node"],
    col: "col-span-12 md:col-span-8",
    accent: "#6DA55F",
  },
  {
    id: "deploy",
    label: "CI / CD",
    title: "Edge Deployment",
    description: "Zero-config global deploys with instant rollbacks and preview environments on every commit.",
    stackIds: ["vercel"],
    col: "col-span-12 md:col-span-4",
    accent: "#ffffff",
  },
  {
    id: "frontend",
    label: "Frontend",
    title: "Reactive Interface",
    description: "Component-driven UI with real-time state sync across all active sales sessions.",
    stackIds: ["react"],
    col: "col-span-12 md:col-span-4",
    accent: "#61DAFB",
  },
  {
    id: "database",
    label: "Database",
    title: "Relational Store",
    description: "ACID-compliant PostgreSQL for lead records, call metadata, scoring history, and outcome tracking.",
    stackIds: ["postgres"],
    col: "col-span-12 md:col-span-4",
    accent: "#4169E1",
  },
  {
    id: "ai",
    label: "AI / ML",
    title: "Speech Intelligence",
    description: "Python acoustic models extract sentiment, intent, and close-signal confidence from live audio in real time.",
    stackIds: ["python"],
    col: "col-span-12 md:col-span-4",
    accent: "#3776AB",
  },
  {
    id: "infra",
    label: "Infrastructure",
    title: "Cloud Backbone",
    description: "AWS powers compute, object storage, VPC networking, and real-time streaming at enterprise scale with 99.99% SLA.",
    stackIds: ["aws"],
    col: "col-span-12 md:col-span-6",
    accent: "#FF9900",
  },
  {
    id: "containers",
    label: "DevOps",
    title: "Container Orchestration",
    description: "Docker images deployed across Kubernetes clusters for zero-downtime rolling updates and horizontal autoscaling.",
    stackIds: ["docker", "k8s"],
    col: "col-span-12 md:col-span-6",
    accent: "#2496ED",
  },
  {
    id: "messaging",
    label: "Event Streaming",
    title: "Kafka Pipeline",
    description: "Distributed event bus routes call events, lead scoring signals, and CRM triggers with sub-100ms end-to-end latency across all services.",
    stackIds: ["kafka"],
    col: "col-span-12",
    accent: "#ffffff",
  },
]

export default function ScalabilityGrid() {
  const [active, setActive] = useState<StackId | null>(null)

  const activeCardId = active ? stacks.find(s => s.id === active)?.cardId ?? null : null

  const toggle = (id: StackId) => setActive(prev => prev === id ? null : id)

  return (
    <section className="bg-black px-6 py-24 md:py-32" id="scalability">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14">
          <p className="text-gray text-sm uppercase tracking-[0.5em] mb-4">Under The Hood</p>
          <h2 className="text-4xl md:text-5xl font-black text-platinum leading-tight">
            Built on the Stack<br />
            <span className="text-gray/40">That Doesn&apos;t Flinch.</span>
          </h2>
        </div>

        {/* Stack radio pills */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {stacks.map(({ id, label, icon: Icon, color }) => {
            const isActive = active === id
            return (
              <button
                key={id}
                onClick={() => toggle(id)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 text-[11px] font-semibold uppercase tracking-widest"
                style={{
                  borderColor: isActive ? color : "rgba(255,255,255,0.08)",
                  backgroundColor: isActive ? `${color}18` : "transparent",
                  color: isActive ? color : "rgba(134,134,139,1)",
                  boxShadow: isActive ? `0 0 16px ${color}30` : "none",
                }}
              >
                {/* Radio indicator */}
                <span
                  className="w-2 h-2 rounded-full border transition-all duration-200 shrink-0"
                  style={{
                    borderColor: isActive ? color : "rgba(255,255,255,0.2)",
                    backgroundColor: isActive ? color : "transparent",
                  }}
                />
                <Icon className="text-sm" />
                {label}
              </button>
            )
          })}
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          {cards.map(({ id, label, title, description, stackIds, col, accent }) => {
            const isHighlighted = activeCardId === id
            const isDimmed = activeCardId !== null && activeCardId !== id

            return (
              <div
                key={id}
                className={`${col} rounded-3xl border p-7 md:p-9 flex flex-col justify-between gap-6 relative overflow-hidden transition-all duration-300`}
                style={{
                  backgroundColor: isHighlighted ? "rgba(255,255,255,0.04)" : "#111111",
                  borderColor: isHighlighted ? `${accent}50` : "rgba(255,255,255,0.07)",
                  opacity: isDimmed ? 0.35 : 1,
                  boxShadow: isHighlighted ? `0 0 40px ${accent}18` : "none",
                }}
              >
                {/* Dot grid texture */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`dots-${id}`} x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                      <circle cx="1.5" cy="1.5" r="1" fill="rgba(255,255,255,0.04)" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#dots-${id})`} />
                </svg>

                {/* Accent glow blob when highlighted */}
                {isHighlighted && (
                  <div
                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                    style={{ backgroundColor: `${accent}20` }}
                  />
                )}

                {/* Top row: label + stack icons */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray/50">
                    {label}
                  </span>
                  <div className="flex items-center gap-2">
                    {stackIds.map(sid => {
                      const s = stacks.find(x => x.id === sid)!
                      const Icon = s.icon
                      return (
                        <span
                          key={sid}
                          className="text-base transition-all duration-200"
                          style={{ color: isHighlighted ? s.color : "rgba(255,255,255,0.25)" }}
                        >
                          <Icon />
                        </span>
                      )
                    })}
                  </div>
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-bold text-platinum mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray">{description}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
