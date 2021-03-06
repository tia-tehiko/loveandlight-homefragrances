export const FETCH_CANDLES = 'FETCH_CANDLES'
export const FETCH_DIFFUSERS = 'FETCH_DIFFUSERS'
export const FETCH_SCENTS = 'FETCH_SCENTS'
export const DISPLAY_PRODUCT_DETAILS = 'DISPLAY_PRODUCT_DETAILS'

export function fetchCandles(candles) {
  return {
    type: FETCH_CANDLES,
    candles,
  }
}

export function fetchDiffusers(diffusers) {
  return {
    type: FETCH_DIFFUSERS,
    diffusers,
  }
}

export function fetchScents(scents) {
  return {
    type: FETCH_SCENTS,
    scents,
  }
}

export function displayProductDetails(id) {
  return {
    type: DISPLAY_PRODUCT_DETAILS,
    id,
  }
}
