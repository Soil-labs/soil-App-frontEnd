import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
    ChevronDoubleLeftIcon,
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
    OfficeBuildingIcon,
    UserCircleIcon,
    UserAddIcon,
    BellIcon,
    CurrencyDollarIcon,
    PencilIcon,
} from "@heroicons/react/outline";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { findMembers_withSkill } from "../../redux/slices/usersInspectSlice";
import InspectUserShimmer from "../../components/Shimmers/InspectUserShimmer";
import InspectUsersListShimmer from "../../components/Shimmers/InspectUsersListShimmer";
import {
    findMember,
    selectLoadingMember,
    selectMemberInfo,
    inpsectUser,
} from "../../redux/slices/userInspectSlice";
import CoverImageShimmer from "../../components/Shimmers/CoverImageShimmer";
import ProfilePictureShimmer from "../../components/Shimmers/ProfilePictureShimmer";
import Layout from "../../components/layout/Layout";

const tabs = [
    { name: "Profile", href: "#profile", current: false },
    { name: "Calendar", href: "#", current: false },
    { name: "Recognition", href: "#recognition", current: true },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function RoleInspection() {
    const dispatch = useDispatch();
    const [currentTab, setCurrentTab] = useState("GENERAL");
    const loadingMembers = useSelector((state) => state.usersInspect.loading);
    // const members = useSelector(selectMembers);
    const members = useSelector((state) => state.usersInspect.members);

    // const selectedUser = useSelector(selectMemberInfo);
    const selectedUser = useSelector((state) => state.userInspect);

    // const selectedUserLoading = useSelector(selectLoadingMember);
    const selectedUserLoading = useSelector((state) => state.loading);
    const [selectedUserId, setSelectedUserId] = useState(undefined);

    useEffect(() => {
        (async () => {
            const id = "62e74587d4d7c00004c1ce88"; // TODO: make dynamic later
            const params = {
                _id: id,
                returnMembers: true,
            };
            console.log("making request");
            await dispatch(findMembers_withSkill(params));
        })();
    }, []);

    useEffect(() => {
        if (selectedUserId) {
            (async () => {
                const params = {
                    _id: selectedUserId,

                    returnSkills: true,
                    returnProjects: true,
                    returnNetwork: true,
                };
                const memberInfo = await dispatch(inpsectUser(params));
            })();
        }
    }, [selectedUserId]);

    console.log(selectedUser);

    return (
        <>
            <div className="flex h-[100%]">
                {/* Background color split screen for large screens */}
                <div className="relative h-full flex-1 flex-col">
                    {/* 3 column wrapper */}
                    <div className="flex-grow h-full w-full mx-auto lg:flex">
                        {/* Left sidebar & main wrapper */}
                        <div className="flex-1 max-h-full min-w-0 space-x-4  xl:flex">
                            <div className="max-h-full border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-96 xl:border-r xl:border-gray-200">
                                <div className="h-full">
                                    {/* Start left column area */}
                                    <aside className="hidden h-full xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96  border-r border-gray-200">
                                        <div className="px-6 pt-6 pb-4 flex-col">
                                            <div className="flex-col space-y-2 items-center justify-between">
                                                <h2 className="text-lg font-medium text-gray-900">
                                                    Match candidates for:
                                                </h2>
                                                <div className="flex items-center">
                                                    <ChevronDoubleLeftIcon className="h-10 w-10" />
                                                    <h2 className="text-2xl flex-1 text-center uppercase font-bold">
                                                        Scrum Master
                                                    </h2>
                                                    <ChevronDoubleRightIcon className="h-10 w-10" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Directory list */}
                                        <nav
                                            className="flex-1 h-32 overflow-y-auto"
                                            aria-label="Directory"
                                        >
                                            <ul
                                                role="list"
                                                className="relative z-0 space-y-4"
                                            >
                                                {!loadingMembers ? (
                                                    <>
                                                        {members &&
                                                            members.map(
                                                                ({
                                                                    matchPercentage,
                                                                    member,
                                                                    commonSkills,
                                                                }) => {
                                                                    return (
                                                                        <li
                                                                            key={
                                                                                member._id
                                                                            }
                                                                            className="cursor-pointer border-2  border-soilGreen-50 rounded-md"
                                                                            onClick={() =>
                                                                                setSelectedUserId(
                                                                                    member._id
                                                                                )
                                                                            }
                                                                        >
                                                                            <div className="relative px-6 py-5 flex items-center hover:bg-soilGreen-20 space-x-3 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                                                                                <div className="flex-shrink-0">
                                                                                    <img
                                                                                        className="h-14 w-14 shadow-md rounded-full"
                                                                                        src={
                                                                                            member.discordAvatar
                                                                                        }
                                                                                        alt=""
                                                                                    />
                                                                                </div>
                                                                                <div className="flex-1 flex flex-col space-y-2 min-w-0">
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
                                                                                            {`@${member.discordName}`}
                                                                                        </p>
                                                                                    </a>
                                                                                    <ul>
                                                                                        {commonSkills.map(
                                                                                            (
                                                                                                skill
                                                                                            ) => {
                                                                                                return (
                                                                                                    <li className="bg-soilGreen-20 rounded-md inline p-2">
                                                                                                        {
                                                                                                            skill.name
                                                                                                        }
                                                                                                    </li>
                                                                                                );
                                                                                            }
                                                                                        )}
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    );
                                                                }
                                                            )}
                                                    </>
                                                ) : (
                                                    <InspectUsersListShimmer />
                                                )}
                                            </ul>
                                        </nav>
                                    </aside>
                                    {/* End left column area */}
                                </div>
                            </div>
                            <>
                                {selectedUserLoading == true ? (
                                    <div className="bg-white flex w-full">
                                        <div className="h-full w-full">
                                            <div className="flex flex-col">
                                                <CoverImageShimmer />
                                                <div className="px-4">
                                                    <div className="flex w-full items-center space-x-2 max-w-5xl -mt-12">
                                                        <ProfilePictureShimmer />
                                                        <div className="mt-10 animate-pulse flex-1 justify-between space-x-2 items-start flex">
                                                            <div className="grow-1 flex flex-col space-y-2">
                                                                <div className="w-32 h-6 bg-gray-300 rounded-md"></div>
                                                                <div className="w-16 h-6 bg-gray-300 rounded-md"></div>
                                                            </div>
                                                            <div className="flex space-x-2">
                                                                <div className="w-28 h-10 bg-gray-300 rounded-md"></div>
                                                                <div className="w-28 h-10 bg-gray-300 rounded-md"></div>
                                                                <div className="w-28 h-10 bg-gray-300 rounded-md"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 animate-pulse  border-b px-4 py-4 border-gray-300">
                                                        <div className="flex space-x-8">
                                                            <div className="h-6 w-12 rounded-md bg-gray-300"></div>
                                                            <div className="h-6 w-12 rounded-md bg-gray-300"></div>
                                                            <div className="h-6 w-12 rounded-md bg-gray-300"></div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 max-w-5xl mx-auto">
                                                        <div className="columns-2 display-[columns] space-y-2">
                                                            <div className="border-gray-200 break-inside-avoid border p-4 rounded-md box-border">
                                                                <p className="text-sm font-medium text-gray-500 mb-3">
                                                                    Top Skills
                                                                </p>
                                                                <div className="flex animate-pulse flex-wrap gap-2 justify-start items-center">
                                                                    <div className="inline-flex p-2 bg-gray-300 rounded-md items-center h-10 w-20"></div>
                                                                    <div className="inline-flex p-2 bg-gray-300 rounded-md items-center h-10 w-20"></div>
                                                                    <div className="inline-flex p-2 bg-gray-300 rounded-md items-center h-10 w-20"></div>
                                                                    <div className="inline-flex p-2 bg-gray-300 rounded-md items-center h-10 w-20"></div>
                                                                </div>
                                                            </div>
                                                            <div className="border-gray-200 break-inside-avoid  border p-4 rounded-md">
                                                                <p className="text-sm font-medium text-gray-500">
                                                                    About
                                                                </p>
                                                                <div className="flex animate-pulse flex-col space-y-2">
                                                                    <div className="h-6 w-full bg-gray-300 rounded-md"></div>
                                                                    <div className="h-6 w-full bg-gray-300 rounded-md"></div>
                                                                    <div className="h-6 w-[375px] bg-gray-300 rounded-md"></div>
                                                                </div>
                                                            </div>
                                                            <div className="border-gray-200 break-inside-avoid border p-4 rounded-md box-border">
                                                                <p className="text-sm font-medium text-gray-500 mb-3">
                                                                    Expected
                                                                    Renum Range
                                                                </p>
                                                                <div className="h-12 w-32 animate-pulse rounded-md bg-gray-300"></div>
                                                            </div>
                                                            <div className="border-gray-200 border p-4 rounded-md">
                                                                <p className="text-sm  font-medium text-gray-500 mb-3">
                                                                    Key Networks
                                                                </p>
                                                                <div className="flex flex-wrap gap-2 justify-start items-center">
                                                                    <div className="flex animate-pulse flex-wrap gap-2 justify-start items-center">
                                                                        <div className="inline-flex p-2 bg-gray-300 rounded-md items-center h-10 w-20"></div>
                                                                        <div className="inline-flex p-2 bg-gray-300 rounded-md items-center h-10 w-20"></div>
                                                                        <div className="inline-flex p-2 bg-gray-300 rounded-md items-center h-10 w-20"></div>
                                                                        <div className="inline-flex p-2 bg-gray-300 rounded-md items-center h-10 w-20"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {Object.keys(selectedUser).length !=
                                        0 ? (
                                            <div className="bg-white lg:min-w-0 lg:flex-1">
                                                <section className="flex rounded-tr-md rounded-tl-md  bg-soilGreen-70">
                                                    <button
                                                        className={classNames(
                                                            "px-4 py-2 flex-1 uppercase",
                                                            currentTab ===
                                                                "GENERAL"
                                                                ? "bg-soilGreen-20"
                                                                : ""
                                                        )}
                                                        onClick={() =>
                                                            setCurrentTab(
                                                                "GENERAL"
                                                            )
                                                        }
                                                    >
                                                        general
                                                    </button>
                                                    <button
                                                        className={classNames(
                                                            "px-4 py-2 flex-1 uppercase",
                                                            currentTab ===
                                                                "PREVIOUS"
                                                                ? "bg-soilGreen-20"
                                                                : ""
                                                        )}
                                                        onClick={() =>
                                                            setCurrentTab(
                                                                "PREVIOUS"
                                                            )
                                                        }
                                                    >
                                                        previous work
                                                    </button>
                                                    <button
                                                        className={classNames(
                                                            "px-4 py-2 flex-1 uppercase",
                                                            currentTab ===
                                                                "RECOMMENDATION"
                                                                ? "bg-soilGreen-20"
                                                                : ""
                                                        )}
                                                        onClick={() =>
                                                            setCurrentTab(
                                                                "RECOMMENDATION"
                                                            )
                                                        }
                                                    >
                                                        recommendation
                                                    </button>
                                                </section>

                                                <div className="h-full overflow-y-scroll">
                                                    {currentTab ==
                                                        "GENERAL" && (
                                                        <section className="flex max-w-[671px] h-screen p-4 space-y-4 flex-col bg-soilGreen-20 overflow-y-scroll">
                                                            <div className="flex space-x-2 w-full items-center">
                                                                <div className="flex">
                                                                    <img
                                                                        className="h-24 w-24 rounded-full"
                                                                        src={
                                                                            selectedUser.discordAvatar
                                                                        }
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                                                                    <h1 className="text-2xl font-bold text-gray-900 truncate">
                                                                        {
                                                                            selectedUser.discordName
                                                                        }
                                                                    </h1>
                                                                    <p className="text-gray-500">
                                                                        SCRUM
                                                                        MASTER
                                                                    </p>
                                                                </div>
                                                                <div className="flex-1 flex justify-end space-x-2">
                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex justify-center px-4 py-2 border border-pink-300 shadow-sm text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                                                    >
                                                                        <PlusIcon
                                                                            className="-ml-1 mr-2 h-5 w-5 text-white"
                                                                            aria-hidden="true"
                                                                        />
                                                                        <span>
                                                                            Shortlist
                                                                        </span>
                                                                    </button>
                                                                    {/* <button
                                                                        type="button"
                                                                        className="inline-flex justify-center px-4 py-2 border border-red-300 shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                                                    >
                                                                        <MinusIcon
                                                                            className="-ml-1 mr-2 h-5 w-5 text-white"
                                                                            aria-hidden="true"
                                                                        />
                                                                        <span>
                                                                            Remove
                                                                        </span>
                                                                    </button> */}
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center space-x-8">
                                                                <div className="flex-1 rounded-md p-4 bg-white">
                                                                    <h2 className="text-xl">
                                                                        Candidate
                                                                        Description
                                                                    </h2>
                                                                    <p>
                                                                        Lorem
                                                                        jkasndajksdna
                                                                        ajklnsdasjk
                                                                        jasndakjsd
                                                                        ajskndasjkd
                                                                        jkasndaj
                                                                    </p>
                                                                </div>
                                                                <div className="p-4"></div>
                                                            </div>
                                                            <div className="flex items-start space-x-8">
                                                                <div className="flex-1 rounded-md p-4 bg-white">
                                                                    <h2 className="text-xl">
                                                                        Top
                                                                        Skills
                                                                    </h2>
                                                                    <div className="flex flex-wrap gap-2 justify-start items-center">
                                                                        {selectedUser.skills.map(
                                                                            (
                                                                                skill,
                                                                                index
                                                                            ) => {
                                                                                return (
                                                                                    <div
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                        className="inline-flex p-2 rounded-md items-center border border-gray-200"
                                                                                    >
                                                                                        <span>
                                                                                            {
                                                                                                skill
                                                                                                    .skillInfo
                                                                                                    .name
                                                                                            }
                                                                                        </span>
                                                                                    </div>
                                                                                );
                                                                            }
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="p-4">
                                                                    <div className="flex flex-col space-y-2">
                                                                        <div className="flex space-x-2 text-black text-[35px]">
                                                                            <FiTwitter />
                                                                            <FiLinkedin />
                                                                        </div>
                                                                        <div className="flex space-x-2 text-black text-[35px]">
                                                                            <FaDiscord />
                                                                            <FiGithub />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col space-y-2">
                                                                    <div className="px-4 py-2 justify-center items-center space-x-2 w-48 flex bg-white text-soilGreen-50 rounded-lg">
                                                                        <BellIcon className="h-6 w-6" />
                                                                        <h3 className="text-lg">
                                                                            {selectedUser &&
                                                                                selectedUser.registeredAt}
                                                                        </h3>
                                                                    </div>
                                                                    <div className="px-4 py-2 justify-center items-center space-x-2 w-48 flex bg-white text-soilGreen-50 rounded-lg">
                                                                        <CurrencyDollarIcon className="h-6 w-6" />
                                                                        <h3 className="text-lg">
                                                                            $1700
                                                                            SEED
                                                                        </h3>
                                                                    </div>
                                                                    <div className="px-4 py-2 justify-center items-center space-x-2 w-48 flex bg-white text-soilGreen-50 rounded-lg">
                                                                        <ChartPieIcon className="h-6 w-6" />
                                                                        <h3 className="text-lg">
                                                                            {selectedUser &&
                                                                                selectedUser.hoursPerWeek}
                                                                            hrs/week
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    )}

                                                    {currentTab ==
                                                        "PREVIOUS" && (
                                                        <section className="flex h-[100%] w-[671px] p-4 space-y-4 flex-col bg-soilGreen-20">
                                                            <div className="flex w-full items-center">
                                                                <div className="flex">
                                                                    <img
                                                                        className="h-24 w-24 rounded-full"
                                                                        src={
                                                                            selectedUser.discordAvatar
                                                                        }
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                                                                    <h1 className="text-2xl font-bold text-gray-900 truncate">
                                                                        {
                                                                            selectedUser.discordName
                                                                        }
                                                                    </h1>
                                                                    <p className="text-gray-500">
                                                                        SCRUM
                                                                        MASTER
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex w-full items-center">
                                                                {selectedUser &&
                                                                    selectedUser.previusProjects.map(
                                                                        (
                                                                            project
                                                                        ) => {
                                                                            return (
                                                                                <div className="px-8 py-4 w-full bg-white rounded-md">
                                                                                    <div className="flex">
                                                                                        <h2 className="flex-1 uppercase">
                                                                                            {
                                                                                                project.role
                                                                                            }
                                                                                        </h2>
                                                                                        <PencilIcon className="h-6 w-6" />
                                                                                    </div>
                                                                                    <div className="flex flex-col">
                                                                                        <h3>
                                                                                            {
                                                                                                project
                                                                                                    .info
                                                                                                    .title
                                                                                            }
                                                                                        </h3>
                                                                                        <h3>
                                                                                            Oct
                                                                                            2021
                                                                                            -
                                                                                            Present
                                                                                            (9
                                                                                            mos)
                                                                                        </h3>
                                                                                    </div>
                                                                                </div>
                                                                            );
                                                                        }
                                                                    )}
                                                            </div>
                                                            <div className="flex w-full flex-wrap space-y-2">
                                                                <div className="flex flex-col space-y-2 px-4 py-2 rounded-md bg-white">
                                                                    <h3>
                                                                        What
                                                                        project
                                                                        are you
                                                                        most
                                                                        proud
                                                                        of?
                                                                    </h3>
                                                                    <p className="wrap">
                                                                        Ljnjkajsdsan
                                                                        jaksndajks
                                                                        kljasndaj
                                                                        klasnda
                                                                        klasdnask
                                                                        klasdal
                                                                        \n
                                                                        klasdalksdn
                                                                        klasdnasjk
                                                                        klasdjakls
                                                                        klasdnaskld
                                                                        lkasdaskld
                                                                        klasdjlak
                                                                        klajsd
                                                                    </p>
                                                                </div>
                                                                <div className="flex flex-col space-y-2 px-4 py-2 rounded-md bg-white">
                                                                    <h3>
                                                                        What
                                                                        piece of
                                                                        work
                                                                        really
                                                                        showcases
                                                                        your
                                                                        abilities?
                                                                    </h3>
                                                                    <p className="wrap">
                                                                        Ljnjkajsdsan
                                                                        jaksndajks
                                                                        kljasndaj
                                                                        klasnda
                                                                        klasdnask
                                                                        klasdal
                                                                        \n
                                                                        klasdalksdn
                                                                        klasdnasjk
                                                                        klasdjakls
                                                                        klasdnaskld
                                                                        lkasdaskld
                                                                        klasdjlak
                                                                        klajsd
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    )}

                                                    {currentTab ==
                                                        "RECOMMENDATION" && (
                                                        <section className="flex h-[100%] w-[671px] p-4 space-y-4 flex-col bg-soilGreen-20">
                                                            <div className="flex w-full items-center">
                                                                <div className="flex">
                                                                    <img
                                                                        className="h-24 w-24 rounded-full"
                                                                        src={
                                                                            selectedUser.discordAvatar
                                                                        }
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                                                                    <h1 className="text-2xl font-bold text-gray-900 truncate">
                                                                        {
                                                                            selectedUser.discordName
                                                                        }
                                                                    </h1>
                                                                    <p className="text-gray-500">
                                                                        SCRUM
                                                                        MASTER
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex space-y-2 flex-col p-4 w-full border-2 border-soilGreen-70 rounded-md">
                                                                <h2>
                                                                    TOP
                                                                    REFERENCES
                                                                </h2>
                                                                <div className="grid gap-2 grid-cols-2">
                                                                    <div className="flex space-x-2">
                                                                        <div className="flex-shrink-0">
                                                                            <img
                                                                                className="h-14 w-14 shadow-md rounded-full"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="flex flex-col">
                                                                            <h3>
                                                                                MENTORSHIP
                                                                                CHAMPION
                                                                            </h3>
                                                                            <h4>
                                                                                @LuckyB
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex space-x-2">
                                                                        <div className="flex-shrink-0">
                                                                            <img
                                                                                className="h-14 w-14 shadow-md rounded-full"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="flex flex-col">
                                                                            <h3 className="uppercase">
                                                                                Budget
                                                                                Steward
                                                                            </h3>
                                                                            <h4>
                                                                                @LizaGrant
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex space-x-2">
                                                                        <div className="flex-shrink-0">
                                                                            <img
                                                                                className="h-14 w-14 shadow-md rounded-full"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="flex flex-col">
                                                                            <h3 className="uppercase">
                                                                                Community
                                                                                Member
                                                                            </h3>
                                                                            <h4>
                                                                                @Boi001
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex space-y-2 flex-col p-4 w-full border-2 border-soilGreen-70 rounded-md">
                                                                <h2 className="uppercase">
                                                                    Endorsed For
                                                                </h2>
                                                                <div className="grid gap-2 grid-cols-3">
                                                                    <div className="flex flex-col space-y-2 items-center">
                                                                        <h3 className="uppercase">
                                                                            Leadership
                                                                        </h3>
                                                                        <div className="flex -space-x-2 relative z-0 overflow-hidden">
                                                                            <img
                                                                                className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                                                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                                alt=""
                                                                            />
                                                                            <img
                                                                                className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                                                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                                alt=""
                                                                            />
                                                                            <img
                                                                                className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                                                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                                                                alt=""
                                                                            />
                                                                            <img
                                                                                className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-col space-y-2 items-center">
                                                                        <h3 className="uppercase">
                                                                            Fullstack
                                                                        </h3>
                                                                        <div className="flex -space-x-2 relative z-0 overflow-hidden">
                                                                            <img
                                                                                className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                                                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                                alt=""
                                                                            />
                                                                            <img
                                                                                className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                                                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                                alt=""
                                                                            />
                                                                            <img
                                                                                className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                                                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                                                                alt=""
                                                                            />
                                                                            <img
                                                                                className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-col space-y-2 items-center">
                                                                        <h3 className="uppercase">
                                                                            Solidity
                                                                        </h3>
                                                                        <div className="flex -space-x-2 relative z-0 overflow-hidden">
                                                                            <img
                                                                                className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                                                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                                alt=""
                                                                            />
                                                                            <img
                                                                                className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                                                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                                alt=""
                                                                            />
                                                                            <img
                                                                                className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                                                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                                                                alt=""
                                                                            />
                                                                            <img
                                                                                className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex space-y-2 flex-col p-4 w-full border-2 border-soilGreen-70 rounded-md">
                                                                <h2 className="uppercase">
                                                                    Collaborated
                                                                    With
                                                                </h2>
                                                                <div className="grid gap-2 grid-cols-2">
                                                                    <div className="flex space-x-2">
                                                                        <div className="flex-shrink-0">
                                                                            <img
                                                                                className="h-14 w-14 shadow-md rounded-full"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="flex flex-col">
                                                                            <h3>
                                                                                MENTORSHIP
                                                                                CHAMPION
                                                                            </h3>
                                                                            <h4>
                                                                                @LuckyB
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex space-x-2">
                                                                        <div className="flex-shrink-0">
                                                                            <img
                                                                                className="h-14 w-14 shadow-md rounded-full"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="flex flex-col">
                                                                            <h3 className="uppercase">
                                                                                Budget
                                                                                Steward
                                                                            </h3>
                                                                            <h4>
                                                                                @LizaGrant
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex space-x-2">
                                                                        <div className="flex-shrink-0">
                                                                            <img
                                                                                className="h-14 w-14 shadow-md rounded-full"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                        <div className="flex flex-col">
                                                                            <h3 className="uppercase">
                                                                                Community
                                                                                Member
                                                                            </h3>
                                                                            <h4>
                                                                                @Boi001
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex w-full flex-wrap space-y-2"></div>
                                                        </section>
                                                    )}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="p-3 bg-white flex-1 items-center">
                                                <div className="w-full flex items-center justify-center border-dashed border-4 border-gray-300 h-full rounded-md">
                                                    <div className="flex flex-col space-y-2 items-center justify-center">
                                                        <UserCircleIcon className="h-10 w-10" />
                                                        <p>
                                                            Select A User from
                                                            the list
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </>
                            {/*  */}
                        </div>

                        <div className="w-96 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
                            <div className="h-full w-full">
                                {/* Start right column area */}
                                <div
                                    className="h-full relative flex flex-col"
                                    style={{ minHeight: "16rem" }}
                                >
                                    {/* <div className="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg" /> */}
                                    <div className="px-6 pt-6 pb-4 border-b border-gray-200">
                                        <h2 className="text-lg font-medium text-gray-900">
                                            Shortlisted for:
                                        </h2>
                                        <p className="mt-1 text-2xl font-bold uppercase">
                                            Soil Team
                                        </p>
                                    </div>
                                    <div className="p-3 w-full flex flex-col  flex-1 items-center">
                                        <ul className="flex-1 flex flex-col space-y-2 w-full">
                                            <li className="flex w-full items-center border-2 border-soilGreen-50 justify-center rounded-lg">
                                                <div className="relative w-full px-6 py-5 flex items-center hover:bg-soilGreen-20 space-x-3 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            className="h-14 w-14 shadow-md rounded-full"
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
                                                                {`@some`}
                                                            </p>
                                                            <p className="text-sm uppercase font-medium text-gray-900">
                                                                Scrum Master
                                                            </p>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <h2 className="text-transparent text-2xl bg-gradient-to-r from-[#004AD9] to-[#D900A9] bg-clip-text font-semibold"></h2>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="flex w-full items-center border-2 border-soilGreen-50 justify-center rounded-lg">
                                                <div className="relative w-full px-6 py-5 flex items-center hover:bg-soilGreen-20 space-x-3 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            className="h-14 w-14 shadow-md rounded-full"
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
                                                                {`@some`}
                                                            </p>
                                                            <p className="text-sm uppercase font-medium text-gray-900">
                                                                Scrum Master
                                                            </p>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <h2 className="text-transparent text-2xl bg-gradient-to-r from-[#004AD9] to-[#D900A9] bg-clip-text font-semibold"></h2>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className="w-full flex items-center border-4 border-dashed border-gray-300 justify-center rounded-lg">
                                                <div className="flex flex-col space-y-2 items-center justify-center">
                                                    <h2 className="uppercase px-4 py-8">
                                                        Full Stack Engineer
                                                    </h2>
                                                </div>
                                            </div>
                                        </ul>
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

RoleInspection.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default RoleInspection;
