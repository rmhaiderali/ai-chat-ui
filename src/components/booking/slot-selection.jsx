"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

export function SlotSelection({
  selectedService,
  availableSlots,
  onSlotSelect,
}) {
  const [selectedSlot, setSelectedSlot] = useState(null)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    })
  }

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":")
    const hour = Number.parseInt(hours)
    const ampm = hour >= 12 ? "PM" : "AM"
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes} ${ampm}`
  }

  const groupedSlots = availableSlots.reduce((acc, slot) => {
    if (!acc[slot.date]) {
      acc[slot.date] = []
    }
    acc[slot.date].push(slot)
    return acc
  }, {})

  const handleSlotSelect = (date, time) => {
    setSelectedSlot({ date, time })
    onSlotSelect?.(date, time)
  }

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Select Time Slot
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.entries(groupedSlots).map(([date, slots]) => (
          <div key={date} className="space-y-2">
            <h3 className="font-medium text-gray-900 dark:text-white">
              {formatDate(date)}
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {slots.map((slot) => (
                <Button
                  key={`${slot.date}-${slot.time}`}
                  variant={
                    selectedSlot?.date === slot.date &&
                    selectedSlot?.time === slot.time
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  disabled={!slot.available}
                  onClick={() => handleSlotSelect(slot.date, slot.time)}
                  className={`h-auto py-2 ${
                    !slot.available ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <Clock className="w-3 h-3 mb-1" />
                    <span className="text-xs">{formatTime(slot.time)}</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        ))}

        {selectedSlot && (
          <div className="mt-4 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-green-800 dark:text-green-200">
                  Selected: {formatDate(selectedSlot.date)}
                </p>
                <p className="text-sm text-green-600 dark:text-green-300">
                  {formatTime(selectedSlot.time)}
                </p>
              </div>
              <Badge
                variant="secondary"
                className="bg-green-100 dark:bg-green-900"
              >
                Available
              </Badge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
