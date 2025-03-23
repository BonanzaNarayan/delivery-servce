import { motion } from 'framer-motion';
import { useForm } from '@formspree/react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTelegramPlane, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialFloat from '../components/SocialFloat';

const ContactPage = () => {
  const [state, handleSubmit] = useForm('your-formspree-id');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
    <Header />
    
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or need support? Our team is here to help you 24/7
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
          >
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="flex items-start gap-6">
                <div className="p-4 bg-orange-100 rounded-xl">
                  <FaMapMarkerAlt className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Headquarters</h3>
                  <p className="text-gray-600">
                    123 Delivery Street<br />
                    Logistics City, LC 12345<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-orange-100 rounded-xl">
                  <FaPhone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone Numbers</h3>
                  <p className="text-gray-600">
                    Customer Support: +1 (555) 123-4567<br />
                    Sales: +1 (555) 765-4321
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-orange-100 rounded-xl">
                  <FaEnvelope className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Addresses</h3>
                  <p className="text-gray-600">
                    Support: support@swiftdeliver.com<br />
                    Sales: sales@swiftdeliver.com
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { icon: <FaLinkedin />, color: 'bg-blue-600' },
                    { icon: <FaTwitter />, color: 'bg-sky-500' },
                    { icon: <FaTelegramPlane />, color: 'bg-blue-500' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ y: -5 }}
                      className={`${social.color} text-white p-3 rounded-lg hover:bg-opacity-90 transition-colors`}
                      href="#"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
          >
            {state.succeeded ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Message Sent!</h2>
                <p className="text-gray-600">
                  We'll get back to you within 24 hours
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                >
                  <FaTelegramPlane className="w-5 h-5" />
                  Send Message
                </motion.button>

                {state.errors && (
                  <p className="text-red-600 text-sm">
                    Oops! There was an error submitting your message
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          variants={itemVariants}
          className="mt-16 rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1629784298396!5m2!1sen!2suk"
            width="100%"
            height="450"
            className="border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </div>
    <SocialFloat />
    <Footer />
    </>
  );
};

export default ContactPage;