import {
	AiOutlineHome,
	AiOutlineMessage,
	AiOutlinePlus,
	AiOutlineSearch,
	AiOutlineVideoCamera,
} from 'react-icons/ai'
import DesktopSidebar from './DesktopSidebar'
import MobileSidebar from './MobileSidebar'

const items = [
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
	},
]

export default function Sidebar() {
	return (
		<>
			<DesktopSidebar items={items} />
			<MobileSidebar items={items} />
		</>
	)
}
