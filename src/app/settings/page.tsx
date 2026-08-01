"use client"

import * as React from "react"
import {
  Settings,
  User,
  Cpu,
  CreditCard,
  Key,
  Shield,
  Check,
  Eye,
  EyeOff,
  Sparkles,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function SettingsPage() {
  const [showKey, setShowKey] = React.useState(false)
  const [isSaving, setIsSaving] = React.useState(false)

  const triggerSave = () => {
    setIsSaving(true)
    setTimeout(() => setIsSaving(false), 1000)
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header section */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
          Studio Preferences
        </h1>
        <p className="text-sm text-slate-500 mt-1.5 font-medium">
          Manage your account configurations, workspace limits, and AI credentials.
        </p>
      </div>

      {/* Settings Tab Structure */}
      <Tabs defaultValue="profile" className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Left Side: Tabs List */}
        <div className="md:col-span-1">
          <TabsList className="bg-transparent flex flex-col items-start gap-1 p-0 h-auto w-full border-none">
            <TabsTrigger
              value="profile"
              className="w-full justify-start rounded-xl text-xs font-bold py-2.5 px-4 capitalize text-slate-500 data-[state=active]:bg-slate-100 dark:data-[state=active]:bg-slate-900 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white hover:text-slate-700 transition-all duration-200 gap-2.5"
            >
              <User className="w-4 h-4 shrink-0" />
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="general"
              className="w-full justify-start rounded-xl text-xs font-bold py-2.5 px-4 capitalize text-slate-500 data-[state=active]:bg-slate-100 dark:data-[state=active]:bg-slate-900 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white hover:text-slate-700 transition-all duration-200 gap-2.5"
            >
              <Settings className="w-4 h-4 shrink-0" />
              General
            </TabsTrigger>
            <TabsTrigger
              value="engine"
              className="w-full justify-start rounded-xl text-xs font-bold py-2.5 px-4 capitalize text-slate-500 data-[state=active]:bg-slate-100 dark:data-[state=active]:bg-slate-900 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white hover:text-slate-700 transition-all duration-200 gap-2.5"
            >
              <Cpu className="w-4 h-4 shrink-0" />
              AI Engine
            </TabsTrigger>
            <TabsTrigger
              value="billing"
              className="w-full justify-start rounded-xl text-xs font-bold py-2.5 px-4 capitalize text-slate-500 data-[state=active]:bg-slate-100 dark:data-[state=active]:bg-slate-900 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white hover:text-slate-700 transition-all duration-200 gap-2.5"
            >
              <CreditCard className="w-4 h-4 shrink-0" />
              Billing
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Right Side: Tab Contents */}
        <div className="md:col-span-3">
          
          {/* Profile Settings Tab */}
          <TabsContent value="profile" className="mt-0">
            <Card className="rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/20 backdrop-blur-lg">
              <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800/60">
                <CardTitle className="text-base font-bold text-slate-900 dark:text-white">Profile Details</CardTitle>
                <CardDescription className="text-xs font-medium text-slate-500 mt-0.5">Manage your user profile display settings.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-5">
                <div className="flex items-center gap-5">
                  <Avatar className="w-16 h-16 border-2 border-slate-200 dark:border-slate-800 shadow-sm shrink-0">
                    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" alt="Jane Doe" />
                    <AvatarFallback className="bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 font-semibold text-lg">JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <Button size="sm" className="h-8 text-xs font-bold rounded-lg border bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 hover:text-slate-950 text-slate-700 dark:text-slate-200">
                      Upload Avatar
                    </Button>
                    <p className="text-[10px] text-slate-400">JPG, GIF or PNG (Max 1MB allowed)</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700 dark:text-slate-300">Display Name</Label>
                    <Input defaultValue="Jane Doe" className="h-9.5 rounded-xl border-slate-200 focus-visible:ring-violet-500/30" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700 dark:text-slate-300">Email Address</Label>
                    <Input defaultValue="jane@docstudio.ai" className="h-9.5 rounded-xl border-slate-200 focus-visible:ring-violet-500/30" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end p-5 border-t border-slate-100 dark:border-slate-800/60 mt-4">
                <Button onClick={triggerSave} disabled={isSaving} className="h-9 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-xl text-xs gap-1.5 shadow-md">
                  {isSaving ? "Saving..." : "Save Preferences"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* General Workspace Settings Tab */}
          <TabsContent value="general" className="mt-0">
            <Card className="rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/20 backdrop-blur-lg">
              <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800/60">
                <CardTitle className="text-base font-bold text-slate-900 dark:text-white">General Preferences</CardTitle>
                <CardDescription className="text-xs font-medium text-slate-500 mt-0.5">Control workspace behaviors and exports.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-5">
                <div className="space-y-1.5">
                  <Label className="text-xs font-bold text-slate-700 dark:text-slate-300">Workspace Identifier</Label>
                  <Input defaultValue="jane-doe-studio" className="h-9.5 rounded-xl border-slate-200 focus-visible:ring-violet-500/30" />
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-900/60">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Auto-Save Drafts</span>
                    <span className="text-[10px] text-slate-400">Save workspace inputs dynamically every 60s.</span>
                  </div>
                  <Switch defaultChecked className="data-[state=checked]:bg-violet-600" />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-900/60">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Enable Analytics Logging</span>
                    <span className="text-[10px] text-slate-400">Improve text generation models using usage metadata.</span>
                  </div>
                  <Switch className="data-[state=checked]:bg-violet-600" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end p-5 border-t border-slate-100 dark:border-slate-800/60 mt-4">
                <Button onClick={triggerSave} disabled={isSaving} className="h-9 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-xl text-xs gap-1.5 shadow-md">
                  {isSaving ? "Saving..." : "Save Preferences"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* AI Engine Settings Tab */}
          <TabsContent value="engine" className="mt-0">
            <Card className="rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/20 backdrop-blur-lg">
              <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800/60">
                <CardTitle className="text-base font-bold text-slate-900 dark:text-white">AI Engine Credentials</CardTitle>
                <CardDescription className="text-xs font-medium text-slate-500 mt-0.5">Define keys and endpoints for generative processes.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-5">
                <div className="space-y-1.5">
                  <Label className="text-xs font-bold text-slate-700 dark:text-slate-300">Default Model Choice</Label>
                  <Select defaultValue="gpt-4o">
                    <SelectTrigger className="h-9.5 rounded-xl border-slate-200">
                      <SelectValue placeholder="Select primary model" />
                    </SelectTrigger>
                    <SelectContent className="border border-slate-200 rounded-xl bg-white dark:bg-slate-950">
                      <SelectItem value="gpt-4o">GPT-4o (OpenAI Premium)</SelectItem>
                      <SelectItem value="claude-3-5">Claude 3.5 Sonnet (Anthropic)</SelectItem>
                      <SelectItem value="gemini-1-5">Gemini 1.5 Pro (Google DeepMind)</SelectItem>
                      <SelectItem value="llama-3">Llama 3 (Meta Open Source)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5 border-t border-slate-100 dark:border-slate-900 pt-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-xs font-bold text-slate-700 dark:text-slate-300">API Access Token</Label>
                    <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                      <Shield className="w-3 h-3 text-slate-300" />
                      Encrypted at rest
                    </span>
                  </div>
                  <div className="relative">
                    <Input
                      type={showKey ? "text" : "password"}
                      defaultValue="sk-proj-**********************************"
                      className="h-9.5 pr-10 rounded-xl border-slate-200 focus-visible:ring-violet-500/30"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowKey(!showKey)}
                      className="absolute right-1 top-1 w-8 h-8 rounded-lg hover:bg-slate-100"
                    >
                      {showKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end p-5 border-t border-slate-100 dark:border-slate-800/60 mt-4">
                <Button onClick={triggerSave} disabled={isSaving} className="h-9 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-xl text-xs gap-1.5 shadow-md">
                  {isSaving ? "Saving..." : "Save Preferences"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Billing & Limits Settings Tab */}
          <TabsContent value="billing" className="mt-0">
            <Card className="rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/20 backdrop-blur-lg">
              <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800/60">
                <CardTitle className="text-base font-bold text-slate-900 dark:text-white">Billing & License Tier</CardTitle>
                <CardDescription className="text-xs font-medium text-slate-500 mt-0.5">Control pricing packages, usage metrics, and invoices.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-5">
                
                {/* Visual License Tier representation */}
                <div className="p-4.5 rounded-2xl bg-linear-to-tr from-slate-950 via-slate-900 to-indigo-950 text-white flex items-center justify-between shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl pointer-events-none" />
                  <div className="space-y-1.5 min-w-0">
                    <span className="text-[10px] font-extrabold uppercase bg-white/10 px-2 py-0.5 rounded-md text-indigo-200 border border-white/5">
                      Pro Studio Plan
                    </span>
                    <p className="text-lg font-black mt-1">$49.00 / month billing</p>
                    <p className="text-[10px] text-slate-400 font-medium">Auto-renewing on September 1st, 2026.</p>
                  </div>
                  <Button size="sm" className="h-8.5 text-xs font-bold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shrink-0 shadow-lg shadow-indigo-600/10">
                    Change Plan
                  </Button>
                </div>

                {/* Invoices list */}
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Recent Invoices</span>
                  <div className="divide-y divide-slate-100 dark:divide-slate-900/60">
                    <div className="flex items-center justify-between py-2 text-xs">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">August 2026 Invoice</span>
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-slate-400">$49.00 USD</span>
                        <Badge variant="outline" className="text-[9px] font-bold border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 rounded-md">Paid</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 text-xs">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">July 2026 Invoice</span>
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-slate-400">$49.00 USD</span>
                        <Badge variant="outline" className="text-[9px] font-bold border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 rounded-md">Paid</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        </div>
      </Tabs>
    </div>
  )
}
