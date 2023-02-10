import { Header, Footer } from "./components";
import { Routes } from "./routes/AlRoutes";

function App() {
  return (
    <div className="App dark:bg-darkbg">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
