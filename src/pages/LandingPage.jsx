import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import companies from "../data/companies.json"
import faqs from "../data/faq.json"
import Autoplay from "embla-carousel-autoplay";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find your Dream Job! <span>and get Hired with 𝗡𝗲𝘅𝘁𝗚𝗶𝗴</span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explor thousand of job listings or find the perfect candidate
        </p>
      </section>

      <div className="flex justify-center gap-6">
        {/* button */}
        <Link to={"/jobs"}>
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>
      {/* carousal */}

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ id, name, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
              <div className="p-1">
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm:h-14 object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* banner */}
      <img
        src="https://cdn.vectorstock.com/i/500p/33/89/job-position-recruit-interview-typography-banner-vector-23943389.avif"
        alt="bannerImage"
        className="h-[350px] sm:h-[500px] px-2"
      />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Search and apply for jobs, track application, and more</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Post Jobs, manage applications, and find the best candidate</p>
          </CardContent>
        </Card>
      </section>

      {/* Accordian */}
      <Accordion 
      className='px-2 bg-gray-500'
      type="single" 
      collapsible>
        {faqs.map((faq , index) => {

                return  (<AccordionItem key={index} value={`item-${index+1}`}>
                    <AccordionTrigger>
                      {faq.Question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.Answer}
                    </AccordionContent>
                  </AccordionItem>);

        })}
      </Accordion>
    </main>
  );
}

export default LandingPage
