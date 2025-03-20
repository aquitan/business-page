import {
  Cog6ToothIcon,
  CommandLineIcon,
  InformationCircleIcon,
  MegaphoneIcon,
  Squares2X2Icon,
} from "@heroicons/react/16/solid";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="flex fixed justify-center gap-4 md:gap-2 p-2 bottom-0 h-[60px] w-full md:w-[80px] flex-row md:flex-col md:relative md:justify-between items-center md:h-full md:p-3 bg-background">
      <div className="hidden md:block">Logo</div>
      <div className="flex flex-row md:flex-col justify-center items-center gap-4 md:gap-2">
        <Link className="flex flex-col items-center" href="/">
          <Squares2X2Icon className="h-8 w-8" />
          <p>Main</p>
        </Link>
        <Link className="flex flex-col items-center" href="/works">
          <CommandLineIcon className="h-8 w-8" />
          <p>Works</p>
        </Link>

        <Link className="flex flex-col items-center" href="/about">
          <InformationCircleIcon className="h-8 w-8" />
          <p>About</p>
        </Link>
        <Link className="flex flex-col items-center" href="/contacts">
          <MegaphoneIcon className="h-8 w-8" />
          <p>Contacts</p>
        </Link>
      </div>
      <div className="flex flex-col gap-3 items-center justify-center">
        <Link className="flex flex-col items-center" href="/settings">
          <Cog6ToothIcon className="h-8 w-8" />
          <p>Settings</p>
        </Link>
      </div>
    </div>
  );
};

export { SideBar };
