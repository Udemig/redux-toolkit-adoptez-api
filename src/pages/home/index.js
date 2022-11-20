import {useSelector} from 'react-redux'
import CategoryBox from '../../components/category_box'

function Home() {
  const categories = useSelector(state => state.category)

  let categoriesJsx = []

  if (categories) {
    categories.map((item, index) => {
      categoriesJsx.push(
        <CategoryBox key={index} id={item.id} name={item.name} image={item.image} slug={item.slug} />,
      )
    })

  } else {
    categoriesJsx = (
      <strong key="1">
        Loading...
      </strong>
    )
  }


  return (
    <main>
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Categories</h1>
      </div>

      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {categoriesJsx}
      </div>

    </main>
  )
}

export default Home

