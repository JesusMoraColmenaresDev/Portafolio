import type { ItemIconProps } from "../types/ItemIconType";

function ItemIcon({ icon, text, link, className } : ItemIconProps) {
const content = (
    <span className={`flex items-center gap-2 text-2xl rounded-2xl border-2 border-line w-fit p-2 text-body  ${className || ""}`}>
      {icon}
      {text && <span>{text}</span>}
    </span>
  );

  return link ? (
    <a href={link} target="_blank ">
      {content}
    </a>
  ) : (
    content
  );
}

export default ItemIcon