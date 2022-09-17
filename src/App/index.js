import { Outlet } from 'react-router-dom'
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import './index.css';

function App() {

  return (
    <>
      <TopNav />
      <div className="App">
         <Outlet />
      </div>
      <Footer />

    </>
  );
}

export default App;
