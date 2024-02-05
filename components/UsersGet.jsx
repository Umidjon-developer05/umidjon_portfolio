"use client"
import React, { useEffect, useState } from 'react';
import "./UsersGet.css"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button';
import Image from 'next/image';
const UsersGet = ({Portfolio}) => {
    console.log(Portfolio);
 

    return (
        <div className="container mx-auto">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full mt-24"
        >
          <CarouselContent className="flex">
            {Portfolio?.map((t, index) => (
              <CarouselItem
                key={index}
                className="pl-3  md:basis-1/2 lg:basis-1/3 cursor-pointer"
              >
                <div className="pl-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image src={t?.images?.url} alt='sa' width={1000} height={1000}/>
                    </CardContent>
                    <span className="text-2xl pl-2 pr-2 font-semibold">
                      {t?.title}
                    </span>
                    <h1 className="col-span-2 pl-2 pr-2 font-semibold">
                      {t?.description}
                    </h1>
                    <div className='flex justify-end p-4'>
                      <Dialog>
                        <DialogTrigger>
                          <Button
                            variant="outline"
                            onClick={() => (index)}
                          >
                            Open
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{t?.title} </DialogTitle>
                            <DialogDescription>{t?.description}</DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='z-30'  />
         <CarouselNext   />

        </Carousel>
      </div>
    );
};

export default UsersGet;
