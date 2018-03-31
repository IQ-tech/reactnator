import { compose, withHandlers, lifecycle, withState } from 'recompose'
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

const generateLink = (page, currentPage, total, link) => {
  if (page === 'more' && currentPage !== total)
    return { href: `${link}${currentPage + 1}` }
  else if (page === 'less' && currentPage > 1)
    return { href: `${link}${currentPage - 1}` }
  else if (page >= 1 && page <= total && page !== currentPage)
    return { href: `${link}${page}` }
  else
    return null
}

export default compose(
	withHandlers({
		handleClick: ({ currentPage, total, onChange, scrollTo }) => page => () => {
      if (page === '...') return null

			if (page === 'more' && currentPage !== total)
        onChange(currentPage + 1)
			else if (page === 'less' && currentPage > 1)
        onChange(currentPage - 1)
			else if (page >= 1 && page <= total && page !== currentPage)
        onChange(page)
      else
        return null

			scrollTo ? scrollTop(scrollTo) : null
    },
    Action: ({ type, link, currentPage, total }) => ({ style, onClick, children, page }) => type === 'link'
      ? (
        <a
          className={style}
          { ...generateLink(page, currentPage, total, link) }
        >
          {children}
        </a>
      )
      : (
        <a className={style} onClick={onClick}>
          {children}
        </a>
      )
      // TODO add react-router instead of null
  })
)
