import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";

const Contacts = () => {
  return (
    <div className="flex flex-col gap-6 py-6 px-4 justify-center items-center w-full">
      <h1 className="text-3xl font-semibold">Contact us</h1>
      <form className="flex flex-col gap-4 max-w-[450px] w-full" action="">
        <Input label="Email" type="email" />
        <Textarea
          className="w-full"
          label="Description"
          placeholder="Enter your description"
        />
        <Button color="primary">Submit</Button>
      </form>
    </div>
  );
};

export default Contacts;
