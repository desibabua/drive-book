// Define the Booking type
export interface Booking {
  id: number;
  carId: number;
  customerName: string;
  customerPhone: string;
  startDate: string; // You can make it Date type later if needed
  endDate: string;
  amount: number;
  status: "Booked" | "Completed" | "Cancelled"; // Strict status types
}

// Dummy Bookings Data
export const dummyBookings: Booking[] = [
  {
    id: 1,
    carId: 1,
    customerName: "John Doe",
    customerPhone: "1234567890",
    startDate: "2025-05-01",
    endDate: "2025-05-05",
    amount: 5000,
    status: "Booked",
  },
  {
    id: 2,
    carId: 2,
    customerName: "Jane Smith",
    customerPhone: "0987654321",
    startDate: "2025-05-10",
    endDate: "2025-05-12",
    amount: 3000,
    status: "Completed",
  },
];
