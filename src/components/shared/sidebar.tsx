"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Sparkles,
  LayoutTemplate,
  Palette,
  FileText,
  Settings,
  Menu,
  ChevronLeft,
  ChevronRight,
  LogOut,
  FolderDot,
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    color: "text-blue-500 dark:text-blue-400",
  },
  {
    title: "Editor",
    href: "/editor",
    icon: Sparkles,
    color: "text-purple-500 dark:text-purple-400",
  },
  {
    title: "Templates",
    href: "/templates",
    icon: LayoutTemplate,
    color: "text-emerald-500 dark:text-emerald-400",
  },
  {
    title: "Brand Kit",
    href: "/brand-kit",
    icon: Palette,
    color: "text-rose-500 dark:text-rose-400",
  },
  {
    title: "Documents",
    href: "/documents",
    icon: FileText,
    color: "text-amber-500 dark:text-amber-400",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    color: "text-slate-500 dark:text-slate-400",
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { state, toggleSidebar } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar collapsible="icon" className="border-r border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 backdrop-blur-xl transition-all duration-300">
      {/* Sidebar Header */}
      <SidebarHeader className="h-16 flex flex-row items-center justify-between px-4 border-b border-slate-200/80 dark:border-slate-800/80">
        <Link href="/dashboard" className="flex items-center gap-3 overflow-hidden select-none">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 dark:from-violet-500 dark:to-indigo-500 text-white shadow-md shadow-violet-500/20 shrink-0">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col"
            >
              <span className="font-bold text-sm leading-none bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                DocStudio
              </span>
              <span className="text-[10px] text-slate-500 font-medium">AI Document Engine</span>
            </motion.div>
          )}
        </Link>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent className="py-4 px-2">
        <SidebarMenu className="gap-1.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  tooltip={item.title}
                  isActive={isActive}
                  className={cn(
                    "relative flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-all group/btn outline-hidden",
                    isActive
                      ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md shadow-slate-950/10 dark:shadow-white/5"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-900/60 hover:text-slate-950 dark:hover:text-white"
                  )}
                  render={
                    <Link href={item.href}>
                      <Icon className={cn("w-[18px] h-[18px] shrink-0 transition-transform group-hover/btn:scale-110 duration-200", item.color)} />
                      {!isCollapsed && (
                        <span className="truncate">{item.title}</span>
                      )}
                      {isActive && !isCollapsed && (
                        <motion.div
                          layoutId="active-indicator"
                          className="absolute right-3 w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  }
                />
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="p-3 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/30 dark:bg-slate-900/10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 px-1 py-1 overflow-hidden">
            <Avatar className="w-9 h-9 border border-slate-200 dark:border-slate-800 shadow-sm shrink-0">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User Profile" />
              <AvatarFallback className="bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 font-semibold text-xs">
                JD
              </AvatarFallback>
            </Avatar>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col flex-1 min-w-0"
              >
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate leading-tight">
                  Jane Doe
                </span>
                <span className="text-[10px] text-slate-500 truncate leading-none mt-0.5">
                  jane@docstudio.ai
                </span>
              </motion.div>
            )}
          </div>

          {!isCollapsed && (
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2.5 px-3 py-2 text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-500/10 dark:hover:bg-rose-500/5 rounded-xl text-xs font-medium transition-all group/logout"
            >
              <LogOut className="w-4 h-4 shrink-0 transition-transform group-hover/logout:-translate-x-0.5 duration-200" />
              <span>Log out</span>
            </Button>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
