"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const dramas = [
  {
    id: "1",
    title: "短剧排行把女",
    summary: "短剧排行把女",
    type: "新剧本策划",
    time: "2025/09/24 17:54",
    image: null,
  },
  {
    id: "2",
    title: "田园生活",
    summary: "唐代田园生活。画面呈现微缩模型景观与童话绘本结合的田园风格，以红砖木屋、石砌小屋为主体，茅草与青草…",
    type: "新剧本策划",
    time: "2025/09/24 17:29",
    image: null,
  },
  {
    id: "3",
    title: "九寨沟游历",
    summary: "小猫游历九寨沟，一边游历一边介绍九寨沟的美景，超写实风格",
    type: "新剧本策划",
    time: "2025/09/24 17:29",
    image: null,
  },
  {
    id: "4",
    title: "新疆伊犁",
    summary: "小羊介绍新疆伊犁的美丽景色，一只拟人化的小羊羔，超写实风格",
    type: "新剧本策划",
    time: "2025/09/24 15:11",
    image: null,
  },
  {
    id: "5",
    title: "婚礼惊变：前男友的救赎",
    summary: "婚礼惊变：前男友的救赎",
    type: "婚礼惊变",
    time: "2025/09/17 15:06",
    image: "/public/beautiful-princess-in-ancient-chinese-dress-palace.jpg",
  },
]

export default function SpacePage() {
  const router = useRouter()
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">我的空间</h2>
        <Button
          variant="outline"
          onClick={() => router.push('/')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          返回主页
        </Button>
      </div>
      <div className="flex flex-wrap gap-6">
        {dramas.map((drama) => (
          <div
            key={drama.id}
            className="w-64 bg-white rounded-xl shadow hover:shadow-lg cursor-pointer transition p-4 flex flex-col justify-between"
            onClick={() => router.push(`/generate?prompt=${encodeURIComponent('继续编辑：' + drama.title)}`)}
          >
            {drama.image ? (
              <Image src={drama.image} alt={drama.title} width={240} height={140} className="rounded mb-2 object-cover" />
            ) : (
              <div className="h-32 bg-gray-100 rounded mb-2 flex items-center justify-center text-gray-400 text-3xl">“</div>
            )}
            <div className="flex-1">
              <div className="text-base font-semibold mb-2 line-clamp-2">{drama.summary}</div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
              <span>{drama.type}</span>
              <span>{drama.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
