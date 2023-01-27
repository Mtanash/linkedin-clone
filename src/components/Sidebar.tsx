import { useAppSelector } from "@/store/hooks";
import Avatar from "./Avatar";
import { selectCurrentUser } from "@/features/auth/authSlice";
import User from "@/types/user.type";
import Link from "next/link";
import { BsFillBookmarkFill } from "react-icons/bs";

const Sidebar = () => {
  const currentUser = useAppSelector(selectCurrentUser);

  return (
    <aside className="flex-[0.2] bg-white rounded-lg overflow-hidden">
      <div className=" flex flex-col items-center pt-8">
        <Avatar
          avatarUrl={currentUser?.avatar}
          name={currentUser?.firstName}
          size={90}
        />

        <p className="font-bold text-main-fnt-clr text-xl py-3">
          {currentUser?.firstName} {currentUser?.lastName}
        </p>

        <span className="my-2 w-full h-[1px] bg-gray-100" />

        <Link
          href="/Feed"
          className="text-xs text-nav-light-gray font-bold text-start w-full cursor-pointer hover:bg-sidebar-bg-hvr transition-colors"
        >
          <p className="p-1 px-2">Who&apos;s viewed your profile</p>
        </Link>
        <Link
          href="/Feed"
          className="text-xs text-nav-light-gray font-bold text-start w-full cursor-pointer hover:bg-sidebar-bg-hvr transition-colors"
        >
          <p className="p-1 px-2">Impressions of your post</p>
        </Link>

        <span className="my-2 w-full h-[1px] bg-gray-100" />

        <Link
          href="/Feed"
          className="flex items-center gap-2 text-xs text-nav-light-gray font-bold text-start w-full cursor-pointer hover:bg-sidebar-bg-hvr transition-colors my-4 p-2"
        >
          <BsFillBookmarkFill />
          <p>My items</p>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
