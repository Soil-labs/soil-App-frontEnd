import { Children } from "react";

export default function SideCard({ children, header, icon }) {
  return (
    <div className="relative col-span-1 bg-white border border-gray-200 rounded-md px-3 py-1 mt-1 mb-2 shadow-[0px_2px_7px_rgba(0,48,142,0.09)]">
      <div className="w-full flex items-center mb-1">
        <span className="text-slate-500 text-sm mr-1">{icon}</span>
        <span className="text-slate-500 text-xs">{header}</span>
      </div>
      {children}
    </div>
  );
}
