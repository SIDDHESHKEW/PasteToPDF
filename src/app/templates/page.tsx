"use client"

import * as React from "react"
import {
  Search,
  Plus,
  LayoutTemplate,
  FileText,
  Star,
  ArrowRight,
  TrendingUp,
  Tag,
  Sparkles,
  Palette,
  Eye,
} from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const categories = ["all", "invoices", "reports", "proposals", "resumes", "branding"]

const templates = [
  {
    id: "1",
    name: "Modern Professional Invoice",
    description: "Sleek itemized invoice layout with brand colors integration, automated summaries, and payment block.",
    category: "invoices",
    rating: "4.9",
    popularity: "2.4k uses",
    bg: "from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10",
    color: "text-blue-500 dark:text-blue-400",
  },
  {
    id: "2",
    name: "Executive Project Proposal",
    description: "Multi-page corporate proposal layout with timelines, metrics sheets, objectives outline, and executive signature lines.",
    category: "proposals",
    rating: "4.8",
    popularity: "1.8k uses",
    bg: "from-purple-500/5 to-violet-500/5 dark:from-purple-500/10 dark:to-violet-500/10",
    color: "text-purple-500 dark:text-purple-400",
  },
  {
    id: "3",
    name: "Quarterly Analytics Report",
    description: "Data-heavy report featuring structured grid formats, chart containers, summary widgets, and key-takeaway boxes.",
    category: "reports",
    rating: "4.7",
    popularity: "940 uses",
    bg: "from-emerald-500/5 to-teal-500/5 dark:from-emerald-500/10 dark:to-teal-500/10",
    color: "text-emerald-500 dark:text-emerald-400",
  },
  {
    id: "4",
    name: "AI Content Briefing Preset",
    description: "Marketing team layout for quick briefing generation, keyword mappings, style settings, and target demographic details.",
    category: "branding",
    rating: "4.9",
    popularity: "3.1k uses",
    bg: "from-rose-500/5 to-pink-500/5 dark:from-rose-500/10 dark:to-pink-500/10",
    color: "text-rose-500 dark:text-rose-400",
  },
  {
    id: "5",
    name: "Creative Director Resume",
    description: "Polished multi-column resume layout optimized for brand palettes, creative summaries, and graphic design timelines.",
    category: "resumes",
    rating: "4.6",
    popularity: "1.2k uses",
    bg: "from-amber-500/5 to-orange-500/5 dark:from-amber-500/10 dark:to-orange-500/10",
    color: "text-amber-500 dark:text-amber-400",
  },
  {
    id: "6",
    name: "Brand Style Guide Book",
    description: "Studio documentation templates for color codes, typing hierarchy, asset placements, and tone definitions.",
    category: "branding",
    rating: "4.9",
    popularity: "860 uses",
    bg: "from-slate-500/5 to-slate-600/5 dark:from-slate-500/10 dark:to-slate-600/10",
    color: "text-slate-500 dark:text-slate-400",
  },
]

