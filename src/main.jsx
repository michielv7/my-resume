import React from "react";

import ReactDOM from "react-dom/client";
import { Resume } from "./Pages/Resume";
import global_en from "./Schemas/translations/en/global.json"
import global_nl from "./Schemas/translations/nl/global.json"
import i18next from "i18next";

import "./App.css";

i18next.init({
    interpolation: {escapeValue: false},
    lng: "nl",
    resources: {
        nl: {
            global: global_nl,
        },
        en: {
            global: global_en
        }
    }
})

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <I18nextProvider>
            <Resume />
        </I18nextProvider>
    </React.StrictMode>,
);

