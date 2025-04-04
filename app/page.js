'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Ship, Users, Gift, Ticket, Wine, Gamepad2, Beer, Music, ChevronFirst, ChevronLast } from "lucide-react";
import { CircleDotDashed } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import React from "react";
import { GTMButton } from "@/components/GTMButton";


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 14;
  const [api, setApi] = useState(null);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          style={{ pointerEvents: 'none' }}
        >
          <source src="/videos/party-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/80 z-10" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 flex flex-col items-center justify-center h-full text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-[0.08em]" style={{
            textShadow: '3px 3px 0px rgba(255, 192, 203, 0.8)',
            color: 'white'
          }}>
            #1 BOAT PARTY IN PRAGUE
          </h1>
          <GTMButton 
            href="https://connect.boomevents.org/cs/organizer/2e24ee9e-6ef3-428b-a037-a5efabf8f07f"
            className="bg-[#FF5F00] text-white hover:bg-[#FF5F00]/90"
            clickId="hero_buy_tickets"
            buttonId="hero-button"
          >
            TICKETS FOR JUST 12 €
          </GTMButton>
          {/* <Button
          className="bg-[#FF5F00] text-white hover:bg-[#FF5F00]/90"
          onClick={() => {
            window.open('https://connect.boomevents.org/cs/organizer/2e24ee9e-6ef3-428b-a037-a5efabf8f07f', '_blank');
          }}
           >
            TICKETS FOR JUST 12 €
          </Button> */}
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="bg-gradient-to-b from-[#FF4500] via-[#8B2703] to-[#0b0c1c] py-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 md:mb-8 tracking-[0.08em]" style={{color: '#F9CF58'}}>
            FEATURED ON
          </h2>
          <div className="flex flex-row justify-center items-center gap-4 md:gap-12 space-x-4 md:space-x-8">
            <Image 
              src="https://imgs.search.brave.com/somNJG1usl4Q3jbtMTUGIfsdFxQC_1iVOi5TLmjI1UQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzVi/ZmQ0OTdkMzYwOTli/OGNhNWRmMjAzOS8x/NTQzMzI4MDk0OTAz/LUZVSTYyWDE4MTA2/RlMwSTdGNEFSL0dZ/R19FeHByZXNzaXZl/X0xvZ29fMDFfUmVk/X1JHQl9IUi5wbmc_/Zm9ybWF0PTE1MDB3" 
              alt="Get Your Guide" 
              width={100} 
              height={33} 
              className="w-[90px] md:w-[120px] h-auto"
            />
            <Image 
              src="/images/tripadvisor.png" 
              alt="TripAdvisor" 
              width={100} 
              height={33}
              className="w-[90px] md:w-[120px] h-auto" 
            />
            <Image 
              src="/images/bookingcom-1.svg" 
              alt="Booking.com" 
              width={100} 
              height={33}
              className="w-[90px] md:w-[120px] h-auto"
            />
          </div>
        </motion.div>
      </section>

      {/* Reasons Why Section */}
      <section className="relative min-h-screen py-20 overflow-hidden">
        <Image 
          src="/images/party-crowd.jpg" 
          alt="Party Background" 
          fill
          className="object-cover object-center absolute inset-0 z-0"
          priority
        />
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8 md:mb-16 text-white tracking-[0.08em]">
            REASONS WHY TO BOON WITH US?
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 max-w-5xl mx-auto mt-8 md:mt-20">
            {/* #1 Boat Party */}
            <div className="flex flex-col items-center text-center">
              <div className="border border-white/50 p-4 md:p-6 rounded-xl mb-4 w-[120px] h-[100px] md:w-[160px] md:h-[140px] flex items-center justify-center">
                <Ship size={35} className="text-white md:w-[50px] md:h-[50px]" />
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2">#1 Boat Party</h3>
            </div>

            {/* Best Party Guides */}
            <div className="flex flex-col items-center text-center">
              <div className="border border-white/50 p-4 md:p-6 rounded-xl mb-4 w-[120px] h-[100px] md:w-[160px] md:h-[140px] flex items-center justify-center">
                <Users size={35} className="text-white md:w-[50px] md:h-[50px]" />
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2">Best Party Guides</h3>
            </div>

            {/* Exclusive Offers */}
            <div className="flex flex-col items-center text-center">
              <div className="border border-white/50 p-4 md:p-6 rounded-xl mb-4 w-[120px] h-[100px] md:w-[160px] md:h-[140px] flex items-center justify-center">
                <Gift size={35} className="text-white md:w-[50px] md:h-[50px]" />
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2">Exclusive Offers</h3>
            </div>

            {/* Free Entry */}
            <div className="flex flex-col items-center text-center">
              <div className="border border-white/50 p-4 md:p-6 rounded-xl mb-4 w-[120px] h-[100px] md:w-[160px] md:h-[140px] flex items-center justify-center">
                <Ticket size={35} className="text-white md:w-[50px] md:h-[50px]" />
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2">Free Entry</h3>
            </div>

            {/* Welcome Shots */}
            <div className="flex flex-col items-center text-center">
              <div className="border border-white/50 p-4 md:p-6 rounded-xl mb-4 w-[120px] h-[100px] md:w-[160px] md:h-[140px] flex items-center justify-center">
                <Wine size={35} className="text-white md:w-[50px] md:h-[50px]" />
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2">Welcome Shots</h3>
            </div>

            {/* Crazy Wild Games */}
            <div className="flex flex-col items-center text-center">
              <div className="border border-white/50 p-4 md:p-6 rounded-xl mb-4 w-[120px] h-[100px] md:w-[160px] md:h-[140px] flex items-center justify-center">
                <Gamepad2 size={35} className="text-white md:w-[50px] md:h-[50px]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Crazy Wild Games</h3>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Hashtag Ticker */}
      <section className="bg-[#ff5f00] py-4 overflow-hidden whitespace-nowrap">
        <div className="flex animate-[marquee_30s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex animate-[marquee_30s_linear_infinite]">
              {['#PartyTime', '#CelebrationMode', '#GoodVibes', '#PartySquad', '#NightToRemember', '#LetsCelebrate', '#PartyVibes', '#FestiveMood'].map((tag) => (
                <span key={tag} className="text-[#F9CF58] text-2xl mx-8 tracking-[0.1em] font-bold">{tag}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Party Schedule Section */}
      <section className="bg-[#0b0c1c] w-full">
        <div className="bg-gradient-to-b from-[#ff5f00] to-[#0b0c1c] pt-12 w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-center tracking-[0.08em]" 
            style={{color: '#F9CF58'}}
          >
            PARTY SCHEDULE
          </motion.h2>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full px-8 md:px-16 lg:px-24 mt-20"
        >
          <div className="space-y-32">
            {/* Boat Party */}
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <Ship className="w-16 h-16 text-[#F9CF58]" />
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">BOAT PARTY</h3>
                  <p className="text-[#F9CF58] font-semibold text-xl">8:00 PM - 10:00 PM</p>
                </div>
              </div>
              <p className="text-white/90 text-xl md:text-2xl">
                Our boat party is the craziest, wildest, and most unforgettable experience! Enjoy welcome shots, insane party games, and the best crowd. Dance, drink, and vibe before we hit the club!
              </p>
              <Carousel className="w-full">
                <CarouselContent>
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-full h-[400px] md:h-[550px] rounded-xl overflow-hidden">
                        <Image
                          src={`/images/boat-party-${index}.jpg`}
                          alt={`Boat Party ${index}`}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-black/30 hover:bg-black/50 text-white h-12 w-12 md:h-16 md:w-16">
                  
                </CarouselPrevious>
                <CarouselNext className="right-4 bg-black/30 hover:bg-black/50 text-white h-12 w-12 md:h-16 md:w-16">
                  
                </CarouselNext>
              </Carousel>
            </div>

            {/* Beer Pong Tournament */}
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <Image 
                  src="/images/beer.png"
                  alt="Beer Pong Icon"
                  width={64}
                  height={64}
                  className="text-[#F9CF58]"
                />
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">BEER PONG TOURNAMENT</h3>
                  <p className="text-[#F9CF58] font-semibold text-xl">10:00 PM - 00:00 AM</p>
                </div>
              </div>
              <p className="text-white/90 text-xl md:text-2xl">
                After the Boat Party, join our Beer Pong Tournament or head straight to the club for an epic night! Compete, win prizes, and keep the vibes alive before the real party begins
              </p>
              <Carousel className="w-full">
                <CarouselContent>
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-full h-[400px] md:h-[550px] rounded-xl overflow-hidden">
                        <Image
                          src={`/images/beer-pong-${index}.jpg`}
                          alt={`Beer Pong ${index}`}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-black/30 hover:bg-black/50 text-white h-12 w-12 md:h-16 md:w-16">
                  
                </CarouselPrevious>
                <CarouselNext className="right-4 bg-black/30 hover:bg-black/50 text-white h-12 w-12 md:h-16 md:w-16">
                  
                </CarouselNext>
              </Carousel>
            </div>

            {/* After Party @ EPIC */}
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <Image 
                  src="/images/disco-ball.png"
                  alt="After Party Icon"
                  width={64}
                  height={64}
                  className="text-[#F9CF58]"
                />
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">AFTER PARTY @ EPIC</h3>
                  <p className="text-[#F9CF58] font-semibold text-xl">10:00 PM - 5:00 AM</p>
                </div>
              </div>
              <p className="text-white/90 text-xl md:text-2xl">
                After the boat, the party continues at EPIC Club, the most modern and high-energy club in Prague! With top DJs, mind-blowing lights, and the wildest crowd, get ready for an unforgettable night of music, dancing, and pure party madness!
                <br />
                <span className="italic mt-4 block text-xl md:text-2xl">Fair warning: Only party legends survive this level. Think you can handle it?</span>
              </p>
              <Carousel className="w-full">
                <CarouselContent>
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-full h-[400px] md:h-[550px] rounded-xl overflow-hidden">
                        <Image
                          src={`/images/epic-party-${index}.jpg`}
                          alt={`Epic Party ${index}`}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-black/30 hover:bg-black/50 text-white h-12 w-12 md:h-16 md:w-16">
                  
                </CarouselPrevious>
                <CarouselNext className="right-4 bg-black/30 hover:bg-black/50 text-white h-12 w-12 md:h-16 md:w-16">
                  
                </CarouselNext>
              </Carousel>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Divider Line */}
      <div className="w-full flex justify-center bg-[#0b0c1c] pt-20">
        <div className="w-1/2 h-[2px] bg-[#ff5f00]"></div>
      </div>

      {/* Party Packages Section */}
      <section className="bg-[#0b0c1c] py-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 tracking-[0.08em]" 
              style={{ 
                color: '#F9CF58',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
              }}>
            SELECT YOUR PARTY PACKAGE
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* All three cards with consistent height */}
            {[
              {
                title: "Boat Deal",
                price: "12",
                icon: "/images/ticket.png",
                bestSellerIcon: "",
                image: "/images/boat-deal.jpg",
                features: [
                  "2 hour boat party",
                  "Welcome shoot",
                  "Themed events",
                  "", // Empty strings for consistent height
                  ""
                ],
                hoverColor: "#ff5f00"
              },
              {
                title: "Hottest Deal",
                price: "16",
                icon: "",
                bestSellerIcon: "/images/best-seller.png",
                image: "/images/hot-deal.jpg",
                features: [
                  "EVERYTHING FROM BOAT DEAL",
                  "Free shots",
                  "No queue, no waiting",
                  "Entrance to after party at EPIC CLUB",
                  "Drinking games"
                ],
                isBestSeller: true,
                hoverColor: "#efbf04"
              },
              {
                title: "Add-On Deal",
                price: "22",
                icon: "/images/ticket.png",
                bestSellerIcon: "",
                image: "/images/bonus-deal.jpg",
                features: [
                  "Beer Pongs with free beer for 2 hours",
                  "", // Empty strings for consistent height
                  "",
                  "",
                  ""
                ],
                hoverColor: "#ff5f00"
              }
            ].map((deal, index) => (
              <div key={index} className="group relative">
                <div className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${deal.isBestSeller ? 'hover:shadow-[0_0_80px_rgba(239,191,4,0.8)]' : 'hover:shadow-[0_0_80px_rgba(255,95,0,0.8)]'} h-[500px] flex flex-col`}>
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image 
                      src={deal.image} 
                      alt={deal.title} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
                  </div>

                  {/* Content */}
                  <div className="relative flex flex-col h-full">
                    {/* Header */}
                    <div className="flex flex-col items-center pt-3 gap-1">
                      <div className="flex items-center gap-3">
                        {deal.bestSellerIcon && (
                          <Image 
                            src={deal.bestSellerIcon}
                            alt="Best Seller"
                            width={50}
                            height={50}
                            className="mb-1"
                          />
                        )}
                        {!deal.bestSellerIcon && deal.icon && (
                          <Image 
                            src={deal.icon}
                            alt={deal.title}
                            width={50}
                            height={50}
                          />
                        )}
                        {!deal.bestSellerIcon && !deal.icon && <div className="w-[32px] h-[32px]" />}
                      </div>
                      <p className="text-white text-xl font-bold">From {deal.price} €</p>
                    </div>

                    {/* Title */}
                    <h3 className="text-center text-3xl font-bold text-white px-4 mt-1">{deal.title}</h3>

                    {/* Features */}
                    <div className="p-3 pl-6 flex flex-col flex-grow">
                      <p className="text-white text-lg font-bold mb-2">YOU GET:</p>
                      <ul className="space-y-1.5 text-white/90 text-base flex-grow">
                        {deal.features.map((feature, i) => (
                          <li key={i} className={feature ? "" : "invisible"}>
                            {feature ? `- ${feature}` : "-"}
                          </li>
                        ))}
                      </ul>
                      <GTMButton className={`w-full mt-4 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white text-lg py-4 rounded-full transition-all duration-300 ${deal.isBestSeller ? 'hover:border-[#efbf04] hover:shadow-[0_0_80px_rgba(239,191,4,0.8)]' : 'hover:border-[#ff5f00] hover:shadow-[0_0_80px_rgba(255,95,0,0.8)]'}`}
                        href="https://connect.boomevents.org/cs/organizer/2e24ee9e-6ef3-428b-a037-a5efabf8f07f"
                        clickId={`package_${deal.title.toLowerCase().replace(' ', '_')}`}
                        buttonId={`package-${deal.title.toLowerCase().replace(' ', '-')}`}>
                        Book Now
                      </GTMButton>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Special Deals Section */}
          <div className="text-center mt-20">
            <h3 className="text-4xl text-white font-bold mb-8">For Special Deals</h3>
            <Button 
              className="bg-[#ff5f00] hover:bg-[#ff5f00]/90 text-white text-2xl px-16 py-6 rounded-lg"
              onClick={() => window.location.href = '/discounts'}
            >
              Check Out
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Divider Line */}
      <div className="w-full flex justify-center bg-brand-dark">
        <div className="w-1/2 h-[2px] bg-[#ff5f00]"></div>
      </div>

      {/* Meeting Point Section */}
      <section className="bg-gradient-to-b from-[#0b0c1c] to-[#ff5f00] py-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-[#F9CF58] tracking-[0.08em]">
            MEETING POINT
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Boat Location */}
            <div className="relative rounded-2xl overflow-hidden border border-white/20 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center p-12">
                <div className="text-[#F9CF58] mb-8">
                  <Ship size={64} />
                </div>
                <h3 className="text-[#F9CF58] text-3xl font-bold mb-4">Boat Location</h3>
                <p className="text-white text-lg mb-2">
                  Loď Odra, Náplavka,<br />
                  New Town, Czechia
                </p>
                <p className="text-white/70 text-sm">
                  (Location updated 2 hours prior via text)
                </p>
              </div>
            </div>

            {/* After Party */}
            <div className="relative rounded-2xl overflow-hidden border border-white/20 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center p-12">
                <div className="text-[#F9CF58] mb-8">
                  <Music size={64} />
                </div>
                <h3 className="text-[#F9CF58] text-3xl font-bold mb-4">After-Party</h3>
                <p className="text-white text-lg">
                  Epic Prague, Revoluční,<br />
                  Old Town, Czechia
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Party Life Section */}
      <section className="bg-[#0b0c1c] py-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full px-4 md:px-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-[0.08em]" 
              style={{ 
                color: '#F9CF58',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
              }}>
            PARTY LIFE, PARTY VIBES
          </h2>
          
          {/* Carousel Gallery */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="relative h-[400px] md:h-[550px] rounded-xl overflow-hidden">
                    <Image
                      src={`/images/party-life-${index}.jpg`}
                      alt={`Party Life ${index}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index <= 4}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-[#ff5f00] w-4' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  onClick={() => {
                    api?.scrollTo(index);
                  }}
                />
              ))}
            </div>
          </Carousel>
        </motion.div>
      </section>
    </div>
  );
}

