import Image from 'next/image'
import styles from '@/styles/components/story.module.scss'
import clsx from 'clsx'

const Story = ({ avatar, name }: { avatar?: string; name: string }) => {
	return (
		<button className='flex flex-col items-center cursor-pointer shrink-0 pb-2'>
			<div className={clsx('relative w-50 h-50', styles.container)}>
				<Image
					src={avatar || '/images/avatar_placeholder.png'}
					width={50}
					height={50}
					className='rounded-full'
					alt='Avatar'
				/>
			</div>
			<span className='text-xs'>{name}</span>
		</button>
	)
}

export default function Stories() {
	return (
		<div className='flex gap-x-4 overflow-x-scroll'>
			<Story name='Jhon Doe' />
			<Story name='Jhon Doe' />
			<Story name='Jhon Doe' />
			<Story name='Jhon Doe' />
			<Story name='Jhon Doe' />
			<Story name='Jhon Doe' />
			<Story name='Jhon Doe' />
			<Story name='Jhon Doe' />
			<Story name='Jhon Doe' />
			<Story name='Jhon Doe' />
			<Story name='Jhon Doe' />
			<Story name='Jhon Doe' />
		</div>
	)
}
