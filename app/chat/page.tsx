"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, User, Sparkles } from "lucide-react"

const DRAMA_LIST = [
  "1. 都市恋爱物语",
  "2. 逆袭人生路",
  "3. 豪门恩怨情仇",
  "4. 校园青春纪事",
  "5. 古风权谋天下",
  "6. 悬疑侦探故事",
  "7. 家庭温情时光",
  "8. 职场奋斗记",
  "9. 奇幻冒险旅程",
  "10. 甜宠日常生活",
]

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: "ai", content: "你好，我是北斗AI，有什么想问的都可以和我说哦！" },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return
    const userMsg = { role: "user", content: input }
    let aiMsg
    if (input.includes("短剧") && input.includes("排行")) {
      aiMsg = {
        role: "ai",
        content: `当前短剧排行榜TOP10：\n${DRAMA_LIST.join("\n")}`,
      }
    } else {
      aiMsg = {
        role: "ai",
        content: "很高兴为你解答！你可以问我短剧相关的问题，比如：短剧排行榜、剧情推荐等。",
      }
    }
    setMessages((prev) => [...prev, userMsg, aiMsg])
    setInput("")
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl flex flex-col h-[80vh] bg-card/80 rounded-2xl shadow-lg border border-border/40">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm shadow 
                ${msg.role === "user" ? "bg-primary text-white rounded-br-sm" : "bg-card/80 text-foreground rounded-tl-sm"}
              `}>
                <div className="flex items-center gap-2 whitespace-pre-line">
                  {msg.role === "ai" ? <Sparkles className="h-4 w-4 text-primary shrink-0" /> : <User className="h-4 w-4 text-white shrink-0" />}
                  <span>{msg.content}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-border/30 flex items-center gap-2">
          <input
            className="flex-1 border border-border rounded-xl px-4 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="输入你的问题，Shift+Enter换行"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <Button onClick={handleSend} className="rounded-xl bg-gradient-to-r from-primary to-accent">
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
