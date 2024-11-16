import { DollarSign, Eye, Server, Ticket } from "lucide-react";

export default function WhyUs() {
  return (
    <div className="relative isolate overflow-hidden bg-[hsla(222,47%,11%,1)] px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-800 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-0">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-purple-300">
                Unite Your Club, Amplify Your Impact!
              </p>
              <h1 className="mt-2  bg-gradient-to-r from-indigo-200 to-indigo-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                Give Your Club a Home Online: Connect, Share, Grow!
              </h1>
              <p className="mt-6 text-xl/8 text-gray-300">
                A website is more than just a digital presence—it's your club’s
                hub for connecting with members, promoting events, and
                showcasing achievements. It makes your club accessible,
                organized, and ready to grow in today’s online world.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-3 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="alt"
            src="https://images.unsplash.com/photo-1690106505816-6ba357b09c45?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-[20rem] lg:w-[45rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-400 lg:max-w-lg">
              <ul role="list" className="mt-5 space-y-8 text-gray-200">
                <li className="flex gap-x-3">
                  <Eye
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-indigo-300">
                      Improved Visibility and Awareness
                    </strong>{" "}
                    Many students are unaware of the existence of various clubs
                    on campus. A website ensures the club is easily findable
                    through search engines or the university&apos;s directory.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <DollarSign
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-indigo-300">
                      Sponsorship and Funding Opportunities
                    </strong>{" "}
                    A professional website impresses potential sponsors and
                    partners, showcasing the club as a serious and organized
                    entity. Funding is a crutial process for a event to be
                    happen. Having a website increases the chances of having a
                    good amount of funding from a respected company
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Ticket
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-indigo-300">
                      Membership Management Made Easy
                    </strong>{" "}
                    Clubs often struggle with organizing member data or
                    communicating with large groups. A website simplifies this
                    with forms, registration features, and databases. Online
                    registration forms allow students to join the club directly
                    from their phones or laptops.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Server
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-indigo-300">
                      Event Promotion and Ticketing
                    </strong>{" "}
                    Promoting events effectively is one of the biggest
                    challenges for clubs. A website can act as a marketing
                    platform for events, workshops, and competitions.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Having a well-designed and functional website can significantly
                boost a club’s ability to attract members, manage events, and
                maintain its reputation on campus and beyond.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-indigo-300">
                Not Convinced yet?
              </h2>
              <p className="mt-6 font-black">
                Still unsure? Without a website, your club is missing the chance
                to grow, stay organized, and connect with more students. A
                website is essential for promoting events, managing members, and
                building a stronger, more professional presence. Don't let your
                club fall behind—boost it with a website today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
