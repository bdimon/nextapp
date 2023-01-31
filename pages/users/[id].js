// import React from 'react';
import {useRouter} from "next/router";
import styles from "../../styles/User.module.scss";
import MainContainer from "../../components/MainContainer";
import HeadSeo from "../../components/HeadSeo";


export default function User({user}){
    const {query} = useRouter();
    // console.log(query);
    return (
      <>
      <HeadSeo
      title={`${user.name}`}
      description={`Your description goes here on every page. 
        Keep character count between 140 to 160 characters`}
      canonicalUrl={"siteMetadata.siteUrl"}
      ogTwitterImage={"siteMetadata.siteLogoSquare"}
      ogType={"website"}
    />
<MainContainer keywords={user.name}>
  <title>{user.name}</title>
    <div className={styles.user}>
        <h1>User with id {query.id}</h1>
        <p>Name: {user.name}</p>
    </div>
</MainContainer>
</>
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


