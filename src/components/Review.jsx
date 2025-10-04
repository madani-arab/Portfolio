أكيد، هذا نفس الكود تمامًا لكن بدون أي تعليقات 👇

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    content:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    name: "Sophia Ramirez",
    imgSrc: "/images/people-1.jpg",
    company: "PixelForge",
  },
  {
    content:
      "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
    name: "Ethan Caldwell",
    imgSrc: "/images/people-2.jpg",
    company: "NexaWave",
  },
  {
    content:
      "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
    name: "Liam Bennett",
    imgSrc: "/images/people-3.jpg",
    company: "CodeCraft",
  },
  {
    content:
      "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
    name: "Noah Williams",
    imgSrc: "/images/people-4.jpg",
    company: "BrightWeb",
  },
  {
    content:
      "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
    name: "Ava Thompson",
    imgSrc: "/images/people-5.jpg",
    company: "TechMosaic",
  },
  {
    content:
      "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
    name: "Jonathan",
    imgSrc: "/images/people-6.jpg",
    company: "Skyline Digital",
  },
];

const Review = () => {
  const sliderRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const clone = slider.innerHTML;
    slider.innerHTML += clone;

    tl.current = gsap.to(slider, {
      xPercent: -50,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });

    slider.addEventListener("mouseenter", () => tl.current.pause());
    slider.addEventListener("mouseleave", () => tl.current.play());

    return () => {
      tl.current.kill();
    };
  }, []);

  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8">What My Customers Say</h2>
        <div
          ref={sliderRef}
          className="scrub-slide flex items-stretch gap-3 w-fit will-change-transform"
          style={{
            overflowX: "auto",
            cursor: "grab",
            scrollBehavior: "smooth",
          }}
        >
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
