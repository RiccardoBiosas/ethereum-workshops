import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import GAAnalytics from './utils/analytics'

const PageTracking = () => {
  const location = useLocation()

  useEffect(() => {
    GAAnalytics.pageView(location.pathname)
  }, [location.pathname])

  return <></>
}

export default PageTracking
