"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    des: "Building modern, responsive websites and web applications.",
    href: "",
  },
  {
    num: "01",
    title: "Web Development",
    des: "Building modern, responsive websites and web applications.",
    href: "",
  },
  {
    num: "01",
    title: "Web Development",
    des: "Building modern, responsive websites and web applications.",
    href: "",
  },
  {
    num: "01",
    title: "Web Development",
    des: "Building modern, responsive websites and web applications.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.8, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col justify-between gap-6 p-8 rounded-xl shadow-lg group transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))", // Subtle gradient
                }}
              >
                {/* Top Section */}
                <div className="flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-transparent group-hover:text-white transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>

                {/* Title */}
                <h2 className="text-[36px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-white/80 transition-opacity duration-500 group-hover:text-white/90">
                  {service.des}
                </p>

                {/* Border */}
                <div className="border-b border-white/20 w-full"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
