import { Typography } from "@material-tailwind/react";
import { useMemo } from "react";
import Tag from "../Tag";

export default function TimelineItem({ className,itemIndex, item, open, handleOnClick }) {
  const isOpen = useMemo(() => open === itemIndex, [open, itemIndex]);

  return (
    <div className={`${className} relative timeline-item pl-8 pt-4 hover:opacity-70 duration-300`}>
      {/* Punto x
      <span className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-gray-200" />
      */}
      {/* Cabecera */}
      <button
        onClick={() => handleOnClick(itemIndex)}
        className="w-full text-left border-b"
      >
        <Typography variant="lead" color="black">
          {item.title} · {item.place}
        </Typography>
        <Typography variant="small" color="black">
          {item.startDate} - {item.endDate || "Present"}
        </Typography>
      </button>

      {/* Contenido expandible flotante */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out lg:gap-2
          ${isOpen
            ? "grid-rows-[1fr] max-h-full opacity-100"
            : "grid-rows-[0fr] max-h-0 opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <Typography variant="paragraph" color="black" className="py-2">
            {item.description}
          </Typography>

          {item.stack && item.stack.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

