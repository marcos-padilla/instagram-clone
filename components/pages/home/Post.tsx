'use client'

import Modal from '@/components/Modal'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import {
	AiOutlineHeart,
	AiOutlineMessage,
	AiOutlineSend,
	AiOutlineUser,
} from 'react-icons/ai'

import { BsBookmark, BsEmojiSmile } from 'react-icons/bs'

import { HiOutlineDotsHorizontal } from 'react-icons/hi'
interface PostProps {
	image: string
	text?: string
}

const postModalOptions = [
	{
		label: 'Report',
		className: 'text-red-600',
	},
	{
		label: 'Unfollow',
		className: 'text-red-600',
	},
	{
		label: 'Add to favorites',
	},
	{
		label: 'Go to post',
	},
	{
		label: 'Share to...',
	},
	{
		label: 'Copy link',
	},
]

export default function Post({ image, text }: PostProps) {
	const [modalOpen, setIsModalOpen] = useState(false)

	return (
		<>
			<Modal isOpen={modalOpen} onClose={() => setIsModalOpen(false)}>
				<div className='flex w-full flex-col items-center'>
					{postModalOptions.map((option, index) => (
						<span
							className={clsx(
								'font-bold my-2 text-xl border-b border-neutral-700 w-full text-center pb-4',
								option.className && option.className
							)}
						>
							{option.label}
						</span>
					))}
				</div>
			</Modal>
			<div className='flex flex-col gap-y-2 w-[80%]'>
				<div className='flex items-center justify-between w-full'>
					<div className='flex items-center gap-x-2'>
						<Image
							src={'/images/avatar_placeholder.png'}
							width={20}
							height={20}
							alt={'User avatar'}
							className='rounded-full'
						/>
						<div className='flex flex-col items-start justify-start'>
							<span className='text-sm text-white font-bold'>
								jhondoe{' '}
								<span className='text-neutral-600'>
									• 1h
								</span>
							</span>
							<span className='text-[10px]'>
								Some extra data
							</span>
						</div>
					</div>
					<HiOutlineDotsHorizontal
						className='cursor-pointer hover:text-gray-600'
						onClick={() => setIsModalOpen(true)}
					/>
				</div>
				<div className='border border-neutral-600 rounded-sm relative w-full h-[350px] overflow-hidden'>
					<Image
						src={image}
						fill
						objectFit='cover'
						alt='Post image'
						className='hover:scale-105 transition-all cursor-pointer'
					/>
					<button className='absolute bottom-5 left-5 p-2 bg-black rounded-full hover:scale-110 transition-all'>
						<AiOutlineUser />
					</button>
				</div>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-x-5'>
						<AiOutlineHeart
							size={30}
							className='hover:text-neutral-600 transition-all cursor-pointer'
						/>
						<AiOutlineMessage
							size={30}
							className='hover:text-neutral-600 transition-all cursor-pointer'
						/>
						<AiOutlineSend
							size={30}
							className='hover:text-neutral-600 transition-all cursor-pointer'
						/>
					</div>
					<BsBookmark
						size={30}
						className='hover:text-neutral-600 transition-all cursor-pointer'
					/>
				</div>
				<span className='flex items-center justify-start font-bold text-sm'>
					548 likes
				</span>
				<span className='text-sm'>{text}</span>
				<span className='text-xs text-neutral-500 hover:text-neutral-400 cursor-pointer mb-5'>
					View all 20 comments
				</span>
				<div className='border-b border-neutral-700 flex items-center justify-between'>
					<input
						type='text'
						className='bg-transparent focus:outline-none w-full'
						placeholder='Add a comment'
					/>
					<BsEmojiSmile className='text-neutral-400 hover:text-neutral-200 transition-all' />
				</div>
			</div>
		</>
	)
}
