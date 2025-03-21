import {
  CardFive,
  CardFour,
  CardMain,
  CardSecond,
  CardThree,
} from "@/components";

export default function Home() {
  return (
    <div className="h-full w-full py-6 px-4 grid md:grid-cols-4 gap-4 pb-[100px] md:pb-4">
      <CardMain />
      <CardSecond />
      <CardThree />
      <CardFour />
      <CardFive />
      {/* <div className="bg-amber-200 rounded-2xl md:col-span-3"></div> */}
      {/* <div className="bg-violet-300 rounded-2xl min-h-[200px]"></div> */}
      {/* <div className="bg-blue-400 rounded-2xl md:col-span-2 min-h-[200px]"></div> */}
      {/* <div className="bg-green-400 rounded-2xl min-h-[200px]"></div> */}
      {/* <div className="bg-red-300 rounded-2xl min-h-[200px]"></div> */}
    </div>
  );
}
