"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles, Video, Scissors, Languages, Lightbulb, Upload, Settings, Wand2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function EditPage() {
  const router = useRouter()
  const [selectedTopic, setSelectedTopic] = useState("")
  const [selectedStyle, setSelectedStyle] = useState("")
  const [userInput, setUserInput] = useState("")
  const [activeTab, setActiveTab] = useState("script")

  const topics = [
    { id: "romance", title: "都市恋爱", description: "现代都市青年的爱情故事", icon: "💕" },
    { id: "comedy", title: "搞笑喜剧", description: "轻松幽默的日常生活", icon: "😄" },
    { id: "suspense", title: "悬疑推理", description: "扣人心弦的推理故事", icon: "🔍" },
    { id: "fantasy", title: "奇幻冒险", description: "充满想象的奇幻世界", icon: "✨" },
    { id: "workplace", title: "职场励志", description: "职场奋斗与成长故事", icon: "💼" },
    { id: "family", title: "家庭温情", description: "温馨感人的家庭故事", icon: "🏠" },
  ]

  const editingStyles = [
    { id: "auto", title: "智能剪辑", description: "AI自动分析内容进行剪辑", icon: <Wand2 className="h-6 w-6" /> },
    { id: "template", title: "模板剪辑", description: "使用预设模板快速生成", icon: <Video className="h-6 w-6" /> },
    { id: "custom", title: "自定义剪辑", description: "手动调整剪辑参数", icon: <Settings className="h-6 w-6" /> },
  ]

  const tools = [
    { id: "analysis", title: "智影解析", icon: <Video className="h-5 w-5" />, description: "分析视频内容和结构" },
    { id: "editing", title: "智能剪辑", icon: <Scissors className="h-5 w-5" />, description: "AI驱动的智能剪辑" },
    { id: "translation", title: "视频翻译", icon: <Languages className="h-5 w-5" />, description: "多语言字幕翻译" },
    { id: "prompts", title: "常用提示词", icon: <Lightbulb className="h-5 w-5" />, description: "预设的创作提示词" },
  ]

  const suggestionTags = ["小猫游历九寨沟，一...", "女频后人与修道者三...", "兵马俑的历史，CG..."]

  const quickTags = [
    { label: "主体", prefix: "@" },
    { label: "画风", prefix: "" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => router.back()} className="hover:bg-accent/50">
              <ArrowLeft className="h-4 w-4 mr-2" />
              返回
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold text-lg">北斗智影AI创作者中心</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              新手引导
            </Button>
            <Button variant="ghost" size="sm">
              使用指南
            </Button>
            <Button variant="ghost" size="sm">
              意见反馈
            </Button>
            <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-sm text-red-500 font-medium">1989 充值</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Left Sidebar */}
        <div className="w-80 border-r border-border/40 bg-card/30 p-4">
          <div className="space-y-4">
            {/* AI Assistant */}
            <div className="bg-card rounded-lg p-4 border border-border/40">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium">小智</span>
              </div>
              <p className="text-sm text-muted-foreground">右侧添加视频，体验小智对话</p>
            </div>

            {/* Menu Items */}
            <nav className="space-y-2">
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary">
                <Video className="h-4 w-4" />
                <span className="text-sm font-medium">媒资库</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent/50 cursor-pointer">
                <Scissors className="h-4 w-4" />
                <span className="text-sm">智影解析</span>
                <span className="ml-auto bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">NEW</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent/50 cursor-pointer">
                <Wand2 className="h-4 w-4" />
                <span className="text-sm">智能剪辑</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent/50 cursor-pointer">
                <Video className="h-4 w-4" />
                <span className="text-sm">视频翻译</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent/50 cursor-pointer">
                <Upload className="h-4 w-4" />
                <span className="text-sm">我的作品</span>
              </div>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Heading */}
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-8">今天有什么新的想法?</h1>
            </div>

            {/* Tab Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant={activeTab === "script" ? "default" : "outline"}
                onClick={() => setActiveTab("script")}
                className="rounded-full px-6"
              >
                <Video className="h-4 w-4 mr-2" />
                剧本创作
              </Button>
              <Button
                variant={activeTab === "promo" ? "default" : "outline"}
                onClick={() => setActiveTab("promo")}
                className="rounded-full px-6"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                口号宣传片
              </Button>
            </div>

            {/* Large Dialog Box */}
            <div className="max-w-4xl mx-auto">
              <div className="relative p-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 rounded-3xl shadow-2xl">
                <div className="bg-background rounded-3xl p-8">
                  <div className="space-y-6">
                    {/* Large Text Input */}
                    <textarea
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder="输入你的灵感，AI会帮你自动生成剧本"
                      className="w-full h-32 bg-transparent border-none resize-none focus:outline-none text-xl placeholder:text-muted-foreground/60 leading-relaxed"
                      style={{ minHeight: "120px" }}
                    />

                    {/* Quick Tags and Upload Button */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {quickTags.map((tag, index) => (
                          <button
                            key={index}
                            className="flex items-center gap-2 px-4 py-2 bg-muted/50 hover:bg-muted/70 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                            onClick={() => setUserInput((prev) => prev + ` ${tag.prefix}${tag.label}`)}
                          >
                            <span className="text-muted-foreground">{tag.prefix}</span>
                            <span>{tag.label}</span>
                          </button>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground p-3">
                        <Upload className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Suggestion Tags */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {suggestionTags.map((suggestion, index) => (
                <button
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-card hover:bg-accent/50 rounded-full border border-border/40 transition-colors text-sm"
                  onClick={() => setUserInput(suggestion)}
                >
                  <Sparkles className="h-3 w-3 text-cyan-500" />
                  <span>{suggestion}</span>
                </button>
              ))}
              <button className="p-2 hover:bg-accent/50 rounded-full transition-colors">
                <div className="w-4 h-4 border border-current rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-current rounded-full"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
