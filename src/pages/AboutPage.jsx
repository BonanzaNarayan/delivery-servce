import { motion } from 'framer-motion';
import { FiTruck, FiUsers, FiAward, FiPackage } from 'react-icons/fi';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SocialFloat from '../components/SocialFloat';

const AboutPage = () => {
  const stats = [
    { icon: <FiTruck />, number: '10M+', label: 'Deliveries Made' },
    { icon: <FiUsers />, number: '500+', label: 'Dedicated Staff' },
    { icon: <FiAward />, number: '15+', label: 'Industry Awards' },
    { icon: <FiPackage />, number: '95%', label: 'On-Time Rate' },
  ];

  const team = [
    { name: 'Sarah Johnson', role: 'CEO', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80' },
    { name: 'Michael Chen', role: 'COO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { name: 'Emma Wilson', role: 'CTO', img: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1067&q=80' },
  ];

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Delivering Excellence Worldwide</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300">
            Pioneering logistics solutions since 2010 with innovation and customer-centric approach
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-amber-600/30" />
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Our Journey</h2>
            <p className="text-gray-600 text-lg">
              Founded in a small warehouse with just two trucks, SwiftDeliver has grown into a global logistics 
              powerhouse through relentless innovation and unwavering commitment to customer satisfaction.
            </p>
            <p className="text-gray-600 text-lg">
              Our journey has been marked by strategic expansions, technological advancements, and a 
              passionate team dedicated to redefining supply chain management.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Our History"
              className="w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Customer First",
                content: "We prioritize client needs in every decision",
                icon: "👥"
              },
              { 
                title: "Innovation Driven",
                content: "Constantly evolving through technology",
                icon: "💡"
              },
              { 
                title: "Sustainability",
                content: "Eco-friendly logistics solutions",
                icon: "🌱"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <div className="text-4xl text-orange-500 mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-orange-300">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Journey</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-xl">
            Be part of the logistics revolution - whether as a client, partner, or team member
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold"
          >
            Get in Touch
          </motion.button>
        </div>
      </section>
    </div>
    <SocialFloat />
    <Footer />
    </>
  );
};

export default AboutPage;