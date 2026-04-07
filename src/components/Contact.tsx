import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Start Saving With <span className="text-solar-orange">Solar Today</span></h2>
          <p className="section-subtitle">
            Get in touch for a free consultation and let us help you design the perfect solar energy system.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto glass rounded-3xl p-6 md:p-12 shadow-2xl glow-orange relative overflow-hidden bg-gradient-to-br from-white via-solar-yellow/10 to-solar-orange/10 border-solar-yellow/20">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-solar-yellow/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-solar-orange/20 rounded-full blur-3xl -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="bg-solar-yellow/20 p-4 rounded-2xl">
                  <Phone className="text-solar-orange w-8 h-8" />
                </div>
                <div>
                  <p className="text-gray-500 font-medium">Call Us Now</p>
                  <a href="tel:+917000553257" className="text-2xl font-bold text-solar-dark hover:text-solar-orange transition-colors tracking-tight">
                    +91 7000553257
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="bg-solar-yellow/20 p-4 rounded-2xl">
                  <Mail className="text-solar-orange w-8 h-8" />
                </div>
                <div>
                  <p className="text-gray-500 font-medium">Email Address</p>
                  <a href="mailto:vrspower@gmail.com" className="text-2xl font-bold text-solar-dark hover:text-solar-orange transition-colors tracking-tight">
                    vrspower@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-5">
                <a 
                  href="tel:+917000553257" 
                  className="btn-primary flex items-center justify-center space-x-3 py-4 px-10 text-lg shadow-xl shadow-solar-orange/20"
                >
                  <Phone size={24} />
                  <span>Call Now</span>
                </a>
                <a 
                  href="https://wa.me/917000553257" 
                  className="btn-secondary flex items-center justify-center space-x-3 py-4 px-10 text-lg border-2 border-solar-orange/30 hover:border-solar-orange transition-all"
                >
                  <MessageCircle size={24} className="text-green-500" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <form className="space-y-6 bg-white/50 p-8 rounded-2xl border border-white/20 backdrop-blur-sm shadow-xl">
              <div>
                <label className="block text-sm font-semibold text-solar-dark mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-orange focus:ring-2 focus:ring-solar-orange/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-solar-dark mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 00000 00000" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-orange focus:ring-2 focus:ring-solar-orange/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-solar-dark mb-2">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your solar needs..." 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-solar-orange focus:ring-2 focus:ring-solar-orange/20 outline-none transition-all resize-none"
                />
              </div>
              <button className="w-full btn-primary flex items-center justify-center space-x-3 py-4 text-lg">
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
