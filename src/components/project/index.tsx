import Image from "next/image";

const Project = ({
  projectTitle,
  projectImg,
}: {
  projectTitle: string;
  projectImg: string;
}) => {
  return (
    <div className="relative mx-auto my-0 mb-6 h-[456px] w-full max-w-[390px] md:h-[698px] md:max-w-[809px]">
      <p className="text-black-100 absolute inset-0 z-10 flex cursor-pointer items-center justify-center text-center text-4xl font-bold">
        {projectTitle}
      </p>
      <Image src={projectImg} fill alt="project" />
    </div>
  );
};

export default Project;
