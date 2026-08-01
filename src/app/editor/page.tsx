"use client"

import * as React from "react"
import {
  Sparkles,
  ChevronDown,
  LayoutGrid,
  Settings2,
  FileText,
  Sliders,
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Eye,
  Settings,
  HelpCircle,
  Wand2,
  ListRestart,
  Save,
  Download,
} from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const docOutline = [
  { id: "1", title: "Executive Summary", type: "text", length: "120 words" },
  { id: "2", title: "Project Roadmap", type: "table", length: "4 rows" },
  { id: "3", title: "Market Feasibility Analysis", type: "text", length: "340 words" },
  { id: "4", title: "Financial Forecasts", type: "chart", length: "2 charts" },
  { id: "5", title: "Conclusion & Next Steps", type: "text", length: "85 words" },
]

export default function EditorPage() {
  const [selectedSection, setSelectedSection] = React.useState("1")
  const [creativity, setCreativity] = React.useState([70])
  const [useBrandKit, setUseBrandKit] = React.useState(true)

  return (
    <div className="flex flex-col h-[calc(100vh-8.5rem)] max-w-[90rem] mx-auto overflow-hidden">
      
      {/* Editor Sub-Header Control Bar */}
      <div className="h-14 border border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/20 backdrop-blur-md rounded-2xl flex items-center justify-between px-4 mb-5 shrink-0">
        <div className="flex items-center gap-3">
          <Input 
            defaultValue="Q3 Product Launch Proposal" 
            className="h-8.5 bg-transparent border-transparent focus:border-slate-200 dark:focus:border-slate-800 font-extrabold text-sm w-64 rounded-lg focus-visible:ring-0 focus-visible:border-slate-200"
          />
          <Badge variant="outline" className="text-[9px] font-bold px-1.5 py-0.5 rounded-md border bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
            DRAFT
          </Badge>
          <span className="text-[10px] text-slate-400 font-medium">Last saved 4m ago</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8.5 text-xs rounded-xl font-bold border-slate-200 dark:border-slate-800 gap-1.5">
            <Save className="w-3.5 h-3.5" />
            Save Draft
          </Button>
          <Button size="sm" className="h-8.5 text-xs rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold gap-1.5 shadow-lg shadow-violet-600/10">
            <Download className="w-3.5 h-3.5" />
            Export Document
          </Button>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="flex-1 flex gap-6 min-h-0">
        
        {/* Left Panel: Outline Organizer */}
        <aside className="w-64 border border-slate-200/60 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/20 backdrop-blur-md rounded-2xl p-4 flex flex-col shrink-0 min-h-0">
          <div className="flex items-center justify-between mb-4 shrink-0">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Document Outline</span>
            <Button variant="ghost" size="icon" className="w-7 h-7 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900">
              <LayoutGrid className="w-3.5 h-3.5 text-slate-400" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto no-scrollbar space-y-1">
            {docOutline.map((item) => {
              const isSelected = selectedSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedSection(item.id)}
                  className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-all ${
                    isSelected 
                      ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/50"
                  }`}
                >
                  <FileText className={`w-4 h-4 mt-0.5 shrink-0 ${isSelected ? "text-violet-400 dark:text-violet-500" : "text-slate-400"}`} />
                  <div className="min-w-0">
                    <p className="text-xs font-bold truncate">{item.title}</p>
                    <p className={`text-[9px] mt-0.5 font-medium ${isSelected ? "text-slate-300 dark:text-slate-500" : "text-slate-400"}`}>{item.length}</p>
                  </div>
                </button>
              )
            })}
          </div>
        </aside>

        {/* Center: Canvas Preview */}
        <main className="flex-1 border border-slate-200/60 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/20 backdrop-blur-md rounded-2xl flex flex-col overflow-hidden min-h-0">
          {/* Format Toolbar */}
          <div className="h-11 border-b border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between px-4 shrink-0 bg-slate-50/50 dark:bg-slate-900/20">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="w-7 h-7 rounded-md hover:bg-slate-200/60 dark:hover:bg-slate-900"><Bold className="w-3.5 h-3.5" /></Button>
              <Button variant="ghost" size="icon" className="w-7 h-7 rounded-md hover:bg-slate-200/60 dark:hover:bg-slate-900"><Italic className="w-3.5 h-3.5" /></Button>
              <Button variant="ghost" size="icon" className="w-7 h-7 rounded-md hover:bg-slate-200/60 dark:hover:bg-slate-900"><Underline className="w-3.5 h-3.5" /></Button>
              <Separator orientation="vertical" className="h-4 mx-1.5" />
              <Button variant="ghost" size="icon" className="w-7 h-7 rounded-md hover:bg-slate-200/60 dark:hover:bg-slate-900"><AlignLeft className="w-3.5 h-3.5" /></Button>
              <Button variant="ghost" size="icon" className="w-7 h-7 rounded-md hover:bg-slate-200/60 dark:hover:bg-slate-900"><AlignCenter className="w-3.5 h-3.5" /></Button>
              <Button variant="ghost" size="icon" className="w-7 h-7 rounded-md hover:bg-slate-200/60 dark:hover:bg-slate-900"><AlignRight className="w-3.5 h-3.5" /></Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-7 text-[10px] font-bold gap-1 rounded-md text-violet-600 dark:text-violet-400 bg-violet-500/10 border border-violet-500/25">
                <Sparkles className="w-3 h-3" />
                AI Format
              </Button>
            </div>
          </div>

          {/* Document Canvas Sheet */}
          <div className="flex-1 overflow-y-auto p-8 bg-slate-100/50 dark:bg-slate-900/10 no-scrollbar flex justify-center">
            <div className="w-full max-w-2xl bg-white dark:bg-slate-950/60 shadow-xs border border-slate-200/80 dark:border-slate-800/80 rounded-2xl min-h-[48rem] p-10 flex flex-col font-sans prose prose-slate dark:prose-invert">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white leading-tight">Executive Summary</h2>
              <Separator className="my-4" />
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-2">
                This document contains the project roadmap and proposed rollout strategy for the upcoming Q3 product release. By integrating advanced natural language models with a structured design system, we aim to accelerate the design-to-publication cycle by over 40% while maintaining unified brand tone guidelines.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-4">
                Our main target audience consists of internal design coordinators, creative managers, and executive decision makers who need precise control over color tokens, assets, and typography configurations. Utilizing our responsive layout generator, document creators can effortlessly export dynamic reports, manuals, and custom layouts in PDF or DOCX formats with full Tailwind CSS style injection support.
              </p>
            </div>
          </div>
        </main>

        {/* Right Sidebar: AI Prompt Assistant */}
        <aside className="w-80 border border-slate-200/60 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/20 backdrop-blur-md rounded-2xl p-4 flex flex-col shrink-0 min-h-0">
          <div className="flex items-center gap-2 mb-4 shrink-0">
            <div className="p-1 rounded-lg bg-violet-500/10">
              <Sparkles className="w-4 h-4 text-violet-500 dark:text-violet-400" />
            </div>
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">AI Prompt Assistant</span>
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar space-y-5">
            {/* Prompt input field */}
            <div className="space-y-1.5">
              <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">AI Directives</Label>
              <Textarea 
                placeholder="Instruct the AI: e.g., 'Rewrite the paragraph to sound more professional and direct. Add three bullet points highlighting project deliverables.'"
                className="text-xs min-h-[8rem] rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 placeholder-slate-400 focus-visible:ring-violet-500/30"
              />
            </div>

            {/* Prompt controls */}
            <div className="space-y-3.5 border-t border-slate-100 dark:border-slate-900 pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Creativity Tone</span>
                </div>
                <span className="text-[10px] font-bold text-violet-500">70%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={creativity[0]}
                onChange={(e) => setCreativity([parseInt(e.target.value)])}
                className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-violet-600"
              />

              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-900 pt-4">
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Inject Brand Voice</span>
                  <span className="text-[9px] text-slate-400">Match default brand style guide</span>
                </div>
                <Switch 
                  checked={useBrandKit} 
                  onCheckedChange={setUseBrandKit} 
                  className="data-[state=checked]:bg-violet-600"
                />
              </div>
            </div>

            {/* Quick Presets */}
            <div className="space-y-2 border-t border-slate-100 dark:border-slate-900 pt-4">
              <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quick Presets</Label>
              <div className="flex flex-wrap gap-1.5">
                <Button variant="outline" size="sm" className="h-6.5 text-[9px] rounded-lg border-slate-200 dark:border-slate-800 hover:bg-violet-500/5">Make Professional</Button>
                <Button variant="outline" size="sm" className="h-6.5 text-[9px] rounded-lg border-slate-200 dark:border-slate-800 hover:bg-violet-500/5">Simplify Text</Button>
                <Button variant="outline" size="sm" className="h-6.5 text-[9px] rounded-lg border-slate-200 dark:border-slate-800 hover:bg-violet-500/5">Expand Detail</Button>
                <Button variant="outline" size="sm" className="h-6.5 text-[9px] rounded-lg border-slate-200 dark:border-slate-800 hover:bg-violet-500/5">Translate Tone</Button>
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <Button className="w-full h-9 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-bold gap-2 shadow-lg shadow-violet-600/10 shrink-0 mt-4">
            <Wand2 className="w-4 h-4" />
            Generate Content
          </Button>
        </aside>

      </div>
    </div>
  )
}
