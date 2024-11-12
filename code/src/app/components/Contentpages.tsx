"use client";
import React from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

interface Content {
  label: string;
  stepNumber: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  extraText?: string;
}

interface ContentPagesProps {
  contentData: Content[];
}

const ContentPages: React.FC<ContentPagesProps> = ({ contentData }) => {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <section ref={ref}>
      {contentData.map((content, idx) => (
        <Card
          key={idx}
          position={idx + 1}
          content={content}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </section>
  );
};

const Card = ({
  position,
  content,
  scrollYProgress,
}: {
  position: number;
  content: Content;
  scrollYProgress: MotionValue<number>;
}) => {
  const CARD_HEIGHT = 500;
  const CARDS_COUNT = 4;
  const scaleFromPct = (position - 1) / CARDS_COUNT;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  // Adjust to start with a white card and alternate
  const isWhiteCard = position % 2 === 1;

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y,
        background: isWhiteCard ? "white" : "black",
        color: isWhiteCard ? "black" : "white",
      }}
      className="sticky top-0 flex w-full origin-top flex-col items-center justify-center px-4"
    >
      <div className="mb-4 text-4xl">
        <div className="relative h-64 w-full overflow-hidden rounded-lg">
          <Image
            alt={content.title}
            src={content.imageUrl}
            fill
            className="absolute inset-0 object-cover"
          />
        </div>
      </div>
      <h3 className="mb-2 text-center text-2xl font-semibold md:text-4xl">
        {`${content.stepNumber}: ${content.title}`}
      </h3>
      <h4 className="text-lg font-medium text-gray-500 mb-4">{content.label}</h4>
      <p className="mb-8 max-w-lg text-center text-sm md:text-base">
        {content.description}
      </p>
      <a
        href={content.buttonLink}
        className={`flex items-center gap-2 rounded px-6 py-4 text-base font-medium uppercase transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg ${
          isWhiteCard
            ? "bg-black text-white shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black]"
            : "bg-white text-black shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]"
        }`}
      >
        <span>{content.buttonText}</span>
      </a>
    </motion.div>
  );
};

export default ContentPages;
