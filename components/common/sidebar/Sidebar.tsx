'use client'
import {
	AiOutlineHome,
	AiOutlineMessage,
	AiOutlinePlus,
	AiOutlineSearch,
	AiOutlineVideoCamera,
} from 'react-icons/ai'
import DesktopSidebar from './DesktopSidebar'
import MobileSidebar from './MobileSidebar'
import NewPostModal from '@/components/NewPostModal'
import { useMemo, useState } from 'react'

export default function Sidebar() {
	const [postModalOpen, setPostModalOpen] = useState(false)

	const desktopItems = useMemo(() => {
		return [
			{
				label: 'Home',
				icon: AiOutlineHome,
			},
			{
				label: 'Search',
				icon: AiOutlineSearch,
			},
			{
				label: 'Reels',
				icon: AiOutlineVideoCamera,
			},
			{
				label: 'Messages',
				icon: AiOutlineMessage,
			},
			{
				label: 'Create',
				icon: AiOutlinePlus,
				onClick: () => setPostModalOpen(true),
			},
		]
	}, [postModalOpen])

	const mobileItems = useMemo(() => {
		return [
			{
				label: 'Home',
				icon: AiOutlineHome,
			},
			{
				label: 'Reels',
				icon: AiOutlineVideoCamera,
			},
			{
				label: 'Create',
				icon: AiOutlinePlus,
				onClick: () => setPostModalOpen(true),
			},
			{
				label: 'Messages',
				icon: AiOutlineMessage,
			},
		]
	}, [postModalOpen])
	return (
		<>
			<NewPostModal
				isOpen={postModalOpen}
				onClose={() => setPostModalOpen(false)}
			/>
			<DesktopSidebar items={desktopItems} />
			<MobileSidebar items={mobileItems} />
		</>
	)
}
