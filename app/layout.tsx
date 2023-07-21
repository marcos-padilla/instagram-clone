import AuthProvider from '@/context/AuthProvider'
import PostModalProvider from '@/context/PostModalProvider'
import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Instagram Clone',
	description: 'Full Stack Instagram Clone using Next JS',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<AuthProvider>
					<PostModalProvider>{children}</PostModalProvider>
				</AuthProvider>
			</body>
		</html>
	)
}
