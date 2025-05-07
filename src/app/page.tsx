import BrandMarquee from "@/components/brand-marquee";
import Skills from "@/components/skills";
import { skills } from "@/components/skills/definitions";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-24">
      <header className="relative h-[494px] bg-white pt-9">
        <h1 className="font-sora-sans text-black-100 relative z-10 mb-2 text-center text-6xl font-bold uppercase">
          Hi, I&apos;m Camila
        </h1>
        <p className="font-sora-sans text-black-100 relative z-10 text-center text-2xl font-bold">
          Turning <span className="text-red">‘MEH’</span> into{" "}
          <span className="text-green">‘WOW’</span> one pixel at a time
        </p>
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
      <main className="bg-black-100 px-8">
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
        <section className="pt-12">
          <h3 className="mb-8 text-2xl font-bold text-white">
            FEW OF MY <span className="text-yellow">DESIGN SKILLS</span>
          </h3>
          {skills.map((skill, index) => (
            <Skills key={index} skills={skill} />
          ))}
        </section>
      </main>
    </div>
  );
}
