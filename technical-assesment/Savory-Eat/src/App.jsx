//the default user to update and delete is {user_Id:1,username:'testuser',email:'test@test.com',password:'password}
import React ,{useState}from "react";
import "./App.css";
import axios from 'axios';
import Home from "./components/Home.jsx";
import AllRecepies from "./components/AllRecipies.jsx"
function App() {  
const [view,setView]=useState('Home')
const [data,setData]=useState('Home')
const [search,setSearch]=useState('Home')
const [one,setOne]=useState('OneRecipie')
  let changeView = (view) => {
    setView(view);
  };


axios.get("http://localhost:4000/add")
.then(res=>{
  setData(res.data)})


  axios.put(`http://localhost:4000/put`, {
    user_Id,
    username,
    email,
    password,
    recepie_Id,
    Cook_Time,
    Prep_Time,
    recepie_Name,
    Serves,
    categorie,
    recepie_Image,
    recepie_Description,
    recepie_Ingredients,
    users_user_Id
  })
  .then((res) => {
    setPost(res.data);
  });

  
  axios.delete(`http://localhost:4000/add`)
  .then(() => {
    alert("deleted!");
    setview(null)
  });




  return (
    <div className="App">
      <nav className="nav">
        <div
          className="nav-item is-active"
          active-color="orange"
          onClick={() => setView("Home")}
        >
          Home
        </div>

        <div
          className="nav-item"
          active-color="green"
          onClick={() => setView("Allrecepies")}
        >
          All Recipies
        </div>
        <div
          className="nav-item"
          active-color="red"
          onClick={() => setView("Addrecepie")}
        >
          Addrecepie
        </div>
        <div className="nav-item" active-color="red">
          <input type="text"  />
          <button>search</button>
        </div>
        <span className="nav-indicator"></span>
      </nav>
      {view === "Home" && <Home changeView={changeView}/>}
      {view === "Allrecepies" && <AllRecepies />}
     
      <div></div>
    </div>
  );
}

export default App;
