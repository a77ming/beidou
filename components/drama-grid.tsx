import { Badge } from "@/components/ui/badge"

const dramaData = [
  {
    id: 1,
    title: "霸道总裁",
    subtitle: "爱上我",
    category: "AI视频剪辑",
    type: "都市情感",
    image: "/handsome-ceo-in-suit-office-background.jpg",
    badge: "热门",
    badgeColor: "bg-red-500",
  },
  {
    id: 2,
    title: "穿越王妃",
    subtitle: "逆袭记",
    category: "Vidext生成器",
    type: "古装穿越",
    image: "/beautiful-princess-in-ancient-chinese-dress-palace.jpg",
    badge: "新品",
    badgeColor: "bg-blue-500",
  },
  {
    id: 3,
    title: "校园恋爱",
    subtitle: "青春物语",
    category: "Hotdog设计",
    type: "校园青春",
    image: "/young-students-in-school-uniform-campus-romance.jpg",
    badge: "推荐",
    badgeColor: "bg-green-500",
  },
  {
    id: 4,
    title: "豪门恩怨",
    subtitle: "家族秘密",
    category: "AI剧本",
    type: "豪门世家",
    image: "/luxury-mansion-wealthy-family-drama-scene.jpg",
    badge: "热播",
    badgeColor: "bg-orange-500",
  },
  {
    id: 5,
    title: "现代仙侠",
    subtitle: "都市修仙",
    category: "AI配音",
    type: "现代修仙",
    image: "/modern-city-with-mystical-elements-urban-fantasy.jpg",
    badge: "精品",
    badgeColor: "bg-purple-500",
  },
  {
    id: 6,
    title: "悬疑推理",
    subtitle: "真相大白",
    category: "VoCareer设计",
    type: "悬疑推理",
    image: "/detective-mystery-dark-atmosphere-crime-scene.jpg",
    badge: "烧脑",
    badgeColor: "bg-gray-600",
  },
]

export function DramaGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {dramaData.map((drama) => (
        <div
          key={drama.id}
          className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
        >
          {/* Badge */}
          <div className="absolute top-4 left-4 z-10">
            <Badge className={`${drama.badgeColor} text-white border-0 font-medium`}>{drama.badge}</Badge>
          </div>

          {/* Image */}
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={drama.image || "/placeholder.svg"}
              alt={drama.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="mb-2">
                <h3 className="text-xl font-bold mb-1">{drama.title}</h3>
                <p className="text-sm opacity-90">{drama.subtitle}</p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs opacity-75 mb-1">{drama.category}</p>
                  <p className="text-sm font-medium">{drama.type}</p>
                </div>

                <div className="text-right">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-xs">▶</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
