"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion"; // <-- added AnimatePresence
import {
  Package,
  Ship,
  Plane,
  Truck,
  Warehouse,
  FileText,
  ArrowRight,
  Check,
} from "lucide-react";
export default function ServicesOverview() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      id: "customs",
      icon: Package,
      title: "Customs Clearance",
      description:
        "Expert customs brokerage services with 99.5% success rate. We handle all documentation, compliance, and regulatory requirements.",
      features: [
        "Import/Export Documentation",
        "HTS Classification",
        "Duty Calculation",
        "Regulatory Compliance",
      ],
      color: "from-blue-500 to-blue-600",
      link: "/services#customs",
    },
    {
      id: "shipping",
      icon: Ship,
      title: "Container Shipping",
      description:
        "Comprehensive FCL and LCL shipping solutions with competitive rates and reliable transit times worldwide.",
      features: [
        "FCL & LCL Services",
        "Special Equipment",
        "Door-to-Door",
        "Real-time Tracking",
      ],
      color: "from-blue-500 to-blue-600",
      link: "/services#shipping",
    },
    {
      id: "airfreight",
      icon: Plane,
      title: "Air Freight",
      description:
        "Fast and reliable air cargo services for time-sensitive shipments with global network coverage.",
      features: [
        "Express Services",
        "Charter Options",
        "Temperature Control",
        "Priority Handling",
      ],
      color: "from-cyan-500 to-cyan-600",
      link: "/services#airfreight",
    },
    {
      id: "landtransport",
      icon: Truck,
      title: "Land Transport",
      description:
        "Comprehensive ground transportation services across North America with modern fleet and GPS tracking.",
      features: [
        "Full Truckload",
        "LTL Services",
        "Intermodal",
        "GPS Tracking",
      ],
      color: "from-green-500 to-green-600",
      link: "/services#landtransport",
    },
    {
      id: "warehousing",
      icon: Warehouse,
      title: "Warehousing",
      description:
        "Strategic storage and distribution solutions with bonded warehousing and inventory management.",
      features: [
        "Bonded Warehousing",
        "Inventory Management",
        "Order Fulfillment",
        "Cross-docking",
      ],
      color: "from-purple-500 to-purple-600",
      link: "/services#warehousing",
    },
    {
      id: "documentation",
      icon: FileText,
      title: "Documentation",
      description:
        "Complete documentation support including bills of lading, commercial invoices, and certificates.",
      features: [
        "Bill of Lading",
        "Commercial Invoices",
        "Certificates",
        "Insurance",
      ],
      color: "from-orange-500 to-orange-600",
      link: "/services#documentation",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-navy-100 text-navy-700 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From customs clearance to final delivery, we provide end-to-end
              logistics services designed to streamline your supply chain and
              reduce costs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div
                  className={`bg-white rounded-2xl shadow-lg p-8 h-full transition-all duration-300 transform ${
                    hoveredService === service.id
                      ? "scale-105 shadow-2xl -translate-y-2"
                      : ""
                  }`}
                >
                  {/* Service Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${
                      service.color
                    } rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 ${
                      hoveredService === service.id ? "scale-110 rotate-3" : ""
                    }`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-slate-600"
                      >
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-navy-600 font-semibold hover:text-navy-700 transition-colors duration-200 group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 text-slate-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-navy-600 to-ocean-600 rounded-2xl p-8  max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Need a Custom Logistics Solution?
            </h3>
            <p className="text-xl  mb-8 ">
              Our experts will analyze your supply chain and create a tailored
              solution that optimizes costs, reduces transit times, and improves
              efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-navy-600 font-semibold px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors duration-200 inline-flex items-center justify-center"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="tel:+13105550123"
                className="border-2 border-white  font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-navy-600 transition-colors duration-200 inline-flex items-center justify-center"
              >
                Call Now: +1 (310) 555-0123
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
