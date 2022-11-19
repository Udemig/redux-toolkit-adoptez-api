import {useSelector} from 'react-redux'


function Header() {
  const auth = useSelector(state => state.auth)

  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
          <span className="fs-4">
            Hizmet Bul
          </span>
        </a>


        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">

          <a className="me-3 py-2 text-dark text-decoration-none" href="#/">
            Token: {auth.token}
          </a>
          <a className="me-3 py-2 text-dark text-decoration-none" href="#/">Anasayfa</a>
          <a className="me-3 py-2 text-dark text-decoration-none" href="#/categories">Kategoriler</a>
          <a className="me-3 py-2 text-dark text-decoration-none" href="#/login">Giriş Yap</a>
          <a className="py-2 text-dark text-decoration-none" href="#/register">Kayıt Ol</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
