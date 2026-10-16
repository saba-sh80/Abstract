export const Footer = () => {
  return (
    <div className="w-full grid xl:grid-cols-5 grid-cols-1 xl:grid-rows-1 gap-y-7 justify-items-center items-center bg-black py-10">
      <div className="xl:col-span-3">
        <div  className="w-full grid md:grid-rows-1 sm:grid-rows-2 grid-rows-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-start gap-7">
          <div className="flex flex-col justify-items-start">
            <h5 className="text-gray-50 font-bold">Company</h5>
            <ul>
              <a className="underline-none hover:underline text-gray-50" href="#">
                About Us
              </a>
              <br />
              <a className="underline-none hover:underline text-gray-50" href="#">
                Careers
              </a>
              <br />
              <a className="underline-none hover:underline text-gray-50" href="#">
                Legal
              </a>

              <h6 className="text-gray-50 font-bold mt-1">Contact Us</h6>
              <a className="underline-none hover:underline text-gray-50" href="#">
                info@abstract.com
              </a>
            </ul>
          </div>
          <div className="flex flex-col justify-items-start">
            <h5 className="text-gray-50 font-bold">Community</h5>
            <ul>
              <a className="underline-none hover:underline text-gray-50" href="https://twitter.com/goabstract">
                Twitter
              </a>
              <br />
              <a
                className="underline-none hover:underline text-gray-50"
                href="https://www.linkedin.com/company/17950473/"
              >
                LinkedIn
              </a>
              <br />
              <a className="underline-none hover:underline text-gray-50" href="https://facebook.com/Abstract/">
                Facebook
              </a>
              <br />
              <a className="underline-none hover:underline text-gray-50" href="https://dribbble.com/abstract">
                Dribbble
              </a>
              <br />
              <a
                className="underline-none hover:underline text-gray-50"
                href="https://www.abstract.com/podcast"
              >
                Podcast
              </a>
            </ul>
          </div>
          <div className="flex flex-col justify-items-start">
            <h5 className="text-gray-50 font-bold">Resources</h5>
            <ul>
              <a className="underline-none hover:underline text-gray-50" href="#">
                Blog
              </a>
              <br />
              <a className="underline-none hover:underline text-gray-50" href="#">
                Help Center
              </a>
              <br />
              <a className="underline-none hover:underline text-gray-50" href="#">
                Release Notes
              </a>
              <br />
              <a className="underline-none hover:underline text-gray-50" href="#">
                status
              </a>
            </ul>
          </div>
          <div className="flex flex-col justify-items-start">
            <h5 className="text-gray-50 font-bold">Abstract</h5>
            <ul>
              <a className="underline-none hover:underline text-gray-50" href="#">
                Start Trial
              </a>
              <br />
              <a className="underline-none hover:underline text-gray-50" href="#">
                Pricing
              </a>
              <br />
              <a className="underline-none hover:underline text-gray-50" href="#">
                Download
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="xl:col-span-2 flex justify-start items-center">
        <div className="w-70 ml-17.5 xl:mt-50.5">
          <svg
            className="w-8.75 h-8.75"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 51"
            preserveAspectRatio="xMinYMid slice"
          >
            <g className="abstract-logo-mark-footer" fill="#fff">
              <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
              <circle cx="21.24" cy="29.58" r="4.96"></circle>
            </g>
          </svg>
          <p className="text-lg mt-3 text-gray-50">
            © Copyright 2024
            <br />
            Abstract Studio Design, Inc.
            <br />
            All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};
