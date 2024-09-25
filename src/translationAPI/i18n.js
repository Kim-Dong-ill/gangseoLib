import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"; // 번역 파일을 백엔드에서 로드할 때 사용
import LanguageDetector from "i18next-browser-languagedetector"; // 사용자의 브라우저 언어 감지
import { useTranslation } from "react-i18next";

// i18n 초기화
i18n
  .use(Backend) // 번역 파일 로드
  .use(LanguageDetector) // 브라우저에서 언어 감지
  .use(initReactI18next) // 리액트에서 사용
  .init({
    fallbackLng: "en", // 기본 언어
    debug: true, // 디버그 모드
    interpolation: {
      escapeValue: false, // XSS 공격을 방지하기 위해 HTML을 escape하지 않음
    },
    backend: {
      //   loadPath: "/locales/{{lng}}/translation.json", // 번역 파일 경로
      loadPath: "/locales/{{lng}}/translation.json", // 번역 파일 경로
    },
  });

export default i18n;
