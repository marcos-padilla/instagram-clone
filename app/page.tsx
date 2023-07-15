'use client'

import { useState } from 'react'
import Input from '@/components/form/Input'
import HomePhones from '@/components/pages/auth/HomePhones'
import { FcGoogle } from 'react-icons/fc'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import instagramLogo from '@/public/images/Instagram_logo.png'
type Variant = 'LOGIN' | 'REGISTER'

export default function AuthPage() {
	const [name, setName] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const [variant, setVariant] = useState<Variant>('LOGIN')
	const router = useRouter()

	const toggleVariant = () => {
		setVariant((prev) => (prev === 'LOGIN' ? 'REGISTER' : 'LOGIN'))
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		router.push('/home')
	}

	return (
		<main className='h-full bg-white flex items-center justify-center'>
			<HomePhones />
			<div className='flex flex-col gap-y-10'>
				<form
					onSubmit={handleSubmit}
					className='border-gray-400 border-2 flex flex-col gap-y-4 p-10 items-center justify-center w-[500px]'
				>
					<Image src={instagramLogo} alt='Instagram Logo' />
					{variant === 'REGISTER' && (
						<h2 className='text-gray-500 font-semibold text-2xl'>
							Sign up to see photos and videos from your
							friends.
						</h2>
					)}
					<div className='flex flex-col gap-y-2 w-full'>
						{variant === 'REGISTER' && (
							<Input
								value={name}
								onChange={(e) =>
									setName(e.target.value)
								}
								placeholder='Full Name'
								name='name'
							/>
						)}
						<Input
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder='Username'
							name='username'
						/>
						<Input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder='Password'
							name='password'
							type='password'
						/>
					</div>
					{variant === 'REGISTER' && (
						<div className='flex flex-col gap-5'>
							<span>
								People who use our service may have
								uploaded your contact information to
								Instagram. Learn More
							</span>
							<span>
								By signing up, you agree to our Terms ,
								Privacy Policy and Cookies Policy .
							</span>
						</div>
					)}
					<button
						type='submit'
						className='bg-blue-400 w-full py-2 text-white font-bold cursor-pointer hover:bg-blue-500 rounded-lg text-lg transition'
					>
						{variant === 'LOGIN' ? 'Sign in' : 'Sign up'}
					</button>
					<span className='text-center mt-5'>OR</span>
					<div className='my-5'>
						<button className='flex items-center gap-2'>
							<FcGoogle size={30} />{' '}
							<span className='text-blue-950 font-semibold'>
								Continue with Google
							</span>
						</button>
					</div>
					{variant === 'LOGIN' && (
						<button className='text-sm hover:text-blue-500 hover:font-bold hover:underline'>
							Forgot your password?
						</button>
					)}
				</form>
				<div className='border-gray-400 border-2 flex gap-x-4 p-10 items-center justify-center w-[500px]'>
					<span>Don't have an account?</span>
					<button
						className='text-blue-500 font-bold'
						onClick={toggleVariant}
					>
						{variant === 'LOGIN' ? 'Sign up' : 'Sign in'}
					</button>
				</div>
			</div>
		</main>
	)
}
