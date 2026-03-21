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
        
        {/* Modern 3-Column Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border-t border-black/10 dark:border-white/10 pt-16 mt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
            
            {/* Column 1: Brand */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Adarsh Srivastav</h3>
              <p className="text-cyan-600 dark:text-cyan-400 text-sm mb-4">Graphic Designer & Video Editor</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Open for Freelance & Full-Time opportunities</p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-6">Quick Links</h4>
              <nav className="flex flex-col space-y-3">
                {["About", "Experience", "Skills", "Design Expertise", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 3: Connect With Me */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-6">Connect With Me</h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/adarsh-srivastav-3947b3201?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-[44px] w-[44px] items-center justify-center rounded-full bg-gray-900 dark:bg-[#111] border-[1.5px] border-cyan-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[20px] w-[20px] text-white transition-colors group-hover:text-cyan-400">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="mailto:adarshxsrivastav@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-[44px] w-[44px] items-center justify-center rounded-full bg-gray-900 dark:bg-[#111] border-[1.5px] border-cyan-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                  aria-label="Email"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[20px] w-[20px] text-white transition-colors group-hover:text-cyan-400">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </a>
                <a
                  href="https://wa.me/917270871614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-[44px] w-[44px] items-center justify-center rounded-full bg-gray-900 dark:bg-[#111] border-[1.5px] border-cyan-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[20px] w-[20px] text-white transition-colors group-hover:text-cyan-400">
                    <path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.126.554 4.195 1.605 6L.044 24l6.113-1.605A11.956 11.956 0 0012.031 24c6.636 0 12.032-5.395 12.032-12.031S18.667 0 12.031 0zm0 22.015c-1.802 0-3.565-.486-5.115-1.405l-.367-.217-3.8.997 1.015-3.705-.238-.38A10.027 10.027 0 012.016 12.03C2.016 6.502 6.503 2.015 12.031 2.015S22.045 6.502 22.045 12.03c0 5.528-4.487 10.015-10.014 10.015zm5.514-7.53c-.302-.152-1.787-.883-2.064-.984-.277-.101-.48-.152-.68.152-.202.304-.78 1.014-.956 1.217-.177.203-.354.228-.656.076-1.554-.78-2.6-1.433-3.606-3.18-.178-.303.242-.294.624-.962.076-.153.038-.28-.038-.432-.075-.152-.68-1.642-.932-2.25-.246-.593-.496-.512-.68-.521h-.58c-.202 0-.53.076-.807.38-.277.304-1.059 1.038-1.059 2.532 0 1.494 1.084 2.937 1.236 3.14.152.203 2.14 3.268 5.186 4.582 2.053.886 2.766.758 3.27.633.563-.14 1.787-.73 2.04-1.433.252-.704.252-1.306.176-1.433-.075-.127-.277-.203-.58-.355z"/>
                  </svg>
                </a>
                <a
                  href="https://www.behance.net/adarshsrivastav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-[44px] w-[44px] items-center justify-center rounded-full bg-gray-900 dark:bg-[#111] border-[1.5px] border-cyan-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                  aria-label="Behance"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[20px] w-[20px] text-white transition-colors group-hover:text-cyan-400">
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-black/10 dark:border-white/10 pt-8 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-500">© 2026 Adarsh Srivastav. All Rights Reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
