"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion, AnimatePresence } from "framer-motion"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-text-primary pt-32 pb-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-8 px-4 md:px-0"
        >
          FAQs
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-brand-gold text-center mb-16 text-lg max-w-3xl mx-auto px-4 md:px-8"
        >
          We have created a detailed section below that answers frequently asked questions. If we didn't cover something, please feel free to contact us and a member of our team will be happy to assist you. You can reach us directly, via text message or email.
        </motion.p>

        <style jsx global>{`
          .accordion-trigger {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }

          .accordion-trigger::after {
            content: '+';
            height: 1rem;
            width: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: 300;
            color: #FFD700;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .accordion-trigger[data-state='open']::after {
            content: '-';
            transform: rotate(180deg);
          }
          
          .accordion-trigger svg {
            display: none;
          }

          .accordion-content {
            overflow: hidden;
          }
        `}</style>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="boat-rules" className="border border-brand-gold/20 rounded-lg bg-ui-card overflow-hidden">
              <AccordionTrigger className="accordion-trigger px-6 py-4 hover:no-underline text-left">
                <motion.span 
                  className="text-brand-gold text-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  Boat Party Rules
                </motion.span>
              </AccordionTrigger>
              <AccordionContent className="accordion-content" asChild>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25,
                        delay: 0.1 
                      }
                    }
                  }}
                  exit={{ 
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { 
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25 
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="px-6 py-4 text-gray-200 text-lg leading-relaxed"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-6">We're here to make sure you have an epic night on the river, cruising past Prague's stunning landmarks. Follow these three simple rules for a smooth ride and an unforgettable party:</p>
                    <ol className="list-decimal pl-8 space-y-4">
                      <li>No unnecessary screaming – The views of Prague Castle and Charles Bridge are loud enough, so let's keep it classy.</li>
                      <li>Drink responsibly – Enjoy the fully stocked bar (at pub prices!), but don't go overboard like a monkey on Czech beer.</li>
                      <li>Respect the crew, the DJ, and fellow partygoers – Unruly behavior won't be tolerated, and you will miss the afterparty.</li>
                    </ol>
                  </motion.div>
                </motion.div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="whats-in-store" className="border border-brand-gold/20 rounded-lg bg-ui-card overflow-hidden">
              <AccordionTrigger className="accordion-trigger px-6 py-4 hover:no-underline text-left">
                <motion.span 
                  className="text-brand-gold text-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  What's in store?
                </motion.span>
              </AccordionTrigger>
              <AccordionContent className="accordion-content" asChild>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25,
                        delay: 0.1 
                      }
                    }
                  }}
                  exit={{ 
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { 
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25 
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="px-6 py-4 text-gray-200 text-lg leading-relaxed"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ol className="list-decimal pl-8 space-y-4">
                      <li>2-hour cruise past Prague's most iconic sights.</li>
                      <li>Resident DJ spinning party anthems from past to present.</li>
                      <li>Fully licensed bar with drinks at great prices.</li>
                      <li>Epic party vibes to keep the night alive.</li>
                      <li>Afterparty in the most modern club in Prague, EPIC Prague.</li>
                    </ol>
                  </motion.div>
                </motion.div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="where-meet" className="border border-brand-gold/20 rounded-lg bg-ui-card overflow-hidden">
              <AccordionTrigger className="accordion-trigger px-6 py-4 hover:no-underline text-left">
                <motion.span 
                  className="text-brand-gold text-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  Where do we meet?
                </motion.span>
              </AccordionTrigger>
              <AccordionContent className="accordion-content" asChild>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25,
                        delay: 0.1 
                      }
                    }
                  }}
                  exit={{ 
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { 
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25 
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="px-6 py-4 text-gray-200 text-lg leading-relaxed"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>Join us at Boat Odra, located at Náplavka, 120 00 Nové Město. Look for our crew near the boat.</p>
                  </motion.div>
                </motion.div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="buy-ticket" className="border border-brand-gold/20 rounded-lg bg-ui-card overflow-hidden">
              <AccordionTrigger className="accordion-trigger px-6 py-4 hover:no-underline text-left">
                <motion.span 
                  className="text-brand-gold text-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  How can I buy a ticket?
                </motion.span>
              </AccordionTrigger>
              <AccordionContent className="accordion-content" asChild>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25,
                        delay: 0.1 
                      }
                    }
                  }}
                  exit={{ 
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { 
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25 
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="px-6 py-4 text-gray-200 text-lg leading-relaxed"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>Tickets can be purchased directly on our website. Simply select your preferred date and time, choose your ticket, and complete the booking process.</p>
                    <p className="mt-2">For any special requests or group bookings, feel free to contact us directly.</p>
                  </motion.div>
                </motion.div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="latest-time" className="border border-brand-gold/20 rounded-lg bg-ui-card overflow-hidden">
              <AccordionTrigger className="accordion-trigger px-6 py-4 hover:no-underline text-left">
                <motion.span 
                  className="text-brand-gold text-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  What is the latest time I can join the party?
                </motion.span>
              </AccordionTrigger>
              <AccordionContent className="accordion-content" asChild>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25,
                        delay: 0.1 
                      }
                    }
                  }}
                  exit={{ 
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { 
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25 
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="px-6 py-4 text-gray-200 text-lg leading-relaxed"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>To ensure you don't miss out on the fun, please arrive at least 15 minutes before departure. The boat will set sail promptly, and we can't accommodate late arrivals once the cruise begins.</p>
                  </motion.div>
                </motion.div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="age-limit" className="border border-brand-gold/20 rounded-lg bg-ui-card overflow-hidden">
              <AccordionTrigger className="accordion-trigger px-6 py-4 hover:no-underline text-left">
                <motion.span 
                  className="text-brand-gold text-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  Is there an age limit?
                </motion.span>
              </AccordionTrigger>
              <AccordionContent className="accordion-content" asChild>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25,
                        delay: 0.1 
                      }
                    }
                  }}
                  exit={{ 
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { 
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25 
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="px-6 py-4 text-gray-200 text-lg leading-relaxed"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>Yes, the minimum age for our boat party is 18 years old. Please bring your valid ID even if you're 50—better safe than sorry!</p>
                  </motion.div>
                </motion.div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="no-credit-card" className="border border-brand-gold/20 rounded-lg bg-ui-card overflow-hidden">
              <AccordionTrigger className="accordion-trigger px-6 py-4 hover:no-underline text-left">
                <motion.span 
                  className="text-brand-gold text-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  How do I buy a ticket without a credit card?
                </motion.span>
              </AccordionTrigger>
              <AccordionContent className="accordion-content" asChild>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25,
                        delay: 0.1 
                      }
                    }
                  }}
                  exit={{ 
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { 
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25 
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="px-6 py-4 text-gray-200 text-lg leading-relaxed"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>If you don't have a credit card, you can buy tickets with cash at the spot on the day of the event. Just arrive a bit earlier to check in and secure your spot!</p>
                  </motion.div>
                </motion.div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="music" className="border border-brand-gold/20 rounded-lg bg-ui-card overflow-hidden">
              <AccordionTrigger className="accordion-trigger px-6 py-4 hover:no-underline text-left">
                <motion.span 
                  className="text-brand-gold text-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  What music do you play on the boat?
                </motion.span>
              </AccordionTrigger>
              <AccordionContent className="accordion-content" asChild>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25,
                        delay: 0.1 
                      }
                    }
                  }}
                  exit={{ 
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { 
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25 
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="px-6 py-4 text-gray-200 text-lg leading-relaxed"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>We play everything! From EDM, hip hop, reggaeton, Latino, techno, tech house, and house music—everyone will find their own music and vibe to the beats all night long!</p>
                  </motion.div>
                </motion.div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="toilets" className="border border-brand-gold/20 rounded-lg bg-ui-card overflow-hidden">
              <AccordionTrigger className="accordion-trigger px-6 py-4 hover:no-underline text-left">
                <motion.span 
                  className="text-brand-gold text-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  Are there toilets on the boat?
                </motion.span>
              </AccordionTrigger>
              <AccordionContent className="accordion-content" asChild>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25,
                        delay: 0.1 
                      }
                    }
                  }}
                  exit={{ 
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { 
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25 
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="px-6 py-4 text-gray-200 text-lg leading-relaxed"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>Yes, there are toilets available on board for your convenience, so you can enjoy the party without worrying about anything else!</p>
                  </motion.div>
                </motion.div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="dress-code" className="border border-brand-gold/20 rounded-lg bg-ui-card overflow-hidden">
              <AccordionTrigger className="accordion-trigger px-6 py-4 hover:no-underline text-left">
                <motion.span 
                  className="text-brand-gold text-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  What's the dress code?
                </motion.span>
              </AccordionTrigger>
              <AccordionContent className="accordion-content" asChild>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25,
                        delay: 0.1 
                      }
                    }
                  }}
                  exit={{ 
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { 
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25 
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="px-6 py-4 text-gray-200 text-lg leading-relaxed"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>For the boat party, feel free to dress casually and comfortably—just make sure you're ready to dance and have fun!</p>
                    <p className="mt-2">However, for afterparty entry at EPIC Prague, there is a dress code: casual but stylish is the way to go. Avoid sportswear, flip-flops, or anything too informal to ensure smooth entry into the club.</p>
                  </motion.div>
                </motion.div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="leave-early" className="border border-brand-gold/20 rounded-lg bg-ui-card overflow-hidden">
              <AccordionTrigger className="accordion-trigger px-6 py-4 hover:no-underline text-left">
                <motion.span 
                  className="text-brand-gold text-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  Can we leave the party before the end?
                </motion.span>
              </AccordionTrigger>
              <AccordionContent className="accordion-content" asChild>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25,
                        delay: 0.1 
                      }
                    }
                  }}
                  exit={{ 
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { 
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25 
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="px-6 py-4 text-gray-200 text-lg leading-relaxed"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>Once you're on the boat, you can't leave during the cruise, as we're out on the river. However, when we return to shore and head to EPIC Prague for the afterparty, please note that EPIC has one-way entry. Once you enter the club, re-entry is not allowed, so plan to enjoy the party until the end!</p>
                  </motion.div>
                </motion.div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="own-food-drink" className="border border-brand-gold/20 rounded-lg bg-ui-card overflow-hidden">
              <AccordionTrigger className="accordion-trigger px-6 py-4 hover:no-underline text-left">
                <motion.span 
                  className="text-brand-gold text-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  Can I bring my own food and drink?
                </motion.span>
              </AccordionTrigger>
              <AccordionContent className="accordion-content" asChild>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25,
                        delay: 0.1 
                      }
                    }
                  }}
                  exit={{ 
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { 
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25 
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="px-6 py-4 text-gray-200 text-lg leading-relaxed"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>Unfortunately, outside food and drinks are not allowed on the boat. We have a fully stocked bar on board with great prices, so you can enjoy drinks and snacks throughout the cruise.</p>
                  </motion.div>
                </motion.div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="group-discounts" className="border border-brand-gold/20 rounded-lg bg-ui-card overflow-hidden">
              <AccordionTrigger className="accordion-trigger px-6 py-4 hover:no-underline text-left">
                <motion.span 
                  className="text-brand-gold text-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  Do you offer discounts for big groups?
                </motion.span>
              </AccordionTrigger>
              <AccordionContent className="accordion-content" asChild>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25,
                        delay: 0.1 
                      }
                    }
                  }}
                  exit={{ 
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { 
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25 
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="px-6 py-4 text-gray-200 text-lg leading-relaxed"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>Yes, we offer special rates for groups of 20 or more. Please reach out to us with your group details, and we'll be happy to provide you with tailored pricing and any available discounts.</p>
                  </motion.div>
                </motion.div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="refunds" className="border border-brand-gold/20 rounded-lg bg-ui-card overflow-hidden">
              <AccordionTrigger className="accordion-trigger px-6 py-4 hover:no-underline text-left">
                <motion.span 
                  className="text-brand-gold text-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  Are you able to refund me if I need to cancel?
                </motion.span>
              </AccordionTrigger>
              <AccordionContent className="accordion-content" asChild>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25,
                        delay: 0.1 
                      }
                    }
                  }}
                  exit={{ 
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { 
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25 
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="px-6 py-4 text-gray-200 text-lg leading-relaxed"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>Refunds are subject to our cancellation policy. Please contact us as soon as possible if you need to cancel, and we will inform you of the available options based on the timing of your request. For detailed information on our policy, please refer to our terms and conditions.</p>
                  </motion.div>
                </motion.div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="receive-tickets" className="border border-brand-gold/20 rounded-lg bg-ui-card overflow-hidden">
              <AccordionTrigger className="accordion-trigger px-6 py-4 hover:no-underline text-left">
                <motion.span 
                  className="text-brand-gold text-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  How will I receive my tickets?
                </motion.span>
              </AccordionTrigger>
              <AccordionContent className="accordion-content" asChild>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25,
                        delay: 0.1 
                      }
                    }
                  }}
                  exit={{ 
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { 
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98]
                      },
                      opacity: { 
                        duration: 0.25 
                      }
                    }
                  }}
                >
                  <motion.div 
                    className="px-6 py-4 text-gray-200 text-lg leading-relaxed"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>Once your booking is confirmed, your tickets will be sent to you via email. You can either print them out or show the digital version on your phone when you check in at the boat.</p>
                  </motion.div>
                </motion.div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </div>
  )
}
