export function Home() {
	return (
		<>
			<div className='home'>
				<div className='home-area'>
					<div className='home-area left'>
						<nav className='home-nav'>
							<div className='home-logo'>
								<div>SURF</div>
								<div>-</div>
								<div>GO</div>
							</div>
							<ul className='home-menu'>
								<li className='home-menu-item surf'>
									<a href='#'>
										<div className='item-icon'></div>
										<div className='item-text'>Surf</div>
									</a>
								</li>
								<li className='home-menu-item travel'>
									<a href='#'>
										<div className='item-icon'></div>
										<div className='item-text'>Travel</div>
									</a>
								</li>
								<li className='home-menu-item sleep'>
									<a href='#'>
										<div className='item-icon'></div>
										<div className='item-text'>Sleep</div>
									</a>
								</li>
								<li className='home-menu-item shop'>
									<a href='#'>
										<div className='item-icon'></div>
										<div className='item-text'>Shop</div>
									</a>
								</li>
							</ul>
							<div className='search'>
								<div className='search-icon'></div>
							</div>
							<div className='date'>
								<div className='date-day'>20</div>
								<div className='date-mounth'>06</div>
								<div className='date-year'>2018</div>
							</div>
							<div className='location'>
								<div className='location-icon'></div>
								<div className='location-place'></div>
							</div>
						</nav>
					</div>
					<div className='home-area right'></div>
				</div>
			</div>
		</>
	)
}
