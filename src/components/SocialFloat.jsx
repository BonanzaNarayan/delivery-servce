import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaFacebookMessenger, FaPhone, FaEnvelope, FaTimes, FaCommentDots } from 'react-icons/fa';
import { useState } from 'react';

const SocialFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);

  const contacts = [
    {
      icon: <FaWhatsapp />,
      label: 'Chat on WhatsApp',
      color: 'bg-green-500',
      link: 'https://wa.me/1234567890',
    },
    {
      icon: <FaFacebookMessenger />,
      label: 'Message on Messenger',
      color: 'bg-blue-600',
      link: 'https://m.me/yourpage',
    },
    {
      icon: <FaPhone />,
      label: 'Call Us',
      color: 'bg-purple-600',
      link: 'tel:+1234567890',
    },
    {
      icon: <FaEnvelope />,
      label: 'Send Email',
      color: 'bg-red-500',
      link: 'mailto:contact@example.com',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 }
    }),
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Main Floating Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${isOpen ? 'bg-orange-500' : 'bg-gray-800'} 
          w-14 h-14 rounded-full shadow-xl flex items-center justify-center
          cursor-pointer relative`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FaTimes className="text-white text-xl" />
        ) : (
          <div className="relative">
            <div className="absolute inset-0 animate-ping bg-orange-400 rounded-full" />
            <FaCommentDots className="text-white text-xl relative" />
          </div>
        )}
      </motion.div>

      {/* Contact Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="absolute bottom-full right-0 mb-4 space-y-4"
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                custom={index}
                whileHover="hover"
                whileTap="tap"
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${contact.color} w-12 h-12 rounded-full 
                  flex items-center justify-center text-white shadow-lg
                  relative group`}
                onMouseEnter={() => setActiveTooltip(index)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                {contact.icon}
                
                {/* Tooltip */}
                <div className={`absolute right-14 top-1/2 -translate-y-1/2
                  bg-gray-800 text-white px-4 py-2 rounded-lg text-sm
                  shadow-md transition-opacity duration-200
                  ${activeTooltip === index ? 'opacity-100' : 'opacity-0'}`}>
                  <span>{contact.label}</span>
                  <div className="absolute right-[-4px] top-1/2 -translate-y-1/2
                    w-2 h-2 bg-gray-800 rotate-45" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialFloat;