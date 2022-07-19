import { Fragment } from "react";
import ProjectsPageLayout from "../../../components/layout/ProjectsPageLayout";
import Feed from "../../../components/feed/Feed";
import SideCard from "../../../components/SideCard";

const tweets = [
  {
    id: 1,
    type: "comment",
    member: { name: "Eduardo Benz", _id: "908392557258604544" },
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    title: "DAO Launch!",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.",
    date: "6d ago",
  },
  {
    id: 4,
    type: "comment",
    member: { name: "Jason Meyers", _id: "908392557258604544" },
    imageUrl:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    title: "Project setup!",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2h ago",
  },
];

function FavouriteProjects() {
  return (
    <Fragment>
      {/* Main column */}
      <main className="col-span-3 relative">
        <div className="flow-root">
          <Feed tweets={tweets} />
        </div>
      </main>

      {/* How to apply column */}
      <section className="col-span-1">
        <SideCard></SideCard>
      </section>
    </Fragment>
  );
}

FavouriteProjects.getLayout = function getLayout(page) {
  return <ProjectsPageLayout>{page}</ProjectsPageLayout>;
};

export default FavouriteProjects;
