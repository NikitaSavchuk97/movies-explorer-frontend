import './NavTab.css';

function NavTab() {
	return (
		<section className='nav-tab'>
			<a className='nav-tab__link' href='#about-project'>
				О проекте
			</a>

			<a className='nav-tab__link' href='#about-technologies'>
				О технологиях
			</a>

			<a className='nav-tab__link' href='#about-me'>
				О студенте
			</a>
		</section>
	)
}

export default NavTab;