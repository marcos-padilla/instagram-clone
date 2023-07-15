import Post from './Post'

const posts = [
	{
		image: '/images/placeholders/posts/01.jpg',
		text: 'A beautiful landscape',
	},
	{
		image: '/images/placeholders/posts/02.jpg',
		text: 'Nice day to be a programmer',
	},
	{
		image: '/images/placeholders/posts/03.jpg',
		text: 'Nothing like love to maths',
	},
]

export default function PostList() {
	return (
		<div className='flex flex-col gap-y-5 items-center pb-[5rem]'>
			{posts.map((post, index) => {
				return (
					<Post
						image={post.image}
						text={post.text}
						key={index}
					/>
				)
			})}
		</div>
	)
}
