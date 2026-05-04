import { lazy, Suspense } from "react";
import { Layout } from "@/components/Layout";
import { SectionContainer } from "@/components/ui/section-container";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { StickySection } from "@/components/sections/StickySection";
import { Work } from "@/components/sections/Work";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

const ChooseUs = lazy(() => import("@/components/sections/ChooseUs"));

const Index = () => (
  <Layout>
    <Hero />
    <About />
    <Services />
    <StickySection />
    <SectionContainer className="px-0 md:px-0">
      <Work />
      <Process />
      <Suspense fallback={<div aria-hidden className="min-h-[600px]" />}>
        <ChooseUs />
      </Suspense>
      {/* <Pricing /> */}
      <Testimonials />
      <FAQ />
      <CTA />
    </SectionContainer>
  </Layout>
);

export default Index;
