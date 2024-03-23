import TestimonialCard from "@/components/atoms/testmonial_card";
import { useGlobalContext } from "@/contexts/globalContext";
import { Carousel } from "react-responsive-carousel";

export default function Testimonials() {
  const { profile } = useGlobalContext();

  const sortedTestimonials = profile?.user.testimonials?.sort(
    (a: any, b: any) => a.sequence - b.sequence
  );

  return (
    <div id="testimonials" className="py-5 px-4 md:px-10 lg:px-20 flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl md:text-4xl lg:text-3xl tracking-widest font-semibold text-white first-letter:text-5xl first-letter:text-blue-500 border-t border-b py-5 border-gray-700 w-full mb-10">
        Testimonials
      </h1>
      <div className="w-full max-w-3xl">
        <Carousel autoPlay showIndicators={false} infiniteLoop >
          {sortedTestimonials?.map((testimonial: any, index: number) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
