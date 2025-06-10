import './App.scss';
import Resumo from './pages/Resumo';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SideNav from './components/Header/SideNav';
import { DataContextProvider } from './context/DataContext';
import Vendas from './pages/Vendas';

function App() {
  return (
    <>
      <DataContextProvider>
        <div className="container">
          <SideNav />
          <main>
            <Header />
            <Resumo />
            <Vendas />
          </main>
        </div>
      </DataContextProvider>
    </>
  );
}

export default App;
