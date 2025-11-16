import './App.css';
import Header from './components/Header';
import PartnerGrid from './components/partners/PartnerGrid';
import RoleGrid from './components/roles/RoleGrid';
import UserGrid from './components/users/UserGrid';
import {BrowserRouter, Routes,Route} from "react-router";
function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<><Header/><UserGrid/></>} />
      <Route path="/users" element={<><Header/><UserGrid/></>} />
      <Route path="/partners" element={<><Header/><PartnerGrid/></>} />
      <Route path="/roles" element={<><Header/><RoleGrid/></>} />
       <Route path="*" element={<h1>Path Not Found!</h1>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
