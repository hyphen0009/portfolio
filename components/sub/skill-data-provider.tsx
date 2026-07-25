"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <div
        className="relative h-[42px] w-[42px] sm:h-[54px] sm:w-[54px] md:h-[var(--skill-height)] md:w-[var(--skill-width)]"
        style={
          {
            "--skill-width": `${width}px`,
            "--skill-height": `${height}px`,
          } as React.CSSProperties
        }
      >
        <Image
          src={src.startsWith("http") ? src : `/skills/${src}`}
          width={width}
          height={height}
          alt={name}
          className="h-full w-full object-contain"
        />
      </div>
    </motion.div>
  );
};
