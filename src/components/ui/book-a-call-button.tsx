import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, User } from "lucide-react"

interface BookACallButtonProps {
  href?: string
}

const spring = { type: "spring" as const, duration: 0.5, bounce: 0.2 }

export function BookACallButton({ href = "#contact" }: BookACallButtonProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <a href={href} className="inline-block">
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="inline-flex items-center bg-ink text-cream dark:bg-cream dark:text-ink rounded-full overflow-hidden cursor-pointer select-none h-[50px]"
      >
        {/* Left icon cluster */}
        <div className="flex items-center shrink-0 pl-1.5">
          <motion.div
            animate={{ width: hovered ? 34 : 38, height: hovered ? 34 : 38 }}
            transition={spring}
            className="rounded-full bg-white/10 dark:bg-ink/10 flex items-center justify-center shrink-0"
          >
            <Phone size={15} strokeWidth={2} />
          </motion.div>

          <AnimatePresence>
            {hovered && (
              <motion.div
                key="cal-icon"
                initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                animate={{ width: 34, height: 34, opacity: 1, marginLeft: 4 }}
                exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                transition={spring}
                className="rounded-full bg-signal text-ink flex items-center justify-center shrink-0 overflow-hidden"
              >
                <User size={14} strokeWidth={2} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Label */}
        <motion.span
          animate={{ paddingLeft: 14, paddingRight: hovered ? 16 : 22 }}
          transition={spring}
          className="font-sans font-bold text-[17px] tracking-[-0.04em] whitespace-nowrap"
        >
          Book a call
        </motion.span>
      </motion.div>
    </a>
  )
}
