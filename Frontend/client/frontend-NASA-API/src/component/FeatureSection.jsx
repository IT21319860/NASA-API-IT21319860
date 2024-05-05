import React from "react";
import {
  GlobeAsiaAustraliaIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

const features = [
  {
    name: "Mars Rover Photos",
    description:
      "Mars Rover photos reveal Martian landscapes, showcasing rugged terrain, rocky outcrops, and dusty plains, offering insights into Mars' geology and potential habitability.",
      icon: GlobeAsiaAustraliaIcon,
    link:"/mars",
  },
  {
    name: "Astronomy Picture of the Day (APOD)",
    description:
      "Astronomy Picture of the Day (APOD) features stunning celestial images with concise explanations, providing daily insights into the wonders of the universe",
    icon: CameraIcon,
    link:"/apod",
  },
  
];

export default function Example() {
  return (
    <div className="bg-light-blue pt-14 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="animate-fade-right mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600 text-center">Deploy faster</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Explore through NASA about amazing scenes in the space..
          </p>
          
        </div>
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid grid-cols-1 laptop:grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16 1">
            {features.map((feature) => (
              <div key={feature.name} className="animate-fade-up relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-bl from-indigo-500 from-10% via-sky-500 via-50% to-emerald-500 to-60%">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <Link to={feature.link}>
                  {feature.name}
                    </Link>
                 
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
