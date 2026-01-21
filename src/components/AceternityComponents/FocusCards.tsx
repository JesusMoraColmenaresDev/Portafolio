import React, { useState } from "react";
import { cn } from "../../lib/utils";
import type { ItemIconProps } from "../../types/ItemIconType";
import ItemIcon from "../ItemIcon";

const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: ItemIconProps;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(  
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <ItemIcon icon={card.icon} />
        <div
          className={cn(
            "mt-2 text-base font-medium bg-clip-text text-body transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          {card.text}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: ItemIconProps[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap gap-6 justify-center w-115 max-[1400px]:w-75">
      {cards.map((card, index) => (
        <Card
          key={card.text || index}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}