import './More.css'

function More(props) {
	return (
		<button className='more' onClick={props.handleMoreMovies}>
			Еще
		</button>
	)
}

export default More;