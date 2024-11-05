"use client";

import React, { useEffect, useRef, useState } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

const Testimonials = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(3);

  useEffect(() => {
    if (!sliderRef.current) return; // Ensure the ref is not null

    const slider = new KeenSlider(sliderRef.current, {
      loop: true,
      defaultAnimation: {
        duration: 750,
      },
      slides: {
        origin: 'center',
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 640px)': {
          slides: { origin: 'center', perView: 1.5, spacing: 16 },
        },
        '(min-width: 768px)': {
          slides: { origin: 'center', perView: 1.75, spacing: 16 },
        },
        '(min-width: 1024px)': {
          slides: { origin: 'center', perView: 3, spacing: 16 },
        },
      },
      created(slider) {
        setTotalSlides(slider.slides.length);
        setActiveSlide(slider.track.details.rel + 1);
      },
      slideChanged(slider) {
        setActiveSlide(slider.track.details.rel + 1);
      },
    });

    document.getElementById('keen-slider-previous')?.addEventListener('click', () => slider.prev());
    document.getElementById('keen-slider-next')?.addEventListener('click', () => slider.next());

    return () => slider.destroy();
  }, []);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Read trusted reviews from our customers
        </h2>

        <div className="mt-8">
          <div ref={sliderRef} className="keen-slider">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className={`keen-slider__slide transition-opacity duration-500 ${
                  activeSlide === index + 1 ? '' : 'opacity-40'
                }`}
              >
                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      className="size-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        {[...Array(5)].map((_, starIndex) => (
                          <svg
                            key={starIndex}
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt,
                    a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius
                    accusamus error officiis atque voluptates magnam!
                  </p>
                </blockquote>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <p className="w-16 text-center text-sm text-gray-700">
              <span>{activeSlide}</span> / <span>{totalSlides}</span>
            </p>

            <button
              aria-label="Next slide"
              id="keen-slider-next"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              <svg
                className="size-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
