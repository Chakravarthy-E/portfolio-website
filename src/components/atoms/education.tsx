import { timeline } from "@/@types/user";
import React from "react";
import { format } from "date-fns";
export default function Education({
  company_name,
  enabled,
  endDate,
  jobLocation,
  jobTitle,
  startDate,
  summary,
  forEducation,
}: timeline) {
  return (
    <>
      {forEducation && enabled && (
        <div className=" rounded-lg p-6 shadow-md border border-gray-800">
          <h2 className="text-2xl font-semibold text-white">{company_name}</h2>
          <p className="text-lg text-gray-300">{jobTitle}</p>
          <p className="text-lg text-gray-300">{jobLocation}</p>
          <p className="text-gray-400">
            {format(startDate, "dd/MM/yyyy")} - {format(endDate, "dd/MM/yyyy")}
          </p>
          <p className="text-gray-400">{summary}</p>
        </div>
      )}
    </>
  );
}
