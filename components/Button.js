import { ChevronRightIcon } from "@heroicons/react/outline";

export default function Button({
  children,
  hasChevron = false,
  color = "indigo-600",
  hoverColor = "indigo-700",
}) {
  return (
    <button
      type="button"
      className={`inline-flex items-center px-3 py-2 ml-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white hover:bg-${hoverColor} bg-${color} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
    >
      <span className={`${hasChevron ? "mr-2" : ""}`}>{children}</span>
      <ChevronRightIcon width={16} className="-mr-1" />
    </button>
  );
}
