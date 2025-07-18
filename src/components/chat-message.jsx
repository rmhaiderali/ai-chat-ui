"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"
import Iframe from "./iframe"

export function ChatMessageComponent({ message }) {
  const isUser = message.role === "user"

  return (
    <div className={cn("flex gap-4", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <Avatar className="flex-shrink-0 bg-blue-600 w-8 h-8">
          <AvatarFallback>
            <Bot className="w-4 h-4 text-white" />
          </AvatarFallback>
        </Avatar>
      )}

      <div
        className={cn(
          "px-4 py-3 rounded-2xl max-w-[70%] break-normal wrap-anywhere",
          isUser
            ? "bg-blue-600 dark:bg-blue-700 text-white ml-auto"
            : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-900 dark:text-gray-100",
        )}
      >
        <div className="text-sm leading-relaxed whitespace-pre-wrap">
          {message.content}
        </div>

        {/* Custom Component Rendering */}
        {message.customComponent && (
          <div className="mt-3">
            <Iframe
              props={message.customComponent.data}
              id={message.customComponent.type}
              src={"http://localhost:5173/" + message.customComponent.type}
              key={message.customComponent.type}
            />
          </div>
        )}
        <div
          className={cn(
            "opacity-70 mt-2 text-xs",
            isUser
              ? "text-blue-100 dark:text-blue-200"
              : "text-gray-500 dark:text-gray-400",
          )}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>

      {isUser && (
        <Avatar className="flex-shrink-0 bg-gray-600 w-8 h-8">
          <AvatarFallback>
            <User className="w-4 h-4 text-white" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}
