// components/IndustriesServed.tsx
import React from 'react';

const industries = [
  { title: "Automotive", imageUrl: "https://epicpadprinting.com/public/img/indus/Automotive.png" },
  { title: "Toys and Baby Products", imageUrl: "https://epicpadprinting.com/public/img/indus/Toys-and-Baby-Products.png" },
  { title: "Medical", imageUrl: "https://epicpadprinting.com/public/img/indus/MEDICAL.png" },
  { title: "Glass", imageUrl: "https://epicpadprinting.com/public/img/indus/Glass.png" },
  { title: "Jewelry Coins and Medallions", imageUrl: "https://epicpadprinting.com/public/img/indus/Jewelry-coins-and-medallions.png" },
  { title: "Electric", imageUrl: "https://epicpadprinting.com/public/img/indus/Electric.png" },
  { title: "Packaging / FMCG", imageUrl: "https://epicpadprinting.com/public/img/indus/Packaging-FMCG.png" },
  { title: "Footwear", imageUrl: "https://epicpadprinting.com/public/img/indus/Footwear.png" },
  { title: "Backpacks and Umbrella", imageUrl: "https://epicpadprinting.com/public/img/indus/Backpacks-and-umbrella.png" },
  { title: "Caps and Closures", imageUrl: "https://epicpadprinting.com/public/img/indus/Caps-and-Closures.png" },
  { title: "Confectionery", imageUrl: "https://epicpadprinting.com/public/img/indus/Confectionery.png" },
  { title: "Cosmetics", imageUrl: "https://epicpadprinting.com/public/img/indus/Cosmetics.png" },
  { title: "Electronics", imageUrl: "https://epicpadprinting.com/public/img/indus/Electronics.png" },
  { title: "Consumer Electronics", imageUrl: "https://epicpadprinting.com/public/img/indus/Mobile.png" },
  { title: "Promotional", imageUrl: "https://epicpadprinting.com/public/img/indus/Promotional.png" },
  { title: "Sports", imageUrl: "https://epicpadprinting.com/public/img/indus/Sports.png" },
  { title: "Stationery", imageUrl: "https://epicpadprinting.com/public/img/indus/Stationery.png" },
  { title: "Tools", imageUrl: "https://epicpadprinting.com/public/img/indus/Tools.png" },
  { title: "Utensils", imageUrl: "https://epicpadprinting.com/public/img/indus/Utensils.png" },
];

const IndustriesServed: React.FC = () => (
  <section className="bg-white py-24 px-4 lg:px-16"> 
    <div className="container mx-auto max-w-[1300px]">
      <h1 className="text-center text-5xl pb-12">Industries we serve</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
        {industries.map((industry, index) => (
          <IndustryCard key={index} title={industry.title} imageUrl={industry.imageUrl} />
        ))}
      </div>
    </div>
  </section>
);

interface IndustryCardProps {
  title: string;
  imageUrl: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, imageUrl }) => (
  <div className="relative group h-48 flex flex-col rounded-xl bg-white text-gray-700 shadow-md">
    <a href="#" className="block">
      <div className="h-28">
        <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40 group-hover:top-[-40%] group-hover:opacity-[0.9] duration-300 w-[90%] h-48 bg-red-500 rounded-xl">
          <img
            src={imageUrl}
            alt={title}
            title={title}
            className="w-36 h-36 mt-6 m-auto"
            loading="lazy"
          />
        </div>
      </div>
      <div className="p-6 z-10 w-full text-center">
        <p className="text-xl font-semibold leading-snug">{title}</p>
      </div>
    </a>
  </div>
);

export default IndustriesServed;
