import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link
          href="/"
          target={"_blank"}
          className="text-[#fb8500] font-bold flex items-center"
        >
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#fb8500] mr-2 " />
          GO TO WEBSITE
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
