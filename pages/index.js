import MainContainer from "../components/MainContainer";
import HeadSeo from "../components/HeadSeo";
import siteMetadata from "../data/siteMetadata";

const Index = () => {
return (
  <>
  <HeadSeo
      title="Main Page"
      description={`Your description goes here on every page. 
                  Keep character count between 140 to 160 characters`}
      canonicalUrl={siteMetadata.siteUrl}
      ogTwitterImage={siteMetadata.siteLogoSquare}
      ogType={"website"}
    
    />
    
    <MainContainer keywords={'main page'}> 
      <h1>Main Page</h1>
    </MainContainer>
    </>
)
};

export default Index;