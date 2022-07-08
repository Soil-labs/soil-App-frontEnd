import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, PhoneIcon, PlayIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function WhatIsSoil() {
  return (
    <Link href="#">
      <div className="ml-auto mr-4 border border-gray-200 bg-soilGreen-70 bg-opacity-10 hover:bg-opacity-20 rounded-full pl-4 pr-6 h-8 inline-flex items-center justify-center cursor-pointer">
        <span>🌱 What is Soil?</span>
      </div>
    </Link>
  );
}
