import React, { useState } from "react";
import dayjs from "dayjs";
import enUS from 'antd/locale/en_US';
import ptBR from 'antd/locale/pt_BR';
import { ConfigProvider } from 'antd';
import 'dayjs/locale/pt-br';
import 'dayjs/locale/es';
import 'dayjs/locale/en';
import { LanguageContext } from "contexts/languageContext";

const inLocal = localStorage.getItem("language");
if (!inLocal) {
  localStorage.setItem("language", navigator.language || navigator.userLanguage);
}

export default function LanguageHook(props) {
    const [language, setLanguage] = useState(inLocal || navigator.language || navigator.userLanguage);
    dayjs.locale(language === 'pt-BR' ? 'pt-br' : 'en');
    
    const setLanguageInLocal = (language) => {
        localStorage.setItem("language", language);
        if (language === 'pt-BR') dayjs.locale('pt-br');
        else if (language === 'en-US') dayjs.locale('en');
        setLanguage(language);
    };

    const value = { language, setLanguage: setLanguageInLocal };

    return (
        <ConfigProvider locale={language === 'pt-BR' ? ptBR : enUS}>
            <LanguageContext.Provider value={value}>
                {props.children}
            </LanguageContext.Provider>
        </ConfigProvider>
    );
}