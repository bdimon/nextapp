// import React from 'react';
import {useRouter} from "next/router";
import styles from "../../styles/User.module.scss";
import MainContainer from "../../components/MainContainer";

export default function User({user}){
    const {query} = useRouter();
    // console.log(query);
    return (
<MainContainer keywords={user.name}>
    <div className={styles.user}>
        <h1>User with id {query.id}</h1>
        <p>Name: {user.name}</p>
    </div>
</MainContainer>
)}
// export async function getStaticProps(context) {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const user = await response.json();
//     return {
//       props: {user}, // will be passed to the page component as props
//     }
//   }
export async function getServerSideProps({params}) {
//   console.log(params);
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();

    return {
      props: {user}, // will be passed to the page component as props
    }
  }


