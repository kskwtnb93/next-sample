import { render, screen, RenderResult, fireEvent, getByRole } from '@testing-library/react'
import { Input } from './index'

// describe で処理をまとめる
describe('Input', () => {
	let renderResult: RenderResult

	// それぞれのテストケース前にコンポーネントを描画し、renderResult にセットする
	beforeEach(() => {
		renderResult = render(<Input id="username" label="Username" />)
	})

	// テストケース実行後に描画していたコンポーネントを解放する
	afterEach(() => {
		renderResult.unmount()
	})

	// 初期描画時に input 要素が空であることをテスト
	it('should empty in input on initial render', () => {
		// label が　 Username であるコンポーネントに対応する input の要素を取得する
		const inputNode = screen.getByLabelText('Username') as HTMLInputElement

		// input 要素の表示が空か確認する
		expect(inputNode).toHaveValue('')
	})

	// 文字を入力したら、入力した内容が表示されるかをテスト
	it('should show input text', () => {
		const inputText = 'Test Input Text'
		const inputNode = screen.getByLabelText('Username') as HTMLInputElement

		// fireEvent を使って、input要素の onChange イベントを発火する
		fireEvent.change(inputNode, { target: { value: inputText } })

		// input 要素に入力したテキストが表示されているか確認する
		expect(inputNode).toHaveValue(inputText)
	})

	it('should reset when user clicks button', () => {
		// 最初にinputにテキストを入力する
		const inputText = 'Test Input Text'
		const inputNode = screen.getByLabelText('Username') as HTMLInputElement
		fireEvent.change(inputNode, { target: { value: inputText } })

		// ボタンを取得する
		const buttonNode = screen.getByRole('button', {
			name: 'Reset',
		}) as HTMLButtonElement
		// ボタンをクリックする
		fireEvent.click(buttonNode)

		// input要素の表示が空か確認する
		expect(inputNode).toHaveValue('')
	})
})