import { Routes, Route } from "react-router-dom";

import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Finances } from "./pages/Finances";
import { Goals } from "./pages/Goals";

import { PrivateRouteLayout } from "./layouts/PrivateRouteLayout";
import { Error } from "./pages/Error";
import { CurrencyMoney } from './pages/Currency'
import { BrowserRouter } from "react-router-dom"; 

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          {/* Public pages */}
          <Route path="/" exact element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />

          {/* Private pages */}

     <Route element={<PrivateRouteLayout />}>
           
           <Route path="/dashboard" exact element={<Dashboard />} />
           <Route path="/dashboard/finances" element={<Finances />} />
           <Route path="/dashboard/goals" element={<Goals />} />
           <Route path="/dashboard/currency" element={<CurrencyMoney/>} />
         
       </Route>
     </Routes>
    
        
          
         
    </BrowserRouter>
    
    </>
  );
}

export default App;



