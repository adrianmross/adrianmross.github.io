import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/PPMondwest-Regular.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="mondwest"
    />,
    <link
      rel="preload"
      href="/fonts/PPSupplyMono-Regular.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="supply-mono"
    />,
  ])
}