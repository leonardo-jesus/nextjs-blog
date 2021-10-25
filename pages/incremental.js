import utilStyles from '../styles/utils.module.css';

export default function Post({ projects }) {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>My projects</h2>
      <ul className={utilStyles.list}>
        {projects.map(({ title, description }) => (
          <li className={utilStyles.listItem} key={title}>
            <h2 className={utilStyles.headingLg}>{title}</h2>
          <br />
          <small className={utilStyles.lightText}>
            <p>{description}</p>
          </small>
        </li>
        ))}
      </ul>
    </section>
  );
}

export async function getStaticProps() {
  const projects = await fetch('http://localhost:3333/projects');
  const projectsJSON = await projects.json();
  return {
    props: {
      projects: projectsJSON
    },
    revalidate: 5,
  };
}