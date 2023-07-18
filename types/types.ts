import { IconType } from 'react-icons'

export type Item = {
	label: string
	icon: IconType
}

export type Post = {
	userId: string
	images: string[]
	text?: string
} | null
