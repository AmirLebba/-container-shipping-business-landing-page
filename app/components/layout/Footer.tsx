"use client";

import Link from "next/link";

import {
  Ship,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Customs Clearance", href: "/services#customs" },
    { name: "Container Shipping", href: "/services#shipping" },
    { name: "Air Freight", href: "/services#airfreight" },
    { name: "Land Transport", href: "/services#landtransport" },
    { name: "Warehousing", href: "/services#warehousing" },
    { name: "Documentation", href: "/services#documentation" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "News & Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  const resources = [
    { name: "Track Shipment", href: "/tracking" },
    { name: "Get Quote", href: "/contact" },
    { name: "Documentation", href: "/resources/docs" },
    { name: "Incoterms Guide", href: "/resources/incoterms" },
    { name: "Shipping Calculator", href: "/tools/calculator" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 ">
      {/* Main Footer Content */}
      <div className="container-custom py-16 pl-6 pr-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-navy-600 to-ocean-500 rounded-xl flex items-center justify-center">
                <Ship className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  GlobalLogistics
                </h3>
                <p className="text-sm text-slate-400">Pro</p>
              </div>
            </Link>

            <p className="text-slate-400 mb-6 leading-relaxed">
              Professional customs clearance and container shipping services
              with over a decade of experience in international trade and
              logistics.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-ocean-400" />
                <span className="text-sm">Port of Los Angeles, CA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-ocean-400" />
                <span className="text-sm">+1 (310) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-ocean-400" />
                <span className="text-sm">info@globallogisticspro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-ocean-400" />
                <span className="text-sm">24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="flex items-center space-x-2 text-slate-400 hover:text-ocean-400 transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                    <span className="text-sm">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 text-slate-400 hover:text-ocean-400 transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                    <span className="text-sm">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="flex items-center space-x-2 text-slate-400 hover:text-ocean-400 transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                    <span className="text-sm">{resource.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Certifications & Memberships
              </h4>
              <div className="flex flex-wrap gap-4">
                {[
                  "Licensed Customs Broker",
                  "C-TPAT Certified",
                  "ISO 9001:2015",
                  "AEO Authorized",
                  "IATA Certified",
                ].map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Connect With Us
              </h4>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-slate-800 hover:bg-ocean-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-slate-400" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 border-t border-slate-800 pl-6 pr-6">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-slate-400 text-center md:text-left">
              © {currentYear} GlobalLogistics Pro. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <Link
                href="/privacy"
                className="hover:text-ocean-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-ocean-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-ocean-400 transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
