//import img from '/img/600x400.png'
//import Button from './Button/Button'

export default function Card({ post }) {
	return (
		<>
			{post.published && (
				<div className='card border-1 border-light-subtle shadow'>
					<img src={post.image} alt='card-img' className='card-img rounded-top rounded-0' />
					<div className='card-body'>
						<h5 className='card-title'>{post.title}</h5>
						<p className='card-text'>{post.content}</p>
						<p className='card-text'>{post.tags.join(', ')}</p>
					</div>
				</div>
			)}
		</>
	)
}
