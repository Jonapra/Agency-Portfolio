import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Send } from "lucide-react"

interface MailButtonProps {
  email: string
}

const spring = { type: "spring" as const, duration: 0.5, bounce: 0.2 }

export function MailButton({ email }: MailButtonProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <a href={`https://mail.google.com/mail/?view=cm&to=${email}`} target="_blank" rel="noopener noreferrer" className="inline-block">
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="inline-flex items-center bg-ink text-cream dark:bg-cream dark:text-ink rounded-full overflow-hidden cursor-pointer select-none h-[50px]"
      >
        {/* Left icon cluster — Mail exits, Send enters */}
        <div className="flex items-center shrink-0 pl-1.5">
          <div className="relative" style={{ width: 38, height: 38 }}>
            <AnimatePresence initial={false}>
              {!hovered && (
                <motion.div
                  key="mail-icon"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  transition={spring}
                  className="absolute inset-0 rounded-full bg-white/10 dark:bg-ink/10 flex items-center justify-center"
                >
                  <Mail size={15} strokeWidth={2} />
                </motion.div>
              )}
              {hovered && (
                <motion.div
                  key="send-icon"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.6, opacity: 0 }}
                  transition={spring}
                  className="absolute inset-0 rounded-full bg-signal text-ink flex items-center justify-center"
                >
                  <Send size={13} strokeWidth={2} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Label */}
        <motion.span
          animate={{ paddingLeft: 14, paddingRight: hovered ? 16 : 22 }}
          transition={spring}
          className="font-sans font-bold text-[17px] tracking-[-0.04em] whitespace-nowrap"
        >
          {email}
        </motion.span>
      </motion.div>
    </a>
  )
}
