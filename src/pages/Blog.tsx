import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { JOURNAL } from "@/constants/site";

const Blog = () => (
  <Layout>
    <section className="relative px-6 md:px-10 pt-36 pb-16">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <nav className="h-eyebrow text-mute mb-10 flex items-center gap-3">
            <Link to="/" className="u-link">Agiton</Link><span>/</span>
            <span>Blog</span>
          </nav>
        </Reveal>
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-3"><div className="h-eyebrow text-mute mb-3">§ 07 · Journal</div></div>
          <div className="md:col-span-9 flex items-end justify-between">
            <Reveal><h2 className="h-section font-display">From the <span className="italic-display text-signal">studio.</span></h2></Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {JOURNAL.map((a, i) => (
            <Reveal key={a.t} delay={i * 0.08}>
              <div className="group block cursor-pointer" data-cursor="view">
                <div className="relative overflow-hidden rounded-lg plate aspect-[5/4]">
                  <div className="proj-img absolute inset-0" style={{ background: a.g }} />
                  <div className="absolute left-5 top-5">
                    <span className={`pill ${a.invert ? "text-ink" : "text-white/80"}`}>{a.d} · {a.r}</span>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="font-display text-2xl md:text-3xl leading-tight group-hover:text-signal transition-colors">{a.t}</div>
                  <p className="mt-2 text-sm text-mute-2">{a.x}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;