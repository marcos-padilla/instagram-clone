import { IconType } from 'react-icons'
import clsx from 'clsx'
import { Item } from '@/types/types'

interface DesktopItemProps {
	item: Item
}

export default function DesktopItem({ item }: DesktopItemProps) {
	const Icon = item.icon

	return (
		<button
			className={clsx(
				'flex items-center gap-x-5 relative hover:bg-neutral-800 transition rounded-md p-2 cursor-pointer'
			)}
			onClick={() => {
				if (item.onClick) {
					item.onClick()
				}
			}}
		>
			<Icon size={30} />
			<span className='text-lg hidden md:block'>{item.label}</span>
		</button>
	)
}
