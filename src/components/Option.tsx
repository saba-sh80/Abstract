import type { OptionProps } from "./Introduce";

export const Option = ({ title, paragraph, src }: OptionProps) => {
  return (
    <div className="w-[500px] flex justify-center items-center gap-x-16">
      <div className="h-full flex">
        <img src={src} className="w-[85px] h-[85px]" alt="..." />
      </div>
      <div className="w-96 grid grid-cols-1 grid-rows-3 justify-center self-start">
        <h1 className="w-full font-bold text-3xl">{title}</h1>
        <p className="w-full text-2xl my-1">{paragraph}</p>
        <a
          onClick={() => (window.location.href = "./submit.html")}
          className="my-5 text-indigo-600 font-bold text-[25px] no-underline cursor-pointer transform"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
};
