'use client'

import SignInModal from '@/components/SignInModal'
import Image from 'next/image'
import { useState } from 'react'

export default function SuggestedAccounts() {
	const [signInOpen, setSignInOpen] = useState(false)
	return (
		<>
			<SignInModal
				isOpen={signInOpen}
				onClose={() => setSignInOpen(false)}
			/>

			<div className='flex flex-col gap-y-4 w-[200px]'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-x-2 cursor-pointer'>
						<Image
							src={'/images/avatar_placeholder.png'}
							alt='User Avatar'
							width={50}
							height={50}
							className='rounded-full'
						/>
						<div className='flex flex-col'>
							<span className='text-sm'>jhondoe</span>
							<span className='text-[.7rem] text-neutral-300'>
								Jhon Doe
							</span>
						</div>
					</div>
					<button
						onClick={() => setSignInOpen(true)}
						className='text-xs text-blue-500 cursor-pointer'
					>
						Switch
					</button>
				</div>
				<div className='my-2 flex justify-between items-center'>
					<span className='text-neutral-400 text-xs'>
						Suggested for you
					</span>
					<span className='text-white font-bold text-xs'>
						See All
					</span>
				</div>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-x-2 cursor-pointer'>
						<Image
							src={'/images/avatar_placeholder.png'}
							alt='User Avatar'
							width={30}
							height={30}
							className='rounded-full'
						/>
						<div className='flex flex-col'>
							<span className='text-sm'>jhondoe</span>
							<span className='text-[.7rem] text-neutral-300'>
								Suggested for you
							</span>
						</div>
					</div>
					<span className='text-xs text-blue-500 cursor-pointer'>
						Follow
					</span>
				</div>
			</div>
		</>
	)
}
