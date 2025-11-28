import { WhatsappLogo } from "phosphor-react";

const Mail = () => {
  return (
    <a
      href="https://wa.me/2348035843896
"
      target="_blank"
      rel="noopener noreferrer"
      title="Abdulkarim Ceiling and Decor"
      className="w-fit fixed bottom-4 right-4 md:right-8 p-2 md:p-4 bg-primary-500 hover:bg-whatsapp-500 text-whatsapp-500 hover:text-surface-500 rounded-full cursor-pointer z-50 shadow-md"
    >
      <WhatsappLogo size={26} weight="fill"  />
    </a>
  );
};

export default Mail;
