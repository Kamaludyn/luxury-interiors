import { Link } from "react-router-dom";
import logoImg from "../../../assets/imgs/logo.PNG";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 group transition-opacity hover:opacity-90"
      aria-label="AC&D - AbdulKarim Ceiling and Decor Home"
    >
      <img
        src={logoImg}
        alt="AC&D Logo"
        className="h-14 md:h-16 w-auto object-contain"
        fetchPriority="high"
      />
      <div className="flex flex-col justify-center border-l border-primary-500/30 pl-3 md:mt-2">
        <h1 className="text-sm font-black leading-none text-[#1B263B] tracking-tight">
          ABDULKARIM
        </h1>
        <p className="text-[12px] md:text-[10px] font-bold text-primary-500 leading-tight tracking-widest">
          CEILING AND DECOR
        </p>
      </div>
    </Link>
  );
};

export default Logo;
