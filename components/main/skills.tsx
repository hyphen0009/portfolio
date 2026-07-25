import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  DATA_SCIENCE_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-12 md:py-16 lg:py-20 px-4 sm:px-6"
    >
      <SkillText />

      <div className="flex flex-row justify-center flex-wrap mt-3 md:mt-4 gap-4 sm:gap-5 md:gap-7 items-center w-full max-w-5xl">
        {SKILL_DATA.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center flex-wrap mt-3 md:mt-4 gap-4 sm:gap-5 md:gap-7 items-center w-full max-w-5xl">
        {FRONTEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center flex-wrap mt-3 md:mt-4 gap-4 sm:gap-5 md:gap-7 items-center w-full max-w-5xl">
        {BACKEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center flex-wrap mt-3 md:mt-4 gap-4 sm:gap-5 md:gap-7 items-center w-full max-w-5xl">
        {FULLSTACK_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center flex-wrap mt-3 md:mt-4 gap-4 sm:gap-5 md:gap-7 items-center w-full max-w-5xl">
        {OTHER_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center flex-wrap mt-3 md:mt-4 gap-4 sm:gap-5 md:gap-7 items-center w-full max-w-5xl">
        {DATA_SCIENCE_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      <div className="hidden sm:block w-full h-full absolute inset-0">
        <div className="w-full h-full z-[-10] opacity-30 absolute inset-0 flex items-center justify-center overflow-hidden">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
