import { GetStaticProps, NextPage, NextPageContext } from 'next'
import Head from 'next/head'

// ページコンポーネントの props の型定義（ここでは空）
type SSGProps = {
	message: string
}

// SSG は getStaticProps が返した props を受け取ることができる
// NextPage<SSGProps> は message: string のみを受け取って生成されるページの型
const SSG: NextPage<SSGProps> = (props) => {
	const { message } = props
	
	return (
		<div>
			{/* Headコンポーネントで包むと、その要素は<head>タグに配置されます */}
			<Head>
				<title>Static Site Generation</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<p>このページは静的サイト生成によってビルド時に生成されたページです。</p>
				<p>{message}</p>
			</main>
		</div>
	)
}

// getStaticProps はビルドに実行する
// GetStaticProps<SSGProps>　は　SSGProps　を引数にとる　 getStaticProps　の型
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
	const timestamp = new Date().toLocaleString()
	const message = `${timestamp} に getStaticProps が実行されました。`
	// console.log(message)

	return {
		// ここで返した props をもとにページコンポーネントを描画する
		props: {
			message,
		},
	}
}

// ページコンポーネントは export default でエクスポートする
export default SSG