import { useEffect, useState } from 'react'

const terminalLines = [
  '[SYSTEM]: Inbound Call from +1 (212)... [STATUS]: UNANSWERED.',
  '[CLAUDE]: Initiating Ghost-Recovery protocol... SMS sent.',
  '[LEAD]: "Hey, I need a plumber now."',
  '[CLAUDE]: Lead qualified. High Priority. Ticket opened in JIRA.'
]

export default function AgentDemo() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) {
      // Restart animation after 2 seconds
      const timer = setTimeout(() => {
        setDisplayedLines([])
        setCurrentLineIndex(0)
        setCurrentCharIndex(0)
      }, 3000)
      return () => clearTimeout(timer)
    }

    const currentLine = terminalLines[currentLineIndex]
    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => {
          const updated = [...prev]
          updated[currentLineIndex] = (updated[currentLineIndex] || '') + currentLine[currentCharIndex]
          return updated
        })
        setCurrentCharIndex(prev => prev + 1)
      }, 30)
      return () => clearTimeout(timer)
    } else {
      // Move to next line
      const timer = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1)
        setCurrentCharIndex(0)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [currentLineIndex, currentCharIndex])

  return (
    <section className="bg-charcoal px-6 py-32 sm:px-8 lg:px-12" id="agent-demo">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-gray mb-4">The Claude Core</p>
          <h2 className="text-4xl font-semibold text-platinum sm:text-5xl">Agent Demo</h2>
        </div>

        {/* Bento Box Terminal */}
        <div className="rounded-3xl border border-gray/20 bg-void/80 p-8 backdrop-blur-md sm:p-12">
          {/* Terminal Header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-silver"></div>
            <div className="h-3 w-3 rounded-full bg-gray/50"></div>
            <div className="h-3 w-3 rounded-full bg-gray/30"></div>
            <span className="ml-4 text-xs font-mono text-gray">claude-3.5-averon</span>
          </div>

          {/* Terminal Content */}
          <div className="space-y-3 font-mono text-sm sm:text-base min-h-40">
            {displayedLines.map((line, idx) => (
              <div key={idx} className="text-silver">
                <span>{line}</span>
                {idx === displayedLines.length - 1 && currentLineIndex < terminalLines.length && (
                  <span className="animate-pulse">▌</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
