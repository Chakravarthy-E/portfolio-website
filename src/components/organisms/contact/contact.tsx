import { useGlobalContext } from "@/contexts/globalContext";
import SocialHandles from "../social_handles/social_handles";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const { profile } = useGlobalContext();

  return (
    <>
      <div id="contact" className="py-5 px-4 md:px-10 lg:px-20">
        <h1 className="text-center text-3xl md:text-4xl lg:text-3xl tracking-widest font-semibold text-white first-letter:text-5xl first-letter:text-blue-500 border-t border-b py-5 border-gray-700 mb-8">
          Contact Me
        </h1>
        <div className="flex flex-col md:flex-row items-start justify-between space-y-6 md:space-y-0 md:space-x-8">
          {/**Contact Form */}
          <div className="w-full md:w-1/2">
            <form className="text-white space-y-4 max-w-lg">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  className="border-style py-2 px-3 md:px-4 lg:px-5 w-full"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-gray-300">
                  Email
                </label>
                <input
                  type="text"
                  className="border-style py-2 px-3 md:px-4 lg:px-5 w-full"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-gray-300">
                  Message
                </label>
                <textarea
                  className="border-style py-2 px-3 md:px-4 lg:px-5 w-full"
                  placeholder="Enter message"
                  rows={6}
                />
              </div>
              <button className="text-white border-style px-8 py-3 my-3 bg-blue-600 flex items-center justify-center">
                Send
              </button>
            </form>
          </div>
          {/**Address And Personal Info */}
          <div className="text-gray-400 md:w-1/2 space-y-3">
            <h1 className="text-2xl text-blue-500">Additional</h1>
            <div className="flex items-center space-x-2">
              <Mail />
              <p>{profile.user.email}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone />
              <p>{profile.user.about.phoneNumber}</p>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin />
              <p>{profile.user.about.address}</p>
            </div>
          </div>
        </div>
      </div>
      {/**Footer */}
      <div className="border-t border-gray-800 text-gray-700 text-center py-4 flex flex-col items-center justify-center">
        <SocialHandles />
        <p className="mt-2">All rights reserved</p>
      </div>
    </>
  );
}
