"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContentPages from "../../components/Contentpages";
import ServiceNavigation from "../../components/ServiceNavigation";

const websiteDevelopmentData = [
  {
    label: "Custom Solutions",
    stepNumber: "01",
    title: "Tailored for Your Business",
    description:
      "We create professional, responsive websites tailored to your business needs, ranging from simple starter sites to fully customized websites with advanced features.",
    buttonText: "Read More",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
    extraText: "Website Development",
  },
  {
    label: "E-commerce Platforms",
    stepNumber: "02",
    title: "Sell Online with Ease",
    description:
      "Our team specializes in developing e-commerce platforms that are easy to use and optimized for conversions, featuring seamless payment integrations and a smooth user experience.",
    buttonText: "Explore More",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1522204512849-88b98f0c5dcb?auto=format&fit=crop&w=1920&q=80",
    extraText: "E-commerce Solutions",
  },
];

const WebsiteDevelopment = () => {
  return (
    <div>
      <Navbar />
      <ContentPages contentData={websiteDevelopmentData} />
      <ServiceNavigation
        previousService={{ name: "Area Marketing", link: "/services/areaMarketing" }}
        nextService={{ name: "SEO Optimization", link: "/services/seoOptimization" }}
      />
      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;
