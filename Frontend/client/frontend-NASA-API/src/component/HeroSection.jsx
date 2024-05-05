import React from "react";


export default function HeroSection() {
  return (
    <div>
      <section className="bg-hero-pattern3 bg-no-repeat bg-cover bg-fixed bg-clip-border bg-origin-padding h-64 dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="animate-fade-right animate-once animate-once max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl blue-700 dark:text-white">
             The NASA
            </h1>
            <p className="animate-fade-right animate-once max-w-7xl mb-6 font-bold text-white-600 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
            NASA, the National Aeronautics and Space Administration, epitomizes humanity's relentless pursuit of knowledge and exploration. Since its inception in 1958, NASA has been the driving force behind our quest to unravel the mysteries of the cosmos and push the boundaries of scientific discovery.
             With a multifaceted mandate encompassing space exploration, scientific research, and aeronautics and aerospace advancements, NASA's endeavors transcend the realm of mere science; they embody the very essence of human ingenuity and aspiration. Through its awe-inspiring missions, from the historic Apollo moon landings to the ongoing exploration of Mars and beyond,
              NASA captivates our imagination and inspires generations to dream boldly and reach for the stars.
            </p>

            <a
              href="https://www.nasa.gov/" 
              target="_blank"
              className="animate-jump animate-once inline-flex items-center justify-center px-5 py-3 text-base font-extrabold text-center text-blue-700 border border-gray-300 rounded-lg hover:bg-gray-300 focus:ring-4 focus:ring-gray-100 dark:text-green dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              NASA Official Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
