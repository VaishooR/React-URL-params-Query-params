// import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './assets/sb-admin-2.min.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Table from './components/Table';
import Viewuser from './components/Viewuser';
import Product from './components/Product';
import Viewproduct from './components/Viewproduct';
import {BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
          <div id="wrapper">
          <Sidebar/>
              <div id="content-wrapper" class="d-flex flex-column">
                  <div id="content">
                  <Topbar/>
                        <div class="container-fluid">
                        <Routes>
                            <Route path="/" element={<Table/>}/>
                            <Route path="/table/view/:userid" element={<Viewuser/>}/>
                            <Route path="/product" element={<Product/>}/>
                            <Route path="/product/card/:phone" element={<Viewproduct/>}/>
                        </Routes>
                        </div>
                  </div> 
              <Footer/>   
              </div>     
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
