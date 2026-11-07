
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./Landingpage";
import Loginpage from "./Loginpage";
import Registrationpage from "./Registrationpage";
import Dashboard from "./Dashboard";
import Appointmentpage from "./Appointmentpage";
import Queuepage from "./Queuepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registrationpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointmentpage />} />
        <Route path="/queue" element={<Queuepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
