import { FiTruck, FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { Menu, Transition } from '@headlessui/react'

// Reusable animation configurations
const navItemAnimation = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
  transition: { type: 'spring', stiffness: 300 }
}

const menuItemAnimation = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 }
}

const Header = () => {
  const navItems = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Services', href: '/services' },
    { id: 4, name: 'Contact', href: '/contact' },
    { id: 4, name: 'About Us', href: '/about' },
  ]

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with hover animation */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group"
          >
            <FiTruck className="w-7 h-7 text-orange-600 transition-transform group-hover:rotate-[-12deg]" />
            <span className="text-xl sm:text-2xl font-bold text-gray-800">
              SwiftDeliver
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                {...navItemAnimation}
                href={item.href}
                className="text-gray-600 hover:text-orange-600 px-3 py-1 rounded-lg transition-colors
                           focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              {...navItemAnimation}
              onClick={() => window.location.href = '/booking'}
              className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-orange-700 
                         transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Book Us Now
            </motion.button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Menu.Button
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors
                               focus:outline-none focus:ring-2 focus:ring-orange-500"
                      aria-label="Toggle navigation menu"
                    >
                      <motion.div animate={{ rotate: open ? 90 : 0 }}>
                        {open ? (
                          <FiX className="w-6 h-6 text-gray-800" />
                        ) : (
                          <FiMenu className="w-6 h-6 text-gray-800" />
                        )}
                      </motion.div>
                    </Menu.Button>
                  </motion.div>

                  <Transition
                    enter="transition duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Menu.Items
                      className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-xl shadow-xl
                               ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
                    >
                      {navItems.map((item) => (
                        <Menu.Item key={item.id}>
                          <motion.a
                            {...menuItemAnimation}
                            href={item.href}
                            className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50
                                     transition-colors focus:bg-orange-50 outline-none"
                          >
                            {item.name}
                          </motion.a>
                        </Menu.Item>
                      ))}
                      <div className="border-t px-6 py-3">
                        <motion.button
                          {...navItemAnimation}
                            onClick={() => window.location.href = '/booking'}
                          className="w-full bg-orange-600 text-white px-4 py-2 rounded-full
                                   hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2
                                   focus:ring-orange-500 focus:ring-offset-2"
                        >
                          Book Us Now
                        </motion.button>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header