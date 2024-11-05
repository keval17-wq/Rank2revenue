// components/HomePage.tsx
import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card';
import ServicesCards from './components/ServicesCards'; // Import ServicesCards component
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

const HomePage: React.FC = () => {
  const cardData = [
    {
      title: "Project Alpha",
      tags: ["design", "development", "branding"],
      description: "Project Alpha is a sample project description used for demonstrating the layout of this card component. It includes a description of services offered.",
      imageUrl: "https://via.placeholder.com/400x300",
      buttonText: "Learn More",
      buttonLink: "#",
    },
    {
      title: "Project Beta",
      tags: ["consulting", "research", "strategy"],
      description: "Project Beta showcases a detailed case study for strategic consulting and research. This description provides generic data for display.",
      imageUrl: "https://via.placeholder.com/400x300",
      buttonText: "Read Case Study",
      buttonLink: "#",
    },
    {
      title: "Project Gamma",
      tags: ["analysis", "UI/UX", "prototyping"],
      description: "Project Gamma involves UI/UX prototyping and user testing across multiple platforms, demonstrating a user-centered approach.",
      imageUrl: "https://via.placeholder.com/400x300",
      buttonText: "View Details",
      buttonLink: "#",
    },
  ];

  return (
    <div>
      <Navbar /> {/* Navbar at the top */}
      
      <Hero
        title="Distribute your brand from design to code"
        subtitle="Introducing Design Data Platform"
        description="Specify helps you unify your brand identity by collecting, storing, and distributing design tokens and assets — automatically."
        primaryButtonText="Get in touch"
        primaryButtonLink="#"
        secondaryButtonText="Request a demo"
        secondaryButtonLink="#"
      />   {/* Hero section for the main landing content with customizable text */}

      {/* Services Section */}
      <div className="p-8">
        <ServicesCards /> {/* Renders the ServicesCards component */}
      </div>

      {/* Project Cards Section */}
      <div className="p-8 space-y-8">
        {cardData.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            tags={data.tags}
            description={data.description}
            imageUrl={data.imageUrl}
            buttonText={data.buttonText}
            buttonLink={data.buttonLink}
          />
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="p-8">
        <Testimonials />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
