import React from 'react';
import { motion } from 'motion/react';

export const NoteFromUs: React.FC = () => {
  return (
    <section aria-label="A note from us" id="note" className="relative py-24 sm:py-36 px-6 overflow-hidden bg-[#FFFFF0] text-stone-800">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent)" }} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28" style={{ background: "linear-gradient(180deg, rgba(212,175,55,0.05) 0%, transparent 100%)" }} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)" }} aria-hidden="true" />
      
      <div className="relative mx-auto max-w-5xl">
        <motion.div 
          className="text-center mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-serif text-3xl sm:text-4xl mb-3" style={{ color: "#AA8000" }}>A Note From Us</p>
          <div className="flex items-center justify-center gap-3" aria-hidden="true">
            <div className="h-px w-12 sm:w-16" style={{ background: "linear-gradient(90deg, transparent, #D4AF37cc)" }} />
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <polygon points="4.5,0 9,4.5 4.5,9 0,4.5" fill="#D4AF37" fillOpacity="0.85" />
            </svg>
            <div className="h-px w-12 sm:w-16" style={{ background: "linear-gradient(270deg, transparent, #D4AF37cc)" }} />
          </div>
        </motion.div>

        <div className="grid items-center gap-12 lg:gap-16 md:grid-cols-12">
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mx-auto w-full max-w-sm md:max-w-none px-3 py-6 sm:px-4 sm:py-8">
              <div className="overflow-hidden rotate-[2deg] origin-center" style={{ border: "1.5px solid rgba(212,175,55,0.48)", boxShadow: "0 14px 44px -12px rgba(212,175,55,0.28), 0 24px 56px -20px rgba(0,0,0,0.55), 0 0 0 1px rgba(212,175,55,0.18)" }}>
                <img src="/2.jpg" alt="A moment captured" className="aspect-[3/4] w-full object-cover" loading="lazy" decoding="async" style={{ filter: "saturate(0.96) contrast(1.01)" }} />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-7 text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="leading-none select-none mb-2" aria-hidden="true">
              <span className="font-display font-light" style={{ fontSize: "clamp(4rem, 14vw, 7rem)", color: "#AA8000", opacity: 0.7, lineHeight: 1 }}>“</span>
            </div>
            <p className="font-display font-light italic leading-[1.4] px-2" style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)", color: "#333333", marginTop: "-1rem" }}>
              Love brought us together, and with the blessings of our families,<br />
              we joyfully invite you to witness the beginning of our forever.<br />
              Join us as we celebrate our wedding and the promise of a lifetime filled with love, happiness, and togetherness.<br />
              We would be honoured to have you share this memorable day with us.
            </p>
            <div className="mt-8 sm:mt-10">
              <div className="flex items-center justify-center gap-3 mb-5" aria-hidden="true">
                <div className="h-px w-12 sm:w-16" style={{ background: "linear-gradient(90deg, transparent, #D4AF37cc)" }} />
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <polygon points="4.5,0 9,4.5 4.5,9 0,4.5" fill="#D4AF37" fillOpacity="0.85" />
                </svg>
                <div className="h-px w-12 sm:w-16" style={{ background: "linear-gradient(270deg, transparent, #D4AF37cc)" }} />
              </div>
              <p className="font-serif text-2xl sm:text-3xl" style={{ color: "#AA8000" }}>
                Roshini &amp; Nimesh
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 pointer-events-none opacity-90 max-w-[150px] sm:max-w-[200px] md:max-w-[250px]">
        <img 
          src="/WhatsApp_Image_2026-07-14_at_23.49.19-removebg-preview.png" 
          alt="" 
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
};
