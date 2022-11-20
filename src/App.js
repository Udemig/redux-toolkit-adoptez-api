import Header from './components/header'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Footer from './components/footer'
import {useEffect, useState} from 'react'
import useApi from './hooks/useApi'
import {useDispatch, useSelector} from 'react-redux'

import {setCategory} from './redux/categorySlice'
import {setAppData} from './redux/appDataSlice'

function App() {
  const api = useApi()
  const dispatch = useDispatch()
  const authState = useSelector(state => state.auth)
  const appDataState = useSelector(state => state.appData)

  // burada kategorileri apiden al.
  useEffect(() => {
    api.get('public/categories/listMainCategories')
      .then(response => {
        dispatch(setCategory(response.data.data))
      })
      .catch(err => {

      })
  }, [])

  // appData bilgisini al
  if (authState.token && !appDataState) {
    api.get('user/appData')
      .then(response => {
        dispatch(setAppData(response.data.data.user))
      })
      .catch(err => {
        console.log('>> ERR', err)
      })
  }

  return (
    <div className="container py-3">
      <Header />

      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />

          <Route path="category/:slug" element={<Login />} />

        </Routes>
      </HashRouter>

      <Footer />

    </div>
  )
}

export default App
