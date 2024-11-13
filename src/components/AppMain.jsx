import posts from '../data/posts'
import Card from './Card'

export default function AppMain() {
	return (
		<main className='bg-light py-4 '>
			<div className='container'>
				<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center'>
					{posts.map((post) => (
						<div className='col' key={post.id}>
							<Card post={post} />
						</div>
					))}
				</div>
			</div>
		</main>
	)
}
