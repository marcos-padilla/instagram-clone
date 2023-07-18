import PostList from '@/components/pages/home/PostList'
import Stories from '@/components/pages/home/Stories'
import SuggestedAccounts from '@/components/pages/home/SuggestedAccounts'

export default function HomePage() {
	return (
		<>
			<main className=''>
				<Stories />
				<PostList />
			</main>
			<aside className='hidden lg:flex shrink-0 mt-10'>
				<SuggestedAccounts />
			</aside>
		</>
	)
}
