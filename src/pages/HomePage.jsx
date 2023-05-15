import { Header } from "../components/Header/Header";
import { Calculator } from "../components/Calculator/Calculator";

export const HomePage = () => {
  return (
    <main>
      <div className="bg-red-600 h-3"></div>
      <Header />
      <Calculator />
    </main>
  );
};
