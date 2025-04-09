
export interface CarType {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: 'Petrol' | 'Diesel' | 'Electric';
  transmission: 'Manual' | 'Automatic';
  seatingCapacity: number;
  image: string;
  description: string;
  features: string[];
}

// Mock car data
const cars: CarType[] = [
  {
    id: '1',
    brand: 'Maruti Suzuki',
    model: 'Swift',
    year: 2023,
    price: 800000,
    mileage: 23.2,
    fuelType: 'Petrol',
    transmission: 'Manual',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1374&auto=format&fit=crop',
    description: 'The Maruti Suzuki Swift is a popular hatchback known for its fuel efficiency and sporty design. It offers a comfortable ride with modern features.',
    features: ['Apple CarPlay & Android Auto', 'Automatic Climate Control', 'Keyless Entry', 'Push Button Start', 'LED Headlamps']
  },
  {
    id: '2',
    brand: 'Hyundai',
    model: 'Creta',
    year: 2023,
    price: 1500000,
    mileage: 17.0,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1470&auto=format&fit=crop',
    description: 'The Hyundai Creta is a compact SUV with a spacious interior and premium features. It offers a commanding road presence and multiple engine options.',
    features: ['Panoramic Sunroof', 'Ventilated Seats', '10.25-inch Touchscreen', 'BlueLink Connected Car Technology', 'BOSE Premium Sound System']
  },
  {
    id: '3',
    brand: 'Tata',
    model: 'Nexon EV',
    year: 2023,
    price: 1600000,
    mileage: 0, // Electric cars don't have traditional mileage
    fuelType: 'Electric',
    transmission: 'Automatic',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1528&auto=format&fit=crop',
    description: 'The Tata Nexon EV is an electric SUV with a range of up to 437 km on a single charge. It offers instant torque and zero emissions.',
    features: ['Range: 437 km', 'Fast Charging', 'Zconnect App', 'Multi-Mode Regen', '8.8-inch Touchscreen']
  },
  {
    id: '4',
    brand: 'Mahindra',
    model: 'XUV700',
    year: 2023,
    price: 1800000,
    mileage: 16.0,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    seatingCapacity: 7,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1470&auto=format&fit=crop',
    description: 'The Mahindra XUV700 is a premium 7-seater SUV with advanced driver assistance systems and a powerful engine.',
    features: ['ADAS Features', 'Panoramic Sunroof', 'Dual 10.25-inch Screens', 'AdrenoX Connected Car Tech', 'Sony 3D Sound System']
  },
  {
    id: '5',
    brand: 'Toyota',
    model: 'Fortuner',
    year: 2023,
    price: 3500000,
    mileage: 12.0,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    seatingCapacity: 7,
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1472&auto=format&fit=crop',
    description: 'The Toyota Fortuner is a full-size SUV known for its reliability, off-road capabilities, and premium features.',
    features: ['4x4 Drivetrain', 'Leather Seats', 'JBL Sound System', 'Multi-Terrain Select', 'Downhill Assist Control']
  },
  {
    id: '6',
    brand: 'Honda',
    model: 'City',
    year: 2023,
    price: 1200000,
    mileage: 20.0,
    fuelType: 'Petrol',
    transmission: 'Manual',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1336&auto=format&fit=crop',
    description: 'The Honda City is a premium sedan with a spacious cabin, refined engine, and top-notch safety features.',
    features: ['Sunroof', 'Honda Connect', '8-inch Touchscreen', 'Lane Watch Camera', 'Alexa Remote Capability']
  },
  {
    id: '7',
    brand: 'Kia',
    model: 'Seltos',
    year: 2023,
    price: 1400000,
    mileage: 18.0,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1470&auto=format&fit=crop',
    description: 'The Kia Seltos is a feature-packed compact SUV with modern design, advanced tech, and multiple powertrain options.',
    features: ['Bose Premium Sound System', 'Air Purifier', 'UVO Connected Car Tech', 'Ventilated Seats', 'Heads-Up Display']
  },
  {
    id: '8',
    brand: 'MG',
    model: 'Hector',
    year: 2023,
    price: 1700000,
    mileage: 16.0,
    fuelType: 'Diesel',
    transmission: 'Manual',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=1470&auto=format&fit=crop',
    description: 'The MG Hector is a tech-loaded SUV with a spacious cabin, panoramic sunroof, and i-SMART connected car technology.',
    features: ['14-inch Touchscreen', 'ADAS Level 2', 'Digital Instrument Cluster', 'Voice Commands', 'Panoramic Sunroof']
  },
  {
    id: '9',
    brand: 'Volkswagen',
    model: 'Taigun',
    year: 2023,
    price: 1200000,
    mileage: 19.0,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?q=80&w=1470&auto=format&fit=crop',
    description: 'The Volkswagen Taigun is a German-engineered compact SUV with robust build quality, refined engines, and engaging driving dynamics.',
    features: ['Digital Cockpit', 'Electric Sunroof', 'Red Caliper Brakes', 'Ventilated Leather Seats', 'Ambient Lighting']
  },
  {
    id: '10',
    brand: 'Skoda',
    model: 'Slavia',
    year: 2023,
    price: 1100000,
    mileage: 19.5,
    fuelType: 'Petrol',
    transmission: 'Manual',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1364&auto=format&fit=crop',
    description: 'The Skoda Slavia is a premium sedan with European styling, spacious interior, and powerful TSI engines.',
    features: ['10-inch Infotainment System', 'Wireless SmartLink', 'Electric Sunroof', 'Ventilated Seats', 'Digital Instrument Cluster']
  },
  {
    id: '11',
    brand: 'Tata',
    model: 'Harrier',
    year: 2023,
    price: 1750000,
    mileage: 16.0,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?q=80&w=1470&auto=format&fit=crop',
    description: 'The Tata Harrier is a stylish SUV based on Land Rover\'s D8 platform, offering a commanding road presence and premium features.',
    features: ['Panoramic Sunroof', 'JBL Premium Audio', '8.8-inch Touchscreen', 'iRA Connected Car Tech', '6 Airbags']
  },
  {
    id: '12',
    brand: 'Maruti Suzuki',
    model: 'Baleno',
    year: 2023,
    price: 750000,
    mileage: 22.0,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1528&auto=format&fit=crop',
    description: 'The Maruti Suzuki Baleno is a premium hatchback with a spacious cabin, refined engine, and modern features.',
    features: ['Head-Up Display', 'SmartPlay Pro+', '360-Degree Camera', 'Suzuki Connect', 'LED Projector Headlamps']
  },
  {
    id: '13',
    brand: 'Hyundai',
    model: 'i20',
    year: 2023,
    price: 780000,
    mileage: 20.0,
    fuelType: 'Petrol',
    transmission: 'Manual',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1566008885218-94edd624a8eb?q=80&w=1374&auto=format&fit=crop',
    description: 'The Hyundai i20 is a premium hatchback with a bold design, feature-loaded cabin, and multiple powertrain options.',
    features: ['10.25-inch Touchscreen', 'BlueLink Connected Car Tech', 'Bose Premium Sound System', 'Sunroof', 'Digital Instrument Cluster']
  },
  {
    id: '14',
    brand: 'Mahindra',
    model: 'Thar',
    year: 2023,
    price: 1650000,
    mileage: 15.0,
    fuelType: 'Diesel',
    transmission: 'Manual',
    seatingCapacity: 4,
    image: 'https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?q=80&w=1470&auto=format&fit=crop',
    description: 'The Mahindra Thar is an iconic off-road SUV with rugged design, 4x4 capability, and modern features.',
    features: ['4x4 Drivetrain', 'Drizzle-Resistant Touchscreen', 'Adventure Statistics Display', 'Roof-Mounted Speakers', 'Washable Interior']
  },
  {
    id: '15',
    brand: 'Honda',
    model: 'Amaze',
    year: 2023,
    price: 700000,
    mileage: 19.0,
    fuelType: 'Petrol',
    transmission: 'Manual',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1470&auto=format&fit=crop',
    description: 'The Honda Amaze is a compact sedan with a spacious cabin, refined engine, and premium features.',
    features: ['Digipad 2.0', 'Paddle Shifters', 'Cruise Control', 'Multi-Angle Rear Camera', 'LED Projector Headlamps']
  },
  {
    id: '16',
    brand: 'Toyota',
    model: 'Innova Crysta',
    year: 2023,
    price: 2100000,
    mileage: 13.0,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    seatingCapacity: 7,
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1336&auto=format&fit=crop',
    description: 'The Toyota Innova Crysta is a premium MPV known for its reliability, comfort, and spacious cabin.',
    features: ['Captain Seats', 'Ambient Lighting', 'One-Touch Tumble Second Row', 'Smart Playcast', 'Auto-Fold Mirrors']
  },
  {
    id: '17',
    brand: 'Tata',
    model: 'Punch',
    year: 2023,
    price: 600000,
    mileage: 20.0,
    fuelType: 'Petrol',
    transmission: 'Manual',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?q=80&w=1470&auto=format&fit=crop',
    description: 'The Tata Punch is a micro SUV with rugged design, commanding seating position, and good ground clearance.',
    features: ['7-inch Touchscreen', 'iRA Connected Car Tech', 'Semi-Digital Instrument Cluster', 'Cruise Control', 'Automatic Headlamps']
  },
  {
    id: '18',
    brand: 'MG',
    model: 'ZS EV',
    year: 2023,
    price: 2500000,
    mileage: 0, // Electric car
    fuelType: 'Electric',
    transmission: 'Automatic',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1573950940509-d924ee3fd345?q=80&w=1496&auto=format&fit=crop',
    description: 'The MG ZS EV is an electric SUV with a range of over 400 km, fast charging capability, and premium features.',
    features: ['Range: 461 km', 'i-SMART Connected Car Tech', '10.1-inch Touchscreen', 'PM 2.5 Filter', 'Kinetic Energy Recovery System']
  },
  {
    id: '19',
    brand: 'Kia',
    model: 'Sonet',
    year: 2023,
    price: 950000,
    mileage: 18.0,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1470&auto=format&fit=crop',
    description: 'The Kia Sonet is a compact SUV with premium features, multiple powertrain options, and a bold design.',
    features: ['10.25-inch Touchscreen', 'UVO Connected Car Tech', 'Bose Premium Sound System', 'Ventilated Front Seats', 'Air Purifier']
  },
  {
    id: '20',
    brand: 'Hyundai',
    model: 'Verna',
    year: 2023,
    price: 1300000,
    mileage: 18.0,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    seatingCapacity: 5,
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1425&auto=format&fit=crop',
    description: 'The Hyundai Verna is a premium sedan with a bold design, feature-loaded cabin, and powerful engines.',
    features: ['Digital Instrument Cluster', 'Ventilated Seats', 'BlueLink Connected Car Tech', 'Bose Premium Sound System', 'Hands-Free Smart Trunk']
  }
];

