import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import '../scss/index.scss';

import App from './components/App.js'

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
