import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "./Header";
import ProjectsPageLayout from "./ProjectsPageLayout";

function Layout({ children }) {
  const router = useRouter();
  const [isProjectsPage, setIsProjectsPage] = useState(false);

  useEffect(() => {
    if (checkIsProjectsPage(router.route.split("/")[1])) {
      setIsProjectsPage(true);
    } else {
      setIsProjectsPage(false);
    }
  }, [router.route]);

  const checkIsProjectsPage = (routeFirstElement) =>
    routeFirstElement === "projects";

  return (
    <section className="bg-bgGrey min-h-screen">
      <div className="w-full max-w-screen-xl mx-auto">
        <Header />
        <div className="relative mx-6">
          {isProjectsPage ? (
            <main>
              <ProjectsPageLayout>{children}</ProjectsPageLayout>
            </main>
          ) : (
            <main>{children}</main>
          )}
        </div>
      </div>
    </section>
  );
}

export default Layout;
