"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Package,
  Ship,
  Users,
  Globe,
  TrendingUp,
  Award,
  Shield, // <-- add this
  ArrowRight,
} from "lucide-react";

export default function Statistics() {
  const [stats, setStats] = useState([
    {
      value: 0,
      target: 50000,
      label: "Shipments Processed",
      icon: Package,
      suffix: "+",
    },
    {
      value: 0,
      target: 150,
      label: "Countries Served",
      icon: Globe,
      suffix: "+",
    },
    {
      value: 0,
      target: 99.5,
      label: "Success Rate",
      icon: TrendingUp,
      suffix: "%",
    },
    {
      value: 0,
      target: 2500,
      label: "Happy Clients",
      icon: Users,
      suffix: "+",
    },
    {
      value: 0,
      target: 14,
      label: "Years Experience",
      icon: Award,
      suffix: "+",
    },
    { value: 0, target: 24, label: "Hour Support", icon: Ship, suffix: "/7" },
  ]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 frames per second
      const interval = duration / steps;

      const counters = stats.map((stat, index) => {
        const increment = stat.target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.target) {
            current = stat.target;
            clearInterval(timer);
          }

          setStats((prev) =>
            prev.map((s, i) =>
              i === index ? { ...s, value: Math.round(current * 10) / 10 } : s
            )
          );
        }, interval);

        return timer;
      });

      return () => {
        counters.forEach((timer) => clearInterval(timer));
      };
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("statistics-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isVisible, stats]);

  return (
    <section
      id="statistics-section"
      className="section-padding bg-gradient-to-r from-navy-900 to-ocean-800"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full  text-sm font-medium mb-4">
              Our Track Record
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold  mb-6">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl  max-w-3xl mx-auto">
              Over a decade of excellence in logistics, serving thousands of
              satisfied clients across six continents with unmatched reliability
              and expertise.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-ocean-400 to-navy-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 " />
                  </div>

                  <div className="text-4xl lg:text-5xl font-bold  mb-2">
                    {stat.value.toLocaleString()}
                    {stat.suffix}
                  </div>

                  <div className="text-lg font-medium  mb-4">{stat.label}</div>

                  <div className="w-16 h-1 bg-gradient-to-r from-ocean-400 to-navy-400 mx-auto rounded-full"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Metrics */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold  mb-6">Performance Metrics</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="">On-time Delivery</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-[98%] h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                  </div>
                  <span className=" font-medium">98%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="">Customer Satisfaction</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-[96%] h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
                  </div>
                  <span className=" font-medium">96%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="">Cargo Safety Rate</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-[99.5%] h-full bg-gradient-to-r from-purple-400 to-purple-500 rounded-full"></div>
                  </div>
                  <span className=" font-medium">99.5%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="">Documentation Accuracy</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-[99%] h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
                  </div>
                  <span className=" font-medium">99%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications & Awards */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold  mb-6">
              Certifications & Awards
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Licensed Customs Broker", icon: Award },
                { name: "C-TPAT Certified", icon: Shield },
                { name: "ISO 9001:2015", icon: Award },
                { name: "AEO Authorized", icon: Award },
                { name: "IATA Certified", icon: Award },
                { name: "Better Business Bureau", icon: Award },
              ].map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg"
                  >
                    <Icon className="w-5 h-5 text-ocean-400" />
                    <span className="text-sm ">{cert.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold  mb-4">
              Ready to Experience Excellence?
            </h3>
            <p className="text-xl  mb-8">
              Join thousands of satisfied customers who trust us with their
              logistics needs. Get your personalized quote today and see the
              difference expertise makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-ocean-500 hover:bg-ocean-600  font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                Get Your Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13105550123"
                className="border-2 border-white  font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-navy-900 transition-colors duration-200 inline-flex items-center justify-center"
              >
                Speak with Expert
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
