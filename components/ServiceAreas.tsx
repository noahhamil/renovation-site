"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Globe, Map as MapIcon } from "lucide-react";

// Coordinate type for map positioning (percentages)
type Coordinates = { top: string; left: string };

type CityData = {
  name: string;
  coordinates: Coordinates;
};

const ServiceAreas = () => {
  const [hoveredCity, setHoveredCity] = useState<CityData | null>(null);

  // Estimated coordinates for varying locations on an Ile-de-France map
  const cities: CityData[] = [
    { name: "Île-de-France", coordinates: { top: "50%", left: "50%" } },
  ];

  return (
    <section id="ou-nous-trouver" className="relative py-12 lg:py-16 overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 dark:opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-cyan-600 dark:text-cyan-400 text-sm font-semibold uppercase tracking-wider shadow-sm backdrop-blur-sm"
          >
            <MapIcon className="w-4 h-4" />
            <span>Zone d'Intervention</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white"
          >
            Où nous <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">retrouver ?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            Notre ambition est de réconcilier les français avec la rénovation.
            Des experts locaux sélectionnés pour vous accompagner dans toute l'Île-de-France.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Map Section */}
          <motion.div
            className="lg:col-span-5 relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 group-hover:border-cyan-500/50 transition-colors duration-500 aspect-square lg:aspect-auto h-full min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-10" />

              {/* Glow Effect behind map */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

              <Image
                src="/images/map.jpeg"
                alt="Carte zones d'intervention"
                fill
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dynamic Interactive Marker */}
              <AnimatePresence>
                {hoveredCity && (
                  <motion.div
                    key="city-marker"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    style={{
                      top: hoveredCity.coordinates.top,
                      left: hoveredCity.coordinates.left,
                      position: 'absolute',
                      transform: 'translate(-50%, -50%)' // Center the marker
                    }}
                    className="z-30 absolute"
                  >
                    <div className="relative flex flex-col items-center">
                      {/* Tooltip */}
                      <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: -45, opacity: 1 }}
                        className="absolute px-3 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-cyan-500/50 rounded-lg text-slate-900 dark:text-white text-xs font-bold whitespace-nowrap shadow-xl"
                      >
                        {hoveredCity.name}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white dark:bg-slate-900 border-r border-b border-cyan-500/50 rotate-45"></div>
                      </motion.div>

                      {/* Pulsing Dot */}
                      <div className="w-4 h-4 rounded-full bg-cyan-400 border-2 border-white shadow-[0_0_20px_rgba(34,211,238,0.8)] z-20"></div>
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-cyan-400 animate-ping opacity-75"></div>
                      <div className="absolute -inset-4 w-12 h-12 bg-cyan-500/20 rounded-full blur-md animate-pulse"></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Default Paris Marker (Siège) */}
              {!hoveredCity && (
                <div className="absolute top-1/2 left-[52%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center animate-pulse">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)]"></div>
                  </div>
                </div>
              )}

              {/* Locator Overlay (Static) */}
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 pointer-events-none">
                <div className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 flex items-center gap-2 shadow-lg">
                  <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <div>
                    <p className="text-slate-900 dark:text-white font-bold text-sm">Zone Couverte</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">Île-de-France</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cities Grid */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-white/5 rounded-3xl p-8 lg:p-10 shadow-xl transition-colors duration-300">


              <div className="flex flex-wrap gap-3">
                {cities.map((city, index) => (
                  <motion.div
                    key={city.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.02 }}
                    className="group relative"
                    onMouseEnter={() => setHoveredCity(city)}
                    onMouseLeave={() => setHoveredCity(null)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    <span
                      className={`relative block px-5 py-2.5 rounded-full border text-sm font-medium cursor-pointer transition-all duration-300 
                        ${hoveredCity?.name === city.name
                          ? 'bg-slate-900 text-white border-slate-900 scale-105 shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:bg-white dark:text-slate-900 dark:border-white dark:shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                          : 'bg-white border-slate-200 text-slate-600 hover:text-white hover:bg-slate-900 hover:border-slate-900 dark:bg-slate-900/80 dark:border-white/10 dark:text-slate-300 dark:group-hover:text-white dark:group-hover:bg-slate-800'
                        }`}
                    >
                      {city.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/5 flex items-start gap-4">
                <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
                <div>
                  <p className="text-slate-900 dark:text-white font-semibold mb-1">Votre ville n'est pas dans la liste ?</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Contactez-nous, nous intervenons probablement déjà près de chez vous.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
