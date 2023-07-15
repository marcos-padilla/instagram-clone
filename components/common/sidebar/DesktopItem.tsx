import { IconType } from 'react-icons'
import clsx from 'clsx'
interface DesktopItemProps {
	label: string
	icon: IconType
	classes?: string
}

export default function DesktopItem({
	label,
	icon: Icon,
	classes,
}: DesktopItemProps) {
	return (
		<button
			className={clsx(
				'flex items-center gap-x-5 relative hover:bg-neutral-800 transition rounded-md p-2 cursor-pointer',
				classes && classes
			)}
		>
			<Icon size={30} />
			<span className='text-lg hidden md:block'>{label}</span>
		</button>
	)
}
