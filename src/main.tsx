import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './css/index.css'
import {MyRouter} from "./router/routes.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
    <Provider store={store}>
        <MyRouter/>
    </Provider>
</StrictMode>,)
