"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"

import { BookingForm } from "@/components/booking/booking-form"
import { SlotSelection } from "@/components/booking/slot-selection"
import { ConfirmationForm } from "@/components/booking/confirmation-form"

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
          "max-w-[70%] rounded-2xl px-4 py-3 wrap-anywhere break-normal",
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
            {message.customComponent.type === "booking-form" && (
              <BookingForm services={message.customComponent.data.services} />
            )}
            {message.customComponent.type === "slot-selection" && (
              <SlotSelection
                selectedService={message.customComponent.data.selectedService}
                availableSlots={message.customComponent.data.availableSlots}
              />
            )}
            {message.customComponent.type === "confirmation" && (
              <ConfirmationForm
                service={message.customComponent.data.service}
                date={message.customComponent.data.date}
                time={message.customComponent.data.time}
                price={message.customComponent.data.price}
                duration={message.customComponent.data.duration}
              />
            )}
          </div>
        )}
        <div
          className={cn(
            "text-xs mt-2 opacity-70",
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
