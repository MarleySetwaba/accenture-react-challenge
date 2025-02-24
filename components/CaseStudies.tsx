import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionHeader from "./SectionHeader";


const Slider = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <div className={`relative max-w-md h-[350px] bg-center bg-cover bg-no-repeat bg-[url('/assets/olympian.jpeg')] border-gray-200 rounded-lg shadow-sm`}>
      <div className="absolute bottom-0 p-5">
        <div className="bg-primary-active w-12 h-1.5 rounded-md mb-3"></div>
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-3">
          The Olympian
        </h1>
        <p className="text-base md:text-lg text-gray-200">
        The only athlete in the world to do her Olympic routine in 2020.              
        </p>
      </div>
    </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <div className={`relative max-w-md h-[350px] bg-center bg-cover bg-no-repeat bg-[url('/assets/dragon.jpeg')] border-gray-200 rounded-lg shadow-sm`}>
      <div className="absolute bottom-0 p-5">
        <div className="bg-primary-active w-12 h-1.5 rounded-md mb-3"></div>
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-3">
          The Savings Jar
        </h1>
        <p className="text-base md:text-lg text-gray-200">
        Grow your savings treasure and grow your dragon.
        </p>
      </div>
    </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <div className={`relative max-w-md h-[350px] bg-center bg-cover bg-no-repeat bg-[url('/assets/skhokho.jpeg')] border-gray-200 rounded-lg shadow-sm`}>
      <div className="absolute bottom-0 p-5">
        <div className="bg-primary-active w-12 h-1.5 rounded-md mb-3"></div>
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-3">
         Skhokho seMali
        </h1>
        <p className="text-base md:text-lg text-gray-200">
        Helping South Africans become #CashCleva with Skhokho and TymeBank.
        </p>
      </div>
    </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

const CaseStudies = () => {
  return (
    <div className="px-10 py-24">
      <SectionHeader text="Case Studies" />
      <div className=""></div>
      <Slider />
    </div>
  );
};

export default CaseStudies;
