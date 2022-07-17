export default function RoleCard({ role }) {
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
        {/* @TODO Discuss implementation of this */}
        {/* <div className="flex mb-1">
          <div>
            <span className="block w-6">📌</span>
          </div>
          <div className="pt-1">
            <p className="text-slate-600 text-xs">Open roles: {role.number}</p>
          </div>
        </div> */}
      </div>
      <div className="w-48 bg-slate-100 hover:bg-slate-200 border border-t-0 rounded-b-md border-gray-200">
        <p className="text-center text-xs py-2 text-slate-800 hover:text-slate-600 cursor-pointer">
          Apply Now {">"}
        </p>
      </div>
    </div>
  );
}
