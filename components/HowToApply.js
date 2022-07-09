export default function HowToApply({ data }) {
  return (
    <div className="bg-white rounded-lg px-2 py-3 md:mb-4">
      <span className="ml-1 text-slate-500">{data.title}</span>
      <ul className="relative mb-2 mt-3">
        {data.steps.map((item, index) => (
          <>
            <li className="relative flex items-center mb-1" key={index}>
              <div className="mr-2">
                <div
                  className={`rounded-full w-14 h-14 flex justify-center items-center`}
                  style={{ backgroundColor: item.color }}
                >
                  <span className="block text-lg">{item.emoji}</span>
                </div>
              </div>
              <p className="text-slate-500 text-xs leading-tight h-14">
                {item.text}
              </p>
            </li>
            {index + 1 < data.steps.length && (
              <div className="w-14 flex justify-center mb-2">
                <div
                  className="w-1 h-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(0deg, transparent, transparent 50%, #fff 50%, #fff 100%), linear-gradient(0deg, #D900A9, #004AD9);",
                    backgroundSize: "3px 10px, 3px 100%",
                  }}
                  aria-hidden="true"
                />
              </div>
            )}
          </>
        ))}
      </ul>
    </div>
  );
}
