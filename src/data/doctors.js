// Doctor Directory Database
export const doctors = [
    {
        id: 1,
        name: 'Dr. Sarah Johnson',
        specialization: 'Obstetrics & Gynecology',
        image: '/images/doc1.jpg',
        qualifications: 'MBBS, MD (OB/GYN)',
        experience: '15 years',
        availability: ['Monday', 'Wednesday', 'Friday'],
        consultationHours: '9:00 AM - 4:00 PM',
        bio: 'Dr. Sarah Johnson is a highly experienced obstetrician and gynecologist specializing in high-risk pregnancies and minimally invasive gynecological surgeries.',
        languages: ['English', 'Twi'],
        department: 'maternity'
    },
    {
        id: 2,
        name: 'Dr. Michael Osei',
        specialization: 'Fertility Specialist',
        image: '/images/doc2.jpg',
        qualifications: 'MBBS, MD (Reproductive Medicine)',
        experience: '12 years',
        availability: ['Tuesday', 'Thursday', 'Saturday'],
        consultationHours: '10:00 AM - 5:00 PM',
        bio: 'Dr. Michael Osei is a renowned fertility specialist with expertise in IVF, IUI, and advanced reproductive technologies.',
        languages: ['English', 'Ga'],
        department: 'fertility'
    },
    {
        id: 3,
        name: 'Dr. Ama Mensah',
        specialization: 'Pediatrics',
        image: '/images/doc3.jpg',
        qualifications: 'MBBS, MD (Pediatrics)',
        experience: '10 years',
        availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        consultationHours: '8:00 AM - 3:00 PM',
        bio: 'Dr. Ama Mensah is a compassionate pediatrician dedicated to providing comprehensive care for children from newborns to adolescents.',
        languages: ['English', 'Twi', 'Ewe'],
        department: 'pediatrics'
    },
    {
        id: 4,
        name: 'Dr. Kwame Asante',
        specialization: 'General Medicine',
        image: '/images/doc4.jpg',
        qualifications: 'MBBS, MD (Internal Medicine)',
        experience: '18 years',
        availability: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
        consultationHours: '9:00 AM - 6:00 PM',
        bio: 'Dr. Kwame Asante is an experienced general physician providing comprehensive primary care and management of chronic conditions.',
        languages: ['English', 'Twi'],
        department: 'general'
    },
    {
        id: 5,
        name: 'Dr. Grace Boateng',
        specialization: 'Emergency Medicine',
        image: '/images/doc5.jpg',
        qualifications: 'MBBS, MD (Emergency Medicine)',
        experience: '8 years',
        availability: ['24/7 Emergency Coverage'],
        consultationHours: 'Emergency Department',
        bio: 'Dr. Grace Boateng is a skilled emergency physician trained in trauma care, critical care, and emergency procedures.',
        languages: ['English', 'Ga', 'Twi'],
        department: 'emergency'
    },
    {
        id: 6,
        name: 'Dr. Emmanuel Adjei',
        specialization: 'Laboratory Medicine',
        image: '/images/team-1.jpg',
        qualifications: 'MBBS, MD (Pathology)',
        experience: '14 years',
        availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        consultationHours: '7:00 AM - 4:00 PM',
        bio: 'Dr. Emmanuel Adjei oversees our laboratory services, ensuring accurate and timely diagnostic testing.',
        languages: ['English', 'Twi'],
        department: 'laboratory'
    }
];

// Department information
export const departments = [
    {
        id: 'maternity',
        name: 'Maternity Services',
        description: 'Comprehensive prenatal, delivery, and postnatal care',
        services: ['Prenatal Care', 'Labor & Delivery', 'Postnatal Care', 'Neonatal Care'],
        icon: '👶'
    },
    {
        id: 'fertility',
        name: 'Fertility Centre',
        description: 'Advanced reproductive treatments and fertility care',
        services: ['IVF', 'IUI', 'Fertility Assessment', 'Ovulation Induction'],
        icon: '🌸'
    },
    {
        id: 'pediatrics',
        name: 'Pediatrics',
        description: 'Specialized care for infants, children, and adolescents',
        services: ['Well-Child Visits', 'Vaccinations', 'Sick Child Care', 'Growth Monitoring'],
        icon: '👨‍👩‍👧‍👦'
    },
    {
        id: 'general',
        name: 'General Medicine',
        description: 'Primary care and management of common health conditions',
        services: ['Health Checkups', 'Chronic Disease Management', 'Preventive Care', 'Minor Procedures'],
        icon: '🏥'
    },
    {
        id: 'laboratory',
        name: 'Laboratory Services',
        description: 'Comprehensive diagnostic testing and analysis',
        services: ['Blood Tests', 'Urine Analysis', 'STI Screening', 'Pregnancy Tests'],
        icon: '🔬'
    },
    {
        id: 'emergency',
        name: 'Emergency Services',
        description: '24/7 emergency medical care',
        services: ['Trauma Care', 'Cardiac Emergencies', 'Acute Illness', 'Accident Care'],
        icon: '🚨'
    }
];

export default doctors;
