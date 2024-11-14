//import img from '/img/600x400.png'
//import Button from './Button/Button'

export default function Card({ post }) {
	const tagColors = {
		html: '#28a745',
		css: '#e83e8c',
		js: '#ffc107',
		php: '#61dafb'
	}
	const getColor = (tag) => tagColors.tag.toLowerCase() || '#000000'
	return (
		<>
			{post.published && (
				<div className='card border-1 border-light-subtle shadow'>
					<img src={post.image} alt='card-img' className='card-img rounded-top rounded-0' />
					<div className='card-body'>
						<h5 className='card-title'>{post.title}</h5>
						<p className='card-text'>{post.content}</p>
						<p className='card-text'>
							{post.tags.map((tag, index) => (
								<span key={index} style={{ color: getColor(tag) }}>
									{tag}{' '}
								</span>
							))}
						</p>
					</div>
				</div>
			)}
		</>
	)
}
