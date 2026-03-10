"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0a0a0a] px-8 py-20 text-white md:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-3xl font-bold md:text-5xl">Let's Connect</h3>
            <p className="max-w-md text-gray-400 leading-relaxed">
              <strong className="text-white block mb-2">STATUS : AVAILABLE FOR CREATIVE PROJECTS</strong>
              Open for Freelance and Full-Time opportunities. Feel free to reach out to discuss your next project.
            </p>
            <div className="mt-8 border-t border-white/10 pt-8 mr-12">
              <h4 className="text-xl font-bold text-white mb-2">Mission</h4>
              <p className="text-gray-400">
                Helping brands, creators, and businesses transform ideas into visually powerful digital experiences.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 md:col-start-2 justify-center lg:items-end md:ml-auto">
            <a href="mailto:adarshxsrivastav@gmail.com" className="flex items-center gap-4 text-lg text-gray-300 transition-colors hover:text-white">
              <span className="flex w-8 justify-center"><Mail className="h-6 w-6" /></span>
              adarshxsrivastav@gmail.com
            </a>
            <a href="tel:+917270871614" className="flex items-center gap-4 text-lg text-gray-300 transition-colors hover:text-white">
              <span className="flex w-8 justify-center"><Phone className="h-6 w-6" /></span>
              +91-7270871614
            </a>
            <div className="flex items-center gap-4 text-lg text-gray-300">
              <span className="flex w-8 justify-center"><MapPin className="h-6 w-6" /></span>
              <span>India</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between border-t border-white/10 pt-8 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Adarsh Srivastav.</p>
          <p>Graphic Designer | Video Editor</p>
        </div>
      </div>
    </footer>
  );
}
