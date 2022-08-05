export default function DropdownTokenComponent({ setValueCallback }) {
  return (
    <div>
      {/* <label htmlFor="location" className="block text-sm font-medium text-gray-700">
        Interval
      </label> */}
      <select
        id="location"
        name="location"
        className="mt-1 block w-full text-xs border-none focus:outline-none text-gray-500  rounded-2xl"
        defaultValue="TOKEN"
        onChange={setValueCallback}
      >
        <option>TOKEN</option>
        <option>DAI</option>
        <option>USDC</option>
        <option>ETH</option>
        <option>CODE</option>
      </select>
    </div>
  );
}
