import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'
import { action } from '@storybook/addon-actions'
import MDXDocument from './StyledButton.mdx'
import { linkTo } from '@storybook/addon-links'

// increment という名前で action を出力するための関数をつくる
const incrementAction = action('increment')

// ファイル内のStory設定（メタデータオブジェクト）
export default {
	// グループ名
	title: 'StyledButton',
	// 使用するコンポーネント
	component: StyledButton,
	argTypes: {
		// onClick が呼ばれた時に clicked というアクションを出力する
		onClick: { action: 'clicked' },
		variant: {
			// ラジオボタンで設定できるように指定
			control: { type: 'radio' },
			options: ['primary', 'success', 'transparent'],
		},
		// props に渡す children を Storybook から変更できるように追加
		children: {
			// テキストボックスで入力できるように指定
			control: { type: 'text' },
		},
	},
	parameters: {
		docs: {
			// ドキュメント用の mdx コンポーネントを指定
			page: MDXDocument,
		},
	},
} as ComponentMeta<typeof StyledButton>

// テンプレートコンポーネントを実装
// Storybook から渡された props をそのまま Button に渡す
const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />

// bind を呼び出し Story を作成
export const TemplateTest = Template.bind({})

// デフォルトの props を設定する
TemplateTest.args = {
	variant: 'primary',
	children: 'Primary',
}

export const Primary = (props) => {
	const [count, setCount] = useState(0)
	const onClick = (e: React.MouseEvent) => {
		// 現在のカウントを渡して、Action を　呼ぶ
		incrementAction(e, count)
		setCount((c) => c + 1)
	}

	return (
		<StyledButton {...props} variant="primary" onClick={onClick}>
			Primary
		</StyledButton>
	)
}

export const Success = (props) => {
	// クリックしたら StyledButton/Transparent のストーリーへ遷移する
	return (
		<StyledButton {...props} variant="success" onClick={linkTo('StyledButton', 'Transparent')}>
			Success
		</StyledButton>
	)
}

export const Transparent = (props) => {
	// クリックしたら　StyledButton/Primary のストーリーへ遷移する
	return (
		<StyledButton {...props} variant="transparent" onClick={linkTo('StyledButton', 'Primary')}>
			Transparent
		</StyledButton>
	)
}