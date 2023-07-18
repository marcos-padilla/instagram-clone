import Image from 'next/image'
import Modal from './Modal'
import instagramLogo from '@/public/images/Instagram_logo_white.png'
import { FcGoogle } from 'react-icons/fc'

interface SignInModalProps {
	isOpen: boolean
	onClose: () => void
}

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
	return (
		<Modal isOpen={isOpen} onClose={onClose} addClose>
			<div className='flex items-center p-10 justify-center flex-col bg-neutral-800'>
				<Image
					src={instagramLogo}
					alt='Instagram Logo'
					width={200}
					height={50}
				/>
				<form className='flex my-5 flex-col items-center gap-y-2 justify-center'>
					<input
						type='text'
						placeholder='Username'
						className='text-xl px-4 py-2 bg-neutral-900 focus:outline-none border border-neutral-700'
					/>
					<input
						type='password'
						placeholder='Password'
						className='text-xl px-4 py-2 bg-neutral-900 focus:outline-none border border-neutral-700'
					/>
					<button className='bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg mt-10 mb-5 w-full'>
						Sign In
					</button>
				</form>
				<span>OR</span>
				<button className='my-5 border border-neutral-700 hover:bg-neutral-600 transition px-2 py-4 rounded-md flex items-center gap-x-2'>
					<FcGoogle size={30} />
					Continue with Google
				</button>
			</div>
		</Modal>
	)
}
