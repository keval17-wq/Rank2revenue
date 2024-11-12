'use client';
import React from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white text-black">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
        {/* Background Accent Shapes */}
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-indigo-700 blur-xl opacity-80 lg:opacity-90"></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-green-500 blur-xl opacity-90"></span>
        </div>

        {/* Top Background Accent */}
        <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-indigo-600 via-blue-500 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-70 skew-x-12 rotate-90"></span>

        {/* Main Content Section */}
        <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
          <p className="text-lg font-semibold text-gray-700">{subtitle}</p>
          <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl font-bold text-black">
            {title}
          </h1>
          <p className="mt-8 text-gray-600">{description}</p>

          {/* Buttons */}
          <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0 gap-5">
            <a
              href={primaryButtonLink}
              className="rounded-full bg-indigo-800 px-6 py-3 text-white font-medium hover:bg-indigo-700 shadow-lg transition ease-linear duration-300"
            >
              {primaryButtonText}
            </a>
            <a
              href={secondaryButtonLink}
              className="rounded-full border border-gray-600 px-6 py-3 font-medium text-gray-600 hover:bg-gray-800 transition ease-linear duration-300"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
          <Image
            src="https://agencex-astro.vercel.app/images/image1.webp"
            alt="Hero image"
            fill
            className="rounded-3xl object-cover lg:max-h-none max-h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
