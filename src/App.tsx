import './App.scss';
import Resumo from './pages/Resumo';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SideNav from './components/Header/SideNav';
import { DataContextProvider } from './context/DataContext';

function App() {
  return (
    <>
      <DataContextProvider>
        <div>
          <SideNav />
          <main>
            <Header />
            <Resumo />
          </main>
        </div>
      </DataContextProvider>
    </>
  );
}

export default App;
