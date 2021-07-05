import React, { useContext, useEffect, useState } from 'react'
// import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router";


// search all users in this facebook 
export default function Explore() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUsers]= useState([])
    const username = useParams().username;

    useEffect(() => {
        const fetchUsers = async () => {
          const res = username
            ? await axios.get("/posts/profile/" + username)
            : await axios.get("posts/timeline/" + user._id);
          setUsers(
            res.data.sort((p1, p2) => {
              return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
          );
        };
        fetchUsers();
      }, [username, user._id]);

    return (
        <div>
            
        </div>
    )
}
