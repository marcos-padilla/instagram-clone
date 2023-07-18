import { IconType } from 'react-icons'
import clsx from 'clsx'
import { Item } from '@/types/types'
interface MobileItemProps {
	item: Item
}

export default function MobileItem({ item }: MobileItemProps) {
	const Icon = item.icon
	return (
		<button
			className={clsx(
				'flex items-center gap-x-5 relative transition rounded-md p-2 cursor-pointer hover:scale-110'
			)}
			onClick={() => {
				if (item.onClick) {
					item.onClick()
				}
			}}
		>
			<Icon size={30} />
			<span className='text-lg hidden lg:block'>{item.label}</span>
		</button>
	)
}
