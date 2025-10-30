import { IconButton } from "@material-tailwind/react";
import { useMemo } from "react";

function IconLink({ icon }) {
  const iconClassName = useMemo(() => {
    switch (icon) {
      case "github":
        return "fa-brands fa-github text-4xl";
      case "linkedin":
        return "fa-brands fa-linkedin text-4xl";
      case "email":
        return "fa-solid fa-envelope text-4xl";
      default:
        return "";
    }
  }, [icon]);

  const iconUrl = useMemo(() => {
    switch (icon) {
      case "github":
        return "https://github.com/IsmaelDLG";
      case "linkedin":
        return "https://www.linkedin.com/in/ismael-de-la-gracia-cobos/";
      case "email":
        return "mailto:ismadlg.works@gmail.com";
      default:
        return "";
    }
  }, [icon]);

  return (
    <a href={iconUrl} target="_blank" rel="noreferrer">
      <IconButton variant="text" size="lg">
        <i className={iconClassName} />
      </IconButton>
    </a>
  );
}
export default IconLink;
