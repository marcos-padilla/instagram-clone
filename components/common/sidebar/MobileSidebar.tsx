import { Item } from '@/types/types'
import MobileItem from './MobileItem'
import {
	AiOutlineArrowDown,
	AiOutlineHeart,
	AiOutlineSearch,
} from 'react-icons/ai'

export default function MobileSidebar({ items }: { items: Item[] }) {
	return (
		<>
			<div className='flex border-b sm:hidden border-neutral-600 p-4 items-center justify-between fixed top-0 inset-x-0'>
				<button className='flex items-center justify-center gap-2'>
					<span className='text-2xl'>Instagram</span>{' '}
					<AiOutlineArrowDown />{' '}
				</button>
				<div className='flex items-center gap-2'>
					<div className='bg-neutral-800 rounded-md py-1 px-3 flex items-center gap-2'>
						<AiOutlineSearch />
						<input
							type='text'
							placeholder='Search'
							className='w-full bg-transparent focus:outline-none'
						/>
					</div>
					<AiOutlineHeart size={25} />
				</div>
			</div>
			<div className='flex justify-evenly border-neutral-600 border-t sm:hidden py-2 fixed bottom-0 inset-x-0'>
				{items.map((item, index) => (
					<MobileItem
						key={index}
						label={item.label}
						icon={item.icon}
					/>
				))}
			</div>
		</>
	)
}
