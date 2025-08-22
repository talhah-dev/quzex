import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

const Cookies = () => {
  const [showCookies, setShowCookies] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowCookies(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!showCookies) return null

  return (
    <div className="bg-background z-50 rounded-md fixed bottom-0 left-0 w-full border px-4 py-3 shadow-lg animate-slide-up">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <p className="text-sm">
          We use cookies to improve your experience, analyze site usage, and
          show personalized content.
        </p>
        <div className="flex gap-2 max-md:flex-wrap">
          <Button size="sm">Accept</Button>
          <Button variant="outline" size="sm">
            Decline
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Cookies