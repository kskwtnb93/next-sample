import {NextPage, GetStaticProps} from 'next'
import Head from 'next/head'

const EnvSample: NextPage = (props) => {
	// サーバーサイドで描画する時は 'test1' と表示され、クライアントサイドで再描画する時は undefined と表示される
	console.log('process.env.TEST', process.env.TEST)
	// 'test2' と表示される
	console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST)

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				{/* サーバーサイド描画時は 'test1' と表示され、クライアントサイドで再描画されると何も表示されない */}
				<p>{process.env.TEST}</p>
				<p>{process.env.NEXT_PUBLIC_TEST}</p>
			</main>
		</div>
	)
}

// getStaticProps は常にサーバーサイドで実行されるので、全ての環境変数を参照できる
export const getStaticProps: GetStaticProps = async (context) => {
	// 'test1' が表示される
	console.log('process.env.TEST', process.env.TEST)
	// 'test2' が表示される
	console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST)

	return {
		props: {},
	}
}

export default EnvSample