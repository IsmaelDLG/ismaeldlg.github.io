import { useEffect, useState, useMemo } from "react";
import { timeline } from "../../consts";
import TimelineItem from "../TimelineItem";

export default function Timeline({}) {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".timeline-item")) {
        setOpen(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOnClick = (id) => {
    setOpen(id === open ? null : id);
  };

  const timelineData = useMemo(() => {
    const sortedTimeline = [...timeline].sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

    const minTs = new Date(sortedTimeline[0]?.startDate).getTime();
    const maxTs = new Date().getTime();

    return sortedTimeline.map((item) => {
      const itemStartTs = new Date(item.startDate).getTime();
      const itemEndTs = item.endDate ? new Date(item.endDate).getTime() : maxTs;

      const skip = itemStartTs - minTs;
      const skipPerc = (skip / (maxTs - minTs)) * 100;

      const duration = itemEndTs - itemStartTs;
      const durationPerc = (duration / (maxTs - minTs)) * 100;

      return {
        ...item,
        skipPerc,
        durationPerc,
      };
    })

  }, [timeline]);

  return (
    <div className="relative border-l border-neutral-300 dark:border-neutral-700 mt-6">
      {timelineData
        .map((item, index) => (
          <TimelineItem
            key={index}
            itemIndex={index}
            item={item}
            open={open}
            handleOnClick={handleOnClick}
          />
        ))}
    </div>
  );
}
