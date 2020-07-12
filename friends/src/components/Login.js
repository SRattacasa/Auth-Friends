import React, {useState} from 'react'
import axios from 'axios'

const Login = () => { 
    
    
    // const actualLogin = () => { 
        
    // }
  
        const formSubmit = (e) => {
            e.preventDefault();
            axios.post("http://localhost:5000/api/login", formState.credentials)
        .then(res => { 
            window.localStorage.setItem('token', res.data.payload)
            console.log(res)
        }
        )
            console.log("Form submitted", formState);
            
        }
        
    
          const inputChange = (e) => {
            e.persist();
            
            let value =
              e.target.type === "checkbox" ? e.target.checked : e.target.value;
            setformState({ credentials: {...formState.credentials,  [e.target.name]: e.target.value }});
          };
    
        const [formState, setformState] = useState({
            credentials: 
            {username: "",
            password: "",}
           
          });
          
        return (
            <div>
                <form onSubmit={formSubmit}>
              <label htmlFor="username">
                Username
                <input
                  type="text"
                  name="username"
                  value={formState.credentials.username}
                  onChange={inputChange}
                />
                 
              </label>
              <br></br>
              <label htmlFor="password">
                Password 
                <input
                  type="text"
                  name="password"
                  value={formState.credentials.password}
                  onChange={inputChange}
                />
               
              </label>
              
              
                
              
              
             
      
              <p>
                <button type="submit">Login</button>
              </p>
            </form>
            </div>
        )
    }


export default Login