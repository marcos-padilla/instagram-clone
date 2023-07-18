'use client'
import { usePostModal } from '@/context/PostModalProvider'
import Post from './Post'
import Modal from '@/components/Modal'
import clsx from 'clsx'
import { useEffect } from 'react'

const posts = [
	{
		image: '/images/placeholders/posts/01.jpg',
		text: 'A beautiful landscape',
	},
	{
		image: '/images/placeholders/posts/02.jpg',
		text: 'Nice day to be a programmer',
	},
	{
		image: '/images/placeholders/posts/03.jpg',
		text: 'Nothing like love to maths',
	},
]

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
export default function PostList() {
	const { setPost, post } = usePostModal()
	return (
		<>
			<Modal isOpen={!!post} onClose={() => setPost(null)}>
				<div className='w-full'>
					<ul className='flex flex-col w-full justify-center'>
						{postModalOptions.map((option, key) => (
							<li
								className={clsx(
									'flex justify-center py-3 cursor-pointer hover:bg-neutral-700 transition',
									option.className &&
										option.className,
									key <
										postModalOptions.length - 1 &&
										'border-b border-neutral-700'
								)}
								key={key}
							>
								{option.label}
							</li>
						))}
					</ul>
				</div>
			</Modal>
			<div className='flex flex-col gap-y-5 items-center pb-[5rem]'>
				{posts.map((post, index) => {
					return (
						<Post
							post={{
								images: [post.image],
								text: post.text,
								userId: '',
							}}
							key={index}
						/>
					)
				})}
			</div>
		</>
	)
}
