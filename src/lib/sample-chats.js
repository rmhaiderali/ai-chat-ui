export const sampleChats = [
  {
    id: "1",
    title: "React Best Practices",
    lastUpdated: new Date("2024-01-15"),
    messageCount: 6,
    messages: [
      {
        id: "1-1",
        role: "user",
        content: "What are some React best practices I should follow?",
        timestamp: new Date("2024-01-15T10:00:00"),
      },
      {
        id: "1-2",
        role: "assistant",
        content:
          "Here are some key React best practices:\n\n1. **Use functional components** with hooks instead of class components\n2. **Keep components small and focused** - each component should have a single responsibility\n3. **Use proper state management** - useState for local state, useContext for shared state\n4. **Optimize performance** with useMemo and useCallback when needed\n5. **Follow naming conventions** - use PascalCase for components, camelCase for functions\n6. **Write clean, readable code** with proper indentation and comments",
        timestamp: new Date("2024-01-15T10:00:30"),
      },
      {
        id: "1-3",
        role: "user",
        content: "Can you explain more about state management?",
        timestamp: new Date("2024-01-15T10:02:00"),
      },
      {
        id: "1-4",
        role: "assistant",
        content:
          "State management in React involves several approaches:\n\n**Local State (useState)**\n- Use for component-specific data\n- Perfect for form inputs, toggles, counters\n\n**Context API (useContext)**\n- Share state across multiple components\n- Good for themes, user authentication, language settings\n\n**External Libraries**\n- Redux: For complex state logic\n- Zustand: Lightweight alternative\n- React Query: For server state management\n\n**Best Practices:**\n- Keep state as close to where it's used as possible\n- Lift state up only when necessary\n- Use reducers for complex state logic",
        timestamp: new Date("2024-01-15T10:02:45"),
      },
    ],
  },
  {
    id: "2",
    title: "JavaScript ES6 Features",
    lastUpdated: new Date("2024-01-14"),
    messageCount: 4,
    messages: [
      {
        id: "2-1",
        role: "user",
        content: "What are the most important ES6 features I should know?",
        timestamp: new Date("2024-01-14T14:30:00"),
      },
      {
        id: "2-2",
        role: "assistant",
        content:
          "Here are the essential ES6 features every developer should master:\n\n**1. Arrow Functions**\n```javascript\nconst add = (a, b) => a + b;\n```\n\n**2. Destructuring**\n```javascript\nconst {name, age} = person;\nconst [first, second] = array;\n```\n\n**3. Template Literals**\n```javascript\nconst message = `Hello ${name}!`;\n```\n\n**4. Let and Const**\n- Block-scoped variables\n- Const for immutable bindings\n\n**5. Spread Operator**\n```javascript\nconst newArray = [...oldArray, newItem];\n```\n\n**6. Promises**\n- Better async handling than callbacks",
        timestamp: new Date("2024-01-14T14:30:45"),
      },
    ],
  },
  {
    id: "3",
    title: "CSS Grid vs Flexbox",
    lastUpdated: new Date("2024-01-13"),
    messageCount: 8,
    messages: [
      {
        id: "3-1",
        role: "user",
        content: "When should I use CSS Grid vs Flexbox?",
        timestamp: new Date("2024-01-13T09:15:00"),
      },
      {
        id: "3-2",
        role: "assistant",
        content:
          "Great question! Here's when to use each:\n\n**Use Flexbox for:**\n- One-dimensional layouts (rows OR columns)\n- Aligning items within a container\n- Navigation bars, button groups\n- Centering content\n- Distributing space between items\n\n**Use CSS Grid for:**\n- Two-dimensional layouts (rows AND columns)\n- Complex page layouts\n- Card layouts, image galleries\n- When you need precise control over both axes\n\n**Key Differences:**\n- Flexbox: Content-first approach\n- Grid: Layout-first approach\n\n**Pro Tip:** You can use both together! Grid for the overall layout, Flexbox for component internals.",
        timestamp: new Date("2024-01-13T09:15:30"),
      },
    ],
  },
  {
    id: "4",
    title: "API Design Principles",
    lastUpdated: new Date("2024-01-12"),
    messageCount: 10,
    messages: [
      {
        id: "4-1",
        role: "user",
        content: "What makes a good REST API design?",
        timestamp: new Date("2024-01-12T16:20:00"),
      },
      {
        id: "4-2",
        role: "assistant",
        content:
          'Excellent question! Here are the key principles for good REST API design:\n\n**1. Use HTTP Methods Correctly**\n- GET: Retrieve data\n- POST: Create new resources\n- PUT: Update entire resources\n- PATCH: Partial updates\n- DELETE: Remove resources\n\n**2. Meaningful URLs**\n- `/users` not `/getUsers`\n- `/users/123/posts` for nested resources\n- Use nouns, not verbs\n\n**3. Consistent Response Format**\n```json\n{\n  "data": {...},\n  "status": "success",\n  "message": "User created successfully"\n}\n```\n\n**4. Proper HTTP Status Codes**\n- 200: Success\n- 201: Created\n- 400: Bad Request\n- 404: Not Found\n- 500: Server Error\n\n**5. Versioning**\n- `/api/v1/users`\n- Header-based versioning',
        timestamp: new Date("2024-01-12T16:20:45"),
      },
    ],
  },
  {
    id: "5",
    title: "Barber Appointment Booking",
    lastUpdated: new Date("2024-01-16"),
    messageCount: 8,
    messages: [
      {
        id: "5-1",
        role: "user",
        content: "I need to book an appointment with a barber",
        timestamp: new Date("2024-01-16T11:00:00"),
      },
      {
        id: "5-2",
        role: "assistant",
        content:
          "I'd be happy to help you book a barber appointment! Let me show you our available services and help you get started.",
        timestamp: new Date("2024-01-16T11:00:15"),
        customComponent: {
          type: "booking-form",
          data: {
            title: "✂️ Select a Service",
            services: [
              { id: "haircut", name: "Haircut", price: 25, duration: 30 },
              {
                id: "beard-trim",
                name: "Beard Trim",
                price: 15,
                duration: 20,
              },
              {
                id: "haircut-beard",
                name: "Haircut + Beard",
                price: 35,
                duration: 45,
              },
              {
                id: "shave",
                name: "Traditional Shave",
                price: 20,
                duration: 25,
              },
            ],
          },
        },
      },
      {
        id: "5-3",
        role: "user",
        content: "I'd like a haircut and beard trim combo",
        timestamp: new Date("2024-01-16T11:02:00"),
      },
      {
        id: "5-4",
        role: "assistant",
        content:
          "Perfect choice! The Haircut + Beard combo is $35 and takes about 45 minutes. Now let me show you available time slots for this week.",
        timestamp: new Date("2024-01-16T11:02:15"),
        customComponent: {
          type: "slot-selection",
          data: {
            selectedService: "haircut-beard",
            availableSlots: [
              { date: "2024-01-17", time: "10:00", available: true },
              { date: "2024-01-17", time: "14:30", available: true },
              { date: "2024-01-17", time: "16:00", available: false },
              { date: "2024-01-18", time: "09:00", available: true },
              { date: "2024-01-18", time: "11:30", available: true },
              { date: "2024-01-18", time: "15:00", available: true },
              { date: "2024-01-19", time: "10:30", available: true },
              { date: "2024-01-19", time: "13:00", available: false },
              { date: "2024-01-19", time: "16:30", available: true },
            ],
          },
        },
      },
      {
        id: "5-5",
        role: "user",
        content: "I'll take the Thursday 11:30 AM slot",
        timestamp: new Date("2024-01-16T11:04:00"),
      },
      {
        id: "5-6",
        role: "assistant",
        content:
          "Excellent! I have you down for Thursday, January 18th at 11:30 AM for a Haircut + Beard service. Please provide your contact details to confirm the booking.",
        timestamp: new Date("2024-01-16T11:04:15"),
        customComponent: {
          type: "confirmation-form",
          data: {
            service: "✂️ Haircut + Beard",
            date: "2024-01-18",
            time: "11:30",
            price: "$ 35",
            duration: 45,
          },
        },
      },
      {
        id: "5-7",
        role: "user",
        content:
          "Name: John Smith, Email: john@example.com, Phone: (555) 123-4567",
        timestamp: new Date("2024-01-16T11:06:00"),
      },
      {
        id: "5-8",
        role: "assistant",
        content:
          "Perfect! Your appointment is confirmed:\n\n📅 **Thursday, January 18th, 2024**\n🕐 **11:30 AM - 12:15 PM**\n✂️ **Service:** Haircut + Beard Trim\n💰 **Price:** $35\n👤 **Name:** John Smith\n📧 **Email:** john@example.com\n📱 **Phone:** (555) 123-4567\n\nYou'll receive a confirmation email shortly. Please arrive 5 minutes early. Looking forward to seeing you!",
        timestamp: new Date("2024-01-16T11:06:30"),
      },
    ],
  },
]

