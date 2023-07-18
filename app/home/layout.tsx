import Sidebar from '@/components/common/sidebar/Sidebar'

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='w-full h-full bg-black text-white '>
			<Sidebar />
			<main className='flex gap-2 md:pr-[50px] md:pl-[250px] md:pt-[30px] sm:pt-[40px] sm:pl-[100px] pt-[70px]'>
				{children}
			</main>
		</div>
	)
}
