'use client'

import { Bell, User, History } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="flex h-full items-center justify-between px-6">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">北</span>
            </div>
            <span className="text-xl font-bold text-foreground">北斗AI制作中心</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-primary font-medium border-b-2 border-primary pb-1">
              我的项目
            </a>
            <a href="https://creator.inbeidou.cn/task" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              任务中心
            </a>
            <a href="https://creator.inbeidou.cn/income" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              我的收益
            </a>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex bg-transparent">
            免费试用
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            ¥ 30
          </Button>
          <Bell className="h-5 w-5 text-muted-foreground" />
          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
          {/* 历史记录按钮 */}
          <Button size="icon" variant="ghost" onClick={() => setOpen(true)}>
            <History className="h-5 w-5" />
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle>历史记录</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-2">
                <div className="text-sm text-muted-foreground">这里是历史记录内容（可替换为动态数据）</div>
                <ul className="list-disc pl-5 text-sm">
                  <li>历史记录1</li>
                  <li>历史记录2</li>
                  <li>历史记录3</li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
