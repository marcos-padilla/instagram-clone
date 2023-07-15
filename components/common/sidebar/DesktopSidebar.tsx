import DesktopItem from './DesktopItem'
import { AiOutlineInstagram, AiOutlineMenu } from 'react-icons/ai'
import { Item } from '@/types/types'

export default function DesktopSidebar({ items }: { items: Item[] }) {
	return (
		<div className='flex-col justify-between border-neutral-600 border-r h-full pt-10 px-2 fixed md:w-[200px] sm:w-[60px] hidden sm:flex '>
			<div className='flex flex-col gap-y-5'>
				<DesktopItem
					icon={AiOutlineInstagram}
					label={'Instagram'}
					classes='my-10 hidden lg:flex'
				/>
				{items.map((item, index) => (
					<DesktopItem
						key={index}
						label={item.label}
						icon={item.icon}
					/>
				))}
			</div>
			<DesktopItem label='More' icon={AiOutlineMenu} />
		</div>
	)
}
