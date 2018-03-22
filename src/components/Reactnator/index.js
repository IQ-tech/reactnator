import classNames from 'classnames'
import reactnatorContainer from '../../containers/Reactnator'
import pagination from '../../helpers/dotPaginator'
import './Reactnator.styl'

const isActive = (status = false, page) => classNames({
	'reactnator__page-number': page !== '...',
	'reactnator__dots': page === '...',
	'reactnator__page-number--active': status
})

const arrowStyle = direction => classNames(
	'reactnator__page-number',
  'reactnator__arrow',
  `reactnator__arrow--${direction}`
)

const Reactnator = ({
  total,
  currentPage,
  handleClick,
  onChange,
  position
}) => (
	<div className="reactnator">
		<div className="reactnator__content">
			<li
				className={arrowStyle('left')}
				onClick={handleClick('less', currentPage, total, onChange, position)}
			>
			</li>
			{pagination({ total, activePage: currentPage }).map((page, index) => (
				<li
					className={isActive(currentPage === page, page)}
					key={index}
					onClick={handleClick(page, currentPage, total, onChange, position)}
				>{page}</li>
			))}
			<li
				className={arrowStyle('right')}
				onClick={handleClick('more', currentPage, total, onChange, position)}
			>
			</li>
		</div>
	</div>
)

Reactnator.defaultProps = {
  total: 1,
  currentPage: 1,
  onChange: e => console.log(e),
  position: false
}

export default reactnatorContainer(Reactnator)
