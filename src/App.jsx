import React from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@/context/ThemeContext";
import { AuthContextProvider } from "@/context/AuthContext";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Error404 from "@/components/Error404";
import ScrollToTop from "@/components/ScrollToTop";

import Home from "@/routes/Home";
import SignIn from "@/routes/SignInPage";
import SignUp from "@/routes/SignUpPage";
import Account from "@/routes/Account";
import CoinDetails from "@/routes/CoinDetails";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Toaster />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/coin/:coinId" element={<CoinDetails />}>
              <Route path=":coinId" />
            </Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </main>
        <ScrollToTop />
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
