import { EnvelopeSimple } from "phosphor-react";

const Mail = () => {
  return (
    <div
      title="abdulkarimceilinganddecor@gmail.com"
      className="w-fit sticky bottom-4 left-full p-2 md:p-4 m-4 bg-primary-500 hover:bg-primary-600 text-surface-500 rounded-md cursor-pointer z-40shadow-md"
    >
      <EnvelopeSimple size={26} weight="fill" />
    </div>
  );
};

export default Mail;
