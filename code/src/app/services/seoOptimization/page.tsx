"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContentPages from "../../components/Contentpages";
import ServiceNavigation from "../../components/ServiceNavigation";

const seoOptimizationData = [
  {
    label: "On-Page SEO",
    stepNumber: "01",
    title: "Boost Your Online Presence",
    description:
      "Our SEO optimization services are designed to improve your website’s visibility on search engines, helping you attract more organic traffic and potential customers.",
    buttonText: "Discover More",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80",
    extraText: "SEO Optimization",
  },
  {
    label: "Local SEO Services",
    stepNumber: "02",
    title: "Dominate Local Searches",
    description:
      "We optimize your website for local search results, ensuring that your business appears in front of the right people at the right time in your local area.",
    buttonText: "Learn More",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1484863137850-59afcfe05386?auto=format&fit=crop&w=1920&q=80",
    extraText: "Local SEO",
  },
];

const SEOOptimization = () => {
  return (
    <div>
      <Navbar />
      <ContentPages contentData={seoOptimizationData} />
      <ServiceNavigation
        previousService={{ name: "Website Development", link: "/services/websiteDevelopment" }}
        nextService={{ name: "Social Media Management", link: "/services/socialMediaManagement" }}
      />
      <Footer />
    </div>
  );
};

export default SEOOptimization;
