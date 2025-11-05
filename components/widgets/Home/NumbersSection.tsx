import Heading from "@/components/ui/heading";
import React from "react";

function NumbersSection() {
  const stats = [
    { value: "170", label: "Number of Offices" },
    { value: "2M+", label: "Shipments to Date" },
    { value: "40K+", label: "Carrier Partners" },
  ];

  return (
    <section className="container section text-center  ">
      <Heading >
        Armstrong by the Numbers
      </Heading>
      <p className="text-gray-600 text-base md:text-lg mt-2 mb-10">
        Hundreds of loads moving daily throughout the Armstrong network.
      </p>

      {/* Stats */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0">
        {stats.map((item, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center px-6">
              <h3 className="text-sky-500 text-5xl font-extrabold">{item.value}</h3>
              <p className="text-gray-700 font-medium mt-2">{item.label}</p>
            </div>

            {/* Vertical divider except last item */}
            {i < stats.length - 1 && (
              <div className="hidden md:block w-px h-16 bg-gray-300 mx-8"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default NumbersSection;
