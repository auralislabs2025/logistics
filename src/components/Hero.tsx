import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaArrowRight, FaTruck, FaGlobe, FaBox, FaShippingFast, FaAward, FaClock } from 'react-icons/fa';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { Icon: FaTruck, x: '10%', y: '20%', delay: 0 },
    { Icon: FaGlobe, x: '85%', y: '25%', delay: 0.5 },
    { Icon: FaBox, x: '15%', y: '70%', delay: 1 },
    { Icon: FaShippingFast, x: '80%', y: '65%', delay: 1.5 },
  ];

  const stats = [
    { value: '5000+', label: 'Vehicles', Icon: FaTruck },
    { value: '150+', label: 'Countries', Icon: FaGlobe },
    { value: '1M+', label: 'Deliveries', Icon: FaBox },
    { value: '25+', label: 'Years', Icon: FaAward },
  ];

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 via-indigo-900 to-purple-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-indigo-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-purple-400 rounded-full blur-3xl"
        />

        {/* Geometric Shapes - Hidden on mobile */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="hidden lg:block absolute top-20 right-20 w-32 h-32 border-2 border-white/10 rounded-lg"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
            scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="hidden lg:block absolute bottom-32 left-16 w-24 h-24 border-2 border-white/10 rounded-full"
        />

        {/* Floating Transport Icons - Smaller on mobile, hidden on very small screens */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: item.delay,
            }}
            style={{
              position: 'absolute',
              left: item.x,
              top: item.y,
            }}
            className="hidden sm:block text-white/20"
          >
            <item.Icon className="w-8 h-8 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]" />
          </motion.div>
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center pt-20 md:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-4 md:mb-6 leading-tight px-2"
          >
            <span className="block">Premium</span>
            <span className="block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300">
                Transport
              </span>
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
              & Logistics
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 mb-3 md:mb-4 max-w-3xl mx-auto font-light px-4"
          >
            Connecting businesses worldwide with
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 md:mb-12 text-blue-200 text-sm sm:text-base px-4"
          >
            <span className="flex items-center space-x-2">
              <FaClock className="text-green-400" />
              <span>Reliable</span>
            </span>
            <span className="text-white/50">•</span>
            <span className="flex items-center space-x-2">
              <FaShippingFast className="text-blue-400" />
              <span>Efficient</span>
            </span>
            <span className="text-white/50">•</span>
            <span className="flex items-center space-x-2">
              <FaAward className="text-yellow-400" />
              <span>Secure</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 md:mb-12 lg:mb-16 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="group bg-white text-primary-700 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg md:rounded-xl font-bold text-base sm:text-lg hover:bg-blue-50 transition-all flex items-center space-x-2 sm:space-x-3 shadow-2xl w-full sm:w-auto"
            >
              <span>Get Started</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight />
              </motion.div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#services')}
              className="border-2 border-white/30 backdrop-blur-sm text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg md:rounded-xl font-bold text-base sm:text-lg hover:border-white hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              Our Services
            </motion.button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 text-center hover:bg-white/20 transition-all"
              >
                <stat.Icon className="text-blue-300 mx-auto mb-1 sm:mb-2" size={22} />
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-0.5 sm:mb-1">{stat.value}</div>
                <div className="text-blue-200 text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator - Hidden on very small screens */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden sm:flex absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex-col items-center space-y-2 text-white/70"
        >
          <span className="text-xs sm:text-sm font-medium">Scroll to explore</span>
          <FaArrowRight className="rotate-90" size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

