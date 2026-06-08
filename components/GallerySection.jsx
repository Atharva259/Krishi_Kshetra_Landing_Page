'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Play, 
  Maximize2, 
  X, 
  Layers, 
  Cpu, 
  Eye, 
  Video, 
  ExternalLink 
} from 'lucide-react';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    "All",
    "Sensor Testing",
    "Relay Control System",
    "Pump Automation",
    "Circuit Development",
    "Prototype Assembly",
    "Future Product Vision"
  ];

  const galleryItems = [
    {
      id: 1,
      category: "Sensor Testing",
      title: "Soil Moisture Probe Calibration",
      desc: "Validating capacitive moisture sensor signals in various soil densities and moisture ratios in the laboratory to calibrate the ADC thresholds.",
      image: "/prototype-gallery/sensor-testing.png",
      isVideo: false
    },
    {
      id: 2,
      category: "Relay Control System",
      title: "Optocoupler Relay Circuit Board",
      desc: "Testing isolated control signals to prevent motor transient back-EMF spikes from causing microcontroller brownouts or logic lockups.",
      image: "/prototype-gallery/relay-control.png",
      isVideo: false
    },
    {
      id: 3,
      category: "Pump Automation",
      title: "Automated Water Valve Flow System",
      desc: "Measuring precise water dispensing volumes and response latency under direct solid-state logic relay triggers in a greenhouse setup.",
      image: "/prototype-gallery/pump-automation.png",
      isVideo: false
    },
    {
      id: 4,
      category: "Circuit Development",
      title: "PCB Routing Schematic Layout",
      desc: "Designing low-noise power routing traces, transient voltage suppression (TVS) diodes, and ESP32 pinout header interfaces in electronic CAD software.",
      image: "/prototype-gallery/circuit-development.png",
      isVideo: false
    },
    {
      id: 5,
      category: "Prototype Assembly",
      title: "Weatherproof Hardware Enclosure",
      desc: "Final assembly of the custom battery management board, solar controller, and logic CPU within an IP65 rated 3D printed ASA casing.",
      image: "/prototype-gallery/prototype-assembly.png",
      isVideo: false
    },
    {
      id: 6,
      category: "Future Product Vision",
      title: "Autonomous Field Mesh Rover Concept",
      desc: "Conceptual 3D rendering of the upcoming solar-powered autonomous navigation utility rover designed for large-scale agronomic crop telemetry.",
      image: "/prototype-gallery/future-vision.png",
      isVideo: false
    },
    {
      id: 7,
      category: "Prototype Assembly",
      title: "Live Hardware Demonstration Loop",
      desc: "Live testing log demonstrating the automated loop trigger. Shows the ESP32 reading moisture levels and automatically engaging the isolated relay pump.",
      image: "/prototype-gallery/prototype-assembly.png",
      isVideo: true,
      videoUrl: "/prototype-gallery/demo-video.mp4"
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-28 relative z-10 overflow-hidden bg-[#041a0f] border-t border-white/5">
      {/* Decorative Blur Backings */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-emerald/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald mb-6"
          >
            <Eye size={12} className="text-brand-emerald" />
            <span>VISUAL ENGINEERING LOG</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-6"
          >
            Prototype <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-emerald to-teal-400">Gallery</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed"
          >
            A visual log of our engineering milestones, sub-system integrations, and future product blueprints.
          </motion.p>
        </div>

        {/* Category Filters (Scrollable on small screens) */}
        <div className="flex justify-start md:justify-center items-center overflow-x-auto pb-6 mb-12 scrollbar-none gap-2">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${
                activeFilter === cat 
                  ? 'bg-brand-emerald border-brand-emerald text-[#041a0f] shadow-lg shadow-brand-emerald/20 font-bold' 
                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/10 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="glass-card overflow-hidden border border-white/5 bg-white/[0.01] rounded-2xl flex flex-col justify-between hover:border-brand-emerald/30 transition-all duration-300 cursor-pointer group shadow-lg"
              >
                <div>
                  
                  {/* Image wrapper with zoom-effect overlay */}
                  <div className="relative aspect-video w-full overflow-hidden bg-black/40">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Hover Visual Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      {item.isVideo ? (
                        <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center shadow-lg shadow-teal-500/30 scale-90 group-hover:scale-100 transition-transform duration-300">
                          <Play size={20} className="fill-current ml-1" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-brand-emerald text-[#041a0f] flex items-center justify-center shadow-lg shadow-brand-emerald/30 scale-90 group-hover:scale-100 transition-transform duration-300">
                          <Maximize2 size={20} />
                        </div>
                      )}
                    </div>

                    {/* Category overlay label */}
                    <span className="absolute top-4 left-4 text-[9px] font-bold font-mono tracking-wider bg-[#041a0f]/80 backdrop-blur border border-white/10 px-2 py-1 rounded-md text-brand-emerald uppercase">
                      {item.category}
                    </span>

                    {/* Video Indicator Icon */}
                    {item.isVideo && (
                      <span className="absolute top-4 right-4 text-[9px] font-bold font-mono tracking-wider bg-teal-600/90 backdrop-blur text-white px-2 py-1 rounded-md uppercase flex items-center gap-1">
                        <Video size={10} />
                        DEMO VIDEO
                      </span>
                    )}
                  </div>

                  {/* Caption & Description */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-brand-emerald transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                </div>

                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                  <span>TRL-5 STAGE VALIDATED</span>
                  <span className="text-brand-emerald group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                    {item.isVideo ? 'Play Demo Video' : 'Expand Image'}
                    <ExternalLink size={10} />
                  </span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LIGHTBOX MODAL */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl w-full bg-[#05180f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-55 w-10 h-10 rounded-full bg-[#041a0f]/80 border border-white/10 hover:border-brand-emerald/40 hover:bg-brand-emerald/10 text-white flex items-center justify-center transition-all duration-200"
                >
                  <X size={20} />
                </button>

                {/* Media Container */}
                <div className="relative aspect-video w-full bg-black/50">
                  {selectedItem.isVideo ? (
                    <video 
                      src={selectedItem.videoUrl} 
                      className="w-full h-full object-contain" 
                      controls 
                      autoPlay 
                      playsInline
                    />
                  ) : (
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>

                {/* Content Details */}
                <div className="p-6 md:p-8 bg-[#041a0f] border-t border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold font-mono tracking-widest bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald px-2.5 py-0.5 rounded-full uppercase">
                      {selectedItem.category}
                    </span>
                    {selectedItem.isVideo && (
                      <span className="text-[10px] font-bold font-mono tracking-widest bg-teal-500/10 border border-teal-500/20 text-teal-400 px-2.5 py-0.5 rounded-full uppercase flex items-center gap-1">
                        <Video size={10} /> Video Embed
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight mb-3">
                    {selectedItem.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {selectedItem.desc}
                  </p>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
