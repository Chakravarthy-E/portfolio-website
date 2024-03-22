import TimelineCard from "@/components/atoms/timeline_card";
import { useGlobalContext } from "@/contexts/globalContext";

export default function Timeline() {
  const { profile } = useGlobalContext();

  const sortedTimelines = profile?.user.timeline?.sort(
    (a: any, b: any) => a.sequence - b.sequence
  );
  return (
    <div id="timeline" className="py-5 px-5 md:px-10 lg:px-20 min-h-screen">
      <h1 className="text-center text-3xl md:text-4xl lg:text-3xl tracking-widest font-semibold text-white first-letter:text-5xl first-letter:text-blue-500 border-t border-b py-5 border-gray-700">
        TimeLine
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-8 md:py-12 lg:py-16">
        {sortedTimelines?.map((company: any, index: number) => (
          <TimelineCard key={index} {...company} />
        ))}
      </div>
    </div>
  );
}
