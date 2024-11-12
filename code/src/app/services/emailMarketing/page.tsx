"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContentPages from "../../components/Contentpages";
import ServiceNavigation from "../../components/ServiceNavigation";

const emailMarketingData = [
  {
    label: "Email Campaigns",
    stepNumber: "01",
    title: "Drive Conversions with Emails",
    description:
      "Our email marketing services are tailored to nurture leads, promote your brand, and drive conversions with personalized and engaging email campaigns.",
    buttonText: "Explore",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1581091870621-8fd8d8d28516?auto=format&fit=crop&w=1920&q=80",
    extraText: "Email Marketing (EDM)",
  },
  {
    label: "Automated Workflows",
    stepNumber: "02",
    title: "Save Time & Increase Engagement",
    description:
      "We design and implement automated email campaigns that save you time and ensure your audience receives timely, relevant messages.",
    buttonText: "Automate Now",
    buttonLink: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1598837126231-bff3208fc1c2?auto=format&fit=crop&w=1920&q=80",
    extraText: "Email Automation",
  },
];

const EmailMarketing = () => {
  return (
    <div>
      <Navbar />
      <ContentPages contentData={emailMarketingData} />
      <ServiceNavigation
        previousService={{ name: "Content Creation", link: "/services/contentCreation" }}
        nextService={{ name: "Area Marketing", link: "/services/areaMarketing" }}
      />
      <Footer />
    </div>
  );
};

export default EmailMarketing;
