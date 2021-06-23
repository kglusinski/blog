import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import Layout from '../../components/layout'
import {getPageBySlug, getAllPages} from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { TITLE } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import PageType from "../../types/Page";

type Props = {
  page: PageType
}

const Page = ({ page }: Props) => {
  console.log("strona", page)
  const router = useRouter()
  if (!router.isFallback && !page?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {page.title} | {TITLE}
                </title>
              </Head>
              <PostBody content={page.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Page

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPageBySlug(params.slug, ['slug', 'content', 'title'])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      page: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPages(['slug'])
  console.log("posty", posts)
  return {
    paths: posts.map((pages) => {
      return {
        params: {
          slug: pages.slug,
        },
      }
    }),
    fallback: false,
  }
}
