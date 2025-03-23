import { motion } from 'framer-motion';
import { FiTruck, FiArrowRight } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { text } from 'framer-motion/client';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <footer className="bg-gray-900/90 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-orange-500/20 rounded-full"
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

      <div className="container mx-auto px-6 py-16 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <FiTruck className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold">SwiftDeliver</span>
            </div>
            <p className="text-gray-400">
              Revolutionizing logistics with speed and reliability. Nationwide coverage with real-time tracking.
            </p>
            <div className="flex gap-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  href="#"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              {[
                {
                text: "About Us",
                link: "/about"
              },
              {
                text: "Services",
                link: "/services"
              },
                {
                    text: "Contact",
                    link: "/contact"
                },
                {
                    text: "Book Us",
                    link: "/booking"
                },
            ].map((link, i) => (
                <motion.a
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center w-fit gap-2 text-gray-400 hover:text-orange-500 transition-colors"
                  href={link.link}
                >
                  <FiArrowRight className="text-orange-500" />
                  {link.text}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">123 Delivery Street, Logistics City</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">contact@swiftdeliver.com</span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-400">Subscribe for updates and special offers</p>
            <form className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          © {new Date().getFullYear()} SwiftDeliver. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;