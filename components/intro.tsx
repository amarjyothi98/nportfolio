"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa";

export default function Intro () {
    return (
        <section>
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            type: "tween", 
                            duration: 0.2
                        }}
                    >
                        <Image 
                            src={"https://source.unsplash.com/3tYZjGSBwbk"} 
                            alt="profile image" 
                            width='192' 
                            height='192' 
                            quality={"95"} 
                            priority={true}
                            className="h-24 w-24 rounded-full
                            object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>
                    <motion.span 
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}    
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 125, 
                            delay: 0.1, 
                            duration: 0.7
                        }}
                    >🥹</motion.span>
                </div>
            </div>

            <motion.p
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
            >
               {" Hello I'm Amar."}
            </motion.p>

            <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    delay: 0.1
                }}
            >
                <Link href="#contact" className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-95 transition">
                    Contact me here <BsArrowRight/>
                </Link>

                <a className="bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full" href="">Download CV <HiDownload/> </a>
                <a href="" className="bg-white text-gray-700 px-4 flex items-center gap-2 rounded-full">
                    <BsLinkedin/>
                </a>
                <a href="" className="bg-white text-gray-700 px-4 flex items-center gap-2 rounded-full">
                    <FaGithubSquare/>
                </a>
            </motion.div>

            <p>this is for github mac setup hehe take again.</p>
        </section>
    )
}