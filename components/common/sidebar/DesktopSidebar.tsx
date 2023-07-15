import DesktopItem from './DesktopItem'
import { AiOutlineInstagram, AiOutlineMenu } from 'react-icons/ai'
import { Item } from '@/types/types'
import clsx from 'clsx'
import Image from 'next/image'
import instagramLogo from '@/public/images/Instagram_logo_white.png'
export default function DesktopSidebar({ items }: { items: Item[] }) {
	return (
		<div className='flex-col justify-between border-neutral-600 border-r h-full pt-10 px-2 fixed md:w-[200px] sm:w-[60px] hidden sm:flex '>
			<div className='flex flex-col gap-y-5'>
				<button
					className={
						'items-center justify-center gap-x-5 relative hover:bg-neutral-800 transition rounded-md p-2 cursor-pointer my-10 sm:my-2 flex'
					}
				>
					<AiOutlineInstagram
						size={30}
						className='md:hidden block'
					/>
					<span className='text-lg hidden md:block'>
						<Image src={instagramLogo} alt='Instagram logo' />
					</span>
				</button>
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
