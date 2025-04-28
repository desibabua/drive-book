import Layout from "../../components/layout";
import { dummyBookings, Booking } from "../../data/bookings";
import { Card, CardContent, Typography } from "@mui/material";

export default function BookingManagement() {
  return (
    <Layout>
        <div>
        <h2>Booking Management</h2>
        {dummyBookings.map((booking: Booking) => (
            <Card key={booking.id} sx={{ margin: 2 }}>
            <CardContent>
                <Typography variant="h6">Customer: {booking.customerName}</Typography>
                <Typography>Phone: {booking.customerPhone}</Typography>
                <Typography>Car ID: {booking.carId}</Typography>
                <Typography>Start Date: {booking.startDate}</Typography>
                <Typography>End Date: {booking.endDate}</Typography>
                <Typography>Amount: ₹{booking.amount}</Typography>
                <Typography>Status: {booking.status}</Typography>
            </CardContent>
            </Card>
        ))}
        </div>
    </Layout>
  );
}
