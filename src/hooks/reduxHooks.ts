import { uiSlice } from './uiSlice'

export const useAppDispatch = () => ({
  dispatch: (action: any) => {
    if (action.type === 'setMobileMenuLink') {
      uiSlice.setMobileMenuLink(action.payload)
    } else if (action.type === 'setMobileClose') {
      uiSlice.setMobileClose(action.payload)
    }
  }
})

export const setMobileMenuLink = (id: string | null) => ({
  type: 'setMobileMenuLink',
  payload: id
})

export const setMobileClose = (isClose: boolean) => ({
  type: 'setMobileClose',
  payload: isClose
})

export const useAppSelector = (selector: (state: any) => any) => {
  return selector(uiSlice.getState())
}
