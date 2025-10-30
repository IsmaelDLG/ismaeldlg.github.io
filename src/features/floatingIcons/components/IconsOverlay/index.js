import { IconLink } from "../../../../components";

function IconsOverlay() {
    return (
        <div className="fixed bottom-4 left-4 flex flex-col gap-4 z-50 hidden md:block">
            <IconLink icon={"github"} />
            <IconLink icon={"linkedin"} />
            <IconLink icon={"email"} />
        </div>
    );
}
export default IconsOverlay;