import { getBFFJson } from '../helpers/postsHelper'

export default function Post({ projects }) {
  return (
    projects
  )
}

export async function getStaticProps() {
  const projects = await getBFFJson()
  return {
    props: {
      projects
    },
    revalidate: 15,
  }
}