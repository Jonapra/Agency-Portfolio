import { Button, ButtonProps } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

type ButtonWithIconProps = ButtonProps & {
  text: string
}

export function ButtonWithIcon({ text, className, ...props }: ButtonWithIconProps) {
  return (
    <div className={cn("rounded-full overflow-hidden w-fit", className)}>
      <Button
        variant="ghost"
        className={cn(
          "relative text-sm font-medium h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit cursor-pointer",
          "bg-inherit text-inherit hover:bg-inherit hover:text-inherit rounded-full"
        )}
        {...props}
      >
        <span className="relative z-10 transition-all duration-500">{text}</span>
        <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
          <ArrowUpRight size={16} />
        </div>
      </Button>
    </div>
  )
}