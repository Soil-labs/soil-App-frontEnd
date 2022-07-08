import apiClient from "./api/axios";
import Avatar from "../components/Avatar";

const mockData = {
  address: "exwhyzeeasdasdasd.eth",

  projectTypes: [
    {
      type: "Apply",
      title: "Active applications",
      number: 6,
    },
    {
      type: "Ongoing",
      title: "Active applications",
      number: 2,
    },
  ],
};
//Redux
const getData = () => {
  return () => {
    apiClient({
      data: {
        query: `query{
          characters(page: 1){
            info{
              count
              pages
            }
            results{
              name
              id
              location{
                id
                name
              }
              origin{
                id
                name
              }
              episode{
                id
                episode
                air_date
              }
              image
            }
          }
        }`,
      },
    })
      .then((res) => {
        console.log(res.data.data.characters);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default function FavouriteProjects() {
  return (
    <>
      <div role="list" className="grid grid-cols-1 gap-3 md:grid-cols-5">
        {/* User column */}
        <section className="col-span-1 bg-white rounded-lg px-2 py-3">
          <div className="w-full flex items-center mb-3">
            <div className="w-1/3">
              <Avatar />
            </div>
            <div className="w-2/3 overflow-x-scroll">
              <span className="text-xs">Good Morning</span>
              <div className="overflow-x-scroll">
                <span className="font-bold">{mockData.address}</span>
              </div>
            </div>
          </div>
          <hr className="w-2/3 mx-auto mb-3"></hr>
          {mockData.projectTypes.map((item, index) => (
            <div className="ml-1 mb-3 overflow-hidden" key={index}>
              <span className="text-slate-500 text-sm">{item.type}</span>
              <div className="relative col-span-1 bg-white border border-gray-200 rounded-md px-2 py-1 mt-1 shadow-[0px_2px_7px_rgba(0,48,142,0.09)]">
                <span className="text-sm">{item.title}</span>
                <div className="absolute top-1 right-1 bg-blue-100 rounded-full w-6 h-6 flex justify-center items-center">
                  <span className="text-sm">{item.number}</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Main column */}
        <main className="col-span-3 bg-white rounded-lg">
          <div className="w-full p-6"></div>
        </main>

        {/* How to apply column */}
        <section className="col-span-1 bg-white rounded-lg">
          <div className="w-full p-6"></div>
        </section>
      </div>
    </>
  );
}
