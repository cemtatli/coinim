import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import { ThemeProvider as MTProvider } from "@material-tailwind/react";

function App() {
  return (
    <MTProvider>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </MTProvider>
  );
}

export default App;
