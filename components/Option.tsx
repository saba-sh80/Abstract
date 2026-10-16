import type { OptionProps } from "./Introduce";

export const Option = ({ title, paragraph, src }: OptionProps) => {
  return (
    <div className="lg:w-125 min-[400px]:w-87.5 w-280px flex justify-center items-center lg:gap-x-16 gap-x-4 ml-1.5">
      <div className="h-full flex">
        <img src={src} className="lg:w-21.25 min-[400px]:w-15 w-10 lg:h-21.25 min-[400px]:h-15 h-10"/>
      </div>
      <div className="lg:w-96 min-[400px]:w-80 w-64 grid grid-cols-1 grid-rows-3 justify-center self-start">
        <h1 className="w-full font-bold lg:text-3xl min-[400px]:text-2xl text-xl">{title}</h1>
        <p className="w-full lg:text-2xl min-[400px]:text-xl text-[16px] my-1">{paragraph}</p>
        <a
          onClick={() => (window.location.href = "./submit.html")}
          className="lg:my-5 my-2 text-indigo-600 font-bold lg:text-2xl min-[400px]:text-xl text-[16px] no-underline cursor-pointer transform"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
};
