export const Footer = () => {
  return (
    <div className="flex bg-black pb-10 px-0 m-0">
      <div>
        <div  className="w-[700px] h-[200px] grid grid-rows-1 grid-cols-4 ml-[70px] mt-[45px]">
          <div>
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
          <div>
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
          <div>
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
          <div>
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

              <h6 className="text-gray-50 font-bold mb-0 ms-1 mt-4">Contact Us</h6>
              <a className="underline-none hover:underline text-gray-50 ms-1 p-0" href="#">
                info@abstract.com
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[280px] h-[150px] ml-[95px] mt-[202px]">
          <svg
            className="w-[35px] h-[35px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 51"
            preserveAspectRatio="xMinYMid slice"
          >
            <g className="abstract-logo-mark-footer" fill="#fff">
              <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
              <circle cx="21.24" cy="29.58" r="4.96"></circle>
            </g>
          </svg>
          <p className="text-[20px] mt-3 text-gray-50">
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
