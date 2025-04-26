import { dummyCars, Car } from "../../data/cars";
import { Card, CardContent, Typography } from "@mui/material";

export default function FleetManagement() {
  return (
    <div>
      <h2>Fleet Management</h2>
      {dummyCars.map((car: Car) => (
        <Card key={car.id} sx={{ margin: 2 }}>
          <CardContent>
            <Typography variant="h6">
              {car.make} {car.model}
            </Typography>
            <Typography>Registration: {car.registrationNumber}</Typography>
            <Typography>Status: {car.status}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
