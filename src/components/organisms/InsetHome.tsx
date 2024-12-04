"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const InsetHome1 = () => {
  return (
    <div className="flex items-center justify-center">
    <Carousel className="w-full max-w-3xl py-6">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="shadow-lg">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <img          
                    src="img\worker1.png"
                    alt="Profissional"
                    className="w-40 h-40 object-cover transform scale-x-[-1]" 
                  />
                  <span className="text-2xl font-semibold">{index + 1}</span>
                  <p>Lorem ipsun</p>

                  <a href="/home">Ler Mais</a>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  </div>
  );
};

export default InsetHome1;
