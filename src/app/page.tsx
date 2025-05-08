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
            Turning <span className="text-red">‘MEH’</span> into{" "}
            <span className="text-green">‘WOW’</span> one pixel at a time
          </p>
        </div>
        <Image
          priority
          src="/header_mobile.png"
          alt=""
          width={390}
          height={400}
          className="absolute bottom-0"
        />
      </header>
      <div className="bg-black-100">
        <BrandMarquee />
      </div>
      <main className="bg-black-100 px-8 pb-44">
        <section className="pt-20 pb-36">
          <h2 className="bg-purple mb-16 rounded-[56px] px-14 py-5 text-center text-4xl font-bold text-white">
            About me
          </h2>
          <Image
            src="/profile-pic.png"
            alt="imagem de perfil"
            width={241}
            height={241}
            className="mx-auto mb-8"
          />
          <p className="text-2xl font-bold text-white">
            I&apos;m a <span className="text-purple">Product Designer</span>{" "}
            based in Brazil who levels up bad experiences from{" "}
            <span className="text-red">“404: Fun Not Found”</span> to{" "}
            <span className="text-green">
              “SUGOI! This is next-level awesome!”.
            </span>
          </p>
          <p className="mt-8 text-2xl font-bold text-white">
            I&apos;m here to turn frustrating interfaces into smooth, satisfying
            experiences — because every user deserves an{" "}
            <span className="text-yellow">S-tier journey.</span>
          </p>
        </section>
        <section className="py-12">
          <h3 className="mb-8 text-2xl font-bold text-white">
            FEW OF MY <span className="text-yellow">DESIGN SKILLS</span>
          </h3>
          {skills.map((skill, index) => (
            <Skills key={index} skills={skill} />
          ))}
          <h3 className="mt-8 text-right text-2xl font-bold text-white">
            <span className="text-yellow">SIX YEARS</span> OF EXPERIENCE
          </h3>
        </section>
        <section className="pb-20">
          <h2 className="bg-purple mb-16 rounded-[56px] px-14 py-5 text-center text-4xl font-bold text-white">
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
        <p className="pb-8 text-center text-4xl font-bold text-white">
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
          <div className="absolute bottom-10 left-1/2 z-10 grid -translate-x-1/2 grid-cols-1 items-center justify-center gap-4 text-2xl text-white md:bottom-20 md:grid-cols-3">
            <a href="#" className="flex items-center gap-3">
              Gmail <DiagonalArrow />
            </a>
            <a href="#" className="flex items-center gap-3">
              Linkedin <DiagonalArrow />
            </a>
            <a href="#" className="flex items-center gap-3">
              Behance <DiagonalArrow />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
