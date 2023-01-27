import Image from "next/image";
import React, { useState } from "react";
import { FiCompass } from "react-icons/fi";
import { MdPeople } from "react-icons/md";
import { RxVideo } from "react-icons/rx";
import { BsBriefcaseFill } from "react-icons/bs";
import Link from "next/link";
import useSWR from "swr";
import SignIn from "@/components/SignIn";

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

const Home = () => {
  return (
    <section className="container mx-auto px-4">
      <nav className="flex items-center justify-between pt-4 flex-wrap">
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
        <div className="flex items-center gap-6 ">
          <ul className="lg:flex items-center gap-6 hidden">
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

          <span className="w-[2px] h-[52px] bg-light-gray hidden lg:inline-block"></span>

          <div className="cta-container flex items-center gap-2">
            <button className="text-light-gray text-xl w-[115px] h-[48px] flex items-center justify-center hover:bg-light-gray-bg hover:text-light-gray-hvr transition rounded-3xl">
              Join now
            </button>
            <button className="text-light-blue text-xl w-[115px] rounded-3xl border-light-blue border-[1px] h-[48px] flex items-center justify-center hover:bg-light-blue-bg hover:text-light-blue-hvr transition ">
              Sign in
            </button>
          </div>
        </div>
      </nav>
      <main>
        <section className="grid md:grid-cols-2 items-start gap-4 content-center py-10 min-h-[calc(100vh_-_68px)]">
          <div className="flex flex-col items-stretch gap-4">
            <h2 className="md:text-6xl text-3xl text-pale-brown font-normal">
              Welcome to your professional community
            </h2>
            <SignIn />
          </div>
          <div className="md:flex items-center justify-center hidden ">
            <Image src="/herosvg.svg" alt="hero" width="600" height="400" />
          </div>
        </section>
      </main>
    </section>
  );
};

export default Home;
