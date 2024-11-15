"use client";
// import Lottie from 'react-lottie';
// import Verify from '../../../../src/lotttie/verify.json'
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const Carrosel: React.FC = () => {

  const { toast } = useToast();
  const router = useRouter();

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
      orientation="horizontal"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1">
              <Card className="flex-1 w-full max-w-lg mx-auto p-6">

                <CardContent>
                    <div>Testando</div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Carrosel;
