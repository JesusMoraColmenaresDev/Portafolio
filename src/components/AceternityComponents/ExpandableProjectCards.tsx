import { useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "../../types/ProjectType";
import ItemIcon from "../ItemIcon";
import { FaGithub } from "react-icons/fa";
import { Carousel } from "./Carousel";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Dialog from '@mui/material/Dialog';

export function ExpandableProjectCards({ projects }: { projects: Project[] }) {
    const [active, setActive] = useState<Project | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    return (
        <>
        {/*
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 w-full z-80 bg-main backdrop-blur-lg "
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active ? (
                    <motion.div className="fixed my-8 h-full  inset-0 grid place-items-center z-100 ">
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-[80%] h-full p-8 md:h-fit md:max-h-[90%] overflow-auto max-md:bg-brand  md:bg-card rounded-3xl hide-scrollbar "
                        >
                            <div className=" w-full flex flex-col justify-center items-center gap-2">
                                <div className="w-full flex justify-end">
                                    <button
                                        onClick={() => setActive(null)}
                                    >
                                        <IoIosCloseCircleOutline className="text-3xl text-[#BE123C]" />
                                    </button>
                                </div>

                                <div className="flex flex-col gap-8 h-full w-full items-center text-xl px-4 ">
                                    <motion.h3 layoutId={`title-${active.title}-${id}`} className="font-bold underline underline-offset-4 text-title max-md:text-2xl text-5xl text-center ">
                                        {active.title}
                                    </motion.h3>
                                    <motion.p layoutId={`description-${active.description}-${id}`} className="text-body max-md:text-[18px] max-w-[80%] text-center">
                                        {active.description}
                                    </motion.p>
                                    {active.features && (
                                        <div className="max-w-[80%]">
                                            <ul className="list-disc w-full text-body max-md:text-[18px] font-bold space-y-2">
                                                {active.features.map((feature, idx) => (
                                                    <li key={idx}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
                                        {active.technologies.map((tech, idx) => (
                                            <ItemIcon key={tech.text || idx} {...tech} />
                                        ))}
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        {active.repo && (
                                            <ItemIcon icon={<FaGithub />} text="Repositorio" className="bg-main/50 hover:bg-main/30 cursor-pointer" />
                                        )}
                                    </div>

                                    <motion.div layoutId={`image-${active.title}-${id}`} className="w-full flex flex-col items-center gap-4">
                                        <motion.p className="text-2xl text-title text-center mt-2 underline underline-offset-4">Imagenes del proyecto</motion.p>
                                        {active.images && active.images.length > 0 && (
                                            <Carousel images={active.images} />
                                        )}
                                    </motion.div>
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>*/}

            <Dialog open={!!active} onClose={() => setActive(null)} maxWidth="lg" fullWidth   sx={{ '& .MuiPaper-root': { borderRadius: '2rem',  background: 'var(--color-card)'}  }}
>
                {active && (
                    <div
                        ref={ref}
                        className="w-full h-full p-4 md:h-fit md:max-h-[90%] overflow-auto md:bg-card  hide-scrollbar mx-auto"
                    >
                        <div className="w-full flex flex-col justify-center items-center gap-2">
                            <div className="w-full flex justify-end">
                                <button onClick={() => setActive(null)}>
                                    <IoIosCloseCircleOutline className="text-3xl text-[#BE123C] cursor-pointer" />
                                </button>
                            </div>
                            <div className="flex flex-col gap-8 h-full w-full items-center text-xl px-4 ">
                                <h3 className="font-bold underline underline-offset-4 text-title max-md:text-2xl text-5xl text-center ">
                                    {active.title}
                                </h3>
                                <p className="text-body max-md:text-[18px] max-w-[80%] text-center">
                                    {active.description}
                                </p>
                                {active.features && (
                                    <div className="max-w-[80%]">
                                        <ul className="list-disc w-full text-body max-md:text-[18px] font-bold space-y-2">
                                            {active.features.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
                                    {active.technologies.map((tech, idx) => (
                                        <ItemIcon key={tech.text || idx} {...tech} />
                                    ))}
                                </div>
                                <div className="flex gap-4 mt-4">
                                    {active.repo && (
                                        <ItemIcon icon={<FaGithub />} text="Repositorio" className="bg-main/50 hover:bg-main/30 cursor-pointer" link={active.repo}/>
                                    )}
                                </div>
                                <div className="w-full flex flex-col items-center gap-4">
                                    <p className="text-2xl text-title text-center mt-2 underline underline-offset-4">Imagenes del proyecto</p>
                                    {active.images && active.images.length > 0 && (
                                        <Carousel images={active.images} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Dialog>
            <div className="flex flex-col w-fit gap-8">
                {projects.map((project) => (
                    <motion.div
                        layoutId={`card-${project.title}-${id}`}
                        key={`card-${project.title}-${id}`}
                        onClick={() => setActive(project)}
                        className="p-4 w-115 max-[1400px]:w-75 flex justify-center items-center hover:bg-card rounded-xl cursor-pointer border border-line"
                    >
                        <div className="flex gap-4 flex-col items-center justify-between">
                            <motion.h3 layoutId={`title-${project.title}-${id}`} className="font-medium text-neutral-800 dark:text-neutral-200 text-center">
                                {project.title}
                            </motion.h3>
                            <div className="flex max-[1400px]:flex-col items-center gap-2 mt-2 justify-center ">
                                {project.technologies.map((tech, idx) => (
                                    <ItemIcon key={tech.text || idx} {...tech} />
                                ))}
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>
        
        </>
    );
}