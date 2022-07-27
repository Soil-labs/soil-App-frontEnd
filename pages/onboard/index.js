import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import SkillSelector from "../../components/skill/SkillSelector";

function Projects() {
  return (
    <Fragment>
      {/* How to apply column */}
      <section className="col-span-1"></section>

      {/* Main column */}
      <main className="col-span-3">
        <SkillSelector />
      </main>

      {/* How to apply column */}
      <section className="col-span-1"></section>
    </Fragment>
  );
}

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Projects;
