import  Head  from "next/head";
import A from '../components/A';

const MainContainer = ({children, keywords, title}) => {
    return (
        <>
        <Head>
        <title>{title}</title>
        <meta keywords={'react, nextjs, deploy, ' + keywords}/>
        </Head>
        <div className="navbar" >
            <A href={'/'} text='Home'/>
            <A href={'/users'} text='Users'/>
        </div>
        <div>
          {children}
        </div>
        <style jsx>
                {`
              .navbar {
              background-color: blue;
              padding: 15px;
              }
              
              
              `}</style>
        </>
    )
}
export default MainContainer;