"use client";

import ContentCard from "@/components/content-card";

export function About() {
  return (
    <section className="py-8 px-8 lg:py-20 bg-gray-300" id="about">
      <div className="mx-auto container">
          <ContentCard key="about" title="About Me"
          alt="Kate Bragg - Creative Seamstress"
          des="Growing up in a creative family, 
               I was immersed in a world of artistic expression from an early age.
                This passion led me to pursue a degree in embroidery at Manchester Metropolitan University, where I proudly earned a first. Since then, I have been on a continuous journey of self-discovery and skill development in the art of sewing. As a devoted and skilled seamstress, I bring years of experience and a deep love for the craft to my sewing room. Each stitch tells a tale, and I'm excited to weave unique narratives through my bespoke services." img="/image/kate.jpg" />
      </div>
    </section>
  );
}

export default About;
