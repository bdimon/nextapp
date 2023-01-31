import HeadSeo from "../components/HeadSeo";
import MainContainer from "../components/MainContainer";
import siteMetadata from "../data/siteMetadata";

export default function Error() {
    return (
      <>
    <HeadSeo
      title="404"
      description={`Your description goes here on every page. 
                  Keep character count between 140 to 160 characters`}
      canonicalUrl={siteMetadata.siteUrl}
      ogTwitterImage={siteMetadata.siteLogoSquare}
      ogType={"website"}
    
    />
      <MainContainer>
       <div>
          <h1>My Custom Error-Page</h1>
        </div>
      </MainContainer>
      </>
    )
}