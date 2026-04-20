import { Button, ButtonProps } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

type ButtonWithIconProps = ButtonProps & {
  text: string
}

export function ButtonWithIcon({ text, className, ...props }: ButtonWithIconProps) {
  return (
    <div className={cn("rounded-full overflow-hidden h-12 group relative w-fit", className)}>
      <Button
        variant="ghost"
        className={cn(
          "relative text-sm font-medium h-full ps-6 pe-14 transition-all duration-500 hover:ps-14 hover:pe-6 w-full cursor-pointer flex items-center justify-center rounded-full",
          "bg-inherit text-inherit hover:bg-inherit hover:text-inherit"
        )}
        {...props}
      >
        <span className="relative z-10 transition-all duration-500">{text}</span>
        <div className="absolute right-1 top-1 bottom-1 aspect-square bg-ink text-cream rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
          <ArrowUpRight size={16} />
        </div>
      </Button>
    </div>
  )
}