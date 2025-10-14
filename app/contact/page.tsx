"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Package,
  Truck,
  Plane,
  Ship,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    urgency: "standard",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("quote");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      // Simulate success/failure
      const success = Math.random() > 0.1; // 90% success rate

      if (success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
          urgency: "standard",
        });
      } else {
        setSubmitStatus("error");
      }

      setIsSubmitting(false);

      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const services = [
    { id: "customs", name: "Customs Clearance", icon: Package },
    { id: "shipping", name: "Container Shipping", icon: Ship },
    { id: "airfreight", name: "Air Freight", icon: Plane },
    { id: "landtransport", name: "Land Transport", icon: Truck },
    { id: "warehousing", name: "Warehousing", icon: Package },
    { id: "other", name: "Other Services", icon: Package },
  ];

  const offices = [
    {
      name: "Headquarters - Los Angeles",
      address: "123 Port Terminal Drive, Los Angeles, CA 90731",
      phone: "+1 (310) 555-0123",
      email: "la@globallogisticspro.com",
      hours: "24/7 Operations",
      timezone: "PST",
    },
    {
      name: "East Coast Office - New York",
      address: "456 Harbor Boulevard, Newark, NJ 07114",
      phone: "+1 (201) 555-0456",
      email: "ny@globallogisticspro.com",
      hours: "Mon-Fri: 6AM-8PM",
      timezone: "EST",
    },
    {
      name: "Gulf Coast Office - Houston",
      address: "789 Port Authority Blvd, Houston, TX 77015",
      phone: "+1 (713) 555-0789",
      email: "tx@globallogisticspro.com",
      hours: "Mon-Fri: 7AM-7PM",
      timezone: "CST",
    },
  ];

  const faqs = [
    {
      question: "How quickly can I get a quote?",
      answer:
        "Most quotes are provided within 2-4 hours for standard shipments. Complex or specialized cargo may require 24-48 hours for accurate pricing.",
    },
    {
      question: "What information do I need for a quote?",
      answer:
        "We need origin and destination addresses, cargo dimensions and weight, commodity type, and preferred service level (standard, expedited, or express).",
    },
    {
      question: "Do you handle hazardous materials?",
      answer:
        "Yes, we are certified to handle hazardous materials and dangerous goods with proper documentation and compliance measures.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "We offer flexible payment terms including credit accounts for established customers. Standard terms are net 30 days from invoice date.",
    },
    {
      question: "Can you provide cargo insurance?",
      answer:
        "Yes, we offer comprehensive cargo insurance coverage through leading underwriters at competitive rates.",
    },
    {
      question: "How do I track my shipment?",
      answer:
        "You can track shipments 24/7 through our online portal, mobile app, or by calling our customer service team.",
    },
  ];

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
                Get In Touch
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto">
                Ready to streamline your logistics? Our experts are here to help
                you find the perfect shipping solution for your business needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-ocean-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Call Us</h3>
              <p className="text-slate-600 mb-4">
                Speak with our logistics experts 24/7
              </p>
              <a
                href="tel:+13105550123"
                className="text-2xl font-bold text-navy-600 hover:text-navy-700 transition-colors duration-200"
              >
                +1 (310) 555-0123
              </a>
              <div className="mt-4 text-sm text-slate-500">
                Emergency: +1 (310) 555-HOTLINE
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-ocean-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Email Us
              </h3>
              <p className="text-slate-600 mb-4">
                Get detailed responses within 2 hours
              </p>
              <a
                href="mailto:info@globallogisticspro.com"
                className="text-lg font-semibold text-navy-600 hover:text-navy-700 transition-colors duration-200"
              >
                info@globallogisticspro.com
              </a>
              <div className="mt-4 text-sm text-slate-500">
                Quotes: quotes@globallogisticspro.com
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-ocean-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Visit Us
              </h3>
              <p className="text-slate-600 mb-4">
                Schedule a consultation at our office
              </p>
              <div className="text-lg font-semibold text-navy-600">
                Port of Los Angeles
              </div>
              <div className="text-sm text-slate-500 mt-2">
                123 Port Terminal Drive, LA, CA 90731
              </div>
            </motion.div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-xl p-2 shadow-lg">
              <button
                onClick={() => setActiveTab("quote")}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === "quote"
                    ? "bg-navy-600 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Get Quote
              </button>
              <button
                onClick={() => setActiveTab("general")}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === "general"
                    ? "bg-navy-600 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                General Inquiry
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    {activeTab === "quote"
                      ? "Get Your Free Quote"
                      : "Send Us a Message"}
                  </h2>
                  <p className="text-slate-600">
                    {activeTab === "quote"
                      ? "Fill out the form below and receive a detailed quote within 2-4 hours."
                      : "We'd love to hear from you. Send us your questions or feedback."}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {activeTab === "quote" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Service Needed *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service.id} value={service.id}>
                              {service.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Urgency Level
                        </label>
                        <select
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                        >
                          <option value="standard">Standard (2-4 hours)</option>
                          <option value="urgent">Urgent (1-2 hours)</option>
                          <option value="emergency">
                            Emergency (30 minutes)
                          </option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors resize-none"
                      placeholder={
                        activeTab === "quote"
                          ? "Please provide details about your shipment: origin, destination, cargo type, dimensions, weight, and any special requirements..."
                          : "Tell us about your inquiry, feedback, or how we can help you..."
                      }
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="w-4 h-4 text-navy-600 border-slate-300 rounded focus:ring-navy-500"
                    />
                    <label htmlFor="privacy" className="text-sm text-slate-600">
                      I agree to the{" "}
                      <a
                        href="/privacy"
                        className="text-navy-600 hover:text-navy-700"
                      >
                        Privacy Policy
                      </a>{" "}
                      and
                      <a
                        href="/terms"
                        className="text-navy-600 hover:text-navy-700"
                      >
                        Terms of Service
                      </a>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-500">
                      * Required fields
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-navy-600 to-ocean-500 hover:from-navy-700 hover:to-ocean-600 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>
                            {activeTab === "quote"
                              ? "Get Free Quote"
                              : "Send Message"}
                          </span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Submit Status */}
                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className={`mt-6 p-4 rounded-lg ${
                        submitStatus === "success"
                          ? "bg-green-50 border border-green-200"
                          : "bg-red-50 border border-red-200"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        {submitStatus === "success" ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-red-500" />
                        )}
                        <span
                          className={`font-medium ${
                            submitStatus === "success"
                              ? "text-green-700"
                              : "text-red-700"
                          }`}
                        >
                          {submitStatus === "success"
                            ? "Thank you! We'll get back to you within 2-4 hours."
                            : "Sorry, there was an error sending your message. Please try again."}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-navy-100 text-navy-700 rounded-full text-sm font-medium mb-4">
                Our Locations
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Find Us Across the Country
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                With offices strategically located near major ports and
                transportation hubs, we&apos;re always close to where you need
                us.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {office.name}
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-navy-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">
                      {office.address}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-navy-600 flex-shrink-0" />
                    <a
                      href={`tel:${office.phone}`}
                      className="text-navy-600 hover:text-navy-700 font-medium"
                    >
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-navy-600 flex-shrink-0" />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-navy-600 hover:text-navy-700"
                    >
                      {office.email}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-navy-600 flex-shrink-0" />
                    <div>
                      <div className="text-slate-700 font-medium">
                        {office.hours}
                      </div>
                      <div className="text-sm text-slate-500">
                        {office.timezone}
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-navy-600 hover:bg-navy-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                  Schedule Visit
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
