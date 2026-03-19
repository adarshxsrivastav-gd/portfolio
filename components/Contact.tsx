"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <footer className="relative z-10 border-t border-black/10 dark:border-white/10 bg-gray-50 transition-colors duration-300 dark:bg-[#0a0a0a] px-8 py-24 text-gray-900 dark:text-white md:px-24">
      <div className="mx-auto max-w-7xl">
        
        {/* CTA Block */}
        <motion.div 
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-gray-200/50 to-gray-100 dark:from-white/10 dark:to-white/5 border border-black/5 dark:border-white/10 p-12 md:p-20 mb-24 text-center shadow-sm dark:shadow-none"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white relative z-10">
            Ready to elevate your brand?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed">
            Open for Freelance and Full-Time opportunities. Let's collaborate to transform your ideas into visually powerful digital experiences.
          </p>
          
          <motion.a 
            href="mailto:adarshxsrivastav@gmail.com?subject=Project%20Inquiry&body=Hi%20Adarsh%2C%20I%20would%20like%20to%20work%20with%20you."
            className="relative z-10 inline-flex items-center gap-3 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-8 py-4 text-lg font-medium transition-all hover:bg-gray-800 dark:hover:bg-gray-100 hover:shadow-[0_0_40px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-16">
          {[
            {
              icon: <Mail className="h-6 w-6" />,
              title: "Email Me",
              value: "adarshxsrivastav@gmail.com",
              href: "mailto:adarshxsrivastav@gmail.com?subject=Project%20Inquiry&body=Hi%20Adarsh%2C%20I%20would%20like%20to%20work%20with%20you."
            },
            {
              icon: <Phone className="h-6 w-6" />,
              title: "Connect with Me",
              value: "+91-7270871614",
              href: "https://wa.me/917270871614?text=Hi%20Adarsh%2C%20I%20want%20to%20connect%20with%20you.",
              external: true
            },
            {
              icon: <MapPin className="h-6 w-6" />,
              title: "Location",
              value: "India",
              href: null,
              external: false
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.href ? (
                <motion.a 
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center p-10 rounded-3xl bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 transition-all"
                  whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)" }}
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-gray-100 dark:group-hover:bg-white/10">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center font-medium">{item.value}</p>
                </motion.a>
              ) : (
                <motion.div 
                  className="group flex flex-col items-center p-10 rounded-3xl bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 transition-all"
                  whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)" }}
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-gray-100 dark:group-hover:bg-white/10">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center font-medium">{item.value}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-black/10 dark:border-white/10 pt-8 text-sm font-medium text-gray-500 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Adarsh Srivastav.</p>
          <p className="mt-2 md:mt-0 uppercase tracking-widest text-xs">Graphic Designer • Video Editor</p>
        </div>
      </div>
    </footer>
  );
}
