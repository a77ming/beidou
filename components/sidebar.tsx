import { Home, Video, ImageIcon, Music, Palette, Sparkles, Settings, ChevronRight, User } from "lucide-react"

const sidebarItems = [
  { icon: Home, label: "首页", href: "/", active: true },
  { icon: User, label: "我的空间", href: "/space" },
]

export function Sidebar() {
  return (
    <aside className="w-64 h-[calc(100vh-4rem)] bg-sidebar border-r border-sidebar-border">
      <div className="p-4">
        <nav className="space-y-2">
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                item.active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
              {item.active && <ChevronRight className="h-4 w-4 ml-auto" />}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}
