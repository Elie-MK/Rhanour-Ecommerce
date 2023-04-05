import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Components/HomePage'
import Detail from './pages/Detail'
import IndexPages from './pages/IndexPages'
import Femme from './pages/Femme'
import Homme from './pages/Homme'
import Enfant from './pages/Enfant'
import Panier from './pages/Panier'
import Login from './pages/Login'
import Boubou from './pages/Category/Boubou'
import Bazin from './pages/Category/Bazin'
import Chemise from './pages/Category/Chemise'
import Robe from './pages/Category/Robe'
import Chaussures from './pages/Category/Chaussures'
import Register from './pages/Register'
import ErrorPage from './pages/ErrorPage'
import InfoCompte from './pages/InfoCompte'
import Compte from './Components/Compte'
import Commande from './pages/Commande'
import Favori from './pages/Favori'
import ManageAccount from './pages/ManageAccount'
import Adresse from './pages/Adresse'
import Ordertrue from './pages/Ordertrue'
import Orderfalse from './pages/Orderfalse'
import EditAdress from './pages/EditAdress'
import AdresseIndex from './pages/AdresseIndex'
import Modepaie from './Components/Modepaie'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPages />}>
        <Route index element={<HomePage />}/>
        <Route path="/Femme/" element={<Femme />}/>
        <Route path="/detail/:idCategory/:id" element={<Detail />}/>
        <Route path="/Homme" element={<Homme />}/>
        <Route path="/Enfant" element={<Enfant />}/>
        <Route path="/Panier" element={<Panier />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Boubou" element={<Boubou/> } />
        <Route path="/Bazin" element={<Bazin/>}/>
        <Route path="/Chemises" element={<Chemise/>} />
        <Route path="/Robes" element={<Robe/>} />
        <Route path="/chaussures" element={<Chaussures/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path='/checkout' element={<Modepaie/>}/>



        <Route path="/user" element={<Compte/>}>
          <Route index element={<InfoCompte/>}/>
          <Route path='order/' element={<Commande/>}>
            <Route path='ordertrue' element={<Ordertrue/>}/>
            <Route path='orderfalse' element={<Orderfalse/>}/>
          </Route>
          <Route path='favori' element={<Favori/>}/>
          <Route path='manageaccount' element={<ManageAccount/>}/>
          <Route path='adresse' element={<AdresseIndex/>}>
            <Route index element={<Adresse/>} />


            <Route path='edit' element={<EditAdress/>}/>
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
