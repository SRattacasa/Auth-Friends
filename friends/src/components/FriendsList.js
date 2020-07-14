import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../util/axiosWithAuth';
import Friend from './Friend'


const FriendsList = () => {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get('friends', {authorization: localStorage.getItem("token")})
        .then(res => {
            console.log(res.data);
            setFriends(res.data)
        })

    }, [])

    
    
    return (
       
        <div className="friends-list">
             
            <div className="container">
                {friends.map(item => <Friend name={item.name} />)}
                
            </div>
        </div>
    );

}

export default FriendsList;