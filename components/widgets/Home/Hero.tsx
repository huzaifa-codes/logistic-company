import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="relative w-full h-[750px] sm:h-[800px] md:h-[850px] lg:h-[900px]">
 
      <Image
        src="/img/bernd-dittrich-eCc7FjMoR74-unsplash.jpg"
        alt="Hero Image"
        fill
        className="object-cover"
        priority
      />

      {/* Content */}
      <div className="absolute inset-0  container flex flex-col justify-center items-start px-5 sm:px-8 md:px-12 lg:px-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide leading-snug md:leading-[65px] text-white font-extrabold ">
          Your <span className="text-sky">Shipment,</span> Our <br className="hidden sm:block" />{" "}
          <span>Experts.</span> <br className="hidden sm:block" />
          <span className="text-sky">Logistics</span> Solutions <br className="hidden sm:block" />{" "}
          Delivered.
        </h1>

        <p className="text-gray-200  font-medium text-base sm:text-lg md:text-xl mt-3 sm:mt-4 mb-6 sm:mb-10 leading-relaxed max-w-2xl">
          Velonix Logistics extensive network of logistics professionals are here to handle{" "}
          every detail so you don’t have to.
        </p>
        <Button variant="sky" size="lg">Contact Us</Button>
      </div>
    </div>
  );
}

export default Hero;
