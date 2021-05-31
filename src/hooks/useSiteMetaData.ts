import { graphql, useStaticQuery } from "gatsby";

interface SiteMetaData {
  title: string;
  description?: any;
  author?: undefined;
}

interface Site {
  siteMetadata: SiteMetaData;
}

const useSiteMetaData: () => Site = () => {
  const { site: Site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );
  return Site;
};

export default useSiteMetaData;
