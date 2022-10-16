import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from 'styled-components'
import {theme} from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
	// styled-components でテーマを使用するために ThemeProvider を置く
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
