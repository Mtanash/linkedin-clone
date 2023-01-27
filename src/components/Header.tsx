import Image from "next/image";
import Link from "next/link";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { MdPeople } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { selectCurrentUser } from "@/features/auth/authSlice";
import Avatar from "./Avatar";

const links = [
  {
    id: "1",
    name: "Home",
    Icon: AiFillHome,
  },
  {
    id: "2",
    name: "My Network",
    Icon: MdPeople,
  },
  {
    id: "3",
    name: "Jobs",
    Icon: BsBriefcaseFill,
  },
  {
    id: "4",
    name: "Messaging",
    Icon: TiMessages,
  },
  {
    id: "5",
    name: "Notifications",
    Icon: IoNotificationsSharp,
  },
];

const isActiveTab = (activeTab: string, currentTab: string) => {
  return activeTab === currentTab;
};

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const currentUser = useAppSelector(selectCurrentUser);

  const handleLinkClick = (name: string) => {
    setActiveTab(name);
  };

  return (
    <header className="bg-white shadow-md border-gray-100 ">
      <div className="container mx-auto flex gap-4 justify-between items-center">
        <Link href="/Feed" className="logo w-fit">
          <Image
            alt="linkedin"
            src="/linkedin-logo-sm.png"
            width="40"
            height="40"
          />
        </Link>

        <div className="flex bg-search-bg items-center rounded-md h-11 ">
          <label htmlFor="search">
            <BiSearchAlt2 className="text-2xl mx-3 text-nav-light-gray" />
          </label>
          <div className="bg-search-bg">
            <input
              id="search"
              type="search"
              className="bg-search-bg h-full w-full p-2 outline-none"
            />
          </div>
        </div>

        <nav>
          <ul className="flex items-stretch gap-1 pt-2">
            {links.map((link) => {
              const { Icon, id, name } = link;
              return (
                <li
                  key={id}
                  className={`flex flex-col items-center  text-nav-light-gray hover:text-pale-black cursor-pointer border-b-2 transition-colors w-[90px] text-sm  ${
                    isActiveTab(activeTab, name)
                      ? "border-pale-black"
                      : "border-transparent"
                  }`}
                  onClick={() => handleLinkClick(name)}
                >
                  <Icon className="text-xl w-[25px] h-[25px]" />
                  {name}
                </li>
              );
            })}

            <button className="text-sm w-[60px] flex flex-col items-center text-nav-light-gray hover:text-pale-black">
              <Avatar
                name={currentUser?.firstName}
                avatarUrl={currentUser?.avatar}
              />
              <span className="flex items-center ">
                Me <IoMdArrowDropdown />
              </span>
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
