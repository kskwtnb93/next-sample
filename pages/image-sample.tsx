import {NextPage} from 'next'
import Image from 'next/image'
// 画像ファイルをインポートする
import CatImage from '../public/images/cat.jpg'

const ImageSample: NextPage<void> = (props) => {
	return (
		<div>
			<h1>画像表示の比較</h1>

			<section>
				<h2>imgタグで表示した場合</h2>
				<p><img src="/images/cat.jpg" alt="ネッコ" /></p>
			</section>

			<section>
				<h2>Imageコンポーネントで表示した場合</h2>
				{/* Imageコンポーネントを使用して表示 */}
				{/* パスを指定する代わりに、インポートした画像を指定 */}
				<p><Image
					src={CatImage}
					alt="ネッコ"
					placeholder='blur'
				/></p>
				<p>Imageで表示した場合は事前に描画エリアが確保されます。</p>
			</section>
		</div>
	)
}

export default ImageSample