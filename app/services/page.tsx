"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, Ship, Plane, Truck, Check } from "lucide-react";

type ServiceKey = "customs" | "shipping" | "airfreight" | "landtransport";

export default function Services() {
  const [activeService, setActiveService] = useState<ServiceKey>("customs");

  const services = {
    customs: {
      id: "customs",
      title: "Customs Clearance",
      icon: Package,
      description:
        "Expert customs brokerage services with 99.5% success rate. We handle all documentation, compliance, and regulatory requirements for seamless import and export operations.",
      features: [
        "Import and export documentation preparation",
        "Harmonized Tariff Schedule (HTS) classification",
        "Customs bond services and duty calculation",
        "Regulatory compliance consulting",
        "FDA, USDA, and other agency clearances",
        "Express clearance for time-sensitive shipments",
      ],
      benefits: [
        {
          title: "Fast Processing",
          description: "24-48 hour clearance for most shipments",
        },
        {
          title: "High Success Rate",
          description: "99.5% first-time clearance success",
        },
        {
          title: "Expert Team",
          description: "Licensed customs brokers with 10+ years experience",
        },
        {
          title: "Cost Savings",
          description: "Optimized duty calculations and fee structures",
        },
      ],
      pricing: {
        base: "$150-300",
        complex: "$300-500",
        express: "+$100-200",
      },
      process: [
        {
          step: 1,
          title: "Document Review",
          description: "Comprehensive review of all required documentation",
        },
        {
          step: 2,
          title: "Classification",
          description: "Accurate HTS code classification and valuation",
        },
        {
          step: 3,
          title: "Filing",
          description: "Electronic filing with customs authorities",
        },
        {
          step: 4,
          title: "Clearance",
          description: "Coordination with customs for smooth clearance",
        },
        {
          step: 5,
          title: "Delivery",
          description: "Arrangement of final delivery to destination",
        },
      ],
    },
    shipping: {
      id: "shipping",
      title: "Container Shipping",
      icon: Ship,
      description:
        "Comprehensive FCL and LCL shipping solutions with competitive rates and reliable transit times worldwide. We handle all container types and special cargo requirements.",
      features: [
        "Full Container Load (FCL) - 20ft, 40ft, 40ft HC",
        "Less than Container Load (LCL) consolidation",
        "Refrigerated containers (reefer) for temperature-sensitive cargo",
        "Special equipment: flat racks, open top containers",
        "Door-to-door delivery services",
        "Real-time tracking and status updates",
      ],
      benefits: [
        {
          title: "Global Coverage",
          description: "Major trade lanes to 150+ countries",
        },
        {
          title: "Competitive Rates",
          description: "Volume discounts and flexible pricing options",
        },
        {
          title: "Reliable Transit",
          description: "Consistent schedules and on-time delivery",
        },
        {
          title: "Cargo Safety",
          description: "Comprehensive insurance and security measures",
        },
      ],
      pricing: {
        fcl_20ft: "$1,500-3,000",
        fcl_40ft: "$2,500-4,500",
        lcl: "$50-150/m³",
      },
      process: [
        {
          step: 1,
          title: "Booking",
          description: "Container booking and space allocation",
        },
        {
          step: 2,
          title: "Pickup",
          description: "Cargo pickup and drayage to port",
        },
        {
          step: 3,
          title: "Loading",
          description: "Container loading and securing",
        },
        {
          step: 4,
          title: "Voyage",
          description: "Ocean transit with real-time tracking",
        },
        {
          step: 5,
          title: "Delivery",
          description: "Port discharge and final delivery",
        },
      ],
    },
    airfreight: {
      id: "airfreight",
      title: "Air Freight",
      icon: Plane,
      description:
        "Fast and reliable air cargo services for time-sensitive shipments with global network coverage and priority handling options.",
      features: [
        "Express air freight services worldwide",
        "Charter options for oversized or urgent cargo",
        "Temperature-controlled cargo handling",
        "Priority handling and expedited clearance",
        "Consolidation services for cost optimization",
        "Real-time flight tracking and status updates",
      ],
      benefits: [
        {
          title: "Speed",
          description: "Fastest transit times for urgent shipments",
        },
        {
          title: "Reliability",
          description: "Consistent flight schedules and handling",
        },
        {
          title: "Security",
          description: "Enhanced security measures and tracking",
        },
        {
          title: "Global Reach",
          description: "Access to major airports worldwide",
        },
      ],
      pricing: {
        standard: "$3-8/kg",
        express: "$8-15/kg",
        charter: "Custom Quote",
      },
      process: [
        {
          step: 1,
          title: "Booking",
          description: "Flight booking and space confirmation",
        },
        {
          step: 2,
          title: "Pickup",
          description: "Cargo pickup and delivery to airport",
        },
        {
          step: 3,
          title: "Processing",
          description: "Documentation and security screening",
        },
        {
          step: 4,
          title: "Flight",
          description: "Air transit with real-time tracking",
        },
        {
          step: 5,
          title: "Delivery",
          description: "Airport pickup and final delivery",
        },
      ],
    },
    landtransport: {
      id: "landtransport",
      title: "Land Transport",
      icon: Truck,
      description:
        "Comprehensive ground transportation services across North America with modern fleet and GPS tracking for real-time visibility.",
      features: [
        "Full truckload (FTL) services",
        "Less than truckload (LTL) consolidation",
        "Intermodal transportation solutions",
        "Temperature-controlled trucking",
        "Oversized and heavy haul capabilities",
        "GPS tracking and 24/7 monitoring",
      ],
      benefits: [
        {
          title: "Coverage",
          description: "Comprehensive North American coverage",
        },
        {
          title: "Flexibility",
          description: "Multiple service levels and equipment types",
        },
        {
          title: "Tracking",
          description: "Real-time GPS tracking and updates",
        },
        {
          title: "Efficiency",
          description: "Optimized routes and fuel efficiency",
        },
      ],
      pricing: {
        ftl: "$1.50-3.00/mile",
        ltl: "$50-200/pallet",
        dedicated: "Custom Quote",
      },
      process: [
        {
          step: 1,
          title: "Planning",
          description: "Route planning and carrier selection",
        },
        { step: 2, title: "Pickup", description: "Cargo pickup and loading" },
        {
          step: 3,
          title: "Transit",
          description: "Ground transport with GPS tracking",
        },
        {
          step: 4,
          title: "Monitoring",
          description: "Real-time monitoring and updates",
        },
        {
          step: 5,
          title: "Delivery",
          description: "Final delivery and confirmation",
        },
      ],
    },
  };

  const currentService = services[activeService];
  const Icon = currentService.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-navy-900 to-ocean-800">
        <div className="container-custom">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto">
                Comprehensive logistics solutions designed to streamline your
                supply chain, reduce costs, and improve efficiency across all
                modes of transportation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.values(services).map((service) => {
              const ServiceIcon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id as ServiceKey)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeService === service.id
                      ? "bg-navy-600 text-white shadow-lg"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <ServiceIcon className="w-5 h-5" />
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>

          {/* Service Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            >
              {/* Service Overview */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-ocean-500 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900">
                        {currentService.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {currentService.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentService.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process Flow */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">
                      Process Flow
                    </h3>
                    <div className="space-y-4">
                      {currentService.process.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-navy-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {step.step}
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900">
                              {step.title}
                            </h4>
                            <p className="text-sm text-slate-600">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits & Pricing */}
              <div className="space-y-8">
                {/* Benefits */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">
                    Benefits
                  </h3>
                  <div className="space-y-4">
                    {currentService.benefits.map((benefit, index) => (
                      <div key={index} className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-slate-900 mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {benefit.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-br from-navy-600 to-ocean-600 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-6">Pricing</h3>
                  <div className="space-y-4">
                    {Object.entries(currentService.pricing).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center"
                        >
                          <span className="text-slate-200 capitalize">
                            {key
                              .replace("_", " ")
                              .replace("fcl", "FCL")
                              .replace("lcl", "LCL")}
                          </span>
                          <span className="font-bold">{value}</span>
                        </div>
                      )
                    )}
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-sm text-slate-200 mb-4">
                      Prices vary based on route, season, and service level
                    </p>
                    <button className="w-full bg-white text-navy-600 font-semibold py-3 px-4 rounded-lg hover:bg-slate-100 transition-colors duration-200">
                      Get Custom Quote
                    </button>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                      Track Shipment
                    </button>
                    <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                      Download Brochure
                    </button>
                    <button className="w-full border-2 border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-navy-900 to-ocean-800">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Streamline Your Logistics?
            </h2>
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
              Let our experts analyze your supply chain and create a customized
              solution that optimizes costs, reduces transit times, and improves
              efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-ocean-500 hover:bg-ocean-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-navy-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
                Calculate Shipping Costs
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
