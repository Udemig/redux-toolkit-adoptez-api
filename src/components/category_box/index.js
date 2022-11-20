function CategoryBox(props) {

  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-white bg-primary border-primary">
          <h4 className="my-0 fw-normal">
            {props.name}
          </h4>
        </div>
        <div className="card-body">

          <img src={props.image} style={{width: '100%', margin: '10px'}} />

          <a href={`#/category/${props.slug}`} className="w-100 btn btn-lg btn-primary">
            Details
          </a>
        </div>
      </div>
    </div>
  )
}


export default CategoryBox


