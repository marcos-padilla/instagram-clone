import { IconType } from 'react-icons'

export type Item = {
	label: string
	icon: IconType
	onClick?: () => void
}

export type Post = {
	id: string
	userId: string
	images: string[]
	text?: string
} | null
