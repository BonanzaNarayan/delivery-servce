import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaShippingFast } from 'react-icons/fa';
import { MdPayments, MdSecurity } from 'react-icons/md';
import { GiPriceTag } from 'react-icons/gi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialFloat from '../components/SocialFloat';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaShippingFast className="w-12 h-12" />,
      title: "Express Delivery",
      description: "24/7 nationwide delivery with real-time tracking",
      image: "https://www.shutterstock.com/image-photo/food-delivery-moto-scooter-driver-600nw-1730162416.jpg"
    },
    {
      icon: <MdSecurity className="w-12 h-12" />,
      title: "Secure Handling",
      description: "Fully insured packages with premium protection",
      image: "https://www.motodeal.com.ph/custom/blog-post/header/delivery-rider-5eaf9ce7c83af.jpg"
    },
    {
      icon: <GiPriceTag className="w-12 h-12" />,
      title: "Price Match",
      description: "Best price guarantee with transparent pricing",
      image: "https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/v2/GKLNNEWAJ7JKQGVRGNDFPTAKPY.jpg?smart=true&auth=095b20b6f3a0b26e3e4bd21aa93750d4ed0ee90f5fa3d6109656a0696822aa48&width=400&height=225"
    }
  ];

  const testimonials = [
    { name: "John Smith", role: "CEO, Tech Corp", text: "The best delivery service we've ever used!" },
    { name: "Sarah Johnson", role: "E-commerce Owner", text: "Reliable and fast - highly recommended!" },
    { name: "Mike Chen", role: "Business Manager", text: "Outstanding customer support and tracking" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
        <Header />
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/042/660/756/non_2x/ai-generated-closeup-of-pair-of-white-boots-splashing-through-spring-flowers-ai-generative-photo.jpeg"
            alt="Warehouse"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-amber-600/30" />
        </div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Premium Delivery Services</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">Nationwide logistics solutions with real-time tracking and 24/7 support</p>
        </motion.div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Our Core Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60" />
                </div>
                <div className="p-8 text-center">
                  <div className="text-orange-500 mb-4 mx-auto">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <RiCustomerService2Fill className="w-12 h-12 text-orange-500" />
                <div>
                  <h3 className="text-2xl font-bold">24/7 Support</h3>
                  <p className="text-gray-600">Round-the-clock customer service team</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <MdPayments className="w-12 h-12 text-orange-500" />
                <div>
                  <h3 className="text-2xl font-bold">Flexible Payments</h3>
                  <p className="text-gray-600">Multiple secure payment options</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <TbTruckDelivery className="w-12 h-12 text-orange-500" />
                <div>
                  <h3 className="text-2xl font-bold">Live Tracking</h3>
                  <p className="text-gray-600">Real-time package tracking system</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1215&q=80"
                alt="Delivery Network"
                className="w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Client Testimonials</h2>
          
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white p-8 rounded-xl shadow-lg h-full"
                >
                  <div className="flex gap-2 text-orange-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-amber-600">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Ship?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-xl">
            Join thousands of satisfied customers and experience premium logistics services
          </p>
          <motion.button
          onClick={() => window.location.href = '/booking'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:text-orange-700 transition-colors"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </section>
      <SocialFloat />
      <Footer />
    </div>
  );
};

export default ServicesPage;