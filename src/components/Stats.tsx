import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import * as Icon from 'react-icons/fa';
import { stats } from '../data/stats';

const AnimatedCounter = ({ value, suffix, delay = 0 }: { value: number; suffix?: string; delay?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;
    let intervalId: NodeJS.Timeout | null = null;

    const timer = setTimeout(() => {
      intervalId = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setDisplayValue(Math.min(Math.round(stepValue * currentStep), value));
        } else {
          setDisplayValue(value);
          if (intervalId) clearInterval(intervalId);
        }
      }, stepDuration);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isInView, value, delay]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(num === 1000000 ? 0 : 1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'K';
    }
    return num.toString();
  };

  return (
    <span ref={ref}>
      {formatNumber(displayValue)}{suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const iconMap: { [key: string]: React.ComponentType<any> } = {
    FaTruck: Icon.FaTruck,
    FaGlobe: Icon.FaGlobe,
    FaBox: Icon.FaBox,
    FaAward: Icon.FaAward,
  };

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-primary-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and global reach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center border border-white/20 hover:bg-white/20 transition-colors"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-4"
                >
                  {IconComponent && <IconComponent size={48} className="text-white" />}
                </motion.div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={index * 100} />
                </div>
                <div className="text-blue-100 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