// Package Card Component
function PackageCard({ title, price, features, image, bestSeller }) {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-ui-card/30 backdrop-blur-sm border border-white/10">
      {bestSeller && (
        <div className="absolute top-4 right-4 bg-brand-gold px-3 py-1 rounded-full text-brand-dark text-sm font-bold">
          BEST SELLER
        </div>
      )}
      <Image src={image} alt={title} width={400} height={300} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl text-white">{title}</h3>
          <p className="text-brand-gold">From {price} €</p>
        </div>
        <div className="mb-6">
          <p className="text-white mb-2">YOU GET:</p>
          <ul className="space-y-2">
            {features.map((feature) => (
              <li key={feature} className="text-white/80 text-sm">- {feature}</li>
            ))}
          </ul>
        </div>
        <Button className="w-full bg-button-primary hover:bg-button-primary-hover text-white">
          Book Now
        </Button>
      </div>
    </div>
  );
}

// Schedule Item Component
function ScheduleItem({ icon, title, time, description, image }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="md:w-1/2 space-y-4">
        <div className="flex items-center gap-4">
          <Image src={icon} alt="" width={40} height={40} className="text-brand-gold" />
          <div>
            <h3 className="text-2xl text-white">{title}</h3>
            <p className="text-brand-gold">{time}</p>
          </div>
        </div>
        <p className="text-white/80">{description}</p>
      </div>
      <div className="md:w-1/2">
        <Image src={image} alt={title} width={600} height={400} className="rounded-xl" />
      </div>
    </div>
  );
}
