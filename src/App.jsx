import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";


import { ThemeProvider } from "./context/ThemeContext";
import { AuthContextProvider } from "@/context/AuthContext";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Home from "@/routes/Home";
import SignIn from "@/routes/SignInPage";
import SignUp from "@/routes/SignUpPage";
import Account from "@/routes/Account";
import CoinPage from "@/routes/CoinPage";

function App() {
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/coin/:coinId" element={<CoinPage />}>
              <Route path=":coinId" />
            </Route>
          </Routes>
        </main>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
