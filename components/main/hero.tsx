import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-[500px] md:min-h-[680px] lg:min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="rotate-180 absolute top-[-200px] sm:top-[-300px] md:top-[-320px] lg:top-[-340px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
