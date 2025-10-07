'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Package, MapPin, Clock, CheckCircle, Truck, Ship, Plane, AlertCircle, RefreshCw, Download, Printer, Share2 } from 'lucide-react'

export default function TrackingPage() {
  const searchParams = useSearchParams()
  const [trackingNumber, setTrackingNumber] = useState('')
  const [shipmentData, setShipmentData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Sample shipment data
  const sampleShipments = {
    'GLP2024001': {
      id: 'GLP2024001',
      status: 'in-transit',
      origin: 'Shanghai, CN',
      destination: 'Los Angeles, US',
      estimatedDelivery: '2024-01-15',
      mode: 'ship',
      currentLocation: 'Pacific Ocean',
      vessel: 'MSC Gulsun',
      voyage: 'FG324',
      container: 'MSCU1234567',
      weight: '15,000 kg',
      dimensions: '40\' HC Container',
      customsStatus: 'Cleared',
      lastUpdate: '2024-01-12T14:30:00Z',
      timeline: [
        { date: '2024-01-08', time: '09:00', status: 'Booked', location: 'Shanghai', completed: true },
        { date: '2024-01-09', time: '14:30', status: 'Loaded', location: 'Shanghai Port', completed: true },
        { date: '2024-01-10', time: '16:00', status: 'Departed', location: 'Shanghai Port', completed: true },
        { date: '2024-01-11', time: '10:15', status: 'Customs Cleared', location: 'Shanghai Customs', completed: true },
        { date: '2024-01-12', time: '14:30', status: 'In Transit', location: 'Pacific Ocean', completed: true, active: true },
        { date: '2024-01-14', time: '08:00', status: 'Arrived', location: 'Los Angeles Port', completed: false },
        { date: '2024-01-15', time: '12:00', status: 'Delivered', location: 'Los Angeles Warehouse', completed: false }
      ]
    },
    'GLP2024002': {
      id: 'GLP2024002',
      status: 'delivered',
      origin: 'Rotterdam, NL',
      destination: 'New York, US',
      estimatedDelivery: '2024-01-10',
      actualDelivery: '2024-01-10',
      mode: 'ship',
      currentLocation: 'Delivered',
      vessel: 'Emma Maersk',
      voyage: 'AE15',
      container: 'MSKU7654321',
      weight: '22,000 kg',
      dimensions: '40\' Container',
      customsStatus: 'Cleared',
      lastUpdate: '2024-01-10T16:45:00Z',
      timeline: [
        { date: '2024-01-02', time: '10:00', status: 'Booked', location: 'Rotterdam', completed: true },
        { date: '2024-01-03', time: '15:30', status: 'Loaded', location: 'Rotterdam Port', completed: true },
        { date: '2024-01-04', time: '12:00', status: 'Departed', location: 'Rotterdam Port', completed: true },
        { date: '2024-01-06', time: '09:45', status: 'Customs Cleared', location: 'EU Customs', completed: true },
        { date: '2024-01-08', time: '14:20', status: 'Arrived', location: 'New York Port', completed: true },
        { date: '2024-01-09', time: '11:30', status: 'Customs Cleared', location: 'US Customs', completed: true },
        { date: '2024-01-10', time: '16:45', status: 'Delivered', location: 'New York Warehouse', completed: true, active: true }
      ]
    },
    'GLP2024003': {
      id: 'GLP2024003',
      status: 'customs',
      origin: 'Tokyo, JP',
      destination: 'Long Beach, US',
      estimatedDelivery: '2024-01-12',
      mode: 'air',
      currentLocation: 'Customs Clearance',
      vessel: 'Cargo Flight JL785',
      voyage: 'JL785',
      container: 'JALU9876543',
      weight: '2,500 kg',
      dimensions: '5 Pallets',
      customsStatus: 'In Process',
      lastUpdate: '2024-01-11T09:15:00Z',
      timeline: [
        { date: '2024-01-10', time: '08:00', status: 'Booked', location: 'Tokyo', completed: true },
        { date: '2024-01-10', time: '14:30', status: 'Loaded', location: 'Narita Airport', completed: true },
        { date: '2024-01-10', time: '18:45', status: 'Departed', location: 'Narita Airport', completed: true },
        { date: '2024-01-11', time: '06:30', status: 'Arrived', location: 'LAX Airport', completed: true },
        { date: '2024-01-11', time: '09:15', status: 'Customs Processing', location: 'LAX Customs', completed: true, active: true },
        { date: '2024-01-11', time: '16:00', status: 'Customs Cleared', location: 'LAX Customs', completed: false },
        { date: '2024-01-12', time: '12:00', status: 'Delivered', location: 'Long Beach Warehouse', completed: false }
      ]
    }
  }

  useEffect(() => {
    const urlTrackingNumber = searchParams.get('number')
    if (urlTrackingNumber) {
      setTrackingNumber(urlTrackingNumber)
      handleTracking(urlTrackingNumber)
    }
  }, [searchParams])

  const handleTracking = async (number = trackingNumber) => {
    if (!number.trim()) return

    setIsLoading(true)
    setError(null)

    // Simulate API call
    setTimeout(() => {
      const shipment = sampleShipments[number.toUpperCase()]
      
      if (shipment) {
        setShipmentData(shipment)
      } else {
        setError('Shipment not found. Please check your tracking number.')
        setShipmentData(null)
      }
      
      setIsLoading(false)
    }, 1500)
  }

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setIsRefreshing(false)
      // Update last update time
      if (shipmentData) {
        setShipmentData({
          ...shipmentData,
          lastUpdate: new Date().toISOString()
        })
      }
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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const formatTime = (timeString) => {
    return new Date(`2000-01-01T${timeString}:00`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-r from-navy-900 to-ocean-800">
        <div className="container-custom">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Track Your Shipment
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto">
                Get real-time updates on your cargo's location, status, and estimated delivery time. 
                Stay informed throughout the entire shipping process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tracking Interface */}
      <section className="section-padding">
        <div className="container-custom">
          {!shipmentData && (
            <div className="max-w-2xl mx-auto">
              <motion.div 
                className="bg-white rounded-2xl shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-ocean-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Track Your Shipment</h2>
                  <p className="text-slate-600">Enter your tracking number to get real-time updates</p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); handleTracking(); }} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      placeholder="Enter tracking number (e.g., GLP2024001)"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 text-lg"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isLoading || !trackingNumber.trim()}
                    className="w-full bg-gradient-to-r from-navy-600 to-ocean-500 hover:from-navy-700 hover:to-ocean-600 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center text-lg shadow-lg hover:shadow-xl"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                        Tracking...
                      </>
                    ) : (
                      'Track Shipment'
                    )}
                  </button>
                </form>

                {error && (
                  <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                      <span className="text-red-700">{error}</span>
                    </div>
                  </div>
                )}

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-navy-600 mb-1">50K+</div>
                      <div className="text-sm text-slate-600">Shipments Tracked</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-navy-600 mb-1">24/7</div>
                      <div className="text-sm text-slate-600">Tracking Available</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-navy-600 mb-1">99.5%</div>
                      <div className="text-sm text-slate-600">Accuracy Rate</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Shipment Details */}
          {shipmentData && (
            <div className="space-y-8">
              {/* Shipment Header */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      {getModeIcon(shipmentData.mode)}
                      <h2 className="text-2xl font-bold text-slate-900">Shipment {shipmentData.id}</h2>
                    </div>
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(shipmentData.status)}`}>
                      {getStatusIcon(shipmentData.status)}
                      <span className="ml-2 capitalize">{shipmentData.status.replace('-', ' ')}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                    <button 
                      onClick={handleRefresh}
                      disabled={isRefreshing}
                      className="flex items-center space-x-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors duration-200 disabled:opacity-50"
                    >
                      <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                      <span>{isRefreshing ? 'Refreshing...' : 'Refresh'}</span>
                    </button>
                    <button className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors duration-200">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors duration-200">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors duration-200">
                      <Printer className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      <span className="text-sm font-medium text-slate-600">Origin</span>
                    </div>
                    <div className="text-lg font-semibold text-slate-900">{shipmentData.origin}</div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      <span className="text-sm font-medium text-slate-600">Destination</span>
                    </div>
                    <div className="text-lg font-semibold text-slate-900">{shipmentData.destination}</div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Package className="w-4 h-4 text-slate-500" />
                      <span className="text-sm font-medium text-slate-600">Current Location</span>
                    </div>
                    <div className="text-lg font-semibold text-slate-900">{shipmentData.currentLocation}</div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-4 h-4 text-slate-500" />
                      <span className="text-sm font-medium text-slate-600">Est. Delivery</span>
                    </div>
                    <div className="text-lg font-semibold text-slate-900">{formatDate(shipmentData.estimatedDelivery)}</div>
                  </div>
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6">Shipment Timeline</h3>
                
                <div className="space-y-6">
                  {shipmentData.timeline.map((event, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          event.completed 
                            ? 'bg-green-500 text-white' 
                            : event.active 
                            ? 'bg-blue-500 text-white animate-pulse'
                            : 'bg-slate-300 text-slate-600'
                        }`}>
                          {event.completed ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            <span className="text-sm font-bold">{index + 1}</span>
                          )}
                        </div>
                        {index < shipmentData.timeline.length - 1 && (
                          <div className={`w-0.5 h-16 mx-auto mt-2 ${
                            event.completed ? 'bg-green-500' : 'bg-slate-300'
                          }`}></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`font-semibold ${
                            event.completed || event.active ? 'text-slate-900' : 'text-slate-500'
                          }`}>
                            {event.status}
                          </h4>
                          <div className="text-sm text-slate-500">
                            {formatDate(event.date)} at {formatTime(event.time)}
                          </div>
                        </div>
                        <p className={`text-sm ${
                          event.completed || event.active ? 'text-slate-600' : 'text-slate-400'
                        }`}>
                          {event.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Shipment Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Cargo Details */}
                <motion.div 
                  className="bg-white rounded-2xl shadow-lg p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Cargo Details</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Vessel/Flight:</span>
                      <span className="font-medium">{shipmentData.vessel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Voyage:</span>
                      <span className="font-medium">{shipmentData.voyage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Container/AWB:</span>
                      <span className="font-medium">{shipmentData.container}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Weight:</span>
                      <span className="font-medium">{shipmentData.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Dimensions:</span>
                      <span className="font-medium">{shipmentData.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Customs Status:</span>
                      <span className="font-medium">{shipmentData.customsStatus}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Contact & Support */}
                <motion.div 
                  className="bg-white rounded-2xl shadow-lg p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Need Help?</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3 mb-2">
                        <Phone className="w-5 h-5 text-navy-600" />
                        <span className="font-medium">24/7 Support</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">
                        Questions about your shipment? Our team is here to help.
                      </p>
                      <a href="tel:+13105550123" className="text-navy-600 hover:text-navy-700 font-medium">
                        +1 (310) 555-0123
                      </a>
                    </div>
                    
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3 mb-2">
                        <Mail className="w-5 h-5 text-navy-600" />
                        <span className="font-medium">Email Support</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">
                        Send us your questions and we'll respond within 2 hours.
                      </p>
                      <a href="mailto:support@globallogisticspro.com" className="text-navy-600 hover:text-navy-700 font-medium">
                        support@globallogisticspro.com
                      </a>
                    </div>
                    
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3 mb-2">
                        <Clock className="w-5 h-5 text-navy-600" />
                        <span className="font-medium">Last Updated</span>
                      </div>
                      <p className="text-sm text-slate-600">
                        {formatTime(shipmentData.lastUpdate.split('T')[1])} on {formatDate(shipmentData.lastUpdate)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}