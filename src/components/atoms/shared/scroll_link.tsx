export default function ScrollLink({ href, children }: any) {
  const handleClick = (e: any) => {
    e.preventDefault();
    const target = document.getElementById(href.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <a href={href} onClick={handleClick} className="mx-2 hover:text-gray-500">
      {children}
    </a>
  );
}
