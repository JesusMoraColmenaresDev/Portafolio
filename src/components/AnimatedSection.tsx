import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  useInViewLogic?: boolean; // Si true, usa la lógica de inView
  amount?: number; // Porcentaje de visibilidad para activar la animación
  duration?: number; // Duración de la animación
}

const AnimatedSection = ({
  children,
  delay = 0,
  className = "",
  useInViewLogic = false,
  amount = 0.5,
  duration = 0.8,
}: AnimatedSectionProps) => {
  const localRef = useRef(null);
  const isInView = useInView(localRef, { amount });

  return (
    <motion.div
      ref={useInViewLogic ? localRef : undefined}
      initial={{ opacity: 0}}
      animate={
        useInViewLogic
          ? isInView
            ? { opacity: 1}
            : { opacity: 0 }
          : { opacity: 1}
      }
      whileInView={useInViewLogic ? undefined : { opacity: 1}}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;