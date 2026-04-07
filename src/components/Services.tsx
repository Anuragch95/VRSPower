import { motion } from 'framer-motion';
import { Home, Building, Factory, Settings, MessageSquare, ArrowUpCircle } from 'lucide-react';

const services = [
  { 
    title: 'Residential Solar', 
    icon: Home, 
    desc: 'High-efficiency solar solutions for your home to slash electricity bills.' 
  },
  { 
    title: 'Commercial Solar', 
    icon: Building, 
    desc: 'Power your business with sustainable energy and reduce operational costs.' 
  },
  { 
    title: 'Industrial Solar', 
    icon: Factory, 
    desc: 'Large-scale solar installations for factories and industrial complexes.' 
  },
  { 
    title: 'Solar Maintenance', 
    icon: Settings, 
    desc: 'Regular check-ups and maintenance to keep your system performing at 100%.' 
  },
  { 
    title: 'Solar Consultation', 
    icon: MessageSquare, 
    desc: 'Expert advice to design the perfect solar system tailored to your needs.' 
  },
  { 
    title: 'System Upgrade', 
    icon: ArrowUpCircle, 
    desc: 'Modernize your existing solar setup for better efficiency and storage.' 
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-solar-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Comprehensive <span className="text-solar-orange">Solar Solutions</span></h2>
          <p className="section-subtitle">
            From design to installation and maintenance, we provide end-to-end solar energy services for every need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border-2 border-transparent hover:border-solar-yellow/30 card-hover group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-solar-yellow to-solar-orange rounded-2xl flex items-center justify-center mb-6 shadow-lg glow-yellow group-hover:scale-110 transition-transform">
                <service.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-solar-dark mb-4 group-hover:text-solar-orange transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-8 flex items-center text-solar-orange font-semibold cursor-pointer group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
