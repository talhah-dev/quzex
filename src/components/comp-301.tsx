import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    // To make the notification fixed, add classes like `fixed bottom-4 inset-x-4` to the container element.
    <div className="bg-background z-50 rounded-md border px-4 py-3 shadow-lg">
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
