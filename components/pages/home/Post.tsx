'use client'

import Modal from '@/components/Modal'
import { usePostModal } from '@/context/PostModalProvider'
import { Post } from '@/types/types'
import Image from 'next/image'
import {
	AiOutlineHeart,
	AiOutlineMessage,
	AiOutlineSend,
	AiOutlineUser,
	AiOutlineLeft,
	AiOutlineRight,
} from 'react-icons/ai'

import { BsBookmark, BsEmojiSmile } from 'react-icons/bs'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import styles from '@/styles/components/post.module.scss'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function Post({ post }: { post: Post }) {
	if (!post) return null

	const { setPost } = usePostModal()
	const [imageIndex, setImageIndex] = useState(0)

	const nextImage = () =>
		setImageIndex((prev) =>
			prev < post?.images.length - 1 ? prev + 1 : 0
		)
	const prevImage = () =>
		setImageIndex((prev) =>
			prev > 0 ? prev - 1 : post?.images.length - 1
		)

	return (
		<>
			<div className='flex flex-col gap-y-2 md:w-[80%] w-full px-4'>
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
						onClick={() => {
							console.log('Clicked')
							setPost(post)
						}}
					/>
				</div>
				<div className='border border-neutral-600 rounded-sm relative w-full h-[350px] overflow-hidden'>
					{post?.images.length > 1 ? (
						<div className={styles.slider}>
							<div className='w-full h-full'>
								{post.images.map((img, index) => (
									<div
										className={clsx(
											'relative h-full w-full',
											index === imageIndex
												? 'block'
												: 'hidden'
										)}
									>
										<Image
											src={img}
											alt='Image'
											fill
											objectFit='cover'
										/>
									</div>
								))}
							</div>
							<button
								className={clsx(
									styles.control_button,
									styles.prev
								)}
								onClick={prevImage}
							>
								<AiOutlineLeft size={20} />
							</button>
							<button
								className={clsx(
									styles.control_button,
									styles.next
								)}
								onClick={nextImage}
							>
								<AiOutlineRight size={20} />
							</button>
							<div className={styles.controls}>
								{post.images.map((_, index) => {
									return (
										<button
											className={clsx(
												index ===
													imageIndex &&
													styles.active
											)}
											key={index}
											onClick={() =>
												setImageIndex(index)
											}
										/>
									)
								})}
							</div>
						</div>
					) : (
						<Image
							src={post?.images[0]}
							fill
							objectFit='cover'
							alt='Post image'
						/>
					)}
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
				<span className='text-sm'>{post?.text}</span>
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
