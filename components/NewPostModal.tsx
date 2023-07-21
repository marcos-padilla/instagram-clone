'use client'

import Modal from './Modal'
import { MdOutlineAddPhotoAlternate } from 'react-icons/md'

interface NewPostModalProps {
	isOpen: boolean
	onClose: () => void
}

export default function NewPostModal({ isOpen, onClose }: NewPostModalProps) {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className='w-full h-[300px]'>
				<span className='flex justify-center text-xs py-2 border-b'>
					Create new post
				</span>
				<div className='w-full h-full flex flex-col items-center justify-center'>
					<MdOutlineAddPhotoAlternate
						size={50}
						className='rotate-[-20deg] -mt-10'
					/>
					<span className='text-xs my-2'>
						Drag and Drop photos and videos here
					</span>
					<button className='text-xs bg-blue-500 outline-none hover:bg-blue-600 transition px-4 py-2 rounded-lg'>
						Select from yout computer
					</button>
				</div>
			</div>
		</Modal>
	)
}
