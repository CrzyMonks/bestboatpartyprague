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
import { useState, useEffect } from "react";
import React from "react";
import { GTMButton } from "@/components/GTMButton";


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 14;
  const [api, setApi] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ marginLeft: '-4px' }}>
      {/* Hero Section with Image Background */}
      <section className="relative h-screen overflow-hidden">
        <Image 
          src="/images/sparkels.JPG" 
          alt="Party Background" 
          fill
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          priority
          style={{
            transform: `translateY(${scrollY < 1000 ? scrollY * 0.3 : 0}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/80 z-10" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 flex flex-col items-center justify-center h-full text-center"
        >
          <div className="relative flex-1 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5l md:text-6xl lg:text-7l xl:text-8l font-cemoro font-bold mb-4 sm:mb-6 md:mb-8 tracking-[0.08em]" style={{
              textShadow: '3px 3px 0px rgba(0, 0, 0, 0.8)',
              color: 'white'
            }}>
              #1 BOAT PARTY IN PRAGUE
            </h1>
            {/* Price Sticker */}
            <div className="hidden xl:block absolute transform -rotate-12 right-2 md:right-[-3rem] top-[21.5rem] z-20">
              <Image
                src="/graphics/19euros_main.png"
                alt="From 19€"
                width={120}
                height={80}
                className="w-[60px] md:w-[120px] h-auto"
              />
            </div>
          </div>
          <div className="mb-20">
            <GTMButton 
              href="https://connect.boomevents.org/cs/organizer/2e24ee9e-6ef3-428b-a037-a5efabf8f07f"
              className="bg-white text-black hover:bg-gray-100 font-bold text-lg sm:text-xl md:text-2xl px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-full shadow-lg"
              clickId="hero_buy_tickets"
              buttonId="hero-button"
            >
              BOOK NOW.
            </GTMButton>
          </div>
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

      {/* Testimonials Section */}
      <section className="bg-white relative">
        {/* Bulge above TripAdvisor */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-white w-40 h-20 rounded-t-full"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center pt-8"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        >
          {/* Platform Logos */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
            {/* Meta */}
            <div className="flex flex-col items-center relative">
              <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] flex items-center justify-center">
                {/* Laurel Wreath SVG */}
                  <Image 
                    src="/images/meta.png" 
                    alt="Meta" 
                    width={80} 
                    height={80}
                    className="w-[400px] h-[400px] object-contain" 
                  />
              </div>
            </div>

            {/* TripAdvisor */}
            <div className="flex flex-col items-center relative">
              <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] flex items-center justify-center">
                  <Image 
                    src="/images/tripadvisor_1.png" 
                    alt="TripAdvisor" 
                    width={80} 
                    height={80}
                    className="w-[400px] h-[400px] object-contain" 
                  />
              </div>
            </div>

            {/* Travelers' Choice */}
            <div className="flex flex-col items-center relative">
              <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] flex items-center justify-center">
                  <Image 
                    src="/images/travelers.png" 
                    alt="Travelers' Choice" 
                    width={100} 
                    height={100}
                    className="w-[800px] h-[800px] object-contain" 
                  />
              </div>
            </div>

            {/* Google Reviews */}
            <div className="flex flex-col items-center relative">
              <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] flex items-center justify-center">
                  <Image 
                    src="/images/google_reviews.png" 
                    alt="Google Reviews" 
                    width={80} 
                    height={80}
                    className="w-[400px] h-[400px] object-contain" 
                  />
              </div>
            </div>

            {/* GetYourGuide */}
            <div className="flex flex-col items-center relative">
              <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] flex items-center justify-center">
                  <Image 
                    src="/images/get_your_guide.png" 
                    alt="GetYourGuide" 
                    width={80} 
                    height={80}
                    className="w-[450px] h-[450px] object-contain" 
                  />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Side - Title and Quote */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-the-seasons font-bold mb-4 sm:mb-5 md:mb-6 text-black">
                The best experience<br />
                to do in Prague !
              </h2>
              <p className="text-gray-600 font-open-sans mb-4">
                OH MY PRAGUE ABOUT PRAGUE PARTY CRUISE, FEBRUARY 2025
              </p>
              <div className="justify-items-center">
                <Image 
                    src="/images/oh_pargue_bold.png" 
                    alt="GetYourGuide" 
                    width={80} 
                    height={80}
                    className="w-[250px] h-[250px] object-contain align-right" 
              />
              </div>
            </div>

            {/* Right Side - Reviews */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-left">
                <div className="flex text-brand-gold text-lg mb-2">★★★★★</div>
                <p className="text-gray-800 font-open-sans mb-4">
                  Great experience. Highly recommend. I felt welcomed and safe
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold">C</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Code</p>
                    <p className="text-gray-500 text-sm">June 18, 2025 — Verified booking</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-left">
                <div className="flex text-brand-gold text-lg mb-2">★★★★★</div>
                <p className="text-gray-800 font-open-sans mb-4">
                  Amazing!!! Everyone was so kind and we met so many amazing people!
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Sydney — United States</p>
                    <p className="text-gray-500 text-sm">July 11, 2025 — Verified booking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>




      {/* Divider Line */}
      <div className="w-full flex justify-center bg-white pt-20">
        <div className="w-1/2 h-[2px] bg-brand-orange"></div>
      </div>

      {/* Experience Cards Section */}
      <section className="relative bg-white py-20">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-[120%] object-cover z-0"
          style={{ 
            pointerEvents: 'none',
            transform: `translateY(${(scrollY - 1200) * 0.2}px)`
          }}
        >
          <source src="/videos/experience_video.mp4" type="video/mp4" />
        </video>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-20"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`
          }}
        > 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 md:gap-8 lg:gap-10">
            {/* NEW YEAR Card */}
            <div className="group relative">
             <div className="relative rounded-2xl h-[400px] md:h-[450px] lg:h-[600px] flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_80px_rgba(255,95,0,0.6)]">
  
              {/* Background with rounded corners */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/new_year.JPG" 
                    alt="New Year Experience" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 rounded-2xl" />
              </div>


                {/* Price Sticker */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20">
                  <Image
                    src="/graphics/69euros.png"
                    alt="From 69€"
                    width={60}
                    height={50}
                    className="drop-shadow-lg w-12 h-10 sm:w-16 sm:h-12 md:w-20 md:h-15 lg:w-24 lg:h-16"
                  />
                </div>

                {/* Navigation Arrow */}
                <motion.div 
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => window.open('https://connect.boomevents.org/cs/organizer/2e24ee9e-6ef3-428b-a037-a5efabf8f07f', '_blank')}
                >
                  <Image
                    src="/graphics/navArrow.png"
                    alt="Book Now"
                    width={40}
                    height={40}
                    className="drop-shadow-lg w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 filter brightness-0 invert hover:brightness-100 hover:invert-0 hover:hue-rotate-180 hover:saturate-150 transition-all duration-300"
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  className="absolute bottom-1 left-4 md:left-1/4 md:-translate-x-1 w-64 md:w-80 bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-2xl z-30"
                  initial={{ opacity: 0, x: -50 }}   // start hidden, shifted left
                  whileInView={{ opacity: 1, x: 0 }} // animate when in view
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h3 className="text-lg md:text-2xl font-lovelo font-bold text-black mb-2 md:mb-3">NEW YEAR</h3>
                  <p className="text-black font-open-sans text-xs md:text-sm leading-relaxed">
                    Embark on a VIP experience aboard a 600 person boat to admire the fireworks from the water.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* PARTY CRUISE Card */}
            <div className="group relative">
              <div className="relative rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_80px_rgba(255,95,0,0.6)] h-[400px] md:h-[450px] lg:h-[600px] flex flex-col">
                {/* Background Video/Image */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/boat-party-1.jpg" 
                    alt="Party Cruise Experience" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 rounded-2xl" />
              </div>

                {/* Price Sticker */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20">
                  <Image
                    src="/graphics/19euros.png"
                    alt="From 19€"
                    width={60}
                    height={40}
                    className="drop-shadow-lg w-12 h-8 sm:w-16 sm:h-10 md:w-20 md:h-12 lg:w-24 lg:h-14"
                  />
                </div>

                {/* Navigation Arrow */}
                <motion.div 
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => window.open('https://connect.boomevents.org/cs/organizer/2e24ee9e-6ef3-428b-a037-a5efabf8f07f', '_blank')}
                >
                  <Image
                    src="/graphics/navArrow.png"
                    alt="Book Now"
                    width={40}
                    height={40}
                    className="drop-shadow-lg w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 filter brightness-0 invert hover:brightness-100 hover:invert-0 hover:hue-rotate-180 hover:saturate-150 transition-all duration-300"
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  className="absolute bottom-1 left-4 md:left-1/4 md:-translate-x-1 w-64 md:w-80 bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-2xl z-30"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <h3 className="text-lg md:text-2xl font-lovelo font-bold text-black mb-2 md:mb-3">PARTY CRUISE</h3>
                  <p className="text-black font-open-sans text-xs md:text-sm leading-relaxed">
                    Party into the new year with live DJs, endless drinks, and breathtaking views of the Prague skyline.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* EPIC CLUB AFTER Card */}
            <div className="group relative block md:col-span-2 md:justify-self-center md:w-80 lg:col-span-1 lg:justify-self-auto lg:w-auto">
              <div className="relative rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_80px_rgba(255,95,0,0.6)] h-[400px] md:h-[450px] lg:h-[600px] flex flex-col w-full">
                {/* Background Video/Image */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="relative w-full h-full">
                  <Image 
                    src="/images/Epic.jpg" 
                    alt="Epic Club After Experience" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 rounded-2xl" />
              </div>

                {/* Price Sticker */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20">
                  <Image
                    src="/graphics/12euros.png"
                    alt="From 12€"
                    width={60}
                    height={40}
                    className="drop-shadow-lg w-12 h-8 sm:w-16 sm:h-10 md:w-20 md:h-12 lg:w-24 lg:h-14"
                  />
                </div>

                {/* Navigation Arrow */}
                <motion.div 
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => window.open('https://connect.boomevents.org/cs/organizer/2e24ee9e-6ef3-428b-a037-a5efabf8f07f', '_blank')}
                >
                  <Image
                    src="/graphics/navArrow.png"
                    alt="Book Now"
                    width={40}
                    height={40}
                    className="drop-shadow-lg w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 filter brightness-0 invert hover:brightness-100 hover:invert-0 hover:hue-rotate-180 hover:saturate-150 transition-all duration-300"
                  />
                </motion.div>

                {/* Content */}
                 <motion.div
                  className="absolute bottom-1 left-4 md:left-1/4 md:-translate-x-1 w-64 md:w-80 bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-2xl z-30"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                  <h3 className="text-lg md:text-2xl font-lovelo font-bold text-black mb-2 md:mb-3">EPIC CLUB AFTER</h3>
                  <p className="text-black font-open-sans text-xs md:text-sm leading-relaxed">
                    Continue the celebration at Prague’s #1 nightclub with an unforgettable afterparty experience.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Special Deals Section */}
          <div className="text-center mt-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 tracking-[0.08em] text-white">
            ENJOY UNIQUE EXPERIENCE IN PRAGUE
          </h2>
          </div>
        </motion.div>
      </section>


      {/* Interactive Gallery Section */}
      <section className="bg-white py-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`
          }}
        > 
          {/* Interactive Image Grid with Video Rectangle */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Video Rectangle - Shows first on mobile/tablet, right side on desktop */}
            <div className="w-full lg:w-80 h-[300px] sm:h-[400px] lg:h-[520px] bg-black rounded-xl overflow-hidden relative group lg:order-2">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src="/videos/interactive_video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            
            {/* Left side - Image grid */}
            <div className="flex-1 lg:order-1">
              {/* Top Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
                {[
              { 
                image: '/images/guide.JPG', 
                label: 'GUIDE', 
                text: 'A TEAM DELIGHTED TO WELCOME YOU',
                tape: '/graphics/brownTape.png'
              },
              { 
                image: '/images/Dj.JPG', 
                label: 'DJ', 
                text: 'INTERNATIONAL DJS',
                tape: '/graphics/orangeTape.png'
              },
              { 
                image: '/images/Epic.jpg', 
                label: 'EPIC', 
                text: 'INCLUDES ENTRY INTO THE BEST CLUB IN PRAGUE',
                tape: '/graphics/brownTape.png'
              },
              { 
                image: '/images/sparkels.JPG', 
                label: 'SPARKLES', 
                text: 'SOMETHING TO CELEBRATE AND TAKE BEAUTIFUL IMAGES',
                tape: '/graphics/orangeTape.png'
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="relative h-[150px] sm:h-[180px] md:h-[200px] lg:h-[250px] rounded-xl overflow-hidden cursor-pointer transition-all duration-300">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  
                  {/* Tape Decoration */}
                  <div className="absolute z-20 w-[70%]">
                    <Image
                      src={item.tape}
                      alt="Decorative Tape"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto opacity-90"
                    />
                  </div>
                  
                  {/* Label */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-white font-bold text-2xl font-lovelo drop-shadow-lg">
                      {item.label}
                    </h3>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-10">
                    <p className="text-white text-center font-open-sans text-lg font-semibold px-6 leading-tight">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
                ))}
              </div>
              
              {/* Bottom Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                {[
              { 
                image: '/images/shots.JPG', 
                label: 'SHOTS', 
                text: 'WELCOME SHOT OFFERED',
                tape: '/graphics/orangeTape.png'
              },
              { 
                image: '/images/fun.JPG', 
                label: 'FUN', 
                text: '2 HOURS OF UNFORGETTABLE CRUISE',
                tape: '/graphics/brownTape.png'
              },
              { 
                image: '/images/view.JPG', 
                label: 'VIEW', 
                text: 'ENJOY A UNIQUE VIEW',
                tape: '/graphics/orangeTape.png'
              },
              { 
                image: '/images/photo.JPG', 
                label: 'PHOTO', 
                text: 'PHOTOGRAPHER ON BOARD TO IMMORTALIZE YOUR CRUISE',
                tape: '/graphics/brownTape.png'
              }
            ].map((item, index) => (
              <div key={index + 4} className="group relative">
                <div className="relative h-[150px] sm:h-[180px] md:h-[200px] lg:h-[250px] rounded-xl overflow-hidden cursor-pointer transition-all duration-300">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  
                  {/* Tape Decoration */}
                  <div className="absolute z-20 w-[70%]">
                    <Image
                      src={item.tape}
                      alt="Decorative Tape"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto opacity-90"
                    />
                  </div>
                  
                  {/* Label */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-white font-bold text-2xl font-lovelo drop-shadow-lg">
                      {item.label}
                    </h3>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-10">
                    <p className="text-white text-center font-open-sans text-lg font-semibold px-6 leading-tight">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
                ))}
              </div>
            </div>
          </div>
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
