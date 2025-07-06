"use client"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageSquare, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export function ChatSidebar({ chats, currentChatId, onChatSelect, onNewChat }) {
  const formatDate = (date) => {
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return "Today"
    if (diffDays === 2) return "Yesterday"
    if (diffDays <= 7) return `${diffDays} days ago`
    return date.toLocaleDateString()
  }

  return (
    <div className="w-64 bg-gray-900 dark:bg-gray-950 text-white flex flex-col h-full border-r border-gray-700 dark:border-gray-800">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-lg font-semibold">AI Chat</h1>
          <ThemeToggle />
        </div>
        <Button
          onClick={onNewChat}
          className="w-full bg-gray-800 hover:bg-gray-700 text-white border border-gray-600"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Chat
        </Button>
      </div>
      {/* Chat History */}
      <ScrollArea className="flex-1 overflow-hidden">
        <div className="space-y-1 p-3 w-[calc(100%-16px)]">
          {chats.map((chat) => (
            <Button
              key={chat.id}
              // variant="outline"
              className={cn(
                "w-full justify-start text-left p-3 h-auto text-white bg-transparent hover:bg-gray-700 dark:hover:bg-gray-800",
                currentChatId === chat.id && "bg-gray-700 dark:bg-gray-800"
              )}
              onClick={() => onChatSelect(chat.id)}
            >
              <div className="flex items-start gap-3 w-full">
                <MessageSquare className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">
                    {chat.title}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {chat.messageCount} messages •{" "}
                    {formatDate(chat.lastUpdated)}
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </ScrollArea>
      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className="text-xs text-gray-400 text-center">
          Sample chat history
        </div>
      </div>
    </div>
  )
}