// Hardcoded responses for different types of messages
export const getHardcodedResponse = (userMessage) => {
  const message = userMessage.toLowerCase()

  if (
    message.includes("book") &&
    (message.includes("appointment") || message.includes("barber"))
  ) {
    return {
      content:
        "I'd be happy to help you book a barber appointment! Let me show you our available services and help you get started.",
      customComponent: {
        type: "booking-form",
        data: {
          services: [
            { id: "haircut", name: "Haircut", price: 25, duration: 30 },
            { id: "beard-trim", name: "Beard Trim", price: 15, duration: 20 },
            {
              id: "haircut-beard",
              name: "Haircut + Beard",
              price: 35,
              duration: 45,
            },
            { id: "shave", name: "Traditional Shave", price: 20, duration: 25 },
          ],
        },
      },
    }
  }

  if (message.includes("hello") || message.includes("hi")) {
    return {
      content:
        "Hello! I'm here to help you with any questions you have. Whether it's about programming, web development, booking appointments, or general topics, feel free to ask!",
    }
  }

  if (message.includes("react")) {
    return {
      content:
        "React is a fantastic JavaScript library! Here are some key concepts:\n\n• **Components**: Building blocks of React apps\n• **JSX**: JavaScript syntax extension\n• **Props**: Data passed to components\n• **State**: Component's internal data\n• **Hooks**: Functions that let you use state and lifecycle features\n\nWhat specific aspect of React would you like to explore?",
    }
  }

  if (message.includes("javascript") || message.includes("js")) {
    return {
      content:
        "JavaScript is the language of the web! Here are some fundamental concepts:\n\n• **Variables**: let, const, var\n• **Functions**: Regular and arrow functions\n• **Objects**: Key-value pairs\n• **Arrays**: Ordered lists of data\n• **Promises**: Handling asynchronous operations\n• **DOM Manipulation**: Interacting with web pages\n\nIs there a particular JavaScript topic you'd like to dive deeper into?",
    }
  }

  if (message.includes("css")) {
    return {
      content:
        "CSS is essential for styling web pages! Key areas to master:\n\n• **Selectors**: Targeting HTML elements\n• **Box Model**: Margin, border, padding, content\n• **Flexbox**: One-dimensional layouts\n• **Grid**: Two-dimensional layouts\n• **Responsive Design**: Media queries and mobile-first approach\n• **Animations**: Transitions and keyframes\n\nWhat CSS topic interests you most?",
    }
  }

  if (message.includes("help") || message.includes("?")) {
    return {
      content:
        "I'm here to help! I can assist you with:\n\n• **Web Development**: HTML, CSS, JavaScript, React\n• **Programming Concepts**: Algorithms, data structures\n• **Appointment Booking**: Barber, salon, or other services\n• **Best Practices**: Code organization, performance optimization\n• **Problem Solving**: Debugging and troubleshooting\n\nJust ask me anything you'd like to know!",
    }
  }

  // Default response
  return {
    content:
      "That's an interesting question! While I don't have a specific answer for that right now, I'd be happy to help you explore related topics. Could you provide more context or ask about something specific like:\n\n• Programming languages (JavaScript, Python, etc.)\n• Web development (HTML, CSS, React)\n• Booking appointments or services\n• Software development best practices\n• Problem-solving approaches\n\nWhat would you like to learn about?",
  }
}
