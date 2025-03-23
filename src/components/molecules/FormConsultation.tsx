import { ChevronRight } from "lucide-react";

const FormConsultation = () => {
  return (
    <form className="w-full flex flex-col gap-5">
      <input
        type="text"
        placeholder="Full Name *"
        className="bg-white/50 backdrop-blur p-5 rounded-2xl text-white focus:outline-none placeholder:text-white "
      />
      <input
        type="email"
        placeholder="Email *"
        className="bg-white/50 backdrop-blur p-5 rounded-2xl text-white focus:outline-none placeholder:text-white "
      />
      <input
        type="number"
        placeholder="Phone *"
        className="bg-white/50 backdrop-blur p-5 rounded-2xl text-white focus:outline-none placeholder:text-white "
      />
      <textarea
        placeholder="Consultation *"
        rows={4}
        className="bg-white/50 backdrop-blur p-5 rounded-2xl text-white focus:outline-none placeholder:text-white min-h-16 w-full resize-none overflow-hidden"
      ></textarea>
      <button type="button" className="p-1 bg-white rounded-full flex gap-3 w-fit">
        <div className="flex items-center justify-center bg-color-softPurple text-white rounded-full h-10 w-10">
            <ChevronRight />
        </div>
        <div className="flex-grow flex items-center justify-center px-5 rounded-full text-color-dark bg-color-softGreen font-semibold font-gabarito">Send Message</div>
      </button>
    </form>
  );
};
export default FormConsultation;
