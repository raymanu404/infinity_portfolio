import { lazy, Suspense } from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from '../Layout/index'
import { PATH_ROUTES } from './constants'
import { RedirectRouter } from './Components/RedirectRouter'
import React from 'react'
import NotFoundPage from '../NotFound/NotFoundPage'
import { convertToPathURI } from '../Shared/Utils/utilsFct'
import { Spinner } from '../Shared'

const Home = lazy(() => import('../Home/Home'))
const Monsters = lazy(() => import('../Projects/index').then((module) => ({ default: module.Monsters })))
const Projects = lazy(() => import('../Projects/index').then((module) => ({ default: module.ProjectsContainer })))
const TicTacToe = lazy(() => import('../Projects/index').then((module) => ({ default: module.TicTacToe })))
const Sandbox = lazy(() => import('../Projects/index').then((module) => ({ default: module.Sandbox })))
const SpecialTodo = lazy(() => import('../Projects/index').then((module) => ({ default: module.SpecialTodo })))
const OnlineShopping = lazy(() => import('../Projects/index').then((module) => ({ default: module.OnlineShopping })))

const CustomRouter = () => {
  return (
    <BrowserRouter>
      <RedirectRouter>
        <Layout>
          <Suspense fallback={<Spinner size="3rem" />}>
            <Routes>
              <Route index element={<Home />} />
              <Route element={<NotFoundPage />} path={convertToPathURI(PATH_ROUTES.NOT_FOUND)} />
              <Route path="*" element={<Navigate to={'not-found'} replace />} />
              <Route path={convertToPathURI(PATH_ROUTES.PROJECTS)} element={<Projects />} />
              <Route path={convertToPathURI([PATH_ROUTES.PROJECTS, PATH_ROUTES.MONSTERS])} element={<Monsters />} />
              <Route
                path={convertToPathURI([PATH_ROUTES.PROJECTS, PATH_ROUTES.SPECIAL_TODO])}
                element={<SpecialTodo />}
              />
              <Route
                path={convertToPathURI([PATH_ROUTES.PROJECTS, PATH_ROUTES.ONLINE_SHOPPING])}
                element={<OnlineShopping />}
              />
              <Route path={convertToPathURI([PATH_ROUTES.PROJECTS, PATH_ROUTES.SANDBOX])} element={<Sandbox />} />

              {/* In this block, we should wrap all components into our game context, and use State only in game scope*/}
              <Route path={convertToPathURI([PATH_ROUTES.PROJECTS, PATH_ROUTES.TIC_TAC_TOE])} element={<TicTacToe />} />
            </Routes>
          </Suspense>
        </Layout>
      </RedirectRouter>
    </BrowserRouter>
  )
}

export { CustomRouter }
