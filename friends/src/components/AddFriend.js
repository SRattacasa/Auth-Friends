import React from 'react'

const AddFriend = () => { 

    const formSubmit = (e) => {
        e.preventDefault();
    }
        console.log("Form submitted", formState);   
    
    

      const inputChange = (e) => {
        e.persist();
        
        
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setformState({ credentials: {...formState.credentials,  [e.target.name]: e.target.value }});
      };

    const [formState, setformState] = useState({
        id: 1,
        name: 'Joe',
        age: 24,
        email: 'joe@lambdaschool.com',
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


export default AddFriend