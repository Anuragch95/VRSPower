import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const areas = ['Raipur', 'Bhilai', 'Durg', 'Balaghat', 'Seoni'];

const ServiceAreas = () => {
  return (
    <section id="areas" className="py-24 bg-solar-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title">Our <span className="text-solar-orange">Service Areas</span></h2>
          <p className="section-subtitle">
            Providing reliable solar energy solutions across these key locations.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass px-8 py-4 rounded-full flex items-center space-x-3 card-hover border-solar-yellow/20"
            >
              <div className="bg-solar-yellow/10 p-2 rounded-full">
                <MapPin className="text-solar-orange w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-solar-dark">{area}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
