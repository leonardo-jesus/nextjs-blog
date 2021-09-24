import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Contact() {
  return (
    <Layout contact>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My Social Media</h2>
        <ul className={utilStyles.list}>
        <Link href={"https://www.linkedin.com/in/leonardojesus02/"}>
          <a>LinkedIn</a>
        </Link>
        <br />
        <Link href={"https://github.com/leonardo-jesus"}>
          <a>GitHub</a>
        </Link>
        <br />
        </ul>
      </section>
    </Layout>
  );
}
