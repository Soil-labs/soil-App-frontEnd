import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    FilterIcon,
    MailIcon,
    MinusIcon,
    PhoneIcon,
    PlusIcon,
    SearchIcon,
} from "@heroicons/react/solid";
import {
    CalendarIcon,
    CogIcon,
    HomeIcon,
    MapIcon,
    MenuIcon,
    SearchCircleIcon,
    SpeakerphoneIcon,
    UserGroupIcon,
    ViewGridAddIcon,
    MenuAlt1Icon,
    XIcon,
    PlusCircleIcon,
    ChevronDoubleRightIcon,
    ChartPieIcon,
    ChartBarIcon,
    LightningBoltIcon,
    MoonIcon,
    QrcodeIcon,
    ServerIcon,
    AcademicCapIcon,
    GlobeIcon,
    TrendingUpIcon,
} from "@heroicons/react/outline";

const directory = {
    A: [
        {
            id: 1,
            name: "Leslie Abbott",
            role: "Co-Founder / CEO",
            imageUrl:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 2,
            name: "Hector Adams",
            role: "VP, Marketing",
            imageUrl:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 3,
            name: "Blake Alexander",
            role: "Account Coordinator",
            imageUrl:
                "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 4,
            name: "Fabricio Andrews",
            role: "Senior Art Director",
            imageUrl:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    ],
    B: [
        {
            id: 5,
            name: "Angela Beaver",
            role: "Chief Strategy Officer",
            imageUrl:
                "https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 6,
            name: "Yvette Blanchard",
            role: "Studio Artist",
            imageUrl:
                "https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 7,
            name: "Lawrence Brooks",
            role: "Content Specialist",
            imageUrl:
                "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    ],
    C: [
        {
            id: 8,
            name: "Jeffrey Clark",
            role: "Senior Art Director",
            imageUrl:
                "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 9,
            name: "Kathryn Cooper",
            role: "Associate Creative Director",
            imageUrl:
                "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    ],
    E: [
        {
            id: 10,
            name: "Alicia Edwards",
            role: "Junior Copywriter",
            imageUrl:
                "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 11,
            name: "Benjamin Emerson",
            role: "Director, Print Operations",
            imageUrl:
                "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 12,
            name: "Jillian Erics",
            role: "Designer",
            imageUrl:
                "https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 13,
            name: "Chelsea Evans",
            role: "Human Resources Manager",
            imageUrl:
                "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    ],
    G: [
        {
            id: 14,
            name: "Michael Gillard",
            role: "Co-Founder / CTO",
            imageUrl:
                "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 15,
            name: "Dries Giuessepe",
            role: "Manager, Business Relations",
            imageUrl:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    ],
    M: [
        {
            id: 16,
            name: "Jenny Harrison",
            role: "Studio Artist",
            imageUrl:
                "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 17,
            name: "Lindsay Hatley",
            role: "Front-end Developer",
            imageUrl:
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 18,
            name: "Anna Hill",
            role: "Partner, Creative",
            imageUrl:
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    ],
    S: [
        {
            id: 19,
            name: "Courtney Samuels",
            role: "Designer",
            imageUrl:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 20,
            name: "Tom Simpson",
            role: "Director, Product Development",
            imageUrl:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    ],
    T: [
        {
            id: 21,
            name: "Floyd Thompson",
            role: "Principal Designer",
            imageUrl:
                "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 22,
            name: "Leonard Timmons",
            role: "Senior Designer",
            imageUrl:
                "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 23,
            name: "Whitney Trudeau",
            role: "Copywriter",
            imageUrl:
                "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    ],
    W: [
        {
            id: 24,
            name: "Kristin Watson",
            role: "VP, Human Resources",
            imageUrl:
                "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 25,
            name: "Emily Wilson",
            role: "VP, User Experience",
            imageUrl:
                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    ],
    Y: [
        {
            id: 26,
            name: "Emma Young",
            role: "Senior Front-end Developer",
            imageUrl:
                "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    ],
};

const shortList = {
    A: [
        {
            id: 1,
            name: "Leslie Abbott",
            role: "Co-Founder / CEO",
            imageUrl:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 2,
            name: "Hector Adams",
            role: "VP, Marketing",
            imageUrl:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 3,
            name: "Blake Alexander",
            role: "Account Coordinator",
            imageUrl:
                "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 4,
            name: "Fabricio Andrews",
            role: "Senior Art Director",
            imageUrl:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    ],
    B: [
        {
            id: 5,
            name: "Angela Beaver",
            role: "Chief Strategy Officer",
            imageUrl:
                "https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 6,
            name: "Yvette Blanchard",
            role: "Studio Artist",
            imageUrl:
                "https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 7,
            name: "Lawrence Brooks",
            role: "Content Specialist",
            imageUrl:
                "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    ],
};

const profile = {
    name: "Ricardo Cooper",
    imageUrl:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    coverImageUrl:
        "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    about: `
      <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
      <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
    `,
    fields: {
        Phone: "(555) 123-4567",
        Email: "ricardocooper@example.com",
        Title: "Senior Front-End Developer",
        Team: "Product Development",
        Location: "San Francisco",
        Sits: "Oasis, 4th floor",
        Salary: "$145,000",
        Birthday: "June 8, 1990",
    },
};

const tabs = [
    { name: "Profile", href: "#", current: true },
    { name: "Calendar", href: "#", current: false },
    { name: "Recognition", href: "#", current: false },
];

const team = [
    {
        name: "Leslie Alexander",
        handle: "lesliealexander",
        role: "Co-Founder / CEO",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Michael Foster",
        handle: "michaelfoster",
        role: "Co-Founder / CTO",
        imageUrl:
            "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Dries Vincent",
        handle: "driesvincent",
        role: "Manager, Business Relations",
        imageUrl:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        role: "Front-end Developer",
        imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function RoleInspection() {
    return (
        <>
            <div className="max-w-screen h-screen flex mx-auto">
                {/* Background color split screen for large screens */}
                <div className="relative h-full p-4 flex-1 flex-col">
                    {/* 3 column wrapper */}
                    <div className="flex-grow h-full w-full mx-auto border-gray-200 border-2 rounded-lg lg:flex">
                        {/* Left sidebar & main wrapper */}
                        <div className="flex-1 max-h-full min-w-0 bg-white xl:flex">
                            <div className="max-h-full border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-96 xl:border-r xl:border-gray-200 bg-white">
                                <div className="h-full">
                                    {/* Start left column area */}
                                    <aside className="hidden h-full xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
                                        <div className="px-6 pt-6 pb-4 border-b border-gray-200 flex-col">
                                            <div className="flex-col space-y-2 items-center justify-between">
                                                <h2 className="text-lg font-medium text-gray-900">
                                                    React Developers For Soil
                                                </h2>
                                            </div>
                                        </div>
                                        {/* Directory list */}
                                        <nav
                                            className="flex-1 h-32 overflow-y-auto"
                                            aria-label="Directory"
                                        >
                                            {Object.keys(directory).map(
                                                (letter) => (
                                                    <div
                                                        key={letter}
                                                        className="relative"
                                                    >
                                                        <ul
                                                            role="list"
                                                            className="relative z-0 border-t border-b border-gray-200 divide-y divide-gray-200"
                                                        >
                                                            {directory[
                                                                letter
                                                            ].map((person) => (
                                                                <li
                                                                    key={
                                                                        person.id
                                                                    }
                                                                >
                                                                    <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                                                                        <div className="flex-shrink-0">
                                                                            <img
                                                                                className="h-10 w-10 rounded-full"
                                                                                src={
                                                                                    person.imageUrl
                                                                                }
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="flex-1 min-w-0">
                                                                            <a
                                                                                href="#"
                                                                                className="focus:outline-none"
                                                                            >
                                                                                {/* Extend touch target to entire panel */}
                                                                                <span
                                                                                    className="absolute inset-0"
                                                                                    aria-hidden="true"
                                                                                />
                                                                                <p className="text-sm font-medium text-gray-900">
                                                                                    {
                                                                                        person.name
                                                                                    }
                                                                                </p>
                                                                                <p className="text-sm text-gray-500 truncate">
                                                                                    {`${person.name
                                                                                        .split(
                                                                                            " "
                                                                                        )[0]
                                                                                        .toLowerCase()}#${Math.floor(
                                                                                        Math.random() *
                                                                                            10000
                                                                                    )}`}
                                                                                </p>
                                                                            </a>
                                                                        </div>
                                                                        <div>
                                                                            <h2 className="text-gray-600">
                                                                                {Math.floor(
                                                                                    Math.random() *
                                                                                        100
                                                                                )}{" "}
                                                                                %
                                                                            </h2>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )
                                            )}
                                        </nav>
                                        <div className=" flex justify-between px-4 py-6 border-gray-200 border-t bg-white">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                            >
                                                <ChevronLeftIcon
                                                    className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                                <span>Previous Role</span>
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex justify-center px-4 py-2 border border-pink-300 shadow-sm text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                            >
                                                <span>Next Role</span>
                                                <ChevronRightIcon
                                                    className="-ml-1 ml-2 h-5 w-5 text-white"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </aside>
                                    {/* End left column area */}
                                </div>
                            </div>

                            <div className="bg-white lg:min-w-0 lg:flex-1">
                                <div className="h-full overflow-y-scroll">
                                    {/* Start main area*/}
                                    <div
                                        className="relative h-full"
                                        style={{ minHeight: "36rem" }}
                                    >
                                        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
                                            <article>
                                                {/* Profile header */}
                                                <div>
                                                    <div>
                                                        <img
                                                            className="h-32 w-full object-cover lg:h-48"
                                                            src={
                                                                profile.coverImageUrl
                                                            }
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                                        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                                                            <div className="flex">
                                                                <img
                                                                    className="h-24 w-24 rounded-md ring-4 ring-white sm:h-32 sm:w-32"
                                                                    src={
                                                                        profile.imageUrl
                                                                    }
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                                                <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                                                                    <h1 className="text-2xl font-bold text-gray-900 truncate">
                                                                        {
                                                                            profile.name
                                                                        }
                                                                    </h1>
                                                                    <p className="text-gray-500">
                                                                        @ricardo
                                                                    </p>
                                                                </div>
                                                                <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                                                                    <span className="inline-flex items-center px-4 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
                                                                        <svg
                                                                            className="-ml-0.5 mr-2 h-2 w-2 text-green-400"
                                                                            fill="currentColor"
                                                                            viewBox="0 0 8 8"
                                                                        >
                                                                            <circle
                                                                                cx={
                                                                                    4
                                                                                }
                                                                                cy={
                                                                                    4
                                                                                }
                                                                                r={
                                                                                    3
                                                                                }
                                                                            />
                                                                        </svg>
                                                                        Online
                                                                    </span>
                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex justify-center px-4 py-2 border border-pink-300 shadow-sm text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                                                    >
                                                                        <PlusIcon
                                                                            className="-ml-1 mr-2 h-5 w-5 text-white"
                                                                            aria-hidden="true"
                                                                        />
                                                                        <span>
                                                                            Add
                                                                            to
                                                                            List
                                                                        </span>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex justify-center px-4 py-2 border border-indigo-300 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                    >
                                                                        <MailIcon
                                                                            className="-ml-1 mr-2 h-5 w-5 text-white"
                                                                            aria-hidden="true"
                                                                        />
                                                                        <span>
                                                                            Message
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                                                            <h1 className="text-2xl font-bold text-gray-900 truncate">
                                                                {profile.name}
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Tabs */}
                                                <div className="mt-6 sm:mt-2 2xl:mt-5">
                                                    <div className="border-b border-gray-200">
                                                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                                            <nav
                                                                className="-mb-px flex space-x-8"
                                                                aria-label="Tabs"
                                                            >
                                                                {tabs.map(
                                                                    (tab) => (
                                                                        <a
                                                                            key={
                                                                                tab.name
                                                                            }
                                                                            href={
                                                                                tab.href
                                                                            }
                                                                            className={classNames(
                                                                                tab.current
                                                                                    ? "border-pink-500 text-gray-900"
                                                                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                                                                                "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                                                                            )}
                                                                            aria-current={
                                                                                tab.current
                                                                                    ? "page"
                                                                                    : undefined
                                                                            }
                                                                        >
                                                                            {
                                                                                tab.name
                                                                            }
                                                                        </a>
                                                                    )
                                                                )}
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Description list */}
                                                <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                                    <div className="flex flex-wrap items-start">
                                                        <div className="flex-1 basis-2/4 border-gray-200 border p-4 rounded-md">
                                                            <p className="text-sm  font-medium text-gray-500 mb-3">
                                                                Top Skills
                                                            </p>
                                                            <div className="flex flex-wrap space-x-2 justify-start items-center">
                                                                <div className="inline-flex p-2 rounded-md items-center border border-gray-200">
                                                                    <ChartPieIcon className="h-4 w-4 mr-2" />
                                                                    <span>
                                                                        React
                                                                    </span>
                                                                </div>
                                                                <div className="inline-flex p-2 rounded-md items-center border border-gray-200">
                                                                    <ChartBarIcon className="h-4 w-4 mr-2" />
                                                                    <span>
                                                                        GraphQL
                                                                    </span>
                                                                </div>
                                                                <div className="inline-flex p-2 rounded-md items-center border border-gray-200">
                                                                    <LightningBoltIcon className="h-4 w-4 mr-2" />
                                                                    <span>
                                                                        MongoDB
                                                                    </span>
                                                                </div>
                                                                <div className="inline-flex p-2 rounded-md items-center border border-gray-200">
                                                                    <QrcodeIcon className="h-4 w-4 mr-2" />
                                                                    <span>
                                                                        Solidity
                                                                    </span>
                                                                </div>
                                                                <div className="inline-flex p-2 rounded-md items-center border border-gray-200">
                                                                    <ServerIcon className="h-4 w-4 mr-2" />
                                                                    <span>
                                                                        Hardhat
                                                                    </span>
                                                                </div>
                                                                <div className="inline-flex p-2 rounded-md items-center border border-gray-200">
                                                                    <MoonIcon className="h-4 w-4 mr-2" />
                                                                    <span>
                                                                        Node
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-1 basis-2/4 shrink-0 w-[500px] border-gray-200 border p-4 rounded-md">
                                                            <p className="text-sm font-medium text-gray-500">
                                                                About
                                                            </p>
                                                            <p>
                                                                Principal
                                                                Designer, love
                                                                playing with
                                                                Figma. I like to
                                                                play soccer.
                                                            </p>
                                                        </div>
                                                        <div className="flex-1 justify-self-end max-w-[50%] basis-2/4 border-gray-200 border p-4 rounded-md">
                                                            <p className="text-sm  font-medium text-gray-500 mb-3">
                                                                Key Networks
                                                            </p>
                                                            <div className="flex flex-wrap space-x-2 justify-start items-center">
                                                                <div className="inline-flex p-2 rounded-md items-center border border-gray-200">
                                                                    <AcademicCapIcon className="h-4 w-4 mr-2" />
                                                                    <span>
                                                                        Marketing
                                                                    </span>
                                                                </div>
                                                                <div className="inline-flex p-2 rounded-md items-center border border-gray-200">
                                                                    <GlobeIcon className="h-4 w-4 mr-2" />
                                                                    <span>
                                                                        Communication
                                                                    </span>
                                                                </div>
                                                                <div className="inline-flex p-2 rounded-md items-center border border-gray-200">
                                                                    <TrendingUpIcon className="h-4 w-4 mr-2" />
                                                                    <span>
                                                                        Analysts
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Team member list */}
                                                {/* <div className="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
                                                    <h2 className="text-sm font-medium text-gray-500">
                                                        Team members
                                                    </h2>
                                                    <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                        {team.map((person) => (
                                                            <div
                                                                key={
                                                                    person.handle
                                                                }
                                                                className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
                                                            >
                                                                <div className="flex-shrink-0">
                                                                    <img
                                                                        className="h-10 w-10 rounded-full"
                                                                        src={
                                                                            person.imageUrl
                                                                        }
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <a
                                                                        href="#"
                                                                        className="focus:outline-none"
                                                                    >
                                                                        <span
                                                                            className="absolute inset-0"
                                                                            aria-hidden="true"
                                                                        />
                                                                        <p className="text-sm font-medium text-gray-900">
                                                                            {
                                                                                person.name
                                                                            }
                                                                        </p>
                                                                        <p className="text-sm text-gray-500 truncate">
                                                                            {
                                                                                person.role
                                                                            }
                                                                        </p>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div> */}
                                            </article>
                                        </main>
                                    </div>
                                    {/* End main area */}
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
                            <div className="h-full lg:w-80">
                                {/* Start right column area */}
                                <div
                                    className="h-full relative flex flex-col"
                                    style={{ minHeight: "16rem" }}
                                >
                                    {/* <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg" /> */}
                                    <div className="px-6 pt-6 pb-4 border-b border-gray-200">
                                        <h2 className="text-lg font-medium text-gray-900">
                                            Soil Project List
                                        </h2>
                                        <p className="mt-1 text-sm text-gray-600">
                                            7 people added to list
                                        </p>
                                    </div>
                                    <nav
                                        className="flex-1 h-32 overflow-y-auto"
                                        aria-label="Directory"
                                    >
                                        {Object.keys(shortList).map(
                                            (letter) => (
                                                <div
                                                    key={letter}
                                                    className="relative"
                                                >
                                                    {/* <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                                                            <h3>{letter}</h3>
                                                        </div> */}
                                                    <ul
                                                        role="list"
                                                        className="relative z-0 border-t border-b border-gray-200 divide-y divide-gray-200"
                                                    >
                                                        {shortList[letter].map(
                                                            (person) => (
                                                                <li
                                                                    key={
                                                                        person.id
                                                                    }
                                                                >
                                                                    <div className="relative px-6 py-5 flex bg-white items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                                                                        <div className="flex-shrink-0">
                                                                            <img
                                                                                className="h-10 w-10 rounded-full"
                                                                                src={
                                                                                    person.imageUrl
                                                                                }
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="flex-1 min-w-0">
                                                                            <a
                                                                                href="#"
                                                                                className="focus:outline-none"
                                                                            >
                                                                                {/* Extend touch target to entire panel */}
                                                                                <span
                                                                                    className="absolute inset-0"
                                                                                    aria-hidden="true"
                                                                                />
                                                                                <p className="text-sm font-medium text-gray-900">
                                                                                    {
                                                                                        person.name
                                                                                    }
                                                                                </p>
                                                                                <p className="text-sm text-gray-500 truncate">
                                                                                    {
                                                                                        person.role
                                                                                    }
                                                                                </p>
                                                                            </a>
                                                                        </div>
                                                                        <button
                                                                            type="submit"
                                                                            className="inline-flex justify-center p-0.5 border border-red-400 font-medium rounded-full "
                                                                        >
                                                                            <MinusIcon
                                                                                className="h-3 w-3 text-red-400"
                                                                                aria-hidden="true"
                                                                            />
                                                                            <span className="sr-only">
                                                                                Search
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            )
                                        )}
                                    </nav>
                                    <div className="px-4 py-6 border-gray-200 border-t bg-white">
                                        <button
                                            type="submit"
                                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                        >
                                            Save 7 Candidates to the list
                                        </button>
                                    </div>
                                </div>
                                {/* End right column area */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default RoleInspection;
