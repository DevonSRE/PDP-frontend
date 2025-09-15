import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  SendHorizontalIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-gray-400 py-16 px-10 md:px-32">
      <div className="w-full flex flex-col gap-10">
        {/* Newsletter Section */}
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="flex w-full max-w-sm relative rounded-md h-12">
            <Input
              type="email"
              placeholder="Input Your Email Address Here"
              className={cn(
                "h-full w-full py-2 pl-4 pr-10 bg-transparent absolute top-0 left-0",
                "text-sm text-gray-200 transition-colors duration-300",
              )}
            />
            <button className="ml-auto text-gray-200 px-5 h-full">
              <SendHorizontalIcon />
            </button>
          </div>
          <h4 className="text-lg text-neutral-300">
            Stay informed. Subscribe to Our Newsletter for Regular Updates.
          </h4>
        </div>

        <div className="w-full h-fit flex gap-6">
          {/* Main Footer Links */}
          <div className="">
            <div className="mb-6 lg:mb-0">
              <div className="flex items-center">
                <Image
                  src="/assets/logo-text.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <div className="flex items-start justify-between gap-8 w-full px-8 md:px-16">
              {/* Home Links */}
              <div>
                <h4 className="mb-4 text-sm font-semibold text-gray-300">
                  Home
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Training Courses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Join our Community
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      What We Do
                    </a>
                  </li>
                </ul>
              </div>

              {/* Training Courses Links */}
              <div>
                <h4 className="mb-4 text-sm font-semibold text-gray-300 font-poppins">
                  Training Courses
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-white">
                      Leadership & Management
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Government & Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Procurement & Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      BPP-standard Bidding Documents
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      2025 Course Schedule
                    </a>
                  </li>
                </ul>
              </div>

              {/* Find Us Links */}
              <div>
                <h4 className="mb-4 text-sm font-semibold text-gray-300 font-poppins">
                  Find Us
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.14-7.14c-.162-.441.004-.928.38-1.21l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H2.25A2.25 2.25 0 000 4.5v2.25z"
                      />
                    </svg>
                    <span>+234 810 000 0000</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v8.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-8.5m19.5 0a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75m16.5 0v.602c0 .24-.132.458-.33.585l-7.25 4.35c-.14.084-.31.084-.45 0l-7.25-4.35a.69.69 0 01-.33-.585v-.602m16.5 0a.75.75 0 01.75-.75h-15a.75.75 0 01.75.75"
                      />
                    </svg>
                    <span>info@pivotaldevelopment.com</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <span>No 4 Sanantonia dummyaddress GRA.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Legal Section */}
            <div className="flex flex-col items-center justify-between border-t border-gray-700 pt-4 text-xs md:flex-row">
              <div className="mb-2 md:mb-0">
                <p className="">
                  © 2023 Pivotal Development Partners Limited, All Rights
                  Reserved
                </p>
              </div>
              <div className="space-x-4">
                <a href="#" className="hover:text-white">
                  Support
                </a>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Terms of use
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-300">
              Social Media
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <InstagramIcon size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <LinkedinIcon size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FacebookIcon size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <TwitterIcon size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

