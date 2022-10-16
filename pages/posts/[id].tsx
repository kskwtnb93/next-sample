import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
// next/router から useRouter というフックを取り込む
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

type PostProps = {
	id: string
}

const Post: NextPage<PostProps> = (props) => {
	const { id } = props
	const router = useRouter()

	if(router.isFallback) {
		// フォールバックページ向けの表示を返す
		return <div>Loading...</div>
	}

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<p>このページは静的サイト生成によってビルド時に生成されたページです。</p>
				<p>{`/post/${id} に対応するページです。`}</p>
			</main>
		</div>
	)
}

// getStaticPaths は生成したいページのパスパラメータの組み合わせを返す
// このファイルは pages/posts/[id].tsx なので、パスパラメータとして id の値を返す必要がある
export const getStaticPaths: GetStaticPaths = async () => {
	const paths = [
		{
			params: {
				id: '1',
			},
		},
		{
			params: {
				id: '2',
			},
		},
		{
			params: {
				id: '3',
			},
		},
	]

	// fallback を false にすると、paths で定義されたページ以外は404ページを表示する
	return {
		paths,
		fallback: false
	}
}

// パラメータの型を定義
interface PostParams extends ParsedUrlQuery {
	id: string
}

// getStaticPaths 実行後にそれぞれのパスに対して getStaticProps が実行される
export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (context) => {
	return {
		props: {
			id: context.params!['id'],
		},
	}
}

export default Post