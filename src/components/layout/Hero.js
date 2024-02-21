import Image from "next/image";
import RightIcon from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero mt-4">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything is better with a&nbsp;<span className="text-primary">Food</span>
        </h1>
        <p className="my-6 text-gray-600 tetx-sm">
          Food is the missing pice that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full text-[13px]">
            Order Now
            <RightIcon />
          </button>
          <button className="flex gap-2 px-4 py-2 font-medium">
            Learn More <RightIcon />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout="fill"
          objectFit="contain"
          alt="Food Image"
        />
      </div>
    </section>
  );
}
