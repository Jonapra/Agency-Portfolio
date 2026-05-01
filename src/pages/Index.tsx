import { Layout } from "@/components/Layout";
import { SectionContainer } from "@/components/ui/section-container";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";
import { ChooseUs } from "@/components/sections/ChooseUs";
import { Work } from "@/components/sections/Work";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

const Index = () => (
  <Layout>
    <Hero />
    <Services />
    <Process />
    <ProcessTimeline />
    <SectionContainer className="px-0 md:px-0">
      <Work />
      <ChooseUs />
      {/* <Pricing /> */}
      <Testimonials />
      <FAQ />
      <CTA />
    </SectionContainer>
  </Layout>
);

export default Index;
