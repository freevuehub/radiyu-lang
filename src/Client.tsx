/// <reference lib="dom" />
import React from 'https://esm.sh/react@17.0.2?dev'
import * as ReactDOM from 'https://esm.sh/react-dom@17.0.2?dev'
import { App } from './App.tsx'

(ReactDOM as any).hydrate(
  <App isServer={false} />,
  document.getElementById("root"),
);
