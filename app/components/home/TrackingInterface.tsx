'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Package, MapPin, Clock, CheckCircle, Truck, Ship, Plane } from 'lucide-react'

export default function TrackingInterface() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [isTracking, setIsTracking] = useState(false)
  const [recentShipments, setRecentShipments] = useState([])

  // Sample recent shipments data
  const sampleShipments = [
    {
      id: 'GLP2024001',
      status: 'in-transit',
      origin: 'Shanghai, CN',
      destination: 'Los Angeles, US',
      estimatedDelivery: '2024-01-15',
      mode: 'ship',
      currentLocation: 'Pacific Ocean'
    },
    {
      id: 'GLP2024002',
      status: 'delivered',
      origin: 'Rotterdam, NL',
      destination: 'New York, US',
      estimatedDelivery: '2024-01-10',
      mode: 'ship',
      currentLocation: 'Delivered'
    },
    {
      id: 'GLP2024003',
      status: 'customs',
      origin: 'Tokyo, JP',
      destination: 'Long Beach, US',
      estimatedDelivery: '2024-01-12',
      mode: 'air',
      currentLocation: 'Customs Clearance'
    }
  ]

  useEffect(() => {
    setRecentShipments(sampleShipments)
  }, [])

  const handleTracking = async (e) => {
    e.preventDefault()
    if (!trackingNumber.trim()) return
    
    setIsTracking(true)
    // Simulate tracking API call
    setTimeout(() => {
      window.location.href = `/tracking?number=${trackingNumber}`
    }, 1000)
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'in-transit':
        return <Truck className="w-5 h-5 text-blue-500" />
      case 'customs':
        return <Package className="w-5 h-5 text-orange-500" />
      default:
        return <Clock className="w-5 h-5 text-slate-400" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-50'
      case 'in-transit':
        return 'text-blue-600 bg-blue-50'
      case 'customs':
        return 'text-orange-600 bg-orange-50'
      default:
        return 'text-slate-600 bg-slate-50'
    }
  }

  const getModeIcon = (mode) => {
    switch (mode) {
      case 'ship':
        return <Ship className="w-4 h-4" />
      case 'air':
        return <Plane className="w-4 h-4" />
      case 'truck':
        return <Truck className="w-4 h-4" />
      default:
        return <Package className="w-4 h-4" />
    }
  }

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-ocean-100 text-ocean-700 rounded-full text-sm font-medium mb-4">
              Real-time Tracking
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Track Your Shipments
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay informed about your cargo's journey with our advanced tracking system. 
              Get real-time updates, location information, and estimated delivery times.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Tracking Interface */}
          <div className="lg:col-span-2">
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-ocean-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Track Your Shipment</h3>
                <p className="text-slate-600">Enter your tracking number to get real-time updates</p>
              </div>

              <form onSubmit={handleTracking} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter tracking number (e.g., GLP123456789)"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 text-lg"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <Package className="w-6 h-6 text-slate-400" />
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isTracking || !trackingNumber.trim()}
                  className="w-full bg-gradient-to-r from-navy-600 to-ocean-500 hover:from-navy-700 hover:to-ocean-600 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center text-lg shadow-lg hover:shadow-xl"
                >
                  {isTracking ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                      Tracking Shipment...
                    </>
                  ) : (
                    'Track Shipment'
                  )}
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Need help tracking?</span>
                  <a href="tel:+13105550123" className="text-navy-600 hover:text-navy-700 transition-colors font-medium">
                    Call Support: +1 (310) 555-0123
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Recent Shipments */}
          <div className="lg:col-span-1">
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <Clock className="w-5 h-5 text-ocean-500 mr-2" />
                Recent Shipments
              </h3>

              <div className="space-y-4">
                {recentShipments.map((shipment) => (
                  <div 
                    key={shipment.id}
                    className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200 cursor-pointer"
                    onClick={() => setTrackingNumber(shipment.id)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        {getModeIcon(shipment.mode)}
                        <span className="font-mono text-sm font-medium text-slate-900">{shipment.id}</span>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(shipment.status)}`}>
                        {shipment.status.replace('-', ' ').toUpperCase()}
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-slate-600">
                        <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                        <span>{shipment.origin} → {shipment.destination}</span>
                      </div>
                      <div className="flex items-center text-slate-600">
                        {getStatusIcon(shipment.status)}
                        <span className="ml-2">{shipment.currentLocation}</span>
                      </div>
                      <div className="flex items-center text-slate-600">
                        <Clock className="w-4 h-4 mr-2 text-slate-400" />
                        <span>Est. Delivery: {new Date(shipment.estimatedDelivery).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <button className="w-full text-navy-600 hover:text-navy-700 font-medium transition-colors duration-200">
                  View All Shipments
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tracking Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: MapPin,
              title: 'Real-time Location',
              description: 'GPS tracking shows exact location of your cargo'
            },
            {
              icon: Clock,
              title: 'Accurate ETAs',
              description: 'AI-powered predictions for reliable delivery estimates'
            },
            {
              icon: Package,
              title: 'Status Updates',
              description: 'Instant notifications for every milestone'
            }
          ].map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-ocean-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-ocean-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}