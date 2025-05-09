const Skills = ({ skills }: { skills: { skill: string; icon: string } }) => {
  return (
    <div className="mx-auto mb-8 grid max-w-[296px] grid-cols-8 items-center justify-between rounded-[100px] border-2 border-white px-3 py-7 md:max-w-[640px] md:grid-cols-8 lg:mb-0">
      <p className="col-span-7 max-w-2xs text-center text-4xl font-bold text-white md:col-span-3 md:col-start-2 md:text-5xl md:whitespace-nowrap">
        {skills.skill} <span className="hidden md:inline">{skills.icon}</span>
      </p>
      <span className="text-4xl md:hidden">{skills.icon}</span>
    </div>
  );
};

export default Skills;
