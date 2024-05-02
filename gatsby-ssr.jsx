import * as React from "react"
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from './src/theme';

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();
  replaceHeadComponents([
    ...headComponents,
    <ColorSchemeScript key="color-scheme-script" />,
  ]);
};

export const wrapPageElement = ({ element }) => {
  return <MantineProvider theme={theme}>{element}</MantineProvider>;
};

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