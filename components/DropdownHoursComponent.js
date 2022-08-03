export default function DropdownHoursComponent() {
  return (
    <div className="text-2xl">
      {/* <label htmlFor="location" className="block text-sm font-medium text-gray-700">
        Amount of Hours
      </label> */}
      <select
        id="location"
        name="location"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-2xl border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-2xl"
        defaultValue="Canada"
      >
        <option>1 hrs</option>
        <option>5 hrs</option>
        <option>10 hrs</option>
        <option>15 hrs</option>
        <option>20 hrs</option>
        <option>25 hrs</option>
        <option>30 hrs</option>
        <option>35 hrs</option>
        <option>40 hrs</option>
      </select>
    </div>
  )
}