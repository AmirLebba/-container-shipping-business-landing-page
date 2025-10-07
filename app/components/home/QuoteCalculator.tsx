"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package,
  Ship,
  Plane,
  Truck,
  MapPin,
  DollarSign,
  ArrowRight,
  Check,
} from "lucide-react";

type Quote = {
  total: number;
  breakdown: {
    baseRate: number;
    weightCost: number;
    serviceUpgrade: number;
    insurance: number;
    transitTime: string;
  };
  serviceType: string;
  shipmentType: string;
};
type FormKey = keyof typeof formData;
type FormValue = (typeof formData)[FormKey];

export default function QuoteCalculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    shipmentType: "",
    origin: "",
    destination: "",
    weight: "",
    dimensions: { length: "", width: "", height: "" },
    cargoType: "",
    serviceType: "",
    insurance: false,
  });
  const [calculatedQuote, setCalculatedQuote] = useState<Quote | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const steps = [
    { id: 1, title: "Shipment Details", icon: Package },
    { id: 2, title: "Route Information", icon: MapPin },
    { id: 3, title: "Service Options", icon: Truck },
    { id: 4, title: "Get Quote", icon: DollarSign },
  ];

  const shipmentTypes = [
    {
      id: "fcl",
      name: "Full Container Load (FCL)",
      icon: Ship,
      baseRate: 2500,
    },
    {
      id: "lcl",
      name: "Less than Container Load (LCL)",
      icon: Package,
      baseRate: 150,
    },
    { id: "air", name: "Air Freight", icon: Plane, baseRate: 800 },
    { id: "land", name: "Land Transport", icon: Truck, baseRate: 300 },
  ];

  const serviceTypes = [
    {
      id: "standard",
      name: "Standard Service",
      multiplier: 1.0,
      transitTime: "7-14 days",
    },
    {
      id: "expedited",
      name: "Expedited Service",
      multiplier: 1.5,
      transitTime: "3-7 days",
    },
    {
      id: "express",
      name: "Express Service",
      multiplier: 2.0,
      transitTime: "1-3 days",
    },
  ];

  const calculateQuote = async () => {
    setIsCalculating(true);

    // Simulate API call
    setTimeout(() => {
      const selectedShipmentType = shipmentTypes.find(
        (type) => type.id === formData.shipmentType
      );
      const selectedServiceType = serviceTypes.find(
        (type) => type.id === formData.serviceType
      );

      if (!selectedShipmentType || !selectedServiceType) return;

      // Basic calculation logic
      let basePrice = selectedShipmentType.baseRate;

      // Weight factor
      const weight = parseFloat(formData.weight) || 0;
      if (
        selectedShipmentType.id === "lcl" ||
        selectedShipmentType.id === "air"
      ) {
        basePrice += weight * (selectedShipmentType.id === "air" ? 2.5 : 0.8);
      }

      // Service multiplier
      basePrice *= selectedServiceType.multiplier;

      // Insurance (5% of cargo value)
      if (formData.insurance) {
        basePrice *= 1.05;
      }

      // Distance factor (simplified)
      const distanceMultiplier = 1.2; // Assume international shipping
      basePrice *= distanceMultiplier;

      setCalculatedQuote({
        total: Math.round(basePrice),
        breakdown: {
          baseRate: selectedShipmentType.baseRate,
          weightCost: weight * (selectedShipmentType.id === "air" ? 2.5 : 0.8),
          serviceUpgrade: Math.round(
            basePrice * (selectedServiceType.multiplier - 1)
          ),
          insurance: formData.insurance ? Math.round(basePrice * 0.05) : 0,
          transitTime: selectedServiceType.transitTime,
        },
        serviceType: selectedServiceType.name,
        shipmentType: selectedShipmentType.name,
      });

      setIsCalculating(false);
      setCurrentStep(5); // Show results
    }, 2000);
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateQuote();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: FormKey, value: FormValue) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.shipmentType && formData.cargoType;
      case 2:
        return formData.origin && formData.destination && formData.weight;
      case 3:
        return formData.serviceType;
      default:
        return true;
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              Instant Pricing
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Get Your Shipping Quote
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Calculate shipping costs instantly with our advanced quote
              calculator. Get transparent pricing for all our logistics
              services.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          currentStep >= step.id
                            ? "bg-navy-600 text-white"
                            : "bg-slate-200 text-slate-400"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`mt-2 text-sm font-medium transition-colors duration-300 ${
                          currentStep >= step.id
                            ? "text-navy-600"
                            : "text-slate-400"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`w-16 h-1 mx-4 transition-colors duration-300 ${
                          currentStep > step.id ? "bg-navy-600" : "bg-slate-200"
                        }`}
                      ></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <AnimatePresence mode="wait">
              {/* Step 1: Shipment Details */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Select Shipment Type
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {shipmentTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <div
                          key={type.id}
                          className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                            formData.shipmentType === type.id
                              ? "border-navy-500 bg-navy-50"
                              : "border-slate-200 hover:border-navy-300"
                          }`}
                          onClick={() =>
                            updateFormData("shipmentType", type.id)
                          }
                        >
                          <div className="flex items-center space-x-3 mb-3">
                            <Icon className="w-8 h-8 text-navy-600" />
                            <h4 className="text-lg font-semibold text-slate-900">
                              {type.name}
                            </h4>
                          </div>
                          <p className="text-slate-600 text-sm">
                            Starting from ${type.baseRate.toLocaleString()}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Cargo Type
                    </label>
                    <select
                      value={formData.cargoType}
                      onChange={(e) =>
                        updateFormData("cargoType", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                    >
                      <option value="">Select cargo type</option>
                      <option value="general">General Cargo</option>
                      <option value="electronics">Electronics</option>
                      <option value="textiles">Textiles</option>
                      <option value="machinery">Machinery</option>
                      <option value="food">Food & Beverages</option>
                      <option value="chemicals">Chemicals</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Route Information */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Route Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Origin
                      </label>
                      <input
                        type="text"
                        value={formData.origin}
                        onChange={(e) =>
                          updateFormData("origin", e.target.value)
                        }
                        placeholder="City, Country (e.g., Shanghai, China)"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Destination
                      </label>
                      <input
                        type="text"
                        value={formData.destination}
                        onChange={(e) =>
                          updateFormData("destination", e.target.value)
                        }
                        placeholder="City, Country (e.g., Los Angeles, USA)"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      value={formData.weight}
                      onChange={(e) => updateFormData("weight", e.target.value)}
                      placeholder="Enter weight in kilograms"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Length (cm)
                      </label>
                      <input
                        type="number"
                        value={formData.dimensions.length}
                        onChange={(e) =>
                          updateFormData("dimensions", {
                            ...formData.dimensions,
                            length: e.target.value,
                          })
                        }
                        placeholder="Length"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Width (cm)
                      </label>
                      <input
                        type="number"
                        value={formData.dimensions.width}
                        onChange={(e) =>
                          updateFormData("dimensions", {
                            ...formData.dimensions,
                            width: e.target.value,
                          })
                        }
                        placeholder="Width"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Height (cm)
                      </label>
                      <input
                        type="number"
                        value={formData.dimensions.height}
                        onChange={(e) =>
                          updateFormData("dimensions", {
                            ...formData.dimensions,
                            height: e.target.value,
                          })
                        }
                        placeholder="Height"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Service Options */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Service Options
                  </h3>

                  <div className="space-y-4 mb-8">
                    {serviceTypes.map((service) => (
                      <div
                        key={service.id}
                        className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                          formData.serviceType === service.id
                            ? "border-navy-500 bg-navy-50"
                            : "border-slate-200 hover:border-navy-300"
                        }`}
                        onClick={() =>
                          updateFormData("serviceType", service.id)
                        }
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-semibold text-slate-900">
                              {service.name}
                            </h4>
                            <p className="text-slate-600">
                              Transit time: {service.transitTime}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-lg font-bold text-navy-600">
                              {service.multiplier > 1
                                ? `+${Math.round(
                                    (service.multiplier - 1) * 100
                                  )}%`
                                : "Standard Rate"}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.insurance}
                        onChange={(e) =>
                          updateFormData("insurance", e.target.checked)
                        }
                        className="w-5 h-5 text-navy-600 border-slate-300 rounded focus:ring-navy-500"
                      />
                      <div>
                        <span className="text-lg font-medium text-slate-900">
                          Add Cargo Insurance
                        </span>
                        <p className="text-sm text-slate-600">
                          Protect your shipment with comprehensive insurance
                          coverage (+5% of cargo value)
                        </p>
                      </div>
                    </label>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Results */}
              {currentStep === 5 && calculatedQuote && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Quote Generated!
                    </h3>
                    <p className="text-slate-600">
                      Here's your personalized shipping quote
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-navy-50 to-ocean-50 rounded-2xl p-8 mb-8">
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-navy-600 mb-2">
                        ${calculatedQuote.total.toLocaleString()}
                      </div>
                      <div className="text-lg text-slate-600">
                        {calculatedQuote.shipmentType} -{" "}
                        {calculatedQuote.serviceType}
                      </div>
                      <div className="text-sm text-slate-500 mt-2">
                        Estimated transit:{" "}
                        {calculatedQuote.breakdown.transitTime}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Base Rate:</span>
                        <span className="font-medium">
                          ${calculatedQuote.breakdown.baseRate.toLocaleString()}
                        </span>
                      </div>
                      {calculatedQuote.breakdown.weightCost > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Weight Cost:</span>
                          <span className="font-medium">
                            $
                            {calculatedQuote.breakdown.weightCost.toLocaleString()}
                          </span>
                        </div>
                      )}
                      {calculatedQuote.breakdown.serviceUpgrade > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">
                            Service Upgrade:
                          </span>
                          <span className="font-medium">
                            $
                            {calculatedQuote.breakdown.serviceUpgrade.toLocaleString()}
                          </span>
                        </div>
                      )}
                      {calculatedQuote.breakdown.insurance > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Insurance:</span>
                          <span className="font-medium">
                            $
                            {calculatedQuote.breakdown.insurance.toLocaleString()}
                          </span>
                        </div>
                      )}
                      <div className="border-t border-slate-200 pt-3 mt-3">
                        <div className="flex justify-between font-semibold text-lg">
                          <span>Total:</span>
                          <span>${calculatedQuote.total.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => {
                        setCurrentStep(1);
                        setCalculatedQuote(null);
                        setFormData({
                          shipmentType: "",
                          origin: "",
                          destination: "",
                          weight: "",
                          dimensions: { length: "", width: "", height: "" },
                          cargoType: "",
                          serviceType: "",
                          insurance: false,
                        });
                      }}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                    >
                      Calculate New Quote
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-navy-600 to-ocean-500 hover:from-navy-700 hover:to-ocean-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center">
                      Book This Shipment
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {currentStep < 5 && (
              <div className="flex justify-between mt-8 pt-8 border-t border-slate-200">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="px-6 py-3 text-slate-600 hover:text-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={!isStepValid() || isCalculating}
                  className="bg-gradient-to-r from-navy-600 to-ocean-500 hover:from-navy-700 hover:to-ocean-600 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center"
                >
                  {isCalculating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Calculating...
                    </>
                  ) : currentStep === 4 ? (
                    "Get Quote"
                  ) : (
                    "Next"
                  )}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
