import { notFound } from "next/navigation"

const dramaDetails = {
  "1": {
    title: "短剧排行把女",
    chat: [
      { role: "user", content: "给我短剧排行" },
      { role: "ai", content: "1. 剧本A\n2. 剧本B\n3. 剧本C" },
    ],
    video: null,
  },
  "2": {
    title: "田园生活",
    chat: [
      { role: "user", content: "生成田园生活短剧" },
      { role: "ai", content: "田园生活短剧内容..." },
    ],
    video: null,
  },
  // ... 其他静态数据 ...
}

// 生成静态参数，用于静态导出
export async function generateStaticParams() {
  return Object.keys(dramaDetails).map((id) => ({
    id: id,
  }))
}

export default function SpaceDetailPage({ params }: { params: { id: string } }) {
  const id = params.id
  const detail = dramaDetails[id]
  
  if (!detail) {
    notFound()
  }

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-6">{detail.title}</h2>
      <div className="mb-8">
        <h3 className="font-semibold mb-2">聊天内容</h3>
        <div className="bg-gray-50 rounded p-4 space-y-2">
          {detail.chat.map((msg, idx) => (
            <div key={idx} className={msg.role === "user" ? "text-right" : "text-left"}>
              <span className={msg.role === "user" ? "text-blue-600" : "text-green-600"}>
                {msg.role === "user" ? "我：" : "AI："}
              </span>
              {msg.content}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">视频</h3>
        <div className="bg-gray-100 rounded h-48 flex items-center justify-center text-gray-400">
          暂无视频（可接入视频播放器）
        </div>
      </div>
    </div>
  )
}
