import React, { useState } from 'react';
import { submitToGoogleSheet } from '../googleSheets';

export const RSVPForm: React.FC = () => {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRSVP = async (status: 'Accepts' | 'Declines') => {
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    try {
      await submitToGoogleSheet('rsvp', { 
        name, 
        status, 
        submittedAt: new Date().toISOString() 
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Failed to submit RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="rsvp" className="midnight-luxe-rsvp">
      <style dangerouslySetInnerHTML={{__html: `
        .midnight-luxe-rsvp button {
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.2s cubic-bezier(0.22,1,0.36,1);
        }
        .midnight-luxe-rsvp button:not(:disabled):first-of-type:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 0 3px rgba(232,197,71,0.28), 0 8px 24px -4px rgba(212,175,55,0.35);
        }
        .midnight-luxe-rsvp button:not(:disabled):last-of-type:hover {
          transform: translateY(-1px);
        }
        .midnight-luxe-rsvp button:focus-visible {
          outline: 2px solid #D4AF37;
          outline-offset: 3px;
          border-radius: 9999px;
        }
        .midnight-luxe-rsvp button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}} />
      <section className="pt-8 pb-20 sm:py-28 px-6 bg-[#FFFFF0] text-stone-800 relative">
        <div className="mx-auto max-w-xl text-center flex flex-col items-center">
          <img src="/WhatsApp_Image_2026-07-14_at_23.49.20-removebg-preview.png" alt="" className="w-full max-w-[280px] mb-6 sm:hidden object-contain" />
          <p className="text-[10px] font-medium uppercase tracking-[0.6em] mb-3 text-[#AA8000] font-sans opacity-80">
            Kindly respond
          </p>
          <div className="my-4">
            <div className="flex items-center justify-center" aria-hidden="true">
              <svg className="w-full max-w-[220px] sm:max-w-sm md:max-w-md" viewBox="0 0 220 24" preserveAspectRatio="xMidYMid meet" fill="none">
                <line x1="0" y1="12" x2="86" y2="12" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.55" />
                <polygon points="89,12 92.5,8.5 96,12 92.5,15.5" fill="#D4AF37" fillOpacity="0.65" />
                <ellipse cx="110" cy="12" rx="2.5" ry="8.5" fill="#D4AF37" fillOpacity="0.3" />
                <ellipse cx="110" cy="12" rx="8.5" ry="2.5" fill="#D4AF37" fillOpacity="0.3" />
                <circle cx="110" cy="12" r="3" fill="#D4AF37" fillOpacity="0.9" />
                <circle cx="110" cy="12" r="6" fill="none" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.45" />
                <polygon points="124,12 127.5,8.5 131,12 127.5,15.5" fill="#D4AF37" fillOpacity="0.65" />
                <line x1="134" y1="12" x2="220" y2="12" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.55" />
              </svg>
            </div>
          </div>
          <h2 className="font-serif leading-[1.05]" style={{ fontSize: "clamp(4.5rem, 18vw, 8rem)", color: "#AA8000" }}>
            RSVP
          </h2>
          <div className="my-6 sm:my-8">
            <div className="h-px w-16 mx-auto bg-[#D4AF37] opacity-35" />
          </div>
          <p className="font-sans text-sm font-light leading-relaxed mb-4 mx-auto max-w-sm text-[#444444]">
            We Look Forward to Celebrating with You<br/>
            Kindly let us know if you will be joining us by 4th August 2026.
          </p>

          <div>
            {submitted ? (
              <div className="text-center p-6 border border-[#D4AF37]/30 rounded-2xl bg-[#D4AF37]/10">
                <p className="text-lg font-serif text-[#AA8000] mb-2">Thank you!</p>
                <p className="text-sm font-sans text-stone-600">Your response has been recorded.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-6 items-center w-full max-w-xs mx-auto">
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name" 
                  className="w-full bg-transparent border-b border-[#D4AF37]/40 text-center text-stone-800 pb-3 font-sans focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-stone-400"
                  disabled={isSubmitting}
                />
                {error && <p className="text-red-400 text-xs font-sans mt-[-10px]">{error}</p>}
                <div className="flex flex-col items-center gap-4 w-full mt-2">
                  <button 
                    type="button" 
                    onClick={() => handleRSVP('Accepts')}
                    disabled={isSubmitting}
                    className="px-10 py-4 font-sans text-xs uppercase tracking-[0.3em] transition-all duration-300 hover:opacity-75 active:scale-[0.98] cursor-pointer rounded-full w-full max-w-xs font-semibold" 
                    style={{ background: "linear-gradient(135deg, #E8C547 0%, #D4AF37 100%)", color: "#080808", border: "1px solid #E8C547" }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Joyfully Accepts'}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => handleRSVP('Declines')}
                    disabled={isSubmitting}
                    className="px-10 py-4 font-sans text-xs uppercase tracking-[0.3em] transition-all duration-300 hover:opacity-75 active:scale-[0.98] cursor-pointer rounded-full w-full max-w-xs font-medium" 
                    style={{ background: "transparent", color: "#444444", border: "1px solid rgba(212,175,55,0.6)" }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Regretfully Declines'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
