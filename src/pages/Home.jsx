import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { MdSecurity } from 'react-icons/md'
import { GiPriceTag } from 'react-icons/gi'
import Footer from '../components/Footer'
import { FiArrowRight } from 'react-icons/fi'
import { FaShippingFast } from 'react-icons/fa'
import SocialFloat from '../components/SocialFloat'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

function Home() {
  return (
    <>
    <div className="bg-gray-50 relative overflow-hidden">
      {/* Global Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-orange-600 rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <Header />
      <Hero />

      {/* Features Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: FaShippingFast, title: 'Fast Delivery' },
              { icon: MdSecurity, title: 'Secure Handling' },
              { icon: GiPriceTag, title: 'Best Prices' }
            ].map(({ icon: Icon, title }, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="relative">
                  <Icon className="w-12 h-12 text-orange-600 mb-4 transition-colors group-hover:text-orange-700" />
                  <div className="absolute inset-0 bg-orange-100/50 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-600">24/7 express delivery with tracking updates</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Services</h2>
              <p className="text-gray-600 mb-8">
                Comprehensive logistics solutions tailored to your business needs
              </p>
              <div className="space-y-6">
                {['E-commerce Delivery', 'Temperature Control', 'Oversized Loads', 'Food Delivery'].map(
                  (service, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <FaShippingFast className="w-6 h-6 text-orange-600" />
                      </div>
                      <span className="font-semibold">{service}</span>
                    </motion.div>
                  )
                )}
              </div>
            </div>
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Services"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">Trusted by thousands of businesses worldwide</p>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true, el: '.swiper-pagination', bulletClass: 'swiper-pagination-bullet bg-orange-500' }}
          >
            {[1, 2, 3, 4].map((item) => (
              <SwiperSlide key={item}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-xl h-full shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="flex gap-2 text-orange-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "The best delivery service we've ever used. Fast, reliable, and great customer support!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white">
                      JS
                    </div>
                    <div>
                      <h4 className="font-semibold">John Smith</h4>
                      <p className="text-gray-600 text-sm">CEO, Tech Corp</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination mt-8 !relative" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-amber-600 relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="container mx-auto px-6 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Deliver?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and experience the future of logistics
          </p>
          <motion.button
          onClick={() => window.location.href = '/booking'}
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:text-orange-700 transition-colors flex items-center gap-2 mx-auto"
          >
            Get Started Now <FiArrowRight className="inline-block" />
          </motion.button>
        </motion.div>
      </section>

    </div>
    <Footer />
    <SocialFloat />
    </>
  )
}

export default Home