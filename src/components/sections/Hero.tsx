import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { config } from "../../constants/config";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#b85400]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#b85400]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]} <br className="hidden sm:block" />
            <br className="hidden sm:block" /><br className="hidden sm:block" /><br className="hidden sm:block" /><br className="hidden sm:block" /><br className="hidden sm:block" />
            <Link to="https://github.com/sudhanshusr007" key="github-link">
            <span className="bg-#d19058-500 text-[#b85400] px-4 py-2 rounded-full inline-block hover:bg-[#b85400]-600 transition-colors">{config.hero.p[2]}</span></Link>
            <Link to="https://www.linkedin.com/in/sudhanshusr007/" key="linkedin-link">
            <span className="bg-#d19058-500 text-[#b85400] px-4 py-2 rounded-full inline-block hover:bg-[#b85400]-600 transition-colors">{config.hero.p[3]}
            </span>
            </Link>
            
        <a
          href="https://drive.google.com/file/d/1ZwuWbNIK91VHYyAJhcqUkP6Jy9p2uVs3/view?usp=sharing"
          className="bg-#d19058-500 text-[#b85400] px-4 py-2 rounded-full inline-block hover:bg-[#b85400]-600 transition-colors"
          
        >
          Resume
        </a>
      
          </p>
        </div>
      </div>

     

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
