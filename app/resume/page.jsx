"use client";

import { FaHtml5, FaCss3, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
// About data
const about = {
  title: "About me",
  Description:
   "lorem isajf kdfhh iweuu dshfaks kdsjfo0 ehfwf owuff hfasjf fsjf hdfh eiude dhfasdhf dkfs898 hdks dhfksd....",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hanzala",
    },
    {
      fieldName: "Phone",
      fieldValue: "1234567890",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Hanzala",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistani",
    },
    {
      fieldName: "Email",
      fieldValue: "Hanzala.connect@gmail.com",
    },

    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Pashto, Urdu",
    },
  ],
};

// Experience Data
const experience = {
  icons: "",
  title: "My experience",
  Description:
"lorem isajf kdfhh iweuu dshfaks kdsjfo0 ehfwf owuff hfasjf fsjf hdfh eiude dhfasdhf dkfs898 hdks dhfksd....",
  items: [
    {
      company: "Tech Sollutions Inc",
      postion: "Full Stack Developer",
      duration: "2025 - present",
    },
    {
      company: "Tech Sollutions Inc",
      postion: "Full Stack Developer",
      duration: "2025 - present",
    },
    {
      company: "Tech Sollutions Inc",
      postion: "Full Stack Developer",
      duration: "2025 - present",
    },
    {
      company: "Tech Sollutions Inc",
      postion: "Full Stack Developer",
      duration: "2025 - present",
    },
    {
      company: "Tech Sollutions Inc",
      postion: "Full Stack Developer",
      duration: "2025 - present",
    },
  ],
};

// Education
const education = {
  icons: "",
  title: "My education",
  Description:
    "lorem isajf kdfhh iweuu dshfaks kdsjfo0 ehfwf owuff hfasjf fsjf....",
  items: [
    {
      institution: "Online Course Plateform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codeacedemy",
      degree: "Front-end Track",
      duration: "2023",
    },
    {
      institution: "Online Course",
      degree: "Programind Course",
      duration: "2020 = 2021",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web developer",
      duration: "2019",
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design ",
      duration: "2016 - 2018",
    },
    {
      institution: "Communty College",
      degree: "Associate Degree in computer Science",
      duration: "2014 - 2016",
    },
  ],
};

// Skills
const skills = {
  title: "My skills",
  Description:
    "lorem isajf kdfhh iweuu dshfaks kdsjfo0 ehfwf owuff hfasjf fsjf hdfh eiude dhfasdhf dkfs898 hdks dhfksd....",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="max-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.Description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.postion}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* Dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.Description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* Dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.Description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover::text-accent transition-all duration-300">{skill.icon}</div>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </TooltipTrigger>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
            {/* About */}
            <TabsContent value="about" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.Description}
                </p>
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=>{
                    return(
                      <li key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                      
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default page;