export default function TemplatesPage() {
  const [activeTab, setActiveTab] = React.useState("all")
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredTemplates = templates.filter((t) => {
    const matchesTab = activeTab === "all" || t.category === activeTab
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* Header section with Create Dialog */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
            Template Directory
          </h1>
          <p className="text-sm text-slate-500 mt-1.5 font-medium">
            Deploy structured templates instantly mapping to your dynamic brand settings.
          </p>
        </div>
        
        <Dialog>
          <DialogTrigger
            render={
              <Button className="rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 shadow-lg shadow-slate-950/10 dark:shadow-white/5 gap-2 px-4 py-2.5 font-semibold text-xs transition-all">
                <Plus className="w-4 h-4" />
                Create Custom Template
              </Button>
            }
          />
          <DialogContent className="sm:max-w-[425px] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6">
            <DialogHeader>
              <DialogTitle className="text-base font-extrabold">New Custom Template</DialogTitle>
              <DialogDescription className="text-xs text-slate-500 mt-1">
                Configure your document preset layout rules here. Save to access it inside the directory.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">Template Title</Label>
                <Input id="name" placeholder="e.g. Modern Sales Pitch Preset" className="h-9.5 rounded-xl border-slate-200 focus-visible:ring-violet-500/30" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="category" className="text-xs font-semibold text-slate-700 dark:text-slate-300">Category Tag</Label>
                <Select>
                  <SelectTrigger className="h-9.5 rounded-xl border-slate-200">
                    <SelectValue placeholder="Select tag category" />
                  </SelectTrigger>
                  <SelectContent className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-950">
                    <SelectItem value="invoices">Invoice</SelectItem>
                    <SelectItem value="reports">Report</SelectItem>
                    <SelectItem value="proposals">Proposal</SelectItem>
                    <SelectItem value="resumes">Resume</SelectItem>
                    <SelectItem value="branding">Branding</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="desc" className="text-xs font-semibold text-slate-700 dark:text-slate-300">Description</Label>
                <Input id="desc" placeholder="Brief explanation of this preset's objective" className="h-9.5 rounded-xl border-slate-200 focus-visible:ring-violet-500/30" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full h-9 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-violet-600/15">
                Save Preset Template
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Directory Search & Filters */}
      <Tabs defaultValue="all" onValueChange={setActiveTab} className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <TabsList className="bg-slate-100/60 dark:bg-slate-900/40 p-1 rounded-xl border border-slate-200/40 dark:border-slate-800/40 flex-wrap h-auto gap-0.5">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="rounded-lg text-xs font-bold py-2 px-3.5 capitalize data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 data-[state=active]:shadow-sm data-[state=active]:text-slate-900 dark:data-[state=active]:text-white text-slate-500 hover:text-slate-700 transition-all duration-200"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search layouts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 pl-10 pr-4 rounded-xl border-slate-200/80 dark:border-slate-800/80 focus-visible:ring-violet-500/30 placeholder-slate-400 bg-white/70 dark:bg-slate-950/20 backdrop-blur-md"
            />
          </div>
        </div>

        {/* Templates Grid Content */}
        <TabsContent value={activeTab} className="pt-2">
          {filteredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <Card key={template.id} className="group overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/20 backdrop-blur-lg flex flex-col justify-between hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300">
                  <div>
                    {/* Top layout banner header */}
                    <div className={`h-28 bg-gradient-to-tr ${template.bg} border-b border-slate-100 dark:border-slate-800/60 p-5 flex items-center justify-between shrink-0 relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-slate-500/5 rounded-full blur-xl pointer-events-none" />
                      <div className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-xs border border-slate-200/20 dark:border-slate-800/20 group-hover:scale-105 transition-transform duration-300">
                        <LayoutTemplate className={`w-6 h-6 ${template.color}`} />
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold bg-white/80 dark:bg-slate-900/60 backdrop-blur-md px-2 py-1 rounded-lg shadow-2xs border border-slate-200/20">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-slate-800 dark:text-slate-200 font-bold">{template.rating}</span>
                      </div>
                    </div>

                    <CardHeader className="p-5 pb-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md text-slate-400 dark:text-slate-500">
                          {template.category}
                        </Badge>
                        <span className="text-[10px] text-slate-400 font-semibold">{template.popularity}</span>
                      </div>
                      <CardTitle className="text-sm font-bold text-slate-800 dark:text-white group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors mt-2">
                        {template.name}
                      </CardTitle>
                      <CardDescription className="text-xs text-slate-500 font-medium leading-relaxed mt-1 line-clamp-2">
                        {template.description}
                      </CardDescription>
                    </CardHeader>
                  </div>

                  <CardFooter className="p-5 pt-0 mt-4 flex items-center gap-2">
                    <Button variant="outline" size="sm" className="flex-1 h-8 rounded-lg text-[10px] font-bold border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 gap-1">
                      <Eye className="w-3.5 h-3.5 text-slate-400" />
                      Preview Presets
                    </Button>
                    <Button size="sm" className="flex-1 h-8 rounded-lg text-[10px] font-bold bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 shadow-sm gap-1 transition-all">
                      Use Template
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/20 dark:bg-slate-900/10">
              <LayoutTemplate className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-700 animate-pulse mb-3" />
              <p className="text-sm font-bold text-slate-600 dark:text-slate-400">No templates found</p>
              <p className="text-xs text-slate-400 mt-1">Try expanding your search parameters or check another tab category.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
