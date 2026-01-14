import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ItemIcon from "../ItemIcon";

type ItemIconProps = {
    icon: React.ReactNode;
    text?: string;
    link?: string;
    className?: string;
};

export const HoverEffect = ({
    items,
    className,
}: {
    items: ItemIconProps[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "flex flex-col md:flex-row gap-4 justify-center items-center",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={item.link || idx}
                    className="relative group block p-2 h-full w-fit"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-slate-800/80 block rounded-3xl z-10"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.50 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.50 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    {/* Aquí renderiza el contenido visual */}
                    <ItemIcon {...item} className="relative z-50 bg-main" />
                </div>
            ))}
        </div>
    );
};