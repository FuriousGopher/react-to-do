import './Loader.css'

const Loader = ({ size }: { size: string }) => {
  let loaderClass = 'loading'

  if (size === 'medium') {
    loaderClass += 'medium-loader'
  } else if (size === 'small') {
    loaderClass += 'small-loader'
  }

  return (
    <div className={loaderClass}>
      <span></span>
    </div>
  )
}

export default Loader
