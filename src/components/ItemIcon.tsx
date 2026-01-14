type ItemIconProps = {
    icon: React.ReactNode;
    text?: string;
    link?: string;
    className?: string;
}


function ItemIcon({ icon, text, link, className } : ItemIconProps) {
const content = (
    <span className={`flex items-center gap-2 rounded-2xl border-2 border-line w-fit p-2 text-body  ${className || ""}`}>
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