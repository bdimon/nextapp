// import React from 'react';

import {useEffect, useState} from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";


const Users = ({users}) => {
    // const [users, setUsers] = useState([
    //     { id: 1, name: 'John'},
    //     { id: 2, name: "Ann"},
    //     { id: 3, name: "Jack"}
    // ])
   
   
    return (
    <MainContainer keywords={"users list, ssr"}>
        <h1>User's List</h1>
      <ul >
        {
          users.map(user =>
            <li key={user.id}>
              <Link href={`/users/${user.id}`} legacyBehavior>
                  <a>
                    {user.name}
                  </a>
              </Link>
            </li>
          )
        }
      </ul>
    </MainContainer>
  );
};

export default Users;
export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return {
    props: {users}, // will be passed to the page component as props
  }
}
