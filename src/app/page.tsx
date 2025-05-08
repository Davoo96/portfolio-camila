import BrandMarquee from "@/components/brand-marquee";
import DiagonalArrow from "@/components/icons/diagonal-arrow-icon";
import Project from "@/components/project";
import { projects } from "@/components/project/definitions";
import Skills from "@/components/skills";
import { skills } from "@/components/skills/definitions";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-24">
      <header className="relative h-[494px] bg-white pt-9">
        <div className="px-5">
          <h1 className="font-sora-sans text-black-100 relative z-10 mb-2 text-center text-6xl font-bold uppercase">
            Hi, I&apos;m Camila
          </h1>
          <p className="font-sora-sans text-black-100 relative z-10 text-center text-2xl font-bold">
            Turning <span className="text-red">&lsquo;MEH&rsquo;</span> into{" "}
            <span className="text-green">&lsquo;WOW&rsquo;</span> one pixel at a
            time
          </p>
        </div>
        <picture>
          <source media="(min-width: 810px)" srcSet="/header.png" />

          <source media="(min-width: 528px)" srcSet="/header_tablet.png" />

          <Image
            priority
            src="/header_mobile.png"
            alt=""
            fill
            className="absolute bottom-0"
          />
        </picture>
      </header>
      <div className="bg-black-100">
        <BrandMarquee />
      </div>
      <main className="bg-black-100 px-8 pb-44">
        <section className="pt-20 pb-36">
          <h2 className="bg-purple mb-16 rounded-[56px] px-14 py-5 text-center text-4xl font-bold text-white md:mb-32">
            About me
          </h2>
          <Image
            src="/profile-pic.png"
            alt="imagem de perfil"
            width={241}
            height={241}
            className="mx-auto mb-8 md:mb-16"
          />
          <p className="text-2xl text-white md:text-4xl">
            I&apos;m a{" "}
            <span className="text-purple font-bold">Product Designer</span>{" "}
            based in Brazil who levels up bad experiences from{" "}
            <span className="text-red font-bold">“404: Fun Not Found”</span> to{" "}
            <span className="text-green font-bold">
              “SUGOI! This is next-level awesome!”.
            </span>
          </p>
          <p className="mt-8 text-2xl text-white md:text-4xl">
            I&apos;m here to turn frustrating interfaces into smooth, satisfying
            experiences — because every user deserves an{" "}
            <span className="text-yellow font-bold">S-tier journey.</span>
          </p>
        </section>
        <section className="mx-auto max-w-[296px] py-12 md:max-w-[640px] md:py-64">
          <h3 className="mb-8 text-2xl font-bold text-white md:text-4xl">
            FEW OF MY <span className="text-yellow">DESIGN SKILLS</span>
          </h3>
          {skills.map((skill, index) => (
            <Skills key={index} skills={skill} />
          ))}
          <h3 className="mt-8 text-right text-2xl font-bold text-white md:text-4xl">
            <span className="text-yellow">SIX YEARS</span> OF EXPERIENCE
          </h3>
        </section>
        <section className="pb-20">
          <h2 className="bg-purple mx-auto my-0 mb-16 max-w-[269px] rounded-[56px] px-14 py-5 text-center text-4xl font-bold text-white md:max-w-[560px] md:text-5xl">
            Selected projects
          </h2>
          {projects.map((project, index) => (
            <Project
              key={index}
              projectTitle={project.title}
              projectImg={project.img}
            />
          ))}
        </section>
      </main>
      <footer className="bg-black-100">
        <p className="px-8 pb-8 text-center text-4xl font-bold text-white md:px-20 md:pb-20 md:text-6xl">
          Hey, I just met you, and this is crazy but this is my portfolio,{" "}
          <span className="text-yellow">so call me maybe</span>
        </p>
        <div className="relative mx-auto my-0 h-[452px] w-full max-w-[676px] md:h-[500px] md:max-w-[810px] lg:h-[600px] lg:max-w-[1400px]">
          <picture>
            <source media="(min-width: 810px)" srcSet="/footer.png" />

            <source media="(min-width: 676px)" srcSet="/footer_tablet.png" />

            <Image
              src="/footer_mobile.png"
              fill
              alt="footer"
              className="absolute"
            />
          </picture>
          <div className="absolute bottom-10 left-1/2 z-10 grid -translate-x-1/2 grid-cols-1 items-center justify-between gap-4 text-2xl text-white md:bottom-20 md:grid-cols-[98px_1fr_1fr] md:gap-0 md:gap-4">
            <a href="#" className="flex items-center justify-center">
              Gmail{" "}
              <span className="h-[30px] w-[30px]">
                <DiagonalArrow className="m-1.5" />
              </span>
            </a>
            <a href="#" className="flex items-center justify-center">
              Linkedin{" "}
              <span className="h-[30px] w-[30px]">
                <DiagonalArrow className="m-1.5" />
              </span>
            </a>
            <a href="#" className="flex items-center justify-center">
              Behance{" "}
              <span className="h-[30px] w-[30px]">
                <DiagonalArrow className="m-1.5" />
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
