import { XIcon } from "@heroicons/react/outline";

const colors = [
  "#c2f5e9",
  "#d1f7c4",
  "#ffeab6",
  "#fee2d5",
  "#ffdce5",
  "#ffdaf6",
  "#ede2fe",
  "#cfdfff",
];

const levels = ["learning", "junior", "mid level", "senior"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SkillLevel({
  selectedSkill,
  selectedSkillsLevel,
  setSelectedSkillsLevel,
  skillSelected,
  setSkillSelected,
  
}) {
  const handleSelectSkillLevel = (level) => {
    if (!selectedSkill) return;
    if (
      selectedSkillsLevel[level] &&
      selectedSkillsLevel[level].some(
        (skill) => skill._id === selectedSkill._id
      )
    )
      return;
    setSelectedSkillsLevel({
      ...selectedSkillsLevel,
      [level]: selectedSkillsLevel[level]
        ? [...selectedSkillsLevel[level], selectedSkill]
        : [selectedSkill],
    });
    setSkillSelected(false)
    console.log("skillSelected frp,",skillSelected)
  };

  const handleDeleteClick = (level, skill) => {
    setSelectedSkillsLevel({
      ...selectedSkillsLevel,
      [level]: selectedSkillsLevel[level].filter(
        (_skill) => _skill._id !== skill._id
      ),
    });
  };
  return (
    <section className="-mx-2">
      <p className="ml-2 mb-1 text-xs text-slate-300">
        Click on a skill and select the levels
      </p>
      {levels.map((level, index) => (
        <div
          className="relative inline-block px-2 w-1/2 mb-2"
          key={index}
          onClick={() => handleSelectSkillLevel(level)}
        >
          <span className="absolute left-4 top-1">{level.toUpperCase()}</span>
          <div
            key={index}
          className={classNames(
            skillSelected ? "border-2 border-green-500" : "border border-slate-200",
            "rounded-lg h-[120px] bg-white pb-1 pt-6 px-2"
          )}
          >
            <div className="overflow-y-auto h-full">
              {selectedSkillsLevel[level] &&
                selectedSkillsLevel[level].map((skill) => (
                  <div
                    className={`inline-block mr-2 mb-1 rounded-full cursor-pointer bg-[${
                      colors[index % colors.length]
                    }]`}
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation(e);
                      handleDeleteClick(level, skill);
                    }}
                  >
                    <div className="w-full h-full pl-3 pr-2 flex items-center justify-between text-xs">
                      <span className="mr-1 mb-px">{skill.name}</span>
                      <div className="">
                        <XIcon
                          className="h-4 w-4 text-slate-600 hover:text-slate-400 cursor-pointer"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
