"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.45, ease: "easeOut" },
  }),
}

export default function DiscountsPage() {
  // Color system (max 5 total):
  // 1) Primary: #E8927C (peach)
  // 2-4) Neutrals: bg-background, text-foreground, text-muted-foreground
  // 5) Accent (subtle): slate-500 for borders/dividers
  const cards = [
    {
      title: "Birthday Celebrations",
      description:
        "Make your special day truly magical with our elegant venues and personalized service. Perfect for ceremonies and receptions.",
      image: "/images/birthday-party.jpg",
    },
    {
      title: "Group Parties",
      description:
        "Contact us to get special offers for your group parties. Perfect for large gatherings and celebrations.",
      image: "/images/group-party.jpg",
    },
    {
      title: "Stag Parties",
      description: "Contact us to get special offers for your stag parties.",
      image: "/images/stag-party.jpg",
    },
    {
      title: "Bachelorette Parties",
      description: "Contact us to get special offers for your bachelorette parties.",
      image: "/images/bachlorette-party.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground pt-24 pb-16 px-4 md:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm tracking-wide uppercase text-muted-foreground"
          >
            Events & Discounts
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-pretty text-4xl md:text-5xl font-semibold mt-3"
          >
            Celebrate Your Special Occasions With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-pretty text-muted-foreground max-w-2xl mx-auto mt-4 md:text-lg"
          >
            Create unforgettable memories with our expertly curated event experiences.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-12 md:gap-16">
          {cards.map((card, index) => {
            const isEven = index % 2 === 1
            return (
              <motion.section
                key={card.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                className="w-full"
              >
                <Card className="border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-shadow">
                  <div className="grid md:grid-cols-12 gap-6 md:gap-8">
                    {/* Image */}
                    <div className={cn("md:col-span-5 relative h-[200px] md:h-full order-1", isEven && "md:order-2")}>
                      <motion.img
                        src={card.image}
                        alt={`${card.title} — sample image`}
                        className="absolute inset-0 size-full object-cover rounded-md"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.28 }}
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-slate-200/40 dark:ring-slate-800/50 rounded-md pointer-events-none" />
                    </div>

                    {/* Content */}
                    <CardContent
                      className={cn(
                        "md:col-span-7 p-6 md:p-8 flex flex-col justify-center order-2",
                        isEven && "md:order-1",
                      )}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.12 + index * 0.05 }}
                        className="space-y-4"
                      >
                        <h2 className="text-2xl md:text-3xl font-semibold text-pretty">{card.title}</h2>
                        <p className="text-muted-foreground md:text-lg leading-relaxed">{card.description}</p>

                        <div className="pt-2">
                          <Button
                            asChild
                            className="rounded-full bg-[#E8927C] hover:bg-[#e07e66] text-white px-6 py-2.5"
                          >
                            <a
                              href="tel:+420777278258"
                              aria-label="Call us at +420 777 278 258"
                              className="flex items-center gap-2"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                              </svg>
                              Call Us
                            </a>
                          </Button>
                        </div>
                      </motion.div>
                    </CardContent>
                  </div>
                </Card>
              </motion.section>
            )
          })}
        </div>

        {/* Instagram Section */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-28 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-pretty">See more moments on Instagram</h3>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Behind-the-scenes, guest highlights, and event inspiration from recent cruises.
          </p>

          <div className="mt-8">
            <Button asChild variant="outline" className="px-6 py-5 text-base bg-transparent">
              <a
                href="https://www.instagram.com/prague_party_cruise?igsh=ZXF6OG0yMDZsM2Ny"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
                aria-label="Follow us on Instagram (opens in a new tab)"
              >
                {/* Subtle gradient accent only on the icon for brand recognition */}
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F77737 100%)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.675c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zM18.406 5.318c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </span>
                Follow us on Instagram
              </a>
            </Button>
          </div>
        </motion.section>
      </div>
    </main>
  )
}
