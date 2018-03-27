import classNames from 'classnames'
import reactnatorContainer from '../../containers/Reactnator'
import pagination from '../../helpers/dotPaginator'
import './Reactnator.styl'

const isActive = (status = false, page, pageNumberStyle, activePageStyle) => classNames({
	[pageNumberStyle]: page !== '...',
	'reactnator__dots': page === '...',
	[activePageStyle]: status
})

const arrowStyle = (direction, pageNumberStyle) => classNames(
	pageNumberStyle,
  'reactnator__arrow',
  `reactnator__arrow--${direction}`
)

const Reactnator = ({
  total,
  currentPage,
  handleClick,
  onChange,
  scrollTo,
  pageNumberStyle,
  activePageStyle
}) => (
	<div className="reactnator">
		<div className="reactnator__content">
			<li
				className={arrowStyle('left', pageNumberStyle)}
				onClick={handleClick('less')}
      />
			{pagination({ total, activePage: currentPage }).map((page, index) => (
				<li
					className={isActive(currentPage === page, page, pageNumberStyle, activePageStyle)}
					key={index}
					onClick={handleClick(page)}
				>{page}</li>
			))}
			<li
				className={arrowStyle('right', pageNumberStyle)}
				onClick={handleClick('more')}
      />
		</div>
	</div>
)

Reactnator.defaultProps = {
  total: 1,
  currentPage: 1,
  onChange: e => console.log(e),
  scrollTo: false,
  pageNumberStyle: 'reactnator__page-number',
  activePageStyle: 'reactnator__page-number--active'
}

export default reactnatorContainer(Reactnator)
