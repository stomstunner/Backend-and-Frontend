import { useState, useEffect } from "react";
import axios from "axios"
function App() {
  const [jokes, setJokes] = useState([]);
  // now we just use the useeffect ki jaisse hi hamra page load ho hamra data aa jaye 
  useEffect(()=>{
    // here we just have to do the axios se get request 
    // axios.get('http://localhost:3000/jokes')
    axios.get('/api/jokes')
    .then((response) => (setJokes(response.data)))
    .catch((err)=>{console.log(err)})
  },[])

  // so here in the axios.get we do not write the link in one go we just write the pathname for the api and we make proxy for that kyuki hamre pass hamreha localhost me toh api nahi chalega na hamara apic jis bhi app ka domain me hoge like google.com woh uspe chelga so insted of the lind ke baad api.jokes we just write the /api/jokes

  // and we make the proxy 

  // if we maked the app with create react app then in the manisfaction fiel we jsut have to add the proxy and the localhost port name 
  // "proxy" : "http://localhost:3000"


  return (
    <>
      <h1 style={{ backgroundColor: "red", textAlign: "center" }}>Full Stack</h1>

      {/* now we take the length of the jokes  */}
      <p>JOKES : {jokes.length}</p>

      {/* here we just open the JavaScript and loop the jokes  */}
      {/* so hamare pass jokes ke ander bahut sare object hai jisse ham joke bol dete hai aur usje ander se ham ek ek kar ke key ki help se data fetch karte rehte hai aur ha hme page me dikhane ke liye koi key deni chaiye nahi toh khud me loop lag sakta hai  */}
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h2>{joke.title}</h2>
          <h2>{joke.description}</h2>
        </div> 
        
      ))}
    </>
  );
}

export default App;
