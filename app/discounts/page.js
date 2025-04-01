"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

export default function DiscountsPage() {
  const cards = [
    {
      title: "Birthday Celebrations",
      description: "Make your special day truly magical with our elegant venues and personalized service. Perfect for ceremonies and receptions.",
      image: "/images/birthday-party.jpg",
    },
    {
      title: "Group Parties",
      description: "Contact us to get special offers for your group parties. Perfect for large gatherings and celebrations.",
      image: "/images/group-party.jpg",
    },
    {
      title: "Stag Parties",
      description: "Contact us to get special offers for your stag parties",
      image: "/images/stag-party.jpg",
    },
    {
      title: "Bachlorettes Parties",
      description: "Contact us to get special offers for your bachlorettes parties",
      image: "/images/bachlorette-party.jpg",
    }
  ]

  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-4"
        >
          Celebrate Your Special Occasions With Us
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-brand-gold text-center mb-20 text-lg max-w-3xl mx-auto"
        >
          Create unforgettable memories with our expertly curated event experiences
        </motion.p>

        <div className="flex flex-col space-y-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="w-full"
            >
              <Card className="relative border-none overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-orange to-brand-dark" />
                
                <div className="relative grid md:grid-cols-2 gap-6">
                  <div className="relative h-[300px] md:h-[400px]">
                    <motion.img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-l-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-dark/50" />
                  </div>
                  <CardContent className="p-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      <CardTitle className="text-4xl font-bold mb-6 text-brand-gold">
                        {card.title}
                      </CardTitle>
                      <CardDescription className="text-gray-200 text-xl mb-8">
                        {card.description}
                      </CardDescription>
                      <Button 
                        asChild
                        variant="outline" 
                        className="flex items-center gap-2 rounded-full bg-[#E8927C] hover:bg-[#e07e66] border-none text-white text-base px-6 py-2.5 transition-all w-32 justify-center shadow-lg"
                      >
                        <a 
                          href="tel:+420777278258"
                          className="flex items-center gap-2"
                        >
                          <svg 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="w-4 h-4"
                          >
                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                          </svg>
                          Call Us
                        </a>
                      </Button>
                    </motion.div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Instagram Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <motion.h2 
            className="text-6xl font-bold mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Follow us on Instagram!
          </motion.h2>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button 
              asChild
              className="bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] hover:opacity-90 transition-opacity text-white text-xl px-8 py-6 rounded-2xl"
            >
              <a 
                href="https://www.instagram.com/prague_party_cruise?igsh=ZXF6OG0yMDZsM2Ny" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
