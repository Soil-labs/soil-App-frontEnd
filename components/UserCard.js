import Avatar from "./Avatar";
import NumberCircle from "./NumberCircle";

const mockData = {
  projectTypes: [
    {
      type: "Apply",
      title: "Active applications",
      number: 6,
    },
    {
      type: "Ongoing",
      title: "Active projects",
      number: 2,
    },
  ],
};

export default function UserCard({ member }) {
  return (
    <section className="col-span-1">
      <div className="col-span-1 bg-white rounded-lg px-2 py-3 md:mb-4">
        <div className="w-full flex items-center mb-3">
          <div className="w-1/3">
            <Avatar />
          </div>
          <div className="w-2/3 overflow-x-scroll">
            <span className="text-xs">Good Morning</span>
            <div className="overflow-x-scroll">
              <span className="font-bold">{member.discordName}</span>
            </div>
          </div>
        </div>
        <hr className="w-2/3 mx-auto mb-3"></hr>
        {mockData.projectTypes.map((item, index) => (
          <div className="ml-1 mb-3 overflow-hidden" key={index}>
            <span className="text-slate-500 text-sm">{item.type}</span>
            <div className="relative col-span-1 bg-white border border-gray-200 rounded-md px-2 py-1 mt-1 shadow-[0px_2px_7px_rgba(0,48,142,0.09)]">
              <span className="text-sm">{item.title}</span>
              <div className="absolute top-1 right-1">
                <NumberCircle number={item.number} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
