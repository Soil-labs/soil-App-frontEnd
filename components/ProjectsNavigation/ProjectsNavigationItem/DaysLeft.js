import { classNames } from "../../../util";

const DaysLeft = ({ isCurrentPage }) => {
  // need to calculate days left: (kickoff date - current date)

  const totalDays = 23;
  const daysLeft = 20;

  return (
    <div className="rounded-full overflow-hidden shadow-lg bg-[#e8e4e4] relative">
      <div
        className={classNames(
          "px-3 py-1 ",
          isCurrentPage ? "bg-[#8dc220a5]" : "bg-[#8dc22066]"
        )}
        style={{ width: `${(daysLeft / totalDays) * 100}%` }}
      >
        <span
        //  className="absolute left-0"
        >
          {daysLeft} days left
        </span>
      </div>
    </div>
  );
};

export default DaysLeft;
