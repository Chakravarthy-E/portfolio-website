import Education from "@/components/atoms/education_card";
import Experience from "@/components/atoms/experience_card";
import { useGlobalContext } from "@/contexts/globalContext";
import React from "react";

export default function Timeline() {
  const { profile } = useGlobalContext();

  const sortedTimelines = profile?.user.timeline?.sort(
    (a, b) => a.sequence - b.sequence
  );

  return (
    <div id="timeline" className="py-8 px-4 md:px-10 lg:px-20 min-h-screen">
      <h1 className="text-center text-4xl lg:text-5xl font-semibold text-white tracking-widest border-t border-b py-5 border-gray-700 first-letter:text-blue-600">
        Timeline
      </h1>
      <div className="py-8 md:py-12 lg:py-16">
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600 mb-4">
            Education
          </h2>
          <div className="space-y-3">
            {sortedTimelines?.map((item, index) => (
              <div key={index} className="flex flex-col justify-center">
                {item.forEducation && item.enabled && <Education {...item} />}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold  mb-4 text-blue-600">
            Experience
          </h2>
          <div className="space-y-3">
            {sortedTimelines?.map((item, index) => (
              <div key={index} className="flex justify-center flex-col">
                {!item.forEducation && item.enabled && <Experience {...item} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
