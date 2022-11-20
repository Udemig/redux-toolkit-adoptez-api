import {useDispatch, useSelector} from 'react-redux'
import {removeToken} from '../../redux/authSlice'
import {removeAppData} from '../../redux/appDataSlice'

function Header() {
  const authState = useSelector(state => state.auth)
  const appDataState = useSelector(state => state.appData)

  const dispatch = useDispatch()


  console.log('>> HEADER APP DATA STATE', appDataState)

  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
          <span className="fs-4">
            Hizmet Bul
          </span>
        </a>


        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">

          {/*
          <a className="me-3 py-2 text-dark text-decoration-none" href="#/">
            Token: {authState.token}
          </a>
          */}

          <a className="me-3 py-2 text-dark text-decoration-none" href="#/">Anasayfa</a>
          <a className="me-3 py-2 text-dark text-decoration-none" href="#/categories">Kategoriler</a>

          {
            appDataState
              ? (
                <>
                  <a href="#/user/dashboard" className="btn btn-primary">
                    {appDataState.fullname}
                  </a>
                  &nbsp;
                  <button onClick={event => {
                    dispatch(removeToken())
                    dispatch(removeAppData())
                  }} className="btn btn-primary">
                    Çıkış Yap
                  </button>
                </>
              )
              : (
                <>
                  <a className="me-3 py-2 text-dark text-decoration-none" href="#/login">Giriş Yap</a>
                  <a className="py-2 text-dark text-decoration-none" href="#/register">Kayıt Ol</a>
                </>
              )
          }


        </nav>
      </div>
    </header>
  )
}

export default Header
