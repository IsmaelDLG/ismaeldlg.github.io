import { Typography, Button } from "@material-tailwind/react";
import { useMemo } from "react";

export default function TimelineItem({ className,itemIndex, item, open, handleOnClick }) {
  const isOpen = useMemo(() => open === itemIndex, [open, itemIndex]);

  return (
    <div className={`${className} relative pl-8 timeline-item`}>
      {/* Punto */}
      <span className="absolute left-[-7px] top-2 h-3 w-3 rounded-full bg-neutral-800 dark:bg-gray-200" />

      {/* Cabecera */}
      <button
        onClick={() => handleOnClick(itemIndex)}
        className="w-full text-left"
      >
        <Typography variant="lead">
          {item.title} · {item.place}
        </Typography>
        <Typography variant="small">
          {item.startDate} - {item.endDate || "Present"}
        </Typography>
      </button>

      {/* Contenido expandible flotante */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <Typography variant="paragraph" color="blue-gray" className="pt-2">
            {item.description}
          </Typography>
        </div>
      </div>
    </div>
  );
}
