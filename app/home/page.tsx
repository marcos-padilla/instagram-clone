import PostList from '@/components/pages/home/PostList'
import Stories from '@/components/pages/home/Stories'

export default function HomePage() {
	return (
		<>
			<main className=''>
				<Stories />
				<PostList />
			</main>
			<aside className='bg-green-500 hidden lg:flex shrink-0'>
				Suggestedasd asdsdadasdasd asdasd
			</aside>
		</>
	)
}
