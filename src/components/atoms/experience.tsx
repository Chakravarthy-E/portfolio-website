import { timeline } from "@/@types/user";
import { format } from "date-fns";
import React from "react";

export default function Experience({
  bulletPoints,
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
      {!forEducation && enabled && (
        <div className=" rounded-lg p-6 shadow-md border border-gray-800">
          <h1 className="text-2xl font-semibold text-white">{company_name}</h1>
          <p className="text-lg text-gray-300">{jobTitle}</p>
          <p className="text-lg text-gray-300">{jobLocation}</p>
          <p className="text-gray-400">
            {format(startDate, "dd/MM/yyyy")} - {format(endDate, "dd/MM/yyyy")}
          </p>
          <p className="text-gray-400">{summary}</p>
          {bulletPoints && (
            <ul className="list-disc list-inside text-gray-400">
              {bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}
