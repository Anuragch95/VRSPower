import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-white via-solar-yellow/5 to-solar-orange/5">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-solar-yellow/10 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-solar-orange/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-solar-yellow/10 border border-solar-yellow/20 px-4 py-1.5 rounded-full mb-6">
              <Zap className="text-solar-orange w-4 h-4 fill-solar-orange" />
              <span className="text-solar-orange font-semibold text-sm tracking-wide uppercase">Clean Energy Revolution</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-solar-dark leading-[1.1] mb-8">
              Power Your Future With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-yellow via-solar-orange to-solar-orange drop-shadow-sm">
                Solar Energy
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              Reduce electricity bills up to <span className="text-solar-orange font-bold">80%</span> with reliable, 
              high-efficiency solar panel installation for your home and business.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button className="btn-primary flex items-center justify-center space-x-2 py-4 px-10 text-lg shadow-xl shadow-solar-orange/20">
                <span>Get Free Consultation</span>
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2 py-4 px-10 text-lg group">
                <Calculator size={20} className="group-hover:text-solar-orange transition-colors" />
                <span>Calculate Solar Savings</span>
              </button>
            </div>

            <div className="mt-12 flex items-center space-x-6 text-sm font-medium text-gray-500">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="text-solar-green w-5 h-5" />
                <span>Government Subsidy Assistance</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="text-solar-green w-5 h-5" />
                <span>25 Year Warranty</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 animate-float">
              <div className="glass rounded-3xl p-4 md:p-6 shadow-2xl glow-orange transform -rotate-2 md:-rotate-3 hover:rotate-0 transition-transform duration-500 border-white/30 backdrop-blur-xl">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800" 
                  alt="Solar Panels" 
                  className="rounded-2xl w-full h-[300px] md:h-[450px] object-cover shadow-lg"
                />
                
                {/* 3D-styled floating card overlay */}
                <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 glass-dark p-4 md:p-6 rounded-2xl shadow-2xl border-white/20 animate-float-delayed backdrop-blur-2xl">
                   <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="bg-solar-yellow p-2 md:p-3 rounded-full">
                        <Zap className="text-white w-4 h-4 md:w-6 md:h-6 fill-white" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg md:text-2xl tracking-tight">10.5 kW</p>
                        <p className="text-white/70 text-[10px] md:text-sm">Energy Generation</p>
                      </div>
                   </div>
                </div>

                <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 glass p-3 md:p-4 rounded-xl shadow-xl animate-float backdrop-blur-xl border-white/40">
                   <div className="flex items-center space-x-2 md:space-x-3">
                      <div className="bg-solar-green/20 p-1.5 md:p-2 rounded-lg">
                        <ShieldCheck className="text-solar-green w-4 h-4 md:w-6 md:h-6" />
                      </div>
                      <p className="text-solar-dark font-semibold text-xs md:text-base">Premium Quality</p>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-solar-yellow/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-solar-orange/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
