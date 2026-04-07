import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Zap, PhoneCall, PenTool, HandHeart } from 'lucide-react';

const reasons = [
  { 
    title: 'Government Subsidy Assistance', 
    icon: HandHeart, 
    desc: 'Expert help in securing subsidies and incentives for solar energy installations.' 
  },
  { 
    title: 'High Efficiency Solar Panels', 
    icon: Zap, 
    desc: 'Top-tier solar technology to ensure maximum energy production in any weather.' 
  },
  { 
    title: '25 Year Warranty', 
    icon: ShieldCheck, 
    desc: 'Long-term peace of mind with robust warranties on all solar systems.' 
  },
  { 
    title: 'Free Site Survey', 
    icon: PenTool, 
    desc: 'Complimentary analysis of your site to design the most efficient solar layout.' 
  },
  { 
    title: 'Professional Installation', 
    icon: CheckCircle, 
    desc: 'Certified and experienced technicians to install your solar system with precision.' 
  },
  { 
    title: '24/7 Customer Support', 
    icon: PhoneCall, 
    desc: 'Responsive support for all your solar queries and maintenance needs.' 
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why Choose <span className="text-solar-orange">VRS Power</span>?</h2>
          <p className="section-subtitle">
            We are dedicated to providing the most reliable and cost-effective solar solutions for our customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border-2 border-transparent hover:border-solar-yellow/30 card-hover group"
            >
              <div className="w-12 h-12 bg-solar-yellow/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="text-solar-orange w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-solar-dark mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
