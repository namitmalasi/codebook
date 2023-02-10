import { Header, Footer } from "./components";
import { AlRoutes } from "./routes/AlRoutes";

function App() {
  return (
    <div className="App dark:bg-darkbg">
      <Header />
      <AlRoutes />
      <Footer />
    </div>
  );
}

export default App;
