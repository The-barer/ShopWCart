import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import { ContextProvider } from "./Context";

function App() {
  return (
    <div className='App'>
      <Header />
      <ContextProvider><Shop /></ContextProvider>
      <Footer />
    </div>
  );
}

export default App;
