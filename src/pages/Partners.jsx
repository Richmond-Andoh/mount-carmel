import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronUp, 
  Shield, 
  Pill, 
  Building2, 
  Handshake, 
  ArrowRight, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  FlaskConical, 
  LineChart,
  Hospital,
  CreditCard,
  Plane,
  Stethoscope
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import partner logos
import apex from '../images/partners/apex-mutual.png';
import nationwide from '../images/partners/nationwide.png';
import acacia from '../images/partners/acacia.png';
import phoenix from '../images/partners/phoenix.png';
import glico from '../images/partners/glico.png';
import premier from '../images/partners/premier.png';
import liberty from '../images/partners/liberty.png';
import kaiser from '../images/partners/kaiser.png';
import vitality from '../images/partners/vitality.png';
import metropolitan from '../images/partners/metropolitan.png';



// Small, self-contained count-up component that animates when visible
const AnimatedCounter = ({ end, duration = 1200, suffix = '', prefix = '' }) => {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const spanRef = useRef(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        const start = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const current = Math.floor(progress * end);
          setValue(current);
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.4 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={spanRef}>{prefix}{value.toLocaleString()}{suffix}</span>
  );
};

const Partners = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedPartner, setExpandedPartner] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const insuranceCompanies = [
    { 
      name: "Apex Mutual Health", 
      logo: apex,
      type: 'insurance',
      description: 'Comprehensive health insurance coverage with nationwide network access',
      website: '#'
    },
    { 
      name: "Nationwide Insurance", 
      logo: nationwide,
      type: 'insurance',
      description: 'Reliable insurance solutions for individuals and families',
      website: '#'
    },
    { 
      name: "Acacia Insurance", 
      logo: acacia,
      type: 'insurance',
      description: 'Affordable health coverage with extensive benefits',
      website: '#'
    },
    { 
      name: "Phoenix Insurance", 
      logo: phoenix,
      type: 'insurance',
      description: 'Rising to meet all your healthcare coverage needs',
      website: '#'
    },
    { 
      name: "Glico Insurance", 
      logo: glico,
      type: 'insurance',
      description: 'Trusted insurance partner for comprehensive healthcare',
      website: '#'
    },
    { 
      name: "Premier Health Insurance", 
      logo: premier,
      type: 'insurance',
      description: 'Premium healthcare coverage with exceptional service',
      website: '#'
    },
    { 
      name: "Liberty Medical Health", 
      logo: liberty,
      type: 'insurance',
      description: 'Freedom to choose your healthcare provider',
      website: '#'
    },
    { 
      name: "Kaiser Global Health", 
      logo: kaiser,
      type: 'insurance',
      description: 'International healthcare coverage with global reach',
      website: '#'
    },
    { 
      name: "Vitality Health", 
      logo: vitality,
      type: 'insurance',
      description: 'Rewarding healthy living with better coverage',
      website: '#'
    },
    { 
      name: "Metropolitan Health", 
      logo: metropolitan,
      type: 'insurance',
      description: 'Comprehensive health plans for urban living',
      website: '#'
    }
  ];

  const hospitalPartners = [
    {
      name: "Tema General Hospital",
      logo: "/images/partners/tema-general.png",
      type: 'hospital',
      description: 'Leading healthcare facility serving the Tema community with comprehensive medical services',
      website: '#'
    },
    {
      name: "University of Ghana Medical Centre (UGMC)",
      logo: "/images/partners/ugmc.png",
      type: 'hospital',
      description: 'Premier teaching hospital providing advanced medical care and training',
      website: '#'
    },
    {
      name: "Ridge Hospital",
      logo: "/images/partners/ridge-hospital.png",
      type: 'hospital',
      description: 'Specialized medical center offering quality healthcare services',
      website: '#'
    },
    {
      name: "Greeville Hospital",
      logo: "/images/partners/greeville.png",
      type: 'hospital',
      description: 'Community hospital dedicated to providing accessible healthcare',
      website: '#'
    },
    {
      name: "Tema Women Hospital",
      logo: "/images/partners/tema-women.png",
      type: 'hospital',
      description: 'Specialized women\'s health facility offering comprehensive maternal care',
      website: '#'
    },
    {
      name: "AIMA Hospital",
      logo: "/images/partners/aima.png",
      type: 'hospital',
      description: 'Modern healthcare facility with advanced medical technology',
      website: '#'
    },
    {
      name: "Mount Carmel Hospital (USA)",
      logo: "/images/partners/mount-carmel-usa.png",
      type: 'hospital',
      description: 'International partner hospital providing knowledge exchange and best practices',
      website: '#'
    },
    {
      name: "37 Military Hospital",
      logo: "/images/partners/37-military.png",
      type: 'hospital',
      description: 'Military medical facility providing specialized healthcare services',
      website: '#'
    },
    {
      name: "Brothers OAK Ventures",
      logo: "/images/partners/brothers-oak.png",
      type: 'hospital',
      description: 'Healthcare venture providing innovative medical solutions',
      website: '#'
    },
    {
      name: "Wayne HealthCare",
      logo: "/images/partners/wayne-healthcare.png",
      type: 'hospital',
      description: 'Comprehensive healthcare provider with multiple service offerings',
      website: '#'
    },
    {
      name: "Rowena Healthcare",
      logo: "/images/partners/rowena-healthcare.png",
      type: 'hospital',
      description: 'Quality healthcare services with patient-centered approach',
      website: '#'
    }
  ];

  const bankPartners = [
    {
      name: "Stanbic Bank",
      logo: "/images/partners/stanbic.png",
      type: 'bank',
      description: 'Leading financial institution providing healthcare financing solutions',
      website: '#'
    },
    {
      name: "Republic Bank",
      logo: "/images/partners/republic-bank.png",
      type: 'bank',
      description: 'Trusted banking partner for healthcare payment solutions',
      website: '#'
    },
    {
      name: "Ecobank",
      logo: "/images/partners/ecobank.png",
      type: 'bank',
      description: 'Pan-African bank offering comprehensive financial services',
      website: '#'
    },
    {
      name: "Access Bank",
      logo: "/images/partners/access-bank.png",
      type: 'bank',
      description: 'Modern banking solutions for healthcare transactions',
      website: '#'
    },
    {
      name: "GCB Bank",
      logo: "/images/partners/gcb-bank.png",
      type: 'bank',
      description: 'Ghana\'s premier bank providing reliable financial services',
      website: '#'
    },
    {
      name: "Demabe Rural Bank",
      logo: "/images/partners/demabe.png",
      type: 'bank',
      description: 'Community-focused bank serving rural healthcare financing needs',
      website: '#'
    },
    {
      name: "ADB Bank",
      logo: "/images/partners/adb-bank.png",
      type: 'bank',
      description: 'Agricultural Development Bank supporting healthcare initiatives',
      website: '#'
    }
  ];

  const airlinePartners = [
    {
      name: "British Airways",
      logo: "/images/partners/british-airways.png",
      type: 'airline',
      description: 'International airline partner for medical tourism and emergency transport',
      website: '#'
    },
    {
      name: "GLM Airlines",
      logo: "/images/partners/glm.png",
      type: 'airline',
      description: 'Regional airline providing medical transport services',
      website: '#'
    },
    {
      name: "United Airlines",
      logo: "/images/partners/united-airlines.png",
      type: 'airline',
      description: 'Global airline partner for international medical referrals',
      website: '#'
    }
  ];

  const medicalCompanies = [
    {
      name: "Philips Healthcare",
      logo: "/images/partners/philips.png",
      type: 'medical_equipment',
      description: 'Leading medical technology company providing advanced healthcare solutions',
      website: '#'
    },
    {
      name: "Samsung Healthcare",
      logo: "/images/partners/samsung.png",
      type: 'medical_equipment',
      description: 'Innovative medical imaging and healthcare technology solutions',
      website: '#'
    },
    {
      name: "General Electric Healthcare",
      logo: "/images/partners/ge-healthcare.png",
      type: 'medical_equipment',
      description: 'Global leader in medical technology and healthcare solutions',
      website: '#'
    },
    {
      name: "Mindray Medical",
      logo: "/images/partners/mindray.png",
      type: 'medical_equipment',
      description: 'Medical equipment manufacturer providing diagnostic solutions',
      website: '#'
    },
    {
      name: "HP Healthcare",
      logo: "/images/partners/hp.png",
      type: 'medical_equipment',
      description: 'Technology solutions for healthcare information systems',
      website: '#'
    },
    {
      name: "Dell Healthcare",
      logo: "/images/partners/dell.png",
      type: 'medical_equipment',
      description: 'Healthcare IT infrastructure and technology solutions',
      website: '#'
    },
    {
      name: "Apple Healthcare",
      logo: "/images/partners/apple.png",
      type: 'medical_equipment',
      description: 'Digital health solutions and medical device integration',
      website: '#'
    },
    {
      name: "Tesla Healthcare",
      logo: "/images/partners/tesla.png",
      type: 'medical_equipment',
      description: 'Innovative healthcare technology and sustainable solutions',
      website: '#'
    },
    {
      name: "LG Healthcare",
      logo: "/images/partners/lg.png",
      type: 'medical_equipment',
      description: 'Medical display technology and healthcare equipment',
      website: '#'
    }
  ];

  const pharmaceuticalCompanies = [
    { 
      name: "Dosty Pharmacy", 
      logo: "/images/partners/dosty-pharmacy.png",
      type: 'pharmaceutical',
      description: 'Full-service pharmacy providing quality medications and healthcare products',
      website: '#'
    },
    { 
      name: "East Cantonment Pharmacy", 
      logo: "/images/partners/east-cantonment.png",
      type: 'pharmaceutical',
      description: 'Neighborhood pharmacy with personalized care and service',
      website: '#'
    },
    { 
      name: "Ernest Chemist", 
      logo: "/images/partners/ernest-chemist.png",
      type: 'pharmaceutical',
      description: 'Leading pharmaceutical company with a wide range of healthcare products',
      website: '#'
    },
    { 
      name: "Mega Life Science", 
      logo: "/images/partners/mega-life.png",
      type: 'pharmaceutical',
      description: 'Innovative pharmaceutical solutions for better health outcomes',
      website: '#'
    },
    { 
      name: "Tobinco Pharmaceuticals", 
      logo: "/images/partners/tobinco.png",
      type: 'pharmaceutical',
      description: 'Quality medicines and healthcare solutions',
      website: '#'
    },
    { 
      name: "Worldwide Pharmacy", 
      logo: "/images/partners/worldwide.png",
      type: 'pharmaceutical',
      description: 'Global pharmaceutical distributor with local presence',
      website: '#'
    },
    { 
      name: "Gokals Pharmacy", 
      logo: "/images/partners/gokals.png",
      type: 'pharmaceutical',
      description: 'Trusted source for medications and health products',
      website: '#'
    },
    {
      name: "OA & G Pharmaceuticals",
      logo: "/images/partners/oag.png",
      type: 'pharmaceutical',
      description: 'Pharmaceutical distributor providing quality medications',
      website: '#'
    },
    {
      name: "Osons Pharmacy",
      logo: "/images/partners/osons.png",
      type: 'pharmaceutical',
      description: 'Community pharmacy chain with multiple locations',
      website: '#'
    },
    {
      name: "Capa Chemist",
      logo: "/images/partners/capa.png",
      type: 'pharmaceutical',
      description: 'Trusted pharmaceutical partner with quality medications',
      website: '#'
    },
    {
      name: "Sanbao Pharmaceuticals",
      logo: "/images/partners/sanbao.png",
      type: 'pharmaceutical',
      description: 'International pharmaceutical company with local presence',
      website: '#'
    }
  ];

  const governmentPartners = [
    {
      name: "Ghana Health Service",
      logo: "/images/partners/ghs-logo.png",
      type: 'government',
      description: "National healthcare service provider ensuring quality healthcare delivery across Ghana.",
      website: "https://www.ghanahealthservice.org/"
    },
    {
      name: "National Health Insurance Authority",
      logo: "/images/partners/nhis-logo.png",
      type: 'government',
      description: "Government agency providing health insurance coverage to Ghanaian citizens.",
      website: "https://www.nhis.gov.gh/"
    },
    {
      name: "Medical and Dental Council",
      logo: "/images/partners/mdc-logo.png",
      type: 'regulatory',
      description: "Regulatory body ensuring professional standards in medical and dental practice.",
      website: "https://mdcghana.org/"
    },
    {
      name: "Pharmacy Council",
      logo: "/images/partners/pc-logo.png",
      type: 'regulatory',
      description: "Regulatory authority for pharmaceutical practice and drug safety in Ghana.",
      website: "https://www.pharmacycouncil.org.gh/"
    },
    {
      name: "Food and Drugs Authority",
      logo: "/images/partners/fda-logo.png",
      type: 'regulatory',
      description: "Ensuring the safety, quality, and efficacy of food, drugs, and other regulated products.",
      website: "https://fdaghana.gov.gh/"
    },
    {
      name: "Noguchi Memorial Institute",
      logo: "/images/partners/noguchi-logo.png",
      type: 'research',
      description: "Leading biomedical research facility in Ghana and the West African sub-region.",
      website: "https://www.noguchi.ug.edu.gh/"
    }
  ];

  const benefits = [
    {
      icon: "fa fa-flask",
      title: "Advanced Research",
      description: "Access to cutting-edge medical research and treatments"
    },
    {
      icon: "fa fa-shield-alt", 
      title: "Quality Assurance",
      description: "Maintaining highest standards of healthcare"
    },
    {
      icon: "fa fa-users",
      title: "Expert Network",
      description: "Collaboration with healthcare experts worldwide"
    },
    {
      icon: "fa fa-chart-line",
      title: "Cost Efficiency",
      description: "Better healthcare at optimized costs"
    }
  ];

  // Combine all partners for filtering
  const allPartners = [
    ...insuranceCompanies.map(p => ({ ...p, category: 'insurance' })),
    ...hospitalPartners.map(p => ({ ...p, category: 'hospital' })),
    ...bankPartners.map(p => ({ ...p, category: 'bank' })),
    ...airlinePartners.map(p => ({ ...p, category: 'airline' })),
    ...medicalCompanies.map(p => ({ ...p, category: 'medical_equipment' })),
    ...pharmaceuticalCompanies.map(p => ({ ...p, category: 'pharmaceutical' })),
    ...governmentPartners
  ];

  // Filter partners based on active filter and search query
  const filteredPartners = allPartners.filter(partner => {
    const matchesFilter = activeFilter === 'all' || 
                         (partner.type && partner.type === activeFilter) || 
                         (partner.category && partner.category === activeFilter);
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (partner.description && partner.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  // Group partners by type for the grid view
  const partnersByType = {
    insurance: insuranceCompanies,
    hospital: hospitalPartners,
    bank: bankPartners,
    airline: airlinePartners,
    medical_equipment: medicalCompanies,
    pharmaceutical: pharmaceuticalCompanies,
    government: governmentPartners.filter(p => p.type === 'government'),
    regulatory: governmentPartners.filter(p => p.type === 'regulatory'),
    research: governmentPartners.filter(p => p.type === 'research')
  };

  const toggleExpand = (index) => {
    setExpandedPartner(expandedPartner === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mount-carmel-primary to-mount-carmel-secondary text-white py-36 md:py-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/hero-partners.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-mount-carmel-primary/90 to-mount-carmel-secondary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Valued Partners
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Collaborating with leading organizations to deliver exceptional healthcare
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 bg-white sticky top-0 z-20 shadow-sm" style={{ top: isScrolled ? '0' : 'auto' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col d-block md:flex-row md:items-center justify-between gap-6">

              {/* Search container */}
              <div className="relative mb-4 flex-1 max-w-2xl">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-mount-carmel-primary focus:border-mount-carmel-primary text-gray-700"
                  placeholder="Search partners..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === 'all'
                      ? 'bg-mount-carmel-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="flex items-center">
                    <Handshake className="w-4 h-4 mr-2" />
                    All Partners
                  </span>
                </button>
                
                <button
                  onClick={() => setActiveFilter('insurance')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === 'insurance'
                      ? 'bg-mount-carmel-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Insurance
                  </span>
                </button>
                
                <button
                  onClick={() => setActiveFilter('pharmaceutical')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === 'pharmaceutical'
                      ? 'bg-mount-carmel-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="flex items-center">
                    <Pill className="w-4 h-4 mr-2" />
                    Pharmaceutical
                  </span>
                </button>
                
                <button
                  onClick={() => setActiveFilter('hospital')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === 'hospital'
                      ? 'bg-mount-carmel-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="flex items-center">
                    <Hospital className="w-4 h-4 mr-2" />
                    Hospitals
                  </span>
                </button>
                
                <button
                  onClick={() => setActiveFilter('bank')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === 'bank'
                      ? 'bg-mount-carmel-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="flex items-center">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Banks
                  </span>
                </button>
                
                <button
                  onClick={() => setActiveFilter('airline')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === 'airline'
                      ? 'bg-mount-carmel-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="flex items-center">
                    <Plane className="w-4 h-4 mr-2" />
                    Airlines
                  </span>
                </button>
                
                <button
                  onClick={() => setActiveFilter('medical_equipment')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === 'medical_equipment'
                      ? 'bg-mount-carmel-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="flex items-center">
                    <Stethoscope className="w-4 h-4 mr-2" />
                    Medical Equipment
                  </span>
                </button>
                
                <button
                  onClick={() => setActiveFilter('government')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === 'government'
                      ? 'bg-mount-carmel-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="flex items-center">
                    <Building2 className="w-4 h-4 mr-2" />
                    Government
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-mount-carmel-primary bg-mount-carmel-primary/10 rounded-full mb-4">
              Our Network
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {activeFilter === 'all' 
                ? 'Our Valued Partners' 
                : activeFilter === 'insurance' ? 'Insurance Partners'
                : activeFilter === 'hospital' ? 'Hospital Partners'
                : activeFilter === 'bank' ? 'Banking Partners'
                : activeFilter === 'airline' ? 'Airline Partners'
                : activeFilter === 'medical_equipment' ? 'Medical Equipment Partners'
                : activeFilter === 'pharmaceutical' ? 'Pharmaceutical Partners'
                : 'Government & Regulatory Partners'}
            </h2>
            <p className="text-lg text-gray-600">
              We're proud to collaborate with leading organizations to provide the best healthcare services.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.length > 0 ? (
              <AnimatePresence>
                {filteredPartners.map((partner, index) => (
                  <motion.div
                    key={`${partner.name}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => toggleExpand(index)}
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-gray-50 rounded-lg p-3 mr-4">
                          {partner.logo ? (
                            <img 
                              src={partner.logo} 
                              alt={partner.name} 
                              className="h-16 w-16 object-contain"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20rx%3D%2212%22%20fill%3D%22%23F3F4F6%22%2F%3E%3Cpath%20d%3D%22M32%2020C25.3726%2020%2020%2025.3726%2020%2032C20%2038.6274%2025.3726%2044%2032%2044C38.6274%2044%2044%2038.6274%2044%2032C44%2025.3726%2038.6274%2020%2032%2020ZM32%2024.8C34.3196%2024.8%2036.2%2026.6804%2036.2%2029C36.2%2031.3196%2034.3196%2033.2%2032%2033.2C29.6804%2033.2%2027.8%2031.3196%2027.8%2029C27.8%2026.6804%2029.6804%2024.8%2032%2024.8ZM32%2040.8C28.76%2040.8%2025.88%2039.16%2024%2036.68C24.08%2034.16%2032%2032.52%2032%2032.52C32%2032.52%2039.92%2034.16%2040%2036.68C38.12%2039.16%2035.24%2040.8%2032%2040.8Z"%20fill%3D%22%236B7280%22%2F%3E%3C%2Fsvg%3E';
                              }}
                            />
                          ) : (
                            <div className="h-16 w-16 rounded-full bg-mount-carmel-primary/10 flex items-center justify-center">
                              {partner.type === 'insurance' && <Shield className="h-8 w-8 text-mount-carmel-primary" />}
                              {partner.type === 'hospital' && <Hospital className="h-8 w-8 text-mount-carmel-primary" />}
                              {partner.type === 'bank' && <CreditCard className="h-8 w-8 text-mount-carmel-primary" />}
                              {partner.type === 'airline' && <Plane className="h-8 w-8 text-mount-carmel-primary" />}
                              {partner.type === 'medical_equipment' && <Stethoscope className="h-8 w-8 text-mount-carmel-primary" />}
                              {partner.type === 'pharmaceutical' && <Pill className="h-8 w-8 text-mount-carmel-primary" />}
                              {(partner.type === 'government' || partner.type === 'regulatory') && <Building2 className="h-8 w-8 text-mount-carmel-primary" />}
                              {partner.type === 'research' && <FlaskConical className="h-8 w-8 text-mount-carmel-primary" />}
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-semibold text-gray-900">{partner.name}</h3>
                            <button 
                              className="text-gray-400 hover:text-mount-carmel-primary transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleExpand(index);
                              }}
                            >
                              {expandedPartner === index ? (
                                <ChevronUp className="h-5 w-5" />
                              ) : (
                                <ChevronDown className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                          
                          <div className="mt-1">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              partner.type === 'insurance' ? 'bg-blue-100 text-blue-800' :
                              partner.type === 'hospital' ? 'bg-red-100 text-red-800' :
                              partner.type === 'bank' ? 'bg-indigo-100 text-indigo-800' :
                              partner.type === 'airline' ? 'bg-sky-100 text-sky-800' :
                              partner.type === 'medical_equipment' ? 'bg-teal-100 text-teal-800' :
                              partner.type === 'pharmaceutical' ? 'bg-green-100 text-green-800' :
                              partner.type === 'government' ? 'bg-purple-100 text-purple-800' :
                              partner.type === 'regulatory' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {partner.type === 'insurance' && 'Insurance'}
                              {partner.type === 'hospital' && 'Hospital'}
                              {partner.type === 'bank' && 'Bank'}
                              {partner.type === 'airline' && 'Airline'}
                              {partner.type === 'medical_equipment' && 'Medical Equipment'}
                              {partner.type === 'pharmaceutical' && 'Pharmaceutical'}
                              {partner.type === 'government' && 'Government'}
                              {partner.type === 'regulatory' && 'Regulatory'}
                              {partner.type === 'research' && 'Research'}
                            </span>
                          </div>

                          <AnimatePresence>
                            {expandedPartner === index && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-3 text-sm text-gray-600">
                                  <p className="mb-3">{partner.description || 'No description available.'}</p>
                                  {partner.website && (
                                    <a 
                                      href={partner.website} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center text-mount-carmel-primary hover:text-mount-carmel-secondary font-medium text-sm"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      Visit website
                                      <ArrowRight className="ml-1 h-4 w-4" />
                                    </a>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-mount-carmel-primary/10 mb-4">
                  <Search className="h-12 w-12 text-mount-carmel-primary" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No partners found</h3>
                <p className="text-gray-500">
                  {searchQuery 
                    ? `No partners match "${searchQuery}". Try adjusting your search.`
                    : 'No partners available in this category.'}
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-4 text-mount-carmel-primary hover:text-mount-carmel-secondary font-medium text-sm"
                  >
                    Clear search
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-mount-carmel-primary/10 rounded-lg p-3 mr-4">
                    <div className="h-12 w-12 rounded-full bg-mount-carmel-primary/10 flex items-center justify-center text-mount-carmel-primary">
                      {benefit.icon === 'fa fa-flask' && <FlaskConical className="h-6 w-6" />}
                      {benefit.icon === 'fa fa-shield-alt' && <Shield className="h-6 w-6" />}
                      {benefit.icon === 'fa fa-users' && <Users className="h-6 w-6" />}
                      {benefit.icon === 'fa fa-chart-line' && <LineChart className="h-6 w-6" />}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership Statistics */}
          <div className="bg-gradient-to-r from-mount-carmel-primary to-mount-carmel-secondary rounded-2xl p-8 mt-16 mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Our Partnership Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center text-white">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white/20 mb-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-1"><AnimatedCounter end={10} suffix="+" /></h2>
                <p className="text-white/90 text-sm">Insurance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center text-white">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white/20 mb-3">
                  <Hospital className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-1"><AnimatedCounter end={11} suffix="+" /></h2>
                <p className="text-white/90 text-sm">Hospitals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center text-white">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white/20 mb-3">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-1"><AnimatedCounter end={7} suffix="+" /></h2>
                <p className="text-white/90 text-sm">Banks</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center text-white">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white/20 mb-3">
                  <Plane className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-1"><AnimatedCounter end={3} suffix="+" /></h2>
                <p className="text-white/90 text-sm">Airlines</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center text-white">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white/20 mb-3">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-1"><AnimatedCounter end={9} suffix="+" /></h2>
                <p className="text-white/90 text-sm">Medical Equipment</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center text-white">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white/20 mb-3">
                  <Pill className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-1"><AnimatedCounter end={11} suffix="+" /></h2>
                <p className="text-white/90 text-sm">Pharmaceutical</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-white/20 mb-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-2"><AnimatedCounter end={6} suffix="+" /></h2>
                <p className="text-white/90">Government & Regulatory Partners</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-white/20 mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-2"><AnimatedCounter end={50} suffix="K+" /></h2>
                <p className="text-white/90">Patients Served Through Partnerships</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-mount-carmel-primary to-mount-carmel-secondary rounded-2xl p-8 mt-16 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Become a Partner</h2>
              <p className="text-xl text-white/90 mb-8">Join our network of trusted healthcare partners and help us deliver exceptional care to our community.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-mount-carmel-primary bg-white hover:bg-gray-100 md:text-lg transition-colors"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="#"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 md:text-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get In Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-mount-carmel-primary/10 text-mount-carmel-primary mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Call Us</h4>
                <p className="text-gray-600">+233 24 123 4567</p>
                <p className="text-gray-500 text-sm mt-1">Mon-Fri, 8am-5pm</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-mount-carmel-primary/10 text-mount-carmel-primary mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Email Us</h4>
                <p className="text-gray-600">partnerships@mountcarmel.com</p>
                <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-mount-carmel-primary/10 text-mount-carmel-primary mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Visit Us</h4>
                <p className="text-gray-600">123 Healthcare Ave, Accra</p>
                <p className="text-gray-500 text-sm mt-1">Greater Accra, Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
          <style jsx global>{`
        .hover-scale {
          transition: transform 0.2s ease-in-out;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }
        .insurance-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(111,51,72,0.2) !important;
        }
        .pharmacy-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2) !important;
        }
        .insurance-card, .pharmacy-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .counter-item {
          transition: all 0.3s ease;
        }
        .counter-item:hover {
          transform: scale(1.05);
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        .service-item:hover {
          transform: translateY(-2px);
        }
        .insurance-logo, .pharmacy-logo {
          transition: all 0.3s ease;
        }
        .insurance-card:hover .insurance-logo i,
        .pharmacy-card:hover .pharmacy-logo i {
          transform: scale(1.1) rotate(5deg);
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * 7))}
        }
        
        .animate-marquee {
          animation: scroll 40s linear infinite;
          display: flex;
          width: calc(250px * 14);
        }
        
        .hover\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Partners;