import {useState, useEffect} from 'react'

function PagesApiSample() {
	// 内部で状態を保つため useState を利用
	const [data, setData] = useState({name: ''})
	// 外部の API にリクエストするのは副作用なので useEfect 内で処理
	useEffect(() => {
		// pages/api/hello.ts の内容にリクエスト
		fetch('api/hello')
			.then((res) => res.json())
			.then((profile) => {
				setData(profile)
			})
	}, [])

	return <div>hello {data.name}</div>
}

export default PagesApiSample