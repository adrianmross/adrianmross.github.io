const encode =
  typeof Buffer === 'undefined'
    ? (value: string) => btoa(value)
    : (value: string) => Buffer.from(value).toString('base64')

export function svgToBase64DataUri(svg: string) {
  return `data:image/svg+xml;base64,${encode(svg)}`
}

export const gridDataUri = svgToBase64DataUri(
  `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M36 0H0v36" fill="none" stroke="#111" stroke-opacity=".08"/><circle cx="0" cy="0" r="1.25" fill="#111" fill-opacity=".22"/></svg>`,
)

export const signatureDataUri = svgToBase64DataUri(
  `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="180" viewBox="0 0 640 180"><path d="M53 105c50-64 73-64 68 0-4 44 29 29 66-8 50-50 77-43 57 13-14 39 39-6 72-43 42-46 70-31 46 19-15 31 27 24 84-24 38-32 66-28 82 12 10 42 29 54 57 37" fill="none" stroke="#111" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
)
