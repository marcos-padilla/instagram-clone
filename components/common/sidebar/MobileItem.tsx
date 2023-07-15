import { IconType } from 'react-icons'
import clsx from 'clsx'
interface MobileItemProps {
	label: string
	icon: IconType
}

export default function MobileItem({ label, icon: Icon }: MobileItemProps) {
	return (
		<button
			className={clsx(
				'flex items-center gap-x-5 relative transition rounded-md p-2 cursor-pointer hover:scale-110'
			)}
		>
			<Icon size={30} />
			<span className='text-lg hidden lg:block'>{label}</span>
		</button>
	)
}
