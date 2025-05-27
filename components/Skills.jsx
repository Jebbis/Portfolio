import { RiReactjsFill, RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { GiCamel } from "react-icons/gi";
import { VscAzure } from "react-icons/vsc";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

const skills = [
  {
    icon: <RiReactjsFill />,
    name: "React.js",
  },
  {
    icon: (
      <Image
        src="/assets/icons/powerautomate.svg"
        width={32}
        height={32}
        unoptimized={true}
        alt="powerautomate"
      />
    ),
    name: "Power automate",
  },
  {
    icon: <RiNextjsFill />,
    name: "Next.js",
  },
  {
    icon: <VscAzure />,
    name: "Azure",
  },
  {
    icon: <GiCamel />,
    name: "Apache Camel",
  },
];

const Skills = () => {
  return (
    <div>
      <h2 className="h2 mb-8">
        My <span className="text-accent">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-6 max-w-sm xl:max-w-none">
        {skills.map((item, index) => {
          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger className="w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/70 group">
                  <div className="text-3xl group-hover:text-accent transition-all duration-300">
                    {item.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-lg">{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
