import { ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CustomButton from "../atoms/CustomButton";

const FormConsultation = () => {
  return (
    <form className="w-full flex flex-col gap-5">
      <Input variant="glass" type="text" placeholder="Full Name *" className="p-5 placeholder:text-color-lightGray" required />
      <Input variant="glass" type="email" placeholder="Email *" className="p-5 placeholder:text-color-lightGray" required />
      <Input variant="glass" type="number" placeholder="Phone *" className="p-5 placeholder:text-color-lightGray" required />
      <Textarea
        variant="glass"
        placeholder="Consultation *"
        rows={4}
        required
        className="resize-none"
      />
      {/* <Button type="submit" variant="softGreen" className="w-fit px-1 py-1 h-12 font-gabarito font-semibold self-end">
        <span className="flex items-center justify-center bg-color-softPurple text-white rounded-full h-10 w-10">
          <ChevronRight />
        </span>
        <span className="flex-grow flex items-center justify-center px-5 text-color-dark">
          Send Message
        </span>
      </Button> */}
      <CustomButton type="submit" variant="purple">Send Message</CustomButton>
    </form>
  );
};
export default FormConsultation;
