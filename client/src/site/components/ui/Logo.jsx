import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
    to='/'
      className="relative flex flex-col items-center justify-center gap-1 md:px-1 md:w-[20%]"
    >
      <div className="absolute top-3.5 md:top-3 -inset-1.5 md:inset-x-5 bg-primary-600/20 h-7 md:h-10 md:w-[80%]" />
      <div className="flex items-center justify-center leading-8 md:leading-4 px-2 md:px-1 border-2 border-primary-500 text-primary-500 font-bold text-2xl md:text-lg">
        AC<span className="text-sm">&</span>D
      </div>
      <div className="hidden md:block text-center">
        <h2 className="text-xs font-bold md:font-semibold tracking-wide">
          ABDULKARIM
        </h2>
        <p className="text-primary-500 text-xs">CEILING AND DECOR & CO</p>
      </div>
    </Link>
  );
};
export default Logo;
