import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Contact } from "@/components/sections/Contact";
import { getPosts } from "@/lib/posts";

export default async function HomePage() {
  const posts = (await getPosts()).slice(0, 3);
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <BlogPreview posts={posts} />
      <Contact />
    </>
  );
}
