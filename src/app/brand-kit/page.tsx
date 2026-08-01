"use client"

import * as React from "react"
import {
  Upload,
  Copy,
  Check,
  Plus,
  Trash2,
  Sparkles,
  Sliders,
  Type,
  FileImage,
  RefreshCw,
} from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

const initialColors = [
  { name: "Primary Slate", hex: "#0F172A", type: "primary" },
  { name: "Brand Violet", hex: "#7C3AED", type: "secondary" },
  { name: "Accent Emerald", hex: "#10B981", type: "accent" },
  { name: "Muted Lavender", hex: "#F5F3FF", type: "background" },
]

export default function BrandKitPage() {
  const [colors, setColors] = React.useState(initialColors)
  const [copiedHex, setCopiedHex] = React.useState<string | null>(null)
  
  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex)
    setCopiedHex(hex)
    setTimeout(() => setCopiedHex(null), 1500)
  }

  const deleteColor = (index: number) => {
    setColors(colors.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header section */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
          Brand Asset Kit
        </h1>
        <p className="text-sm text-slate-500 mt-1.5 font-medium">
          Define color tokens, assets, typography, and AI guidelines for unified document delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Color Palette & Typography */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Brand Colors Block */}
          <Card className="rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/20 backdrop-blur-lg">
            <CardHeader className="pb-3 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-base font-bold text-slate-900 dark:text-white">Color Palette Guidelines</CardTitle>
                <CardDescription className="text-xs font-medium text-slate-500 mt-0.5">HEX codes dynamically loaded into templates.</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="h-8.5 text-xs rounded-xl font-bold border-slate-200 dark:border-slate-800 gap-1 hover:bg-slate-50">
                <Plus className="w-3.5 h-3.5" />
                Add Token
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {colors.map((color, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 group">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div 
                        className="w-10 h-10 rounded-xl border border-slate-200/30 shadow-xs shrink-0" 
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">{color.name}</p>
                        <span className="text-[10px] text-slate-400 font-bold uppercase mt-0.5 block">{color.hex}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleCopyHex(color.hex)}
                        className="w-7 h-7 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
                      >
                        {copiedHex === color.hex ? (
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteColor(idx)}
                        className="w-7 h-7 rounded-lg hover:bg-rose-500/10 hover:text-rose-500 text-slate-400"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Typography Settings */}
          <Card className="rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/20 backdrop-blur-lg">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Type className="w-4 h-4 text-slate-400" />
                <CardTitle className="text-base font-bold text-slate-900 dark:text-white">Typography Presets</CardTitle>
              </div>
              <CardDescription className="text-xs font-medium text-slate-500 mt-0.5">Specify default rendering font families.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <Label className="text-xs font-bold text-slate-700 dark:text-slate-300">Heading Font</Label>
                <Select defaultValue="inter">
                  <SelectTrigger className="h-9.5 rounded-xl border-slate-200">
                    <SelectValue placeholder="Select heading font" />
                  </SelectTrigger>
                  <SelectContent className="border border-slate-200 rounded-xl bg-white dark:bg-slate-950">
                    <SelectItem value="inter">Inter (Sans-serif)</SelectItem>
                    <SelectItem value="playfair">Playfair Display (Serif)</SelectItem>
                    <SelectItem value="outfit">Outfit (Dynamic Sans)</SelectItem>
                    <SelectItem value="geist">Geist Sans (Developer)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1.5">
                <Label className="text-xs font-bold text-slate-700 dark:text-slate-300">Body Typography</Label>
                <Select defaultValue="roboto">
                  <SelectTrigger className="h-9.5 rounded-xl border-slate-200">
                    <SelectValue placeholder="Select body font" />
                  </SelectTrigger>
                  <SelectContent className="border border-slate-200 rounded-xl bg-white dark:bg-slate-950">
                    <SelectItem value="roboto">Roboto (Muted Sans)</SelectItem>
                    <SelectItem value="merriweather">Merriweather (Classic Serif)</SelectItem>
                    <SelectItem value="open-sans">Open Sans (Universal)</SelectItem>
                    <SelectItem value="geist-mono">Geist Mono (Technical)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side: Logos & AI Guidelines */}
        <div className="space-y-8">
          
          {/* Logo Upload Manager */}
          <Card className="rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/20 backdrop-blur-lg">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <FileImage className="w-4 h-4 text-slate-400" />
                <CardTitle className="text-base font-bold text-slate-900 dark:text-white">Brand Assets</CardTitle>
              </div>
              <CardDescription className="text-xs font-medium text-slate-500 mt-0.5">Primary logos and visual branding assets.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              
              {/* Logo upload wrapper 1 */}
              <div className="space-y-1.5">
                <Label className="text-xs font-bold text-slate-700 dark:text-slate-300">Primary Branding Logo</Label>
                <div className="h-32 border border-dashed border-slate-200 dark:border-slate-800/80 hover:border-violet-500/50 dark:hover:border-violet-400/50 rounded-xl flex flex-col items-center justify-center p-4 bg-slate-50/40 dark:bg-slate-900/10 cursor-pointer group transition-all">
                  <Upload className="w-6 h-6 text-slate-400 group-hover:scale-110 group-hover:text-violet-500 transition-all mb-2" />
                  <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">Upload primary logo</span>
                  <span className="text-[9px] text-slate-400 mt-0.5">PNG, SVG or WEBP (Max 2MB)</span>
                </div>
              </div>

              {/* Logo upload wrapper 2 */}
              <div className="space-y-1.5">
                <Label className="text-xs font-bold text-slate-700 dark:text-slate-300">App Symbol Mark</Label>
                <div className="h-28 border border-dashed border-slate-200 dark:border-slate-800/80 hover:border-violet-500/50 dark:hover:border-violet-400/50 rounded-xl flex flex-col items-center justify-center p-4 bg-slate-50/40 dark:bg-slate-900/10 cursor-pointer group transition-all">
                  <Upload className="w-5 h-5 text-slate-400 group-hover:scale-110 group-hover:text-violet-500 transition-all mb-2" />
                  <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">Upload icon symbol</span>
                  <span className="text-[9px] text-slate-400 mt-0.5">Square size recommended</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Custom Brand Voice */}
          <Card className="rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/20 backdrop-blur-lg">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-slate-400" />
                <CardTitle className="text-base font-bold text-slate-900 dark:text-white">AI Brand Voice</CardTitle>
              </div>
              <CardDescription className="text-xs font-medium text-slate-500 mt-0.5">Define linguistic patterns for the AI engine.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-bold text-slate-700 dark:text-slate-300">Writing Directives</Label>
                <Textarea 
                  placeholder="e.g. 'Use a conversational yet authoritative tone. Highlight technical terms clearly and avoid buzzwords. Keep sentences brief and punchy.'"
                  defaultValue="Our brand communicates with high clarity, analytical rigour, and a supportive tone. Sentences should be direct, using simple yet robust active verbs."
                  className="text-xs min-h-[6rem] rounded-xl border border-slate-200 focus-visible:ring-violet-500/30"
                />
              </div>
              
              <div className="space-y-1.5">
                <Label className="text-xs font-bold text-slate-700 dark:text-slate-300 font-medium">Audience Setting</Label>
                <Select defaultValue="b2b">
                  <SelectTrigger className="h-9.5 rounded-xl border-slate-200">
                    <SelectValue placeholder="Select demographic" />
                  </SelectTrigger>
                  <SelectContent className="border border-slate-200 rounded-xl bg-white dark:bg-slate-950">
                    <SelectItem value="b2b">B2B Corporate Executives</SelectItem>
                    <SelectItem value="b2c">General Consumer/Customer</SelectItem>
                    <SelectItem value="developers">Technical Developers</SelectItem>
                    <SelectItem value="internal">Internal Team Members</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}
