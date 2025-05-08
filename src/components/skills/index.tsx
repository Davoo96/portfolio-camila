const Skills = ({ skills }: { skills: { skill: string; icon: string } }) => {
  return (
    <div className="mb-8 grid grid-cols-8 items-center justify-between rounded-[100px] border-2 border-white px-3 py-7">
      <p className="col-span-7 max-w-2xs text-4xl font-bold text-white">
        {skills.skill}
      </p>
      <span className="text-4xl">{skills.icon}</span>
    </div>
  );
};

export default Skills;
