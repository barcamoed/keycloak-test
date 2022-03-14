// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import WelcomePage from "./pages/HomePage";
import SecuredPage from "./pages/SecuredPage";
import PrivateRoute from "./helpers/PrivateRoute";

function App() {
 return (
   <div>
     <ReactKeycloakProvider authClient={keycloak}>
       <Nav />
       <BrowserRouter>
         <Routes>
           <Route exact path="/" element={<WelcomePage />} />
           <Route path="/secured" 
           element={
               <PrivateRoute>
                 <SecuredPage />
               </PrivateRoute>
             }
             />
         </Routes>
       </BrowserRouter>
       </ReactKeycloakProvider>
   </div>
 );
}

export default App;
