"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "Supply Chain Director",
      company: "TechGlobal Electronics",
      content:
        "GlobalLogistics Pro has been our trusted partner for over 5 years. Their expertise in customs clearance and attention to detail has saved us countless hours and significantly reduced our shipping costs. The real-time tracking system gives us complete visibility of our supply chain.",
      rating: 5,
      image: "/images/avatar-1.jpg",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "Operations Manager",
      company: "AutoParts Plus Inc.",
      content:
        "The team at GlobalLogistics Pro understands the urgency of our just-in-time manufacturing requirements. Their express customs clearance service has been invaluable in keeping our production lines running smoothly. Highly recommended for any automotive business.",
      rating: 5,
      image: "/images/avatar-2.jpg",
    },
    {
      id: 3,
      name: "Jennifer Walsh",
      position: "Import/Export Manager",
      company: "FreshFoods International",
      content:
        "Handling perishable goods requires precision and speed. GlobalLogistics Pro's temperature-controlled shipping solutions and expert documentation services have been crucial to our success. Their 24/7 support team is always responsive and professional.",
      rating: 5,
      image: "/images/avatar-3.jpg",
    },
    {
      id: 4,
      name: "David Kim",
      position: "CEO",
      company: "Fashion Forward Ltd.",
      content:
        "As a fast-growing fashion brand, we needed a logistics partner who could scale with us. GlobalLogistics Pro not only handles our seasonal volume spikes flawlessly but also provides strategic advice on optimizing our supply chain for cost efficiency.",
      rating: 5,
      image: "/images/avatar-4.jpg",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Procurement Director",
      company: "Industrial Solutions Corp.",
      content:
        "The complexity of our heavy machinery imports was overwhelming until we partnered with GlobalLogistics Pro. Their team handled everything from specialized equipment permits to coordination with multiple agencies. Truly exceptional service.",
      rating: 5,
      image: "/images/avatar-5.jpg",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
              Client Testimonials
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold  mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what industry
              leaders say about working with GlobalLogistics Pro.
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Display */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 min-h-[400px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Client Image & Info */}
                    <div className="text-center lg:text-left">
                      <div className="w-24 h-24 bg-gradient-to-br from-navy-500 to-ocean-500 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                        <span className="text-2xl font-bold ">
                          {currentTestimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold  mb-1">
                        {currentTestimonial.name}
                      </h3>
                      <p className=" mb-1">{currentTestimonial.position}</p>
                      <p className=" text-sm">{currentTestimonial.company}</p>

                      {/* Rating */}
                      <div className="flex justify-center lg:justify-start mt-4">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="lg:col-span-2">
                      <Quote className="w-12 h-12 text-navy-200 mb-6" />
                      <blockquote className="text-lg lg:text-xl  leading-relaxed mb-6">
                        &apos;{currentTestimonial.content}&apos;
                      </blockquote>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 " />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 " />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-navy-600 w-8"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Auto-play Indicator */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className=" hover:text-slate-700 text-sm transition-colors duration-200"
          >
            {isAutoPlaying ? "⏸ Pause Auto-play" : "▶ Resume Auto-play"}
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold text-navy-600 mb-2">4.9/5</div>
            <div className=" mb-2">Average Rating</div>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold text-navy-600 mb-2">98%</div>
            <div className=" mb-2">Client Retention</div>
            <div className="text-sm ">Would recommend us</div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold  mb-2">24/7</div>
            <div className=" mb-2">Support Available</div>
            <div className="text-sm ">Always here to help</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
