import { useLocation } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { getRouteSEO, siteConfig } from "@/seo/config";

const RouteSEO = () => {
  const { pathname } = useLocation();
  const pageSEO = getRouteSEO(pathname);

  if (!pageSEO) {
    return (
      <SEOHead
        title="Page Not Found"
        description={siteConfig.defaultDescription}
        path={pathname}
        noindex={true}
      />
    );
  }

  return (
    <SEOHead
      title={pageSEO.title}
      description={pageSEO.description}
      path={pageSEO.path}
      type="website"
    />
  );
};

export default RouteSEO;
