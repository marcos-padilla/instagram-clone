'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'

const images = [
	'/images/auth/screenshot1.png',
	'/images/auth/screenshot2.png',
	'/images/auth/screenshot3.png',
]

export default function HomePhones() {
	const [imageIndex, setImageIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setImageIndex((prev) =>
				prev < images.length - 1 ? prev + 1 : 0
			)
		}, 4000)

		return () => clearInterval(interval)
	}, [])
	return (
		<div className='relative hidden lg:block'>
			<Image
				src={'/images/auth/home-phones.png'}
				alt='Phones'
				width={468.32}
				height={634.15}
			/>

			{images.map((image, index) => (
				<Image
					key={image}
					src={image}
					alt='Screenshot 1'
					width={255}
					height={0}
					className={clsx(
						'absolute top-[20px] left-[155px] opacity-0 transition-all duration-1000',
						index === imageIndex && 'opacity-100'
					)}
				/>
			))}
		</div>
	)
}
