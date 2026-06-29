import { FaBroom, FaPaintRoller, FaTools, FaTruck, FaWrench, FaBolt, FaHammer } from 'react-icons/fa';
import { MdCleaningServices, MdElectricalServices } from 'react-icons/md';

const servicesData = [
  {
    id: 1,
    icon: FaBroom,
    title: 'CLEANING SERVICES',
    tagline: 'Professional Cleaning Solutions for Homes and Businesses.',
    desc: 'From routine cleaning to deep cleaning solutions, every project reflects care and attention to detail. Explore our works featuring home cleaning, tank cleaning, and space transformations. Delivering fresh, spotless, and healthier environments.',
    methods: {
      normal: ['Floor Sweeping & Mopping', 'Dusting & Surface Wiping', 'Kitchen & Bathroom Cleaning', 'Sink & Wash Basin Cleaning', 'Waste Collection & Disposal'],
      deep: ['Hard Water Stain Removal', 'Deep Scrubbing & Sanitization', 'Wall, Floor & Corner Cleaning', 'Glass & Window Cleaning', 'Detailed Cleaning for a Fresh New Look']
    },
    areas: ['Living Room', 'Bedroom', 'Kitchen', 'Bathroom', 'Balcony', 'Garden Area', 'Water Tanks (Overhead & Underground)'],
    targets: ['Floors', 'Walls', 'Ceilings', 'Cupboards', 'Windows & Glasses', 'Switch Boards & Fixtures', 'Electronic Exteriors'],
    includes: ['Sweep & Mop', 'Dust & Wipe', 'Wet Cloth Cleaning', 'Waste Disposal']
  },
  {
    id: 2,
    icon: FaPaintRoller,
    title: 'PAINTING SERVICES',
    tagline: 'Quality Interior & Exterior Solutions for Homes and Businesses.',
    desc: 'From touch-ups to complete makeovers, every painting project showcases precision and quality craftsmanship. Explore our works featuring interior painting, exterior painting, and wall finishes. Delivering vibrant, durable, and beautiful results.',
    types: ['Painting After House Shifting', 'Rental House Painting', 'Previous House Repainting', 'Interior Painting', 'Exterior Painting', 'Waterproof Coating'],
    prep: ['Crack Filling', 'Putty Work', 'Primer Coat'],
    additional: ['Ceiling Painting', 'Doors & Windows Painting', 'Grill & Metal Painting', 'Wood Polish & Enamel Painting']
  },
  {
    id: 3,
    icon: MdElectricalServices,
    title: 'ELECTRICAL & PLUMBING SERVICE',
    tagline: 'Installation, Repair & Maintenance for Homes and Businesses.',
    desc: 'From minor repairs to complete installations, every electrical and plumbing project reflects quality workmanship and reliable service. Explore our works featuring wiring, lighting, switchboards, leak repairs, pipe fittings, and maintenance solutions. Delivering safe, efficient, and lasting results.',
    items: ['Installation & Repair', 'Pipe & Leakage Repairs', 'Appliance Installation', 'Fan, Light & Appliance Installation', 'Wiring & Switch Works', 'Tap, Sink & Bathroom Fittings'],
    assurances: ['Emergency Assistance Available', 'Fast & Reliable Service', 'On-Time Visit & Support', 'Safe & Quality Workmanship']
  },
  {
    id: 4,
    icon: FaTruck,
    title: 'PACKERS & MOVERS',
    tagline: 'Safe and Hassle-Free Relocation Solutions for Homes and Businesses.',
    desc: 'From careful packing to safe relocation, every moving project is handled with professionalism and care. Explore our works featuring home shifting, office relocation, loading, unloading, and transportation. Delivering smooth, stress-free, and reliable moving experiences.',
    items: [
      'Local & Long-Distance',
      'Safe & Secure Relocation Services',
      'Household & Commercial Shifting',
      'Complete End-to-End Moving Solutions',
      'Professional Packing & Unpacking',
      'Careful Loading & Unloading',
      'Furniture Dismantling & Reinstallation',
      'Premium Quality Packing Materials',
      'Safe Handling of Valuable Goods',
      'Experienced & Skilled Team',
      'On-Time Pickup & Delivery',
      'Secure & Reliable Transportation',
      'Trained & Professionals team',
      'Affordable & Trusted Service'
    ]
  },
  {
    id: 5,
    icon: FaTruck,
    title: 'TRANSPORT SERVICES',
    tagline: 'Fast and Secure Transport Solutions for Homes and Businesses.',
    desc: 'From local transportation to complete relocations, every project is handled with professionalism and care. Explore our works featuring goods transport, home shifting, office relocation, loading, unloading, and secure vehicle arrangements. Delivering safe, timely, and hassle-free transportation solutions.',
    items: ['Local & Long-Distance Transport', 'Multiple Vehicle Options', 'Goods & Materials Transportation', 'Furniture & Goods Transportation', 'Door-to-Door Service'],
    assurances: ['Well-Maintained Vehicles', 'On-Time Pickup & Delivery Services', 'Experienced & Professional Drivers', 'Fast & Reliable Transportation']
  },
  {
    id: 6,
    icon: FaWrench,
    title: 'AC TECHNICIAN',
    tagline: 'Expert Cooling Solutions for Homes and Businesses.',
    desc: 'From installation to repair and maintenance, every AC service reflects expertise and reliable workmanship. Explore our works featuring AC installation, gas refilling, deep cleaning, and cooling solutions. Delivering comfort, efficiency, and dependable performance.',
    items: ['AC Installation/Uninstallation', 'AC Repair & Maintenance', 'AC Gas Refilling', 'AC Deep Cleaning', 'AC Water Leakage Repair']
  },
  {
    id: 7,
    icon: FaHammer,
    title: 'CARPENTRY SERVICES',
    tagline: 'Custom Woodwork and Repair Solutions for Homes and Businesses.',
    desc: 'From custom fittings to furniture repairs, every carpentry project showcases precision and craftsmanship. Explore our works featuring cabinets, shelves, doors, furniture assembly, and wood restoration. Delivering durable, functional, and elegant results.',
    items: ['Furniture Assembly & Repair', 'Door & Window Works', 'Cupboard & Cabinet Works', 'Wooden Partition & Shelving', 'Bed, Table & Chair Repairs', 'Lock, Handle & Hinge Replacement', 'Home & Office Services']
  }
];

export default servicesData;
