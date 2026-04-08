// Simple state store for navbar UI interactions
let uiState = {
  mobileMenuLink: null as string | null,
  mobileClose: false
}

export const uiSlice = {
  setMobileMenuLink: (id: string | null) => {
    uiState.mobileMenuLink = id
  },
  setMobileClose: (isClose: boolean) => {
    uiState.mobileClose = isClose
  },
  getState: () => uiState
}
