import { Item } from '@/types/types'
import MobileItem from './MobileItem'
import {
	AiOutlineArrowDown,
	AiOutlineHeart,
	AiOutlineSearch,
} from 'react-icons/ai'
import instagramLogo from '@/public/images/Instagram_logo_white.png'
import Image from 'next/image'

interface MobileSidebarProps {
	items: Item[]
}

export default function MobileSidebar({ items }: MobileSidebarProps) {
	return (
		<>
			<div className='flex border-b sm:hidden border-neutral-600 p-4 items-center justify-between fixed top-0 inset-x-0 z-50 bg-black'>
				<button className='flex items-center justify-center gap-2'>
					<Image
						src={instagramLogo}
						width={100}
						height={50}
						alt='Instagram logo'
					/>
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
			<div className='flex justify-evenly border-neutral-600 border-t sm:hidden py-2 fixed bottom-0 inset-x-0 z-50 bg-black'>
				{items.map((item, index) => (
					<MobileItem key={index} item={item} />
				))}
			</div>
		</>
	)
}
