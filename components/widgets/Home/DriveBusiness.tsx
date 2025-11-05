import Heading from '@/components/ui/heading'
import React from 'react'
import {
  Card,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

function DriveBusiness() {
  const cards = [
    {
      title: "Shippers",
      description:
        "From full truckload LTL, our knowledgeable team ensures your shipping needs are met.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Carriers",
      description:
        "With thousands of loads available weekly, all types of freight, and quick, reliable pay, we keep you rolling.",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Agents",
      description:
        "Let Armstrong handle the back-office support, so you can focus on your business.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
 <section className='border-b-4 border-sky-600'>
   <div className='container section  border-sky-600'>
      <Heading>Drive Your Business with Armstrong</Heading>
        <p className="text-gray-600 text-center text-base md:text-lg mt-2 mb-10">
        Hundreds of loads moving daily throughout the Armstrong network.
      </p>


      <div className="relative flex-center flex-wrap gap-6  to-transparent">
        {cards.map((card, i) => (
          <Card
            key={i}
            className="w-[320px] md:w-[370px] h-[500px] overflow-hidden rounded-2xl hover:shadow-xl transition-all duration-300"
          >
    
            <div className="relative w-full h-60 overflow-hidden m-0 p-0">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover top-0 left-0"
              />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-sky-500"></div>
            </div>

            <CardContent>
              <CardTitle className="text-xl font-bold mb-2">{card.title}</CardTitle>
              <CardDescription className="text-gray-800 leading-relaxed text-base">
                {card.description}
              </CardDescription>
            </CardContent>

            <CardFooter className="justify-end">
              <Button className="absolute bottom-6 btn-black rounded-full w-10 h-10 flex items-center justify-center transition-all">
                <ArrowRight size={18} />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
 </section>

  );
}

export default DriveBusiness;
