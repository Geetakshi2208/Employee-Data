import Header from "./pages/header/Header"
import Dashboard from "./pages/dashboard/Dashboard";
import PostUser from "./pages/employee/PostUser";
import UpdateUser from "./pages/employee/UpdateUser";
import NoMatch from "./pages/noMatch/NoMatch";
import { Route,Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path ="/" element ={<Dashboard/>}></Route>
      <Route path ="/employee" element ={<PostUser/>}></Route>
      <Route path ="/employee/:id" element ={<UpdateUser/>}></Route>
      <Route path ="*" element ={<NoMatch/>}></Route>
    </Routes>
    </>
  );
}

export default App;
