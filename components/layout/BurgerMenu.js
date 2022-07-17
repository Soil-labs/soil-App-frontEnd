import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";

const resources = [
  {
    name: "🚀 Launch a Project",
    description: "",
    href: "#",
  },
  {
    name: "🤝 Join a Project",
    description: "",
    href: "/projects",
  },
  {
    name: "👤 Edit Profile",
    description: "",
    href: "#",
  },
];

export default function BurgerMenu() {
  return (
    <Popover className="flex justify-end">
      <div className="max-w-7xl">
        <Popover.Button className="border border-gray-200 bg-white rounded-full w-8 h-8 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none drop-shadow-[0px_2px_7px_rgba(0,74,217,0.09)]">
          <span className="sr-only">Open menu</span>
          <MenuIcon className="h-5 w-5" aria-hidden="true" />
        </Popover.Button>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute w-52 top-16 right-0 transition transform origin-top-right drop-shadow-[0px_4px_30px_rgba(0,0,0,0.2)] z-30"
        >
          <div className="absolute w-4 h-4 right-7 -top-2 bg-white rotate-45"></div>
          <div className="rounded-lg bg-white">
            <div className="px-3 py-1 divide-y">
              {resources.map((item) => (
                <div className="px-3 py-2" key={item.name}>
                  <Link href={item.href}>
                    <a className="text-gray-900 hover:text-gray-600 cursor-pointer">
                      {item.name}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