/**
 * Get all cars
 */
export const getAllCars = () => {
  return new Promise<CarType[]>((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      resolve(cars);
    }, 800);
  });
};

/**
 * Get a car by ID
 */
export const getCarById = (id: string) => {
  return new Promise<CarType | undefined>((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      const car = cars.find((car) => car.id === id);
      resolve(car);
    }, 800);
  });
};

/**
 * Get all car brands
 */
export const getCarBrands = () => {
  return new Promise<string[]>((resolve) => {
    // Get unique brands
    const brands = Array.from(new Set(cars.map((car) => car.brand)));
    // Simulate API delay
    setTimeout(() => {
      resolve(brands);
    }, 500);
  });
};

/**
 * Filter cars by search criteria
 */
export const filterCars = (searchTerm: string, filters: {
  brand?: string;
  priceRange?: [number, number];
  fuelType?: string;
  seatingCapacity?: number | null;
  sortBy?: string;
}) => {
  return new Promise<CarType[]>((resolve) => {
    let filtered = [...cars];
    
    // Apply search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (car) => 
          car.brand.toLowerCase().includes(term) || 
          car.model.toLowerCase().includes(term)
      );
    }
    
    // Apply brand filter
    if (filters.brand) {
      filtered = filtered.filter((car) => car.brand === filters.brand);
    }
    
    // Apply price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      filtered = filtered.filter(
        (car) => car.price >= min && car.price <= max
      );
    }
    
    // Apply fuel type filter
    if (filters.fuelType) {
      filtered = filtered.filter((car) => car.fuelType === filters.fuelType);
    }
    
    // Apply seating capacity filter
    if (filters.seatingCapacity) {
      filtered = filtered.filter(
        (car) => car.seatingCapacity === filters.seatingCapacity
      );
    }
    
    // Apply sorting
    if (filters.sortBy === 'price-low-high') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-high-low') {
      filtered.sort((a, b) => b.price - a.price);
    }
    
    // Simulate API delay
    setTimeout(() => {
      resolve(filtered);
    }, 800);
  });
};
