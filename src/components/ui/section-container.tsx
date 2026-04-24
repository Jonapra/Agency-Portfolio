import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionContainer = ({ children, className }: SectionContainerProps) => (
  <div className={cn("lg:mx-auto lg:w-full lg:max-w-[1400px] lg:px-6 md:px-10", className)}>
    {children}
  </div>
);