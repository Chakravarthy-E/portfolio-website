interface TestmonialProps {
  image: {
    url: string;
  };
  name: string;
  review: string;
  position: string;
  enabled: boolean;
}
export default function TestimonialCard({
  image,
  name,
  review,
  position,
  enabled,
}: TestmonialProps) {
  return (
    <>
      {enabled && (
        <div className="">
          <img
            src={image.url}
            alt={name}
            className="w-52 h-52 object-contain rounded-full border"
          />
          <div className="space-y-3">
            <h1 className="text-white text-xl">{name}</h1>
            <h1 className="text-gray-500">{review}</h1>
            <h1 className="text-gray-300">{position}</h1>
          </div>
        </div>
      )}
    </>
  );
}
