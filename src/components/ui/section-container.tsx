import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionContainer = ({ children, className }: SectionContainerProps) => (
  <div className={cn("mx-auto w-full max-w-[1400px] px-6 md:px-10", className)}>
    {children}
  </div>
);