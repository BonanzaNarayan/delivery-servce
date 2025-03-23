import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { MdDeliveryDining, MdOutlineElectricBike } from 'react-icons/md'

const bounceHorizontalStyle = `
@keyframes bounce-horizontal {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}
.animate-bounce-horizontal {
  animation: bounce-horizontal 1s infinite;
}
`

const Hero = () => {
  const slides = [
    { 
      id: 1,
      img: 'https://plus.unsplash.com/premium_photo-1682088417767-afc375d5524a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      text: 'Fast & Reliable Delivery',
      alt: 'Warehouse worker with packages',
      icon: <MdDeliveryDining className="text-4xl" />
    },
    { 
      id: 2,
      img: 'https://images.unsplash.com/photo-1598546937882-4fa25fa29418?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      text: 'Nationwide Coverage',
      alt: 'Delivery truck on highway',
      icon: <MdOutlineElectricBike className="text-4xl" />
    },
    { 
      id: 3,
      img: 'https://images.unsplash.com/photo-1728039190626-ceea378d0419?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      text: 'Secure Handling',
      alt: 'Secure package handling process',
      icon: <MdDeliveryDining className="text-4xl" />
    },
  ]

  return (
    <section 
      className="relative h-screen overflow-hidden mt-12"
      aria-label="Hero carousel with service highlights"
    >
        <style>{bounceHorizontalStyle}</style>
      {/* Animated Particles Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-700/15"
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute text-orange-500/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              rotate: [0, 360],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            aria-hidden="true"
          >
            <div className="w-8 h-8 rounded-full bg-current blur-[2px]" />
          </motion.div>
        ))}
      </motion.div>

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="slide"
        autoplay={{ 
          delay: 5000,
          disableOnInteraction: false,
          waitForTransition: true
        }}
        loop
        speed={800}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full flex items-center bg-black/30">
              <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="text-white md:w-1/2 space-y-6 text-center md:text-left"
                  >
                    <div className="inline-block p-3 bg-orange-500/20 rounded-full mb-6">
                      {slide.icon}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-orange-500 to-gray-800 bg-clip-text text-transparent">
                      {slide.text}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto md:mx-0">
                      Experience logistics solutions with 24/7 support.
                    </p>
                    <motion.button
                    onClick={() => window.location.href = '/booking'}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center gap-2"
                    >
                      Get Started
                      <MdDeliveryDining className="w-5 h-5 animate-bounce-horizontal" />
                    </motion.button>
                  </motion.div>

                  {/* Image Container */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="md:w-1/2 relative w-full group"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video transform transition-all group-hover:scale-[1.02]">
                      <img
                        src={slide.img}
                        alt={slide.alt}
                        className="w-full h-full object-cover transform transition-transform duration-500"
                        loading="eager"
                      />
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-600/10"
                        aria-hidden="true"
                      />
                      <div className="absolute inset-0 border-4 border-orange-500/20 rounded-2xl pointer-events-none" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className="swiper-pagination-bullet w-3 h-3 rounded-full bg-white/30 transition-all duration-300 hover:bg-orange-500 cursor-pointer"
          />
        ))}
      </div>
    </section>
  )
}

export default Hero