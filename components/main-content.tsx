"use client"

import { Sparkles, Video, TrendingUp, Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DramaGrid } from "@/components/drama-grid"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function MainContent() {
  const [searchValue, setSearchValue] = useState("")
  const router = useRouter()

  const handleGenerate = () => {
    if (!searchValue.trim()) return;
    if (searchValue.includes("短剧") && searchValue.includes("排行")) {
      router.push(`/chat?prompt=${encodeURIComponent(searchValue)}`)
    } else {
      router.push(`/generate?prompt=${encodeURIComponent(searchValue)}`)
    }
  }

  // 删除原有的 handleSuggestionGenerate，改为只设置输入框内容
  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion);
  }

  const suggestions = [
    {
      icon: <Scissors className="h-4 w-4" />,
      text: "给我剪辑最热的短剧",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <TrendingUp className="h-4 w-4" />,
      text: "短剧热门排行榜",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Video className="h-4 w-4" />,
      text: "tiktok短剧剪辑风格",
      gradient: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <main className="flex-1 p-8">
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">
          <span className="text-primary">Good Afternoon</span> <span className="text-foreground">barry</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          What will we <span className="text-primary font-semibold">CREATE</span> today?
        </p>

        <div className="max-w-3xl mx-auto">
          {/* AI Agent Indicator */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">北斗AI智能助手</span>
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
          </div>

          {/* Clean Input Box - Only the input itself changes on focus */}
          <div className="relative mb-6 max-w-5xl mx-auto">
            <div className="relative">
              <Input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                placeholder="What can I do for you?"
                className="
                  w-full pl-6 pr-16 h-25 text-lg 
                  bg-background border border-input 
                  rounded-2xl 
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0
                  placeholder:text-muted-foreground/70
                  transition-colors duration-200
                "
              />
              <Button
                size="sm"
                onClick={handleGenerate}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-md"
              >
                <Sparkles className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => handleSuggestionClick(suggestion.text)}
                className={`
                  relative overflow-hidden border-0 bg-gradient-to-r ${suggestion.gradient} 
                  text-white hover:scale-105 transition-all duration-300 shadow hover:shadow-lg
                  px-6 py-3 rounded-full text-sm font-medium
                `}
              >
                <div className="flex items-center gap-2">
                  {suggestion.icon}
                  <span>{suggestion.text}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Drama Content Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-balance">
          See what you can <span className="text-primary">CREATE</span> with me
        </h2>
        <DramaGrid />
      </div>
    </main>
  )
}
