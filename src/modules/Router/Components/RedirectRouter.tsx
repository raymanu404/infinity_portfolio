import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { PATH_ROUTES } from '@/modules/Router/constants'
import React from 'react'

interface PropsI {
  children: JSX.Element
}

const RedirectRouter = (props: PropsI) => {
  const { children } = props
  const { pathname } = useLocation()
  const navigate = useNavigate()

  //TODO: revise this if we need this
  useEffect(() => {
    const prefixPaths = ['', '/', PATH_ROUTES.PROJECTS]
    const restPaths = Object.values(PATH_ROUTES)
      .filter((x) => x !== PATH_ROUTES.PROJECTS)
      .map((x) => x.toLocaleLowerCase())
    const userPaths = pathname.split('/')

    if (!prefixPaths.includes(userPaths[1])) {
      navigate(`/${PATH_ROUTES.NOT_FOUND}`)
    }

    for (let i = 2; i < userPaths.length; i++) {
      if (userPaths[i] && !restPaths.includes(userPaths[i])) {
        navigate(`/${PATH_ROUTES.NOT_FOUND}`)
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return <>{children}</>
}

export { RedirectRouter }
