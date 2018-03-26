import { compose, withHandlers } from 'recompose'
import scrollToTarget from 'scroll-to-target'

const isClient = () => !!(
  typeof window !== 'undefined' && window.document && window.document.createElement
)

const scrollTop = ({ selector, speed, offset }) => {
  isClient()
    ? scrollToTarget(
      selector,
      speed,
      offset
    ) : null
}

export default compose(
	withHandlers({
		handleClick: () => (page, currentPage, totalPages, onChange, scrollTo) => () => {
      if (page === '...') return null

			scrollTo ? scrollTop(scrollTo) : null

			if (page === 'more' && currentPage !== totalPages)
        onChange(currentPage + 1)
			else if (page === 'less' && currentPage > 1)
        onChange(currentPage - 1)
			else if (page >= 1 && page <= totalPages)
        onChange(page)
		}
	})
)
