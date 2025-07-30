import Link from "next/link";
import Image from "next/image";

import Button from "../components/button";

const Hero = () => {
  return (
    <section className="container mx-auto flex py-40 sm:py-12 md:py-16 lg:py-40 text-center relative overflow-hidden px-4 sm:px-6 lg:px-8 items-center justify-center">
      <div className="mx-auto relative z-10">
        <Image
          src="/404.webp"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <h1 className="text-3xl py-8 text-white font-bold md:text-5xl ">
          Why are you here ?
        </h1>
        <p className="text-base text-white py-4">
          You&apos;re not supposed to be here.
        </p>
        <Link href="/">
          <Button variant="default">Go Home</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
