// Define the Car type
export interface Car {
  id: number;
  ownerId: number;
  make: string;
  model: string;
  registrationNumber: string;
  year: number;
  status: "Available" | "Unavailable"; // You can tighten the type
}

// Dummy Cars Data
export const dummyCars: Car[] = [
  {
    id: 1,
    ownerId: 1,
    make: "Toyota",
    model: "Corolla",
    registrationNumber: "ABC-123",
    year: 2020,
    status: "Available",
  },
  {
    id: 2,
    ownerId: 1,
    make: "Honda",
    model: "Civic",
    registrationNumber: "XYZ-789",
    year: 2021,
    status: "Unavailable",
  },
];
