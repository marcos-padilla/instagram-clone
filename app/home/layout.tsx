import Sidebar from '@/components/common/sidebar/Sidebar'

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='w-full h-full bg-black text-white '>
			<Sidebar />
			<main className='md:pr-[50px] md:pl-[250px] md:pt-[30px] sm:pt-[10px] sm:pl-[70px] px-[5px] pt-[70px]'>
				{children}
			</main>
		</div>
	)
}
