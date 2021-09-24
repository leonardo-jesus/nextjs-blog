import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';

export default function About({ allRepositoriesData }) {
  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi I'm Leonardo Jesus, a Fullstack Developer from Brazil!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My projects</h2>
        <ul className={utilStyles.list}>
          {allRepositoriesData.map(({ name, created_at, html_url }) => (
            <li className={utilStyles.listItem} key={name}>
              <Link href={html_url}>
                <a>{name}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={created_at} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const repositories = await fetch('https://api.github.com/users/leonardo-jesus/repos')
  const repositoriesJSON = await repositories.json()
  return { props: { allRepositoriesData: repositoriesJSON } }
}
