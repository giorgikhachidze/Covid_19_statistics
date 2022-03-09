import './static/css/index.scss';
import {Route, Routes} from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import {NonPrivateRoutes, PrivateClientRoutes} from "./layouts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Statistics from "./pages/Statistics";
import {useEffect} from "react";
import {fetchLocaleData} from "./store/actions/locale";
import {useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch(fetchLocaleData())
  }, [dispatch])

  return (
    <Routes>
      <Route exact path='/' element={<NonPrivateRoutes/>}>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='login' element={<Login/>}/>
        <Route exact path='register' element={<Register/>}/>
      </Route>

      <Route path="*" element={<NoMatch/>}/>

      <Route exact path='/' element={<PrivateClientRoutes/>}>
        <Route exact path='statistics' element={<Statistics/>}/>
      </Route>
    </Routes>
  );
}

export default App;
