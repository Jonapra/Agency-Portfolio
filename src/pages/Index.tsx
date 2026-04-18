import { Layout } from "@/components/Layout";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";

import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Journal } from "@/components/sections/Journal";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

const Index = () => (
  <Layout>
    <Hero />
    <Marquee />
    <Services />
    <Work />
    <Process />
    <Pricing />
    <Testimonials />
    <Journal />
    <FAQ />
    <CTA />
  </Layout>
);

export default Index;
