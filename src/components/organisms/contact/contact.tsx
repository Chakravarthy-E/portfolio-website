export default function Contact() {
  return (
    <div id="contact" className="py-5 px-4 md:px-10 lg:px-20">
      <h1 className="text-center text-3xl md:text-4xl lg:text-3xl tracking-widest font-semibold text-white first-letter:text-5xl first-letter:text-blue-500 border-t border-b py-5 border-gray-700">
        Contact Me
      </h1>
      <div className="text-white space-y-4 flex flex-col">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-gray-300">
            Name
          </label>
          <input
            type="text"
            className="border-style py-2 px-3 md:px-4 lg:px-5 w-full max-w-lg"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-gray-300">
            Email
          </label>
          <input
            type="text"
            className="border-style py-2 px-3 md:px-4 lg:px-5 w-full max-w-lg"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-gray-300">
            Message
          </label>
          <textarea
            className="border-style py-2 px-3 md:px-4 lg:px-5 w-full max-w-lg"
            placeholder="Enter message"
            rows={6}
          />
        </div>
        <button className="text-white w-fit border-style px-8 py-3 my-3 bg-gray-700 flex items-center justify-center">
          Send
        </button>
      </div>
    </div>
  );
}
