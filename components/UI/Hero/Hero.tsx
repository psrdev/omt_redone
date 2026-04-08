"use client";

interface HeroProps {
  backgroundImage?: string;
  heading?: string;
  subheading?: string;
  gradient?: string;
  className?: string;
}

export default function Hero({
  backgroundImage,
  heading,
  subheading,
  gradient = "radial-gradient(135deg, rgba(27, 27, 27, 0.5), rgba(37, 37, 37, 0.3))",
  className = "",
}: HeroProps) {
  return (
    <section
      className={`hero relative w-full flex items-center justify-center text-center text-white ${className}`}
      style={{
        backgroundImage: backgroundImage
          ? `${gradient}, url(${backgroundImage})`
          : gradient,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content p-4 md:p-8 lg:p-16 max-w-5xl">
        {heading && (
          <h1 className="hero-heading text-3xl md:text-5xl font-bold mb-4">
            {heading}
          </h1>
        )}
        {subheading && (
          <p className="hero-subheading text-base md:text-lg">{subheading}</p>
        )}
      </div>
    </section>
  );
}
