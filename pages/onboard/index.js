import { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import SkillSelector from "../../components/skill/SkillSelector";

function Projects() {
  return (
    <div className="grid grid-cols-1 gap-y-3 md:gap-x-3 md:grid-cols-5">
      {/* How to apply column */}
      <section className="col-span-1"></section>

      {/* Main column */}
      <main className="col-span-3">
        <SkillSelector />
      </main>

      {/* How to apply column */}
      <section className="col-span-1"></section>
    </div>
  );
}

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Projects;
