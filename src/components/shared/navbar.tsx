"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { Bell, Search, Settings, HelpCircle, User, LogOut, ArrowRightLeft } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Navbar() {
  const pathname = usePathname()

  // Derive page name from pathname
  const getPageName = () => {
    if (!pathname) return "Dashboard"
    const segment = pathname.split("/").pop()
    if (!segment) return "Dashboard"
    return segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
  }

  const pageName = getPageName()

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/40 backdrop-blur-xl sticky top-0 z-40 transition-colors duration-300">
      {/* Left side: Breadcrumb & trigger */}
      <div className="flex items-center gap-3">
        <SidebarTrigger className="md:hidden w-9 h-9 border border-slate-200 dark:border-slate-800" />
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-slate-400 font-medium">Studio</span>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <span className="text-slate-900 dark:text-white font-semibold transition-colors">
            {pageName}
          </span>
        </div>
      </div>

      {/* Right side: Actions */}
      <div className="flex items-center gap-3">
        {/* Search Bar - Aesthetic mock */}
        <div className="relative hidden sm:block w-64 md:w-80">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search documents or templates..."
            className="w-full h-9 pl-9 pr-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-xs font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-violet-500/50 dark:focus:ring-violet-400/50 focus:border-violet-500 dark:focus:border-violet-400 transition-all"
            readOnly
          />
          <kbd className="absolute right-3 top-2.5 hidden md:inline-flex h-4 select-none items-center gap-1 rounded-sm border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 px-1.5 font-mono text-[9px] font-medium text-slate-400">
            <span>⌘</span>K
          </kbd>
        </div>

        {/* Action button triggers */}
        <div className="flex items-center gap-1.5 border-r border-slate-200 dark:border-slate-800 pr-3">
          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-9 h-9 rounded-lg relative hover:bg-accent/40 text-slate-700 dark:text-slate-200"
                >
                  <Bell className="h-[1.15rem] w-[1.15rem]" />
                  <span className="absolute top-2.5 right-2.5 flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-500"></span>
                  </span>
                </Button>
              }
            />
            <DropdownMenuContent align="end" className="w-80 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-lg">
              <DropdownMenuLabel className="px-2.5 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Notifications
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-slate-100 dark:bg-slate-900" />
              <div className="max-h-60 overflow-y-auto py-1">
                <div className="px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-900/40 rounded-lg transition-colors cursor-pointer flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Brand Kit Updated</span>
                    <span className="text-[10px] text-slate-400">2h ago</span>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-2">
                    Logo configurations and color palettes have been updated for your studio profile.
                  </p>
                </div>
                <div className="px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-900/40 rounded-lg transition-colors cursor-pointer flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Invoice Draft Saved</span>
                    <span className="text-[10px] text-slate-400">1d ago</span>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-2">
                    AI Auto-draft generated for client billing is ready in your documents folder.
                  </p>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            className="w-9 h-9 rounded-lg hover:bg-accent/40 text-slate-700 dark:text-slate-200"
          >
            <HelpCircle className="h-[1.15rem] w-[1.15rem]" />
          </Button>
        </div>

        {/* User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Avatar className="h-9 w-9 border border-slate-200 dark:border-slate-800 shadow-sm cursor-pointer hover:opacity-90 transition-opacity">
                <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User Profile" />
                <AvatarFallback className="bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 font-semibold text-xs">
                  JD
                </AvatarFallback>
              </Avatar>
            }
          />
          <DropdownMenuContent className="w-56 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-lg" align="end">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1 p-1">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Jane Doe</p>
                <p className="text-xs font-medium text-slate-400 truncate">jane@docstudio.ai</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-100 dark:bg-slate-900" />
            <DropdownMenuGroup className="gap-0.5">
              <DropdownMenuItem className="flex items-center gap-2.5 px-2.5 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white rounded-lg cursor-pointer">
                <User className="h-4 w-4" />
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2.5 px-2.5 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white rounded-lg cursor-pointer">
                <ArrowRightLeft className="h-4 w-4" />
                Switch Workspaces
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-slate-100 dark:bg-slate-900" />
            <DropdownMenuItem className="flex items-center gap-2.5 px-2.5 py-2 text-xs font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 dark:hover:bg-rose-500/5 rounded-lg cursor-pointer">
              <LogOut className="h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
