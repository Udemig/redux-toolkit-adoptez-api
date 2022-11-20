import {useSelector} from 'react-redux'

function Footer() {
  const categories = useSelector(state => state.category)

  let categoriesJsx = []

  if (categories) {
    categories.map((item, index) => {
      if (index >= 5) {
        return
      }

      categoriesJsx.push(
        <li className="mb-1" key={index}>
          <a className="link-secondary text-decoration-none" href={`#/category/${item.slug}`}>
            {item.name}
          </a>
        </li>,
      )
    })

  } else {
    categoriesJsx = (
      <li className="mb-1" key="1">
        <strong>
          Loading...
        </strong>
      </li>
    )
  }

  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Random feature</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team feature</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another one</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Last time</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>
            Kategoriler
          </h5>
          <ul className="list-unstyled text-small">
            {categoriesJsx}
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
            <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>

  )
}

export default Footer
