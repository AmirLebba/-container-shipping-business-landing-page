'use client'

import { motion } from 'framer-motion'

export default function ClientLogos() {
  const clients = [
    { name: 'TechGlobal Electronics', industry: 'Technology' },
    { name: 'AutoParts Plus Inc.', industry: 'Automotive' },
    { name: 'FreshFoods International', industry: 'Food & Beverage' },
    { name: 'Fashion Forward Ltd.', industry: 'Retail' },
    { name: 'Industrial Solutions Corp.', industry: 'Manufacturing' },
    { name: 'MedTech Innovations', industry: 'Healthcare' },
    { name: 'Global Textile Group', industry: 'Textiles' },
    { name: 'EcoChemical Solutions', industry: 'Chemicals' }
  ]

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
            <span className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">
              Trusted Partners
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Leading Companies Trust Us
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From Fortune 500 corporations to innovative startups, businesses across industries 
              rely on GlobalLogistics Pro for their critical logistics needs.
            </p>
          </motion.div>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-50 rounded-xl p-6 h-32 flex items-center justify-center group-hover:bg-slate-100 transition-colors duration-300 border border-slate-200 group-hover:border-slate-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-500 to-ocean-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">
                      {client.name.split(' ').map(word => word[0]).join('').substring(0, 2)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm leading-tight">{client.name}</div>
                    <div className="text-xs text-slate-500 mt-1">{client.industry}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Coverage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              industry: 'Technology & Electronics',
              count: '85+ Companies',
              description: 'Semiconductors, consumer electronics, IT equipment'
            },
            {
              industry: 'Automotive',
              count: '45+ Companies',
              description: 'Parts, accessories, finished vehicles'
            },
            {
              industry: 'Food & Beverage',
              count: '60+ Companies',
              description: 'Perishables, packaged goods, beverages'
            },
            {
              industry: 'Healthcare & Pharma',
              count: '35+ Companies',
              description: 'Medical devices, pharmaceuticals, supplies'
            }
          ].map((sector, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{sector.industry}</h3>
              <div className="text-2xl font-bold text-navy-600 mb-3">{sector.count}</div>
              <p className="text-sm text-slate-600">{sector.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-navy-600 mb-2">500+</div>
              <div className="text-slate-700 font-medium mb-1">Active Clients</div>
              <div className="text-sm text-slate-500">Across all major industries</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-navy-600 mb-2">95%</div>
              <div className="text-slate-700 font-medium mb-1">Client Retention</div>
              <div className="text-sm text-slate-500">Year-over-year partnership</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-navy-600 mb-2">15+</div>
              <div className="text-slate-700 font-medium mb-1">Years Experience</div>
              <div className="text-sm text-slate-500">Industry-leading expertise</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}