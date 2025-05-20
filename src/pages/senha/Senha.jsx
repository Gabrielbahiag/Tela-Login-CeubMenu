import { FaLock, FaSadCry } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import './Senha.css';
 
 const Senha = () => {
 
     const [username,setUsername] = useState("");
     const [password,setPassword] = useState("");
 
     const handleSubmit = (event) => {
         event.preventDefault();
         
         alert("Enviando os Dados:")
     }
 
   return (
     <div className="container">
         <form onSubmit={handleSubmit}>
             <h1>Recupere sua Senha</h1>
             <div className="input-field">
                 <input type="email" 
                 placeholder='E-mail' 
                 required
                 onChange={(e) => setUsername(e.target.value)}
                 />
                 <FaUser className="icon"></FaUser>
             </div>
             <div className="input-field">
                 <input type="password" 
                 placeholder='Senha'
                 required
                 onChange={(e) => setPassword(e.target.value)}
                 />
                 <FaLock className="icon"></FaLock>
             </div>
 
             <div className="recall-forget">
                 <label htmlFor="">
                     <input type="checkbox"/>
                     Lembrar de mim?
                 </label>
             </div>
 
             <button className="button">Entrar</button>
             
             <div className="signup-link">
                 <a href="/Cadastro">Registrar-se</a>
             </div>
         </form>
     </div>
   )
 }
 export default Senha