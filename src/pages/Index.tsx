import { Layout } from "@/components/Layout";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

const Index = () => (
  <Layout>
    <Hero />
    <Services />
    <Work />
    <Process />
{/* <Pricing /> */}
    <Testimonials />
    <FAQ />
    <CTA />
  </Layout>
);

export default Index;
