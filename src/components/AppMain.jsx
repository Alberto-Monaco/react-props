import posts from '../data/posts'
import Card from './Card'

export default function AppMain() {
	return (
		<main className='bg-light py-2 '>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-6'>
						{posts.map((post) => (
							<Card key={post.id} post={post} />
						))}
					</div>
				</div>
			</div>
		</main>
	)
}
