'use client'

import { Post } from '@/types/types'
import { createContext, useContext, useState } from 'react'

interface PostModalProviderProps {
	children: React.ReactNode
}

interface PostModalContextProps {
	setPost: (p: Post) => void
	post: Post
}
const PostModalContext = createContext<PostModalContextProps>({
	setPost: (p) => {},
	post: null,
})

export const usePostModal = () => {
	return useContext(PostModalContext)
}

export default function PostModalProvider({
	children,
}: PostModalProviderProps) {
	const [post, setPost] = useState<Post>(null)

	return (
		<PostModalContext.Provider
			value={{
				setPost,
				post,
			}}
		>
			{children}
		</PostModalContext.Provider>
	)
}
