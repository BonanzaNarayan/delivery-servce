import { motion } from 'framer-motion';
import { FiArrowLeft, FiAlertTriangle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 overflow-hidden">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Animated 404 Number */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 blur-2xl opacity-30 rounded-full overflow-hidden" />
            <h1 className="text-9xl font-bold text-gray-800 relative">
              4
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ loop: Infinity, duration: 3 }}
                className="inline-block text-orange-500"
              >
                0
              </motion.span>
              4
            </h1>
          </div>

          {/* Error Message */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 text-orange-500 text-xl">
              <FiAlertTriangle className="w-8 h-8" />
              <h2 className="text-3xl font-semibold">Page Not Found</h2>
            </div>
            <p className="text-gray-600 text-lg max-w-md mx-auto">
              Oops! The page you're looking for has vanished into the digital void. Let's get you back home.
            </p>
          </motion.div>

          {/* Home Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-full 
                hover:bg-orange-600 transition-colors text-lg font-medium shadow-lg hover:shadow-orange-200"
            >
              <FiArrowLeft className="w-5 h-5" />
              Back to Homepage
            </Link>
          </motion.div>

          {/* Additional Help Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex justify-center gap-4 text-gray-500"
          >
            <a href="/contact" className="hover:text-orange-500 transition-colors">Contact Support</a>
            <span className="text-gray-300">•</span>
            <a href="/services" className="hover:text-orange-500 transition-colors">Our Services</a>
          </motion.div>
        </motion.div>

        {/* Floating Background Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-orange-500/10 rounded-full"
            style={{
              width: `${Math.random() * 50 + 30}px`,
              height: `${Math.random() * 50 + 30}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Error404;