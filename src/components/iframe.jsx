"use client"

import { useEffect, useState, useRef } from "react"
import { useTheme } from "next-themes"

export default function Iframe({ src, id, props }) {
  let { theme } = useTheme()
  const [iframeNodes, setIframeNodes] = useState([])
  const [firstRender, setFirstRender] = useState(true)
  const listenerRef = useRef(null)

  if (!["light", "dark"].includes(theme))
    theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light"

  function setTheme(node) {
    console.log("sending theme to iframe", node.src)
    node.contentWindow.postMessage(
      {
        source: "parent",
        style: {
          colorScheme: theme,
          background: theme === "dark" ? "#1e2939" : "#ffffff",
        },
      },
      new URL(node.src).origin,
    )
  }

  useEffect(() => {
    if (firstRender) setFirstRender(false)
    else iframeNodes.forEach(setTheme)
  }, [theme])

  useEffect(() => {
    return () => {
      console.log("cleaning up iframe listeners")
      if (listenerRef.current)
        window.removeEventListener("message", listenerRef.current)
    }
  }, [])

  return (
    <iframe
      ref={(node) => {
        if (!node?.contentWindow) return
        if (!iframeNodes.includes(node)) {
          setIframeNodes([...iframeNodes, node])
          function listener(event) {
            if (event.data.source === "setup:" + id) {
              console.log("message received from iframe", event.data)
              console.log("sending theme and props to iframe", node.src)
              node.contentWindow.postMessage(
                {
                  source: "parent",
                  style: {
                    colorScheme: theme,
                    background: theme === "dark" ? "#1e2939" : "#ffffff",
                  },
                  props,
                },
                new URL(node.src).origin,
              )
            }
            if (event.data.source === id) {
              console.log("message received from iframe", event.data)
              if (event.data.iframeHeight) {
                node.style.height = event.data.iframeHeight + "px"
              }
            }
          }
          listenerRef.current = listener
          window.addEventListener("message", listener)
        }
      }}
      src={src}
      style={{ width: "100%" }}
    />
  )
}
