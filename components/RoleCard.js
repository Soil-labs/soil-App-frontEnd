import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import projectSlice from "../redux/slices/projectSlice";

export default function RoleCard({ role }) {
  const {
    query: { projectId },
  } = useRouter();
  return (
    <div className="relative px-2 mb-2 drop-shadow-[0px_2px_7px_rgba(0,48,142,0.09)]">
      <div className="w-48 bg-white p-4 border border-b-0 rounded-t-md border-gray-200">
        <h4 className="font-bold mb-2 text-lg">{role.title}</h4>
        {role.hoursPerWeek && (
          <div className="flex mb-1">
            <div>
              <span className="block w-6">⌛</span>
            </div>
            <div className="pt-1">
              <p className="text-slate-600 text-xs font-bold">
                {role.hoursPerWeek} hours per week
              </p>
            </div>
          </div>
        )}
        {role.description && (
          <div className="flex mb-1">
            <div>
              <span className="block w-6">🧳</span>
            </div>
            <div className="pt-1">
              <p className="text-slate-600 text-xs leading-tight">
                {role.description}
              </p>
            </div>
          </div>
        )}
        <div className="-ml-1 -mr-1">
          {!!role.skills.length &&
            role.skills.map((skill, index) => (
              <div
                className="inline-block bg-soilGreen-20 rounded-full px-3 py-[2px] mr-2 mb-1"
                key={index}
              >
                <div className="w-full h-full text-xs flex -mt-px">
                  {skill?.skillData?.name?.toLowerCase()}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="w-48 bg-slate-100 hover:bg-slate-200 border border-t-0 rounded-b-md border-gray-200">
        <Link href={`/projects/magic-application/${projectId}/${role._id}`}>
          <a className="text-xs flex justify-center py-2 text-slate-800 hover:text-slate-600 cursor-pointer">
            Apply Now <ChevronRightIcon width={16} className="ml-1 -mr-1" />
          </a>
        </Link>
      </div>
    </div>
  );
}
