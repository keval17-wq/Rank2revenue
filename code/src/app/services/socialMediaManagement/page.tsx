"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContentPages from "../../components/Contentpages";
import ServiceNavigation from "../../components/ServiceNavigation";

const socialMediaManagementData = [
  {
    label: "Engage & Connect",
    stepNumber: "01",
    title: "Social Media Management",
    description:
      "We manage your social media platforms to ensure consistent branding and engaging content that keeps your audience interested and connected to your business.",
    buttonText: "Get Started",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=1920&q=80",
    extraText: "Social Media Management",
  },
  {
    label: "Ad Campaigns",
    stepNumber: "02",
    title: "Maximize Your ROI",
    description:
      "Our experts create and manage targeted ad campaigns on platforms like Facebook, Instagram, and LinkedIn to boost engagement and drive conversions.",
    buttonText: "Start Now",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1920&q=80",
    extraText: "Social Media Ads",
  },
];

const SocialMediaManagement = () => {
  return (
    <div>
      <Navbar />
      <ContentPages contentData={socialMediaManagementData} />
      <ServiceNavigation
        previousService={{ name: "SEO Optimization", link: "/services/seoOptimization" }}
        nextService={{ name: "Content Creation", link: "/services/contentCreation" }}
      />
      <Footer />
    </div>
  );
};

export default SocialMediaManagement;
