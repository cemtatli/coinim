import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}

export default App;
