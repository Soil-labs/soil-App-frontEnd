export default function DropdownHoursComponent() {
  return (
    <div>
      <label htmlFor="location" className="block text-sm font-medium text-gray-700">
        Amount of Hours
      </label>
      <select
        id="location"
        name="location"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        defaultValue="Canada"
      >
        <option>1</option>
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>25</option>
        <option>30</option>
        <option>35</option>
        <option>40</option>
      </select>
    </div>
  )
}