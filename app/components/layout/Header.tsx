"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Package, Ship, Plane, Truck } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Tracking", href: "/tracking" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Customs Clearance", href: "/services#customs", icon: Package },
    { name: "Container Shipping", href: "/services#shipping", icon: Ship },
    { name: "Air Freight", href: "/services#airfreight", icon: Plane },
    { name: "Land Transport", href: "/services#landtransport", icon: Truck },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out pl-4 pr-4  ${
          isScrolled
            ? "bg-navy-700/95 backdrop-blur-md shadow-lg"
            : "bg-navy-700 "
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 ">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 ">
              <div className="w-12 h-12 bg-gradient-to-br from-navy-600 to-ocean-500 rounded-xl flex items-center justify-center">
                <Ship className="w-6 h-6 " />
              </div>
              <div>
                <h1
                  className={`text-xl font-bold ${
                    isScrolled ? "text-slate-600" : "text-navy-900"
                  }`}
                >
                  GlobalLogistics
                </h1>
                <p
                  className={`text-sm ${
                    isScrolled ? "text-slate-600" : "text-navy-900"
                  }`}
                >
                  Pro
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 ml-12 flex-1 justify-center text-sm font-medium text-slate-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    isScrolled ? "text-slate-600" : "text-black"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/tracking"
                className={`font-medium transition-colors duration-200 ${
                  isScrolled ? "text-slate-600" : "text-navy-900"
                }`}
              >
                Track Shipment
              </Link>
              <Link href="/contact" className="button-primary">
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                isScrolled ? "text-slate-600" : "text-black"
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-slate-200 p-3"
            >
              <div className="container-custom py-6">
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="font-medium text-slate-700 hover:text-navy-600 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-4">
                    Services
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Icon className="w-5 h-5 text-navy-600" />
                          <span className="font-medium text-slate-700">
                            {service.name}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col space-y-4">
                  <Link
                    href="/tracking"
                    className="button-primary w-full text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Track Shipment
                  </Link>
                  <Link
                    href="/contact"
                    className="button-secondary w-full text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
