"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles, CheckCircle, Circle, Play, MessageCircle, User } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

export default function GeneratePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const prompt = searchParams.get("prompt") || "生成短剧内容"

  const [currentStep, setCurrentStep] = useState(0)
  const [isGenerating, setIsGenerating] = useState(true)
  const [generatedContent, setGeneratedContent] = useState("")

  const steps = [
    { id: 1, text: "分析用户需求", description: "理解您的创作意图和风格偏好" },
    { id: 2, text: "构思剧情框架", description: "设计引人入胜的故事结构" },
    { id: 3, text: "生成角色设定", description: "创建生动立体的角色形象" },
    { id: 4, text: "编写剧本内容", description: "撰写精彩的对话和情节" },
    { id: 5, text: "优化视觉效果", description: "设计镜头语言和视觉风格" },
    { id: 6, text: "完成作品输出", description: "生成最终的短剧作品" },
  ]

  // agent对话相关 state
  const [agentMessages, setAgentMessages] = useState([
    { role: "ai", content: `好的，我来帮您${prompt}。让我分析一下您的需求，为您创作出精彩的短剧内容！` },
    { role: "ai", content: `正在${steps[0].text}...` },
  ])
  const [agentInput, setAgentInput] = useState("")

  // 步骤推进时自动添加AI分析气泡
  useEffect(() => {
    if (currentStep > 0 && currentStep < steps.length) {
      setAgentMessages((prev) => [
        ...prev,
        { role: "ai", content: `正在${steps[currentStep].text}...` },
      ])
    }
    if (currentStep === steps.length - 1 && !isGenerating) {
      setAgentMessages((prev) => [
        ...prev,
        { role: "ai", content: `全部步骤已完成，短剧已生成！` },
      ])
    }
  }, [currentStep, isGenerating])

  // 用户与agent对话
  const handleAgentSend = () => {
    if (!agentInput.trim()) return
    setAgentMessages((prev) => [
      ...prev,
      { role: "user", content: agentInput },
      { role: "ai", content: `收到：${agentInput}，AI会根据您的反馈继续优化~` },
    ])
    setAgentInput("")
  }

  useEffect(() => {
    if (isGenerating && currentStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1)
      }, 2000)
      return () => clearTimeout(timer)
    } else if (currentStep === steps.length - 1) {
      setTimeout(() => {
        setIsGenerating(false)
        setGeneratedContent("短剧《都市恋爱物语》已生成完成！")
      }, 2000)
    }
  }, [currentStep, isGenerating])

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
              <span className="font-semibold text-lg">北斗AI</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm text-primary font-medium">{isGenerating ? "生成中" : "已完成"}</span>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* 左侧 agent 对话+进度+输入框 */}
        <div className="w-1/3 flex flex-col border-r border-border/40 bg-card/30 p-6">
          {/* 对话气泡区 */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {agentMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm shadow 
                  ${msg.role === "user" ? "bg-primary text-white rounded-br-sm" : "bg-card/80 text-foreground rounded-tl-sm"}
                `}>
                  <div className="flex items-center gap-2">
                    {msg.role === "ai" ? <Sparkles className="h-4 w-4 text-primary shrink-0" /> : <User className="h-4 w-4 text-white shrink-0" />}
                    <span>{msg.content}</span>
                  </div>
                </div>
              </div>
            ))}
            {/* 步骤进度条（可选，气泡已包含分析过程，可保留或精简） */}
            <div className="mt-6 space-y-2">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center gap-2">
                  {index < currentStep ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : index === currentStep ? (
                    <div className="w-4 h-4 border-2 border-primary rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                    </div>
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground/50" />
                  )}
                  <span className={`${index <= currentStep ? "text-foreground" : "text-muted-foreground/50"} text-xs`}>{step.text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* 输入框 */}
          <div className="mt-4 flex items-center gap-2">
            <input
              className="flex-1 border border-border rounded-xl px-4 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="和AI对话，随时调整创作思路..."
              value={agentInput}
              onChange={e => setAgentInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleAgentSend();
                }
              }}
            />
            <Button onClick={handleAgentSend} className="rounded-xl bg-gradient-to-r from-primary to-accent">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>
        {/* 右侧 生成内容区 */}
        <div className="flex-1 p-6 bg-background flex flex-col">
          {/* Canvas Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <h2 className="text-lg font-semibold">短剧创作工作台</h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>进度: {Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
            </div>
          </div>
          {/* 内容区可滚动 */}
          <div className="flex-1 overflow-y-auto">
            <div className="bg-card/50 rounded-xl border border-border/40 p-6 min-h-[300px]">
              {isGenerating ? (
                <div className="h-full flex flex-col items-center justify-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center animate-pulse">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-semibold">AI正在创作中...</h3>
                    <p className="text-muted-foreground">{steps[currentStep]?.text}</p>
                  </div>
                  <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                      style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ) : (
                <div className="h-full space-y-6">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-600">创作完成！</h3>
                    <p className="text-muted-foreground">{generatedContent}</p>
                  </div>
                  {/* Generated Content Preview */}
                  <div className="bg-card rounded-lg p-6 border border-border/40">
                    <h4 className="font-semibold mb-4">短剧预览</h4>
                    <div className="space-y-4">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <Play className="h-12 w-12 text-muted-foreground mx-auto" />
                          <p className="text-sm text-muted-foreground">点击播放预览</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-medium">《都市恋爱物语》</h5>
                        <p className="text-sm text-muted-foreground">
                          一个关于现代都市青年爱情故事的短剧，融合了浪漫、幽默和现实主义元素...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* 操作按钮固定底部 */}
          {!isGenerating && (
            <div className="sticky bottom-0 left-0 right-0 bg-background pt-4 pb-2 flex gap-3 z-10 border-t border-border/30">
              <Button className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                下载视频
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-transparent border-green-500 text-green-500 hover:bg-green-500/10"
                onClick={() => window.open("https://creator.inbeidou.cn/tool", "_blank")}
              >
                继续编辑
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
