import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, MapPin, PenTool, CheckCircle, Zap, Power } from 'lucide-react';

const steps = [
  { id: 1, title: 'Free Consultation', desc: 'Initial discussion to understand your energy needs.', icon: MessageSquare },
  { id: 2, title: 'Site Inspection', desc: 'Detailed site survey to analyze roof structure and shading.', icon: MapPin },
  { id: 3, title: 'Custom Solar Design', desc: 'Personalized solar layout and system sizing for maximum efficiency.', icon: PenTool },
  { id: 4, title: 'Installation', desc: 'Expert installation of solar panels and inverters.', icon: CheckCircle },
  { id: 5, title: 'Net Metering Setup', desc: 'Setting up the grid connection for energy exports.', icon: Zap },
  { id: 6, title: 'System Activation', desc: 'Final checks and turning on your clean energy system.', icon: Power },
];

const Process = () => {
  return (
    <section className="py-24 bg-solar-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our <span className="text-solar-orange">Installation Process</span></h2>
          <p className="section-subtitle">
            A simple and streamlined process to get you up and running with clean energy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border-2 border-transparent hover:border-solar-yellow/30 card-hover group"
            >
              <div className="w-12 h-12 bg-solar-yellow/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <step.icon className="text-solar-orange w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-solar-dark mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
