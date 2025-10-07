"use client";

import type { FormEvent } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  Package,
  Clock,
  Shield,
  TrendingUp,
} from "lucide-react";
import TextType from "./TextType";

export default function HeroSection() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);

  const handleTracking = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setIsTracking(true);
    setTimeout(() => {
      window.location.href = `/tracking?number=${trackingNumber}`;
    }, 1000);
  };

  const stats = [
    { icon: Package, value: "50K+", label: "Shipments Processed" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: Shield, value: "99.5%", label: "Success Rate" },
    { icon: TrendingUp, value: "150+", label: "Countries Served" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden pt-20 p-15">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden ">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-navy-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-2s" }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl lg:text-4xl hero-title h-30 font-bold text-white  leading-snug">
              <TextType
                text={[
                  "Clearing the Way for Global Trade",
                  "Expert Customs Clearance Services",
                  "Reliable Container Shipping Solutions",
                  "Your Logistics Partner Worldwide",
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </h1>

            <p className="text-xl lg:text-2xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
              Professional customs clearance and container shipping services
              with over a decade of experience. We handle the complexity of
              international trade so you can focus on growing your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                href="/contact"
                className="button-primary text-lg px-8 py-4 inline-flex items-center justify-center"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 inline-flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Icon className="w-8 h-8 text-ocean-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-300">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Content - Tracking Widget */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-md border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-ocean-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Track Your Shipment
                </h3>
                <p className="text-slate-200">
                  Enter your tracking number for real-time updates
                </p>
              </div>

              <form onSubmit={handleTracking} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter tracking number (e.g., GLP123456789)"
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-slate-300 focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400 transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isTracking}
                  className="w-full bg-ocean-500 hover:bg-ocean-600 disabled:bg-ocean-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  {isTracking ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Tracking...
                    </>
                  ) : (
                    "Track Shipment"
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex justify-between text-sm text-slate-200">
                  <span>Need help?</span>
                  <Link
                    href="/contact"
                    className="text-ocean-300 hover:text-ocean-200 transition-colors"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="flex flex-col items-center space-y-2 text-white/70">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
