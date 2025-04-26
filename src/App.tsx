import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import FleetManagement from "./pages/owner/fleetManagement";
import BookingManagement from "./pages/owner/bookingManagement";
import Sidebar from "./components/sidebar";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Figtree', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <main style={{ flexGrow: 1, padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Navigate to="/fleet" />} />
              <Route path="/fleet" element={<FleetManagement />} />
              <Route path="/bookings" element={<BookingManagement />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}
