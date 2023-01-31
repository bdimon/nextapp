// import React from 'react';

import {useEffect, useState} from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";
import HeadSeo from "../components/HeadSeo";
import siteMetadata from "../data/siteMetadata";
import styles from "../styles/User.module.scss";


const Users = ({users}) => {
    // ])
   
   
    return (
      <>
    <HeadSeo
      title={`Users List`}
      description={`Your description goes here on every page. 
        Keep character count between 140 to 160 characters`}
      canonicalUrl={siteMetadata.siteUrl}
      ogTwitterImage={siteMetadata.siteLogoSquare}
      ogType={"website"}
    />
      

    <MainContainer keywords={"users list, ssr"}>
      <div className={styles.user}>
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
      </div>
    </MainContainer>
    </>
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

