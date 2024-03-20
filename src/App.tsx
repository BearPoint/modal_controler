import "./App.css";
import { ModalProvider } from "./providers/modalProvider";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="relative">
      <ModalProvider>
        <Dashboard />
      </ModalProvider>
    </div>
  );
}

export default App;
