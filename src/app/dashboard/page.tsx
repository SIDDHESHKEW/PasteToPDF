"use client"

import * as React from "react"
import Link from "next/link"
import {
  FileText,
  Sparkles,
  LayoutTemplate,
  Palette,
  TrendingUp,
  Clock,
  ArrowRight,
  MoreVertical,
  Plus,
  Compass,
  Zap,
  Settings,
} from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const stats = [
  {
    title: "Total Documents",
    value: "148",
    change: "+12% this month",
    icon: FileText,
    color: "from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    title: "AI Words Generated",
    value: "42.8k",
    change: "72% of monthly cap",
    icon: Sparkles,
    color: "from-purple-500/10 to-violet-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    title: "Active Templates",
    value: "24",
    change: "+4 new presets",
    icon: LayoutTemplate,
    color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Brand Tones Configured",
    value: "3 / 5",
    change: "Ready for branding",
    icon: Palette,
    color: "from-rose-500/10 to-pink-500/10 text-rose-600 dark:text-rose-400",
  },
]

const recentDocs = [
  {
    id: "1",
    name: "Q3 Product Launch Proposal.pdf",
    template: "Sales Pitch",
    time: "24 minutes ago",
    status: "Ready",
    statusColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  {
    id: "2",
    name: "Employee Handbook Draft 2026.docx",
    template: "HR Guide",
    time: "2 hours ago",
    status: "Draft",
    statusColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
  {
    id: "3",
    name: "August Billing Ledger.xlsx",
    template: "Financial Audit",
    time: "Yesterday",
    status: "Analyzing",
    statusColor: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  },
  {
    id: "4",
    name: "Client Brief - Antigravity Corp.pdf",
    template: "Creative Pitch",
    time: "3 days ago",
    status: "Ready",
    statusColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } },
}

export default function DashboardPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-8 max-w-7xl mx-auto"
    >
      {/* Header Welcome banner */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
            Welcome back, Jane
          </h1>
          <p className="text-sm text-slate-500 mt-1.5 font-medium">
            Here's what is happening in your AI Document Studio today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 shadow-lg shadow-slate-950/10 dark:shadow-white/5 gap-2 px-4 py-2.5 font-semibold text-xs transition-all">
            <Plus className="w-4 h-4" />
            Create Document
          </Button>
        </div>
      </motion.div>

      {/* Statistics Row */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <Card key={idx} className="group overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/20 backdrop-blur-lg hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300">
              <CardContent className="p-5 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.title}</p>
                  <p className="text-2xl font-black text-slate-900 dark:text-white">{stat.value}</p>
                  <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-300" />
                    {stat.change}
                  </span>
                </div>
                <div className={`p-3.5 rounded-xl bg-gradient-to-br ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5" />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </motion.div>

      {/* Main Sections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Recent Documents & Quick Links */}
        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
          <Card className="rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/20 backdrop-blur-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <div>
                <CardTitle className="text-base font-bold text-slate-900 dark:text-white">Recent Documents</CardTitle>
                <CardDescription className="text-xs font-medium text-slate-500 mt-0.5">Your recently updated drafts and files.</CardDescription>
              </div>
              <Link
                href="/documents"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "text-xs font-semibold text-violet-500 hover:text-violet-600 dark:hover:text-violet-400 gap-1 rounded-lg"
                )}
              >
                View All
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {recentDocs.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between py-4 group/item">
                    <div className="flex items-start gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center shrink-0 border border-slate-200/20 dark:border-slate-800/20">
                        <FileText className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover/item:text-violet-500 dark:group-hover/item:text-violet-400 transition-colors truncate">
                          {doc.name}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] text-slate-400 font-medium">{doc.time}</span>
                          <span className="text-slate-300 dark:text-slate-800 text-[10px]">•</span>
                          <span className="text-[10px] text-slate-500 font-semibold bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded-md">
                            {doc.template}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className={`text-[10px] font-bold px-2 py-0.5 rounded-lg border uppercase tracking-wider ${doc.statusColor}`}>
                        {doc.status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          render={
                            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900">
                              <MoreVertical className="w-4 h-4 text-slate-400" />
                            </Button>
                          }
                        />
                        <DropdownMenuContent align="end" className="w-40 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-1">
                          <DropdownMenuItem className="text-xs font-semibold rounded-lg cursor-pointer">Open Editor</DropdownMenuItem>
                          <DropdownMenuItem className="text-xs font-semibold rounded-lg cursor-pointer">Export PDF</DropdownMenuItem>
                          <DropdownMenuItem className="text-xs font-semibold rounded-lg cursor-pointer text-rose-600 dark:text-rose-400">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Side: Usage Limit & Quick Actions */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Quick Actions Panel */}
          <Card className="rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/20 backdrop-blur-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold text-slate-900 dark:text-white">Quick Actions</CardTitle>
              <CardDescription className="text-xs font-medium text-slate-500 mt-0.5">Explore key tools in the document engine.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3.5">
              <Link href="/editor" className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200/60 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/30 hover:bg-violet-500/5 dark:hover:bg-violet-400/5 hover:border-violet-500/40 dark:hover:border-violet-400/40 group transition-all text-center">
                <Sparkles className="w-5 h-5 text-violet-500 dark:text-violet-400 group-hover:scale-110 transition-transform duration-300 mb-2" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">AI Editor</span>
                <span className="text-[9px] text-slate-400 mt-0.5">Compose with AI</span>
              </Link>
              <Link href="/templates" className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200/60 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/30 hover:bg-emerald-500/5 dark:hover:bg-emerald-400/5 hover:border-emerald-500/40 dark:hover:border-emerald-400/40 group transition-all text-center">
                <Compass className="w-5 h-5 text-emerald-500 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300 mb-2" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Templates</span>
                <span className="text-[9px] text-slate-400 mt-0.5">Browse presets</span>
              </Link>
              <Link href="/brand-kit" className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200/60 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/30 hover:bg-rose-500/5 dark:hover:bg-rose-400/5 hover:border-rose-500/40 dark:hover:border-rose-400/40 group transition-all text-center">
                <Palette className="w-5 h-5 text-rose-500 dark:text-rose-400 group-hover:scale-110 transition-transform duration-300 mb-2" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Brand Kit</span>
                <span className="text-[9px] text-slate-400 mt-0.5">Style guides</span>
              </Link>
              <Link href="/settings" className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200/60 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/30 hover:bg-slate-500/5 dark:hover:bg-slate-400/5 hover:border-slate-500/40 dark:hover:border-slate-400/40 group transition-all text-center">
                <Settings className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:scale-110 transition-transform duration-300 mb-2" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Settings</span>
                <span className="text-[9px] text-slate-400 mt-0.5">Configure engine</span>
              </Link>
            </CardContent>
          </Card>

          {/* Usage Limit Card */}
          <Card className="rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-linear-to-tr from-slate-950 via-slate-900 to-indigo-950 text-white shadow-xl shadow-slate-950/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/20 rounded-full blur-2xl -translate-y-8 translate-x-8 pointer-events-none" />
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-indigo-500/25 border border-indigo-500/20">
                  <Zap className="w-4 h-4 text-indigo-400" />
                </div>
                <CardTitle className="text-sm font-bold">Studio Tier Limit</CardTitle>
              </div>
              <CardDescription className="text-[11px] text-slate-400 mt-0.5">You are currently on the Pro trial package.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Tokens used</span>
                  <span>42.8k / 60k words</span>
                </div>
                <Progress value={71.3} className="h-1.5 bg-slate-800" />
              </div>
              
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Templates created</span>
                  <span>24 / 50 limits</span>
                </div>
                <Progress value={48} className="h-1.5 bg-slate-800" />
              </div>

              <Button className="w-full h-8.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white border border-transparent font-bold text-xs gap-1 shadow-lg shadow-violet-600/20 transition-all mt-2">
                Upgrade Engine Limits
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </motion.div>
  )
}
