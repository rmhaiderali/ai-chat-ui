"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Bot } from "lucide-react"
import { ChatSidebar } from "@/components/chat-sidebar"
import { ChatMessageComponent } from "@/components/chat-message"
import { sampleChats, getHardcodedResponse } from "@/lib/sample-chats"

export default function ChatPage() {
  const [currentChatId, setCurrentChatId] = useState(null)
  const [currentMessages, setCurrentMessages] = useState([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]",
      )
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }, [currentMessages])

  const handleChatSelect = (chatId) => {
    const selectedChat = sampleChats.find((chat) => chat.id === chatId)
    if (selectedChat) {
      setCurrentChatId(chatId)
      setCurrentMessages([...selectedChat.messages])
    }
  }

  const handleNewChat = () => {
    setCurrentChatId(null)
    setCurrentMessages([])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    }

    setCurrentMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Reset textarea height
    const textarea = document.querySelector("textarea")
    if (textarea) {
      // textarea.style.height = "auto"
      // textarea.style.height = "44px"
    }

    // Simulate AI thinking time
    setTimeout(
      () => {
        const response = getHardcodedResponse(userMessage.content)
        const assistantMessage = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: response.content,
          timestamp: new Date(),
          customComponent: response.customComponent,
        }

        setCurrentMessages((prev) => [...prev, assistantMessage])
        setIsLoading(false)
      },
      1000 + Math.random() * 1000,
    ) // Random delay between 1-2 seconds
  }

  const getCurrentChatTitle = () => {
    if (currentChatId) {
      const chat = sampleChats.find((c) => c.id === currentChatId)
      return chat?.title || "Chat"
    }
    return "New Chat"
  }

  return (
    <div className="flex bg-gray-50 dark:bg-gray-900 h-screen">
      {/* Sidebar */}
      <ChatSidebar
        chats={sampleChats}
        currentChatId={currentChatId}
        onChatSelect={handleChatSelect}
        onNewChat={handleNewChat}
      />

      {/* Main Chat Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 p-4 border-gray-200 dark:border-gray-700 border-b">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="font-semibold text-gray-900 dark:text-white">
              {getCurrentChatTitle()}
            </h2>
            {currentChatId && (
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                • Sample conversation
              </span>
            )}
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 overflow-hidden" ref={scrollAreaRef}>
          <div className="space-y-6 mx-auto p-4 max-w-4xl">
            {currentMessages.length === 0 && (
              <div className="py-12 text-center">
                <Bot className="mx-auto mb-4 w-12 h-12 text-gray-400 dark:text-gray-500" />
                <h3 className="mb-2 font-medium text-gray-900 dark:text-white text-lg">
                  {currentChatId
                    ? "Continue the conversation"
                    : "How can I help you today?"}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {currentChatId
                    ? "You can continue this conversation or start a new topic."
                    : "Start a conversation by typing a message below, or select a sample chat from the sidebar."}
                </p>
              </div>
            )}

            {currentMessages.map((message) => (
              <ChatMessageComponent key={message.id} message={message} />
            ))}

            {isLoading && (
              <div className="flex justify-start gap-4">
                <div className="flex justify-center items-center bg-blue-600 dark:bg-blue-700 rounded-full w-8 h-8">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white dark:bg-gray-800 shadow-sm px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-2xl">
                  <div className="flex items-center gap-1">
                    <div className="bg-gray-400 dark:bg-gray-500 rounded-full w-2 h-2 animate-bounce"></div>
                    <div
                      className="bg-gray-400 dark:bg-gray-500 rounded-full w-2 h-2 animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="bg-gray-400 dark:bg-gray-500 rounded-full w-2 h-2 animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="bg-white dark:bg-gray-800 p-4 border-gray-200 dark:border-gray-700 border-t">
          <div className="mx-auto max-w-4xl">
            <form onSubmit={handleSubmit} className="flex items-end gap-3">
              <div className="flex-1">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message here..."
                  className={
                    "flex items-center bg-white dark:bg-gray-700 py-3 border-gray-300 dark:border-gray-600 rounded-2xl h-auto min-h-[46px] max-h-[146px] text-gray-900 dark:placeholder:text-gray-400 dark:text-white placeholder:text-gray-500 resize-none" +
                    " scrollbar scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-800 scrollbar-track-transparent" +
                    " wrap-anywhere break-normal"
                  }
                  disabled={isLoading}
                  rows={1}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSubmit(e)
                    }
                  }}
                />
              </div>
              <Button
                type="submit"
                size="sm"
                disabled={!input.trim() || isLoading}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 disabled:opacity-50 px-4 rounded-xl h-11 text-white"
              >
                <div>
                  <Send className="w-4 h-4" />
                </div>
              </Button>
            </form>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-xs text-center">
              This is a demo with hardcoded responses. Try asking about React,
              JavaScript, CSS, or book an appointment!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
