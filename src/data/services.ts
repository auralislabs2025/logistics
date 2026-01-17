import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'trucking',
    title: 'Trucking & Freight Services',
    description: 'Reliable ground transportation solutions for all your freight needs. From long-haul routes to expedited deliveries, we ensure your cargo reaches its destination safely and on time.',
    features: [
      'Long-haul and regional shipping',
      'Expedited freight services',
      'Full truckload (FTL) and less-than-truckload (LTL)',
      'Dedicated fleet management',
      '24/7 real-time tracking'
    ],
    icon: 'FaTruck'
  },
  {
    id: 'international',
    title: 'International Shipping',
    description: 'Seamless global logistics connecting continents. Our international shipping services cover air freight, sea freight, and comprehensive customs clearance for hassle-free cross-border trade.',
    features: [
      'Air freight services worldwide',
      'Ocean freight and container shipping',
      'Customs clearance and documentation',
      'Multi-modal transportation',
      'Door-to-door international delivery'
    ],
    icon: 'FaGlobe'
  },
  {
    id: 'cold-chain',
    title: 'Cold Chain Logistics',
    description: 'Temperature-controlled transportation and storage solutions for pharmaceuticals, food, and perishable goods. Maintaining the cold chain from origin to destination.',
    features: [
      'Pharmaceutical transport',
      'Food & beverage logistics',
      'Temperature-controlled storage',
      'Frozen and chilled shipping',
      'Compliance and quality assurance'
    ],
    icon: 'FaSnowflake'
  }
];

