"use client"

import * as React from "react"
import {
  Search,
  FileText,
  Clock,
  MoreVertical,
  ChevronDown,
  LayoutGrid,
  List,
  Plus,
  Trash2,
  Copy,
  Download,
  FolderOpen,
  ArrowUpDown,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

const initialDocuments = [
  {
    id: "1",
    name: "Q3 Product Launch Proposal.pdf",
    template: "Sales Pitch",
    size: "1.2 MB",
    time: "24 minutes ago",
    status: "Ready",
    statusColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  {
    id: "2",
    name: "Employee Handbook Draft 2026.docx",
    template: "HR Guide",
    size: "840 KB",
    time: "2 hours ago",
    status: "Draft",
    statusColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
  {
    id: "3",
    name: "August Billing Ledger.xlsx",
    template: "Financial Audit",
    size: "3.4 MB",
    time: "Yesterday",
    status: "Analyzing",
    statusColor: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  },
  {
    id: "4",
    name: "Client Brief - Antigravity Corp.pdf",
    template: "Creative Pitch",
    size: "450 KB",
    time: "3 days ago",
    status: "Ready",
    statusColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  {
    id: "5",
    name: "Standard Contractor Agreement.pdf",
    template: "Legal Draft",
    size: "1.1 MB",
    time: "1 week ago",
    status: "Ready",
    statusColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  {
    id: "6",
    name: "Product Design Brief - v2.docx",
    template: "Design Brief",
    size: "2.1 MB",
    time: "2 weeks ago",
    status: "Draft",
    statusColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
]

export default function DocumentsPage() {
  const [documents, setDocuments] = React.useState(initialDocuments)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [activeFilter, setActiveFilter] = React.useState("All")
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("list")

  const deleteDocument = (id: string) => {
    setDocuments(documents.filter((doc) => doc.id !== id))
  }

  const filteredDocs = documents.filter((doc) => {
    const matchesFilter = activeFilter === "All" || doc.status === activeFilter
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.template.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
            Documents Studio
          </h1>
          <p className="text-sm text-slate-500 mt-1.5 font-medium">
            Search, filter, organize, and inspect all generated brand document resources.
          </p>
        </div>
        <Button className="rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 shadow-lg shadow-slate-950/10 dark:shadow-white/5 gap-2 px-4 py-2.5 font-semibold text-xs transition-all">
          <Plus className="w-4 h-4" />
          Create New Document
        </Button>
      </div>

      {/* Toolbar Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/50 dark:bg-slate-950/20 border border-slate-200/60 dark:border-slate-800/80 p-4 rounded-2xl backdrop-blur-md">
        
        {/* Left side: Search & Filter Tabs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9.5 pl-9.5 pr-4 rounded-xl border-slate-200/80 dark:border-slate-800/80 focus-visible:ring-violet-500/30 placeholder-slate-400 bg-white dark:bg-slate-950"
            />
          </div>
          
          <div className="flex items-center gap-1 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {["All", "Ready", "Draft", "Analyzing"].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={`h-8 px-3 rounded-lg text-xs font-bold transition-all ${
                  activeFilter === filter 
                    ? "bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white" 
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Right side: Sorting & Layout Toggles */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <Button variant="outline" size="sm" className="h-9 rounded-xl border-slate-200 gap-1.5 text-xs font-bold">
            <ArrowUpDown className="w-3.5 h-3.5" />
            Last Modified
          </Button>

          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />

          <div className="flex items-center border border-slate-200 dark:border-slate-800 rounded-xl p-0.5 bg-slate-100/50 dark:bg-slate-900/30">
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setViewMode("list")}
              className={`w-7.5 h-7.5 rounded-lg ${viewMode === "list" ? "bg-white dark:bg-slate-950 shadow-xs" : "text-slate-400"}`}
            >
              <List className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setViewMode("grid")}
              className={`w-7.5 h-7.5 rounded-lg ${viewMode === "grid" ? "bg-white dark:bg-slate-950 shadow-xs" : "text-slate-400"}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </Button>
          </div>
        </div>

      </div>

      {/* Documents Render Lists */}
      {filteredDocs.length > 0 ? (
        viewMode === "list" ? (
          /* List View Table layout */
          <Card className="rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/20 backdrop-blur-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {/* Header labels */}
                <div className="hidden sm:flex items-center justify-between px-6 py-3.5 bg-slate-50/50 dark:bg-slate-900/40 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-900">
                  <div className="flex-1 max-w-sm">File Name</div>
                  <div className="w-40">Template Presets</div>
                  <div className="w-32">Document Size</div>
                  <div className="w-40">Timestamp</div>
                  <div className="w-28 text-center">Status</div>
                  <div className="w-10"></div>
                </div>

                {/* Items */}
                {filteredDocs.map((doc) => (
                  <div key={doc.id} className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 hover:bg-slate-50/50 dark:hover:bg-slate-900/10 group/row transition-all">
                    <div className="flex-1 max-w-sm flex items-center gap-3.5 min-w-0">
                      <div className="w-9.5 h-9.5 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center border border-slate-200/20 dark:border-slate-800/20 shrink-0">
                        <FileText className="w-4.5 h-4.5 text-slate-500 dark:text-slate-400" />
                      </div>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate group-hover/row:text-violet-500 dark:group-hover/row:text-violet-400 transition-colors">
                        {doc.name}
                      </p>
                    </div>

                    <div className="w-40 mt-2 sm:mt-0">
                      <span className="text-[10px] text-slate-500 font-bold bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-md border border-slate-200/20">
                        {doc.template}
                      </span>
                    </div>

                    <div className="w-32 mt-1 sm:mt-0 text-slate-400 text-xs font-medium">
                      {doc.size}
                    </div>

                    <div className="w-40 mt-1 sm:mt-0 text-slate-400 text-xs font-medium flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-300" />
                      {doc.time}
                    </div>

                    <div className="w-28 mt-2 sm:mt-0 flex sm:justify-center">
                      <Badge variant="outline" className={`text-[9px] font-bold px-2 py-0.5 rounded-lg border uppercase tracking-wider shrink-0 ${doc.statusColor}`}>
                        {doc.status}
                      </Badge>
                    </div>

                    <div className="w-10 mt-2 sm:mt-0 flex justify-end">
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          render={
                            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900">
                              <MoreVertical className="w-4 h-4 text-slate-400" />
                            </Button>
                          }
                        />
                        <DropdownMenuContent align="end" className="w-44 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-1">
                          <DropdownMenuItem className="text-xs font-semibold rounded-lg cursor-pointer gap-2">
                            <FolderOpen className="w-3.5 h-3.5 text-slate-400" />
                            Open Editor
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-xs font-semibold rounded-lg cursor-pointer gap-2">
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                            Duplicate Document
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-xs font-semibold rounded-lg cursor-pointer gap-2">
                            <Download className="w-3.5 h-3.5 text-slate-400" />
                            Download PDF
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-slate-100 dark:bg-slate-900" />
                          <DropdownMenuItem 
                            onClick={() => deleteDocument(doc.id)}
                            className="text-xs font-semibold rounded-lg cursor-pointer gap-2 text-rose-600 dark:text-rose-400 hover:bg-rose-500/5"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Delete Document
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Grid View layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map((doc) => (
              <Card key={doc.id} className="group rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/20 backdrop-blur-lg flex flex-col justify-between hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300">
                <CardHeader className="p-5 pb-2">
                  <div className="flex items-center justify-between shrink-0">
                    <Badge variant="outline" className={`text-[9px] font-bold px-2 py-0.5 rounded-lg border uppercase tracking-wider ${doc.statusColor}`}>
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
                      <DropdownMenuContent align="end" className="w-44 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-1">
                        <DropdownMenuItem className="text-xs font-semibold rounded-lg cursor-pointer gap-2">
                          <FolderOpen className="w-3.5 h-3.5 text-slate-400" />
                          Open Editor
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-xs font-semibold rounded-lg cursor-pointer gap-2">
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-xs font-semibold rounded-lg cursor-pointer gap-2">
                          <Download className="w-3.5 h-3.5 text-slate-400" />
                          Download PDF
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-slate-100 dark:bg-slate-900" />
                        <DropdownMenuItem 
                          onClick={() => deleteDocument(doc.id)}
                          className="text-xs font-semibold rounded-lg cursor-pointer gap-2 text-rose-600 dark:text-rose-400"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardTitle className="text-sm font-bold text-slate-800 dark:text-white mt-4 truncate group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">
                    {doc.name}
                  </CardTitle>
                  <CardDescription className="text-[10px] text-slate-400 font-semibold mt-1">
                    Preset: {doc.template}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-5 pb-5 pt-0 mt-4 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-300" />
                    {doc.time}
                  </span>
                  <span>{doc.size}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        )
      ) : (
        <div className="text-center py-16 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/20 dark:bg-slate-900/10">
          <FileText className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-700 animate-pulse mb-3" />
          <p className="text-sm font-bold text-slate-600 dark:text-slate-400">No documents found</p>
          <p className="text-xs text-slate-400 mt-1">Refine your search spelling or clear filter categories to view items.</p>
        </div>
      )}
    </div>
  )
}
