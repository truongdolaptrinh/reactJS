import React from "react";
import Image from "next/image";
import profilePic from "../../../public/img/profile.jpg";

export default function Blog() {
  // Your component logic and JSX code goes here
  return (
    <div>
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic"></address>
            <h1 className="mb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-3xl dark:text-white text-center">
              My CV profile 
            </h1>
          </header>
        </article>
      </div>

      <div>
        <div className="container mx-auto">
          <div className="md:flex no-wrap md:-mx-2">
            {/* Left Side */}
            <div className="w-full md:w-3/12 md:mx-2">
              {/* Profile Card */}
              <div className="bg-white p-3">
                <div className="image overflow-hidden">
                  <Image
                    src={profilePic}
                    alt="Profile"
                    width={500}
                    height={500}
                  />
                </div>
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                  aLy Dev
                </h1>
                <div></div>
              </div>
              {/* End of profile card */}
              <div className="my-4"></div>
            </div>

            
            <div className="w-full md:w-3/12 md:mx-2">
              {/* Profile Card */}
              <div className="bg-white p-3 text-xs">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span className="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">Profile</span>
                </div>
                <div className="text-gray-700">
                  <h3 className="text-gray-600 font-lg text-semibold leading-6">
                    Owner at aLy Company Inc.
                  </h3>
                  <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, eligendi dolorum sequi illum qui unde
                    aspernatur non deserunt
                  </p>
                  <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                    <li className="flex items-center py-3">
                      <span>Member since</span>
                      <span className="ml-auto">August 28, 2004</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End of profile card */}
              <div className="my-4"></div>
            </div>


            {/* Right Side */}
            <div className="w-full md:w-9/12 mx-2 h-64">
              {/* Profile tab */}
              {/* About Section */}
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span className="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">About</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">First Name</div>
                      <div className="px-4 py-2">Do</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Last Name</div>
                      <div className="px-4 py-2">aLy</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Gender</div>
                      <div className="px-4 py-2">Male</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Contact No.</div>
                      <div className="px-4 py-2">+11 998001001</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email</div>
                      <div className="px-4 py-2">aLydev@example.com</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Nationality</div>
                      <div className="px-4 py-2">VietNam</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Address</div>
                      <div className="px-4 py-2">The Moon</div>
                    </div>
                  </div>
                </div>

                <div className="my-3"></div>
                <hr />
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-2">
                  <span className="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 13.255A11.955 11.955 0 0112 21a11.955 11.955 0 01-9-4.745M12 8v6m0 0V8m0 4h-2m2 0h2m-2 0a2 2 0 110-4 2 2 0 010 4z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">Work</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Occupation</div>
                      <div className="px-4 py-2">React Dev</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Job Type</div>
                      <div className="px-4 py-2">Full Time</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Experience</div>
                      <div className="px-4 py-2">Senior</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Place of work
                      </div>
                      <div className="px-4 py-2">aLy Company</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">City</div>
                      <div className="px-4 py-2">Oklahoma City, USA</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Salary</div>
                      <div className="px-4 py-2">2000 USD</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Period</div>
                      <div className="px-4 py-2">Aug 2018 - Present</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of about section */}
            </div>
          </div>
          {/* End of profile tab */}
          {/* End of right side */}
        </div>
      </div>
    </div>
  );
}
