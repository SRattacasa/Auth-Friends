import React, {useState} from 'react'
import { axiosWithAuth } from '../util/axiosWithAuth';

const AddFriend = () => { 
    const [formState, setformState] = useState({
        id: 1,
        name: 'Joe',
        age: 24,
        email: 'joe@lambdaschool.com',
      });

    const formSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/friends', formState)
        .then(res => console.log("RESPONSE", res))
        console.log("Form submitted", formState);   
    }
      
    const inputChange = (e) => {
        e.persist();    
        setformState( {...formState,  [e.target.name]: e.target.value });
      };

      
    return (
        <div>
            <form onSubmit={formSubmit}>
          <label htmlFor="id">
          id 
            <input
              type="text"
              name="id"
              value={formState.id}
              onChange={inputChange}
            />
           
          </label>
          <label htmlFor="name">
          name
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={inputChange}
            />
             
          </label>
          <label htmlFor="email">
          name
            <input
              type="text"
              name="email"
              value={formState.email}
              onChange={inputChange}
            />
             
          </label>
          <br></br>
          <label htmlFor="password">
            Password 
            <input
              type="text"
              name="password"
              value={formState.password}
              onChange={inputChange}
            />
           
          </label>

          
         
  
          <p>
            <button type="submit">Send New User</button>
          </p>
        </form>
        </div>
    )
    }


export default AddFriend