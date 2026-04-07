import { motion } from 'framer-motion';
import { Clock, Building2, MapPin, Zap } from 'lucide-react';

const stats = [
  { id: 1, label: 'Years Experience', value: '10+', icon: Clock },
  { id: 2, label: 'Solar Installations', value: '500+', icon: Building2 },
  { id: 3, label: 'Cities Covered', value: '5+', icon: MapPin },
  { id: 4, label: 'Energy Generated', value: '10 MW', icon: Zap },
];

const Stats = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl text-center card-hover border-solar-yellow/10"
            >
              <div className="inline-flex items-center justify-center bg-solar-yellow/10 p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="text-solar-orange w-8 h-8" />
              </div>
              <h3 className="text-4xl font-extrabold text-solar-dark mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-gray-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
