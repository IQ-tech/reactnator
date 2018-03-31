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
  activePageStyle,
  Action
}) => (
	<div className="reactnator">
		<ul className="reactnator__content">
      <li className="reactnator__page-number">
        <Action
          style={arrowStyle('left', pageNumberStyle)}
          onClick={handleClick('less')}
          page='less'
        />
      </li>
			{pagination({ total, activePage: currentPage }).map((page, index) => (
				<li
					key={index}
          className={isActive(currentPage === page, page, pageNumberStyle, activePageStyle)}
        >
          <Action
            onClick={handleClick(page)}
            page={page}
          >{page}</Action>
        </li>
			))}
      <li className="reactnator__page-number">
        <Action
          onClick={handleClick('more')}
          style={arrowStyle('right', pageNumberStyle)}
          page='more'
        />
      </li>
		</ul>
	</div>
)

Reactnator.defaultProps = {
  total: 1,
  currentPage: 1,
  onChange: e => console.log(e),
  scrollTo: false,
  type: 'button',
  link: '#',
  pageNumberStyle: 'reactnator__page-number',
  activePageStyle: 'reactnator__page-number--active'
}

export default reactnatorContainer(Reactnator)
