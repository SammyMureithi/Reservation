
import { Route,Routes } from 'react-router-dom';
import './App.css';
import ReservationTable from './Components/ReservationTable';
import HomePage from './Pages/HomePage';
import NewReservation from './Pages/NewReservation';
import NewTable from './Pages/NewTable';
import Search from './Pages/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<HomePage />}>
          <Route index element={<ReservationTable/>}/>
          <Route path={"/table"} element={<ReservationTable />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/newReservation"} element={<NewReservation />} />
          <Route path={"/newTable"} element={<NewTable/>}/>
        </Route>
      </Routes>
    
    </div>
  );
}

export default App;
