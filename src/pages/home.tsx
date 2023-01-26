import Image from "next/image";
import React from "react";
import { FiCompass } from "react-icons/fi";
import { MdPeople } from "react-icons/md";
import { RxVideo } from "react-icons/rx";
import { BsBriefcaseFill } from "react-icons/bs";
import Link from "next/link";

const links = [
  {
    id: "1",
    name: "Discover",
    Icon: FiCompass,
  },
  {
    id: "2",
    name: "People",
    Icon: MdPeople,
  },
  {
    id: "3",
    name: "Learning",
    Icon: RxVideo,
  },
  {
    id: "4",
    name: "Jobs",
    Icon: BsBriefcaseFill,
  },
];

const home = () => {
  return (
    <section className="container mx-auto">
      <nav className="flex items-center justify-between pt-4">
        <Link href="/">
          <div className="logo">
            <Image
              src="/linkedin-logo.png"
              alt="linkedin"
              width="135"
              height="34"
            />
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {links.map((link) => {
              const { id, name, Icon } = link;
              return (
                <li
                  className="cursor-pointer flex flex-col gap-1 items-center text-nav-light-gray hover:text-pale-black transition"
                  key={id}
                >
                  <Icon className="text-2xl w-6 h-6" />
                  <span>{name}</span>
                </li>
              );
            })}
          </ul>

          <span className="w-[2px] h-[52px] bg-light-gray"></span>

          <div className="cta-container flex items-center gap-2">
            <button className="text-light-gray text-xl p-4 py-2 flex items-center justify-center hover:bg-light-gray-bg hover:text-light-gray-hvr transition rounded-3xl">
              Join now
            </button>
            <button className="text-light-blue text-xl rounded-3xl border-light-blue border-[1px] p-4 py-2 flex items-center justify-center hover:bg-light-blue-bg hover:text-light-blue-hvr transition ">
              Sign in
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default home;
