"use client"
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import Image from 'next/image';
import Languse from './Languse';

const UsersGet = ({ Portfolio }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full mt-24"
        data-aos="zoom-in"
      >
        <CarouselContent className='h-[700px] '>
          {Portfolio?.map((t, index) => (
            <CarouselItem
              key={index}
              className=" md:basis-1/2 lg:basis-1/3  cursor-pointer    transition-transform duration-100 transform hover:scale-90"
              onClick={() => setActiveIndex(index)}
            >
              <div className="pl-1">
                <Card className={`shadow-lg border rounded-lg ${activeIndex === index ? 'hover:shadow-xl' : ''}`}>
                  <CardContent className="flex flex-col aspect-square gap-2 p-6">
                    <Image
                      src={t?.images?.url}
                      alt="sa"
                      width={1000}
                      height={1000}
                      style={{ borderRadius: '10px' }}
                      className="sm:h-[220px]"
                    />
                    <span className="text-2xl pl-2 pr-2 font-semibold">{t?.title}</span>
                    <h1 className="pl-2 pr-2 text-sm line-clamp-2">{t?.description}</h1>
                  </CardContent>
                  <div className="flex justify-end p-4 w-full">
                    <Dialog>
                      <DialogTrigger>
                        <Button
                          variant="outline"
                          onClick={() => setActiveIndex(index)}
                          className="hover:bg-gray-200"
                        >
                          Open
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[1300px] flex items-center">
                        <DialogHeader>
                          <div className="flex gap-5 flex-wrap justify-center">
                            <div>
                              <Image
                                src={t?.images?.url}
                                alt="sa"
                                width={600}
                                height={1000}
                                className="sm:h-[350px]"
                                style={{ borderRadius: '10px' }}
                              />
                            </div>
                            <div className="sm:w-[570px]">
                              <DialogTitle className="text-sm text-[35px] text-left">{t?.title}</DialogTitle>
                              <DialogDescription className="mt-2 sm:w-96 text-left">
                                {t?.description}
                              </DialogDescription>
                              <div>
                                <div>
                                  <h1 className="text-red-600 sm:text-[25px] mt-3 text-left">Project Stack</h1>
                                  <Languse portfoliocom={t.portfoliocom} />

                                  <Button onClick={()=>window.open(`${t?.url}`, '_blank')}  className="btn" variant="outline">
                                    View Project
                                    <svg
                                      stroke="currentColor"
                                      fill="none"
                                      strokeWidth="0"
                                      viewBox="0 0 15 15"
                                      className="Modal_sourceIcon__yLMXk"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
            <CarouselPrevious className="z-30 position-absolute top-1/3 mx-5" />
            <CarouselNext className='position-absolute top-1/3 mx-5' />
      </Carousel>
    </div>
  );
};

export default UsersGet;
