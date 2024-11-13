import img from '/img/600x400.png'
import Button from './Button/Button'

export default function Card() {
	return (
		<div className='card border-1 border-light-subtle shadow'>
			<img src={img} alt='card-img' className='card-img rounded-top rounded-0' />
			<div className='card-body'>
				<h5 className='card-title'>Titolo del post</h5>
				<p className='card-text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates possimus quas esse ab adipisci
					nostrum similique commodi pariatur nihil, ad id accusamus, omnis dignissimos!
				</p>
				<Button />
			</div>
		</div>
	)
}
