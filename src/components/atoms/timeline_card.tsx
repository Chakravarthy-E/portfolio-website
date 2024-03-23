import { timeline } from "@/@types/user";
import { format } from "date-fns";

export default function TimelineCard({
  company_name,
  summary,
  startDate,
  endDate,
  jobTitle,
  jobLocation,
  bulletPoints,
  enabled,
}: timeline) {
  return (
    <>
      {enabled && (
        <div className="border-style p-4 h-full">
          <div className="flex items-center justify-between border-b-2 border-gray-800 py-1 flex-col ">
            <h1 className="text-xl text-white">{company_name}</h1>
            <h1 className="text-gray-500">{jobLocation}</h1>
            <div className="flex items-end justify-end space-x-3 mt-2  text-xs border-gray-800 py-1 text-gray-300">
              <p>{format(startDate, "dd/MM/yyyy")}</p>
              <span>-</span>
              <p>{format(endDate, "dd/MM/yyyy")}</p>
            </div>
          </div>
          <div className="flex items-start space-y-6 mt-4 justify-center flex-col px-4">
            <div>
              <h1 className="text-xl font-semibold border-b w-fit text-white">
                {jobTitle}
              </h1>
              <p className="text-gray-300">{summary}</p>
            </div>
            <ul>
              {bulletPoints.map((point: string, index: number) => (
                <li key={index} className="text-gray-500">
                  <span className="font-bold text-blue-600">=&gt;</span> {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
