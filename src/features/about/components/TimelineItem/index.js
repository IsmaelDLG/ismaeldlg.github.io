import { Typography } from "@material-tailwind/react";
import { useMemo } from "react";
import Tag from "../Tag";

export default function TimelineItem({ className,itemIndex, item, open, handleOnClick }) {
  const isOpen = useMemo(() => open === itemIndex, [open, itemIndex]);

  return (
    <div className={`${className} relative timeline-item pl-8 pt-4 hover:opacity-90 duration-300`}>
      {/* Punto x
      <span className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-gray-200" />
      */}
      {/* Cabecera */}
      <button
        onClick={() => handleOnClick(itemIndex)}
        className="w-full text-left border-b border-discord-200"
      >
        <Typography variant="lead" className="text-discord-900">
          {item.title} · {item.place}
        </Typography>
        <Typography variant="small" className="text-discord-800">
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
          <Typography variant="paragraph" className="py-2 text-discord-900">
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

