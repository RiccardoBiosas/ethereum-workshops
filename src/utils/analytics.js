import ReactGA from 'react-ga'
import { pickBy, identity } from 'lodash'

class GAAnalytics {
  static setUserId(userId) {
    ReactGA.set({
      userId,
    })
  }

  static unsetUserId() {
    ReactGA.set('userId', null)
  }

  static sendGAEvent(category, action, value, label) {
    const eventPayload = {
      category,
      action,
      value,
      label
    }
    const cleanedEventPayload = pickBy(eventPayload, identity)
    console.log('event payload: ', cleanedEventPayload)
    ReactGA.event(cleanedEventPayload)
  }

  static pageView(currentPage) {
    ReactGA.pageview(currentPage)
  }
}

export default GAAnalytics
