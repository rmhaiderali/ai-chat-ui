"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign } from "lucide-react"

export function BookingForm({ services, onServiceSelect }) {
  const [selectedService, setSelectedService] = useState(null)

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId)
    onServiceSelect?.(serviceId)
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          ✂️ Select a Service
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {services.map((service) => (
          <div
            key={service.id}
            className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
              selectedService === service.id
                ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
            }`}
            onClick={() => handleServiceSelect(service.id)}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-gray-900 dark:text-white">
                {service.name}
              </h3>
              <Badge variant="secondary" className="ml-2">
                <DollarSign className="w-3 h-3 mr-1" />
                {service.price}
              </Badge>
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Clock className="w-3 h-3 mr-1" />
              {service.duration} minutes
            </div>
          </div>
        ))}

        {selectedService && (
          <Button className="w-full mt-4" onClick={() => {}}>
            Continue with {services.find((s) => s.id === selectedService)?.name}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
