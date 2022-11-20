import {useState} from 'react'
import useApi from '../../hooks/useApi'
import {useDispatch} from 'react-redux'
import {setToken} from '../../redux/authSlice'

function Login() {
  const api = useApi()

  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const formOnSubmit = (event) => {
    event.preventDefault()

    const postData = {email, password}
    console.log('>> POST DATA', postData)

    api.post('auth/login', postData)
      .then(response => {
        dispatch(setToken(response.data.data.token))
        document.location.hash = '#/'
      })
      .catch(err => {
        alert('Bir hata oluştu, lütfen tekrar deneyin.')
      })
  }

  return (
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-12 ">

        <h3>
          Lütfen buradan login olun.
        </h3>
        <br />
        <br />

        <form noValidate onSubmit={formOnSubmit}>
          <div className="row g-3">
            <div className="col-sm-12">
              <label className="form-label">E-posta</label>

              <input type="email" className="form-control" placeholder="E-posta"
                     defaultValue="" onChange={event => setEmail(event.target.value)} />

            </div>
            <div className="col-sm-12">
              <label className="form-label">Şifre</label>

              <input type="password" className="form-control" placeholder="Şifre"
                     defaultValue="" onChange={event => setPassword(event.target.value)} />

            </div>

            <div className="col-sm-12">

              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit">
                  Giriş Yap
                </button>
              </div>

            </div>
          </div>
        </form>
        <br />
        <br />
      </div>
    </div>
  )
}


export default Login
