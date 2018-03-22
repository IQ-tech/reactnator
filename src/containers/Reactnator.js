import { compose, withHandlers } from 'recompose'
import smoothscroll from 'smoothscroll-polyfill'

const isClient = () => !!(
  typeof window !== 'undefined' && window.document && window.document.createElement
)

const scrollTop = (position = 0) => {
	window.scroll({
		top: position,
		behavior: 'smooth'
	})
}

isClient ? smoothscroll.polyfill() : null

export default compose(
	withHandlers({
		handleClick: () => (page, currentPage, totalPages, onChange, position) => () => {
      if (page === '...') return null

			position ? scrollTop(position) : null

			if (page === 'more' && currentPage !== totalPages)
        onChange(currentPage + 1)
			else if (page === 'less' && currentPage > 1)
        onChange(currentPage + 1)
			else if (page >= 1 && page <= totalPages)
        onChange(page)
		}
	})
)
