import { Item } from '@/types/types'
import MobileItem from './MobileItem'
import {
	AiOutlineArrowDown,
	AiOutlineHeart,
	AiOutlineSearch,
} from 'react-icons/ai'
import instagramLogo from '@/public/images/Instagram_logo_white.png'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import { AiOutlineStar } from 'react-icons/ai'
import { BiUserCheck } from 'react-icons/bi'
import { Fragment } from 'react'
import clsx from 'clsx'
interface MobileSidebarProps {
	items: Item[]
}

export default function MobileSidebar({ items }: MobileSidebarProps) {
	return (
		<>
			<div className='flex border-b sm:hidden border-neutral-600 p-4 items-center justify-between fixed top-0 inset-x-0 z-50 bg-black'>
				<Menu as='div' className='relative inline-block text-right'>
					<div>
						<Menu.Button className='inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
							<button className='flex items-center justify-center gap-2'>
								<Image
									src={instagramLogo}
									width={100}
									height={50}
									alt='Instagram logo'
								/>
								<AiOutlineArrowDown />{' '}
							</button>
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter='transition ease-out duration-100'
						enterFrom='transform opacity-0 scale-95'
						enterTo='transform opacity-100 scale-100'
						leave='transition ease-in duration-75'
						leaveFrom='transform opacity-100 scale-100'
						leaveTo='transform opacity-0 scale-95'
					>
						<Menu.Items className='absolute left-0 mt-2 origin-top-right rounded-md text-white bg-neutral-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
							<Menu.Item>
								{({ active }) => (
									<button
										className={clsx(
											'group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm',
											active &&
												'bg-neutral-600'
										)}
									>
										Following
										<BiUserCheck className='mr-2 h-5 w-5' />
									</button>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<button
										className={clsx(
											'group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm',
											active &&
												'bg-neutral-600'
										)}
									>
										Favorites
										<AiOutlineStar className='mr-2 h-5 w-5' />
									</button>
								)}
							</Menu.Item>
						</Menu.Items>
					</Transition>
				</Menu>
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
