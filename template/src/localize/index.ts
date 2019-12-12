import _ from "lodash";
import * as RNLocalize from "react-native-localize";
import I18n from "i18n-js";

import { I18nManager } from "react-native";

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  en: () => require("./en.json"),
  ko: () => require("./ko.json")
};

const translate = _.memoize(
  (key, config) => I18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

async function initAsync() {
  // *I18n setting
  // fallback if no available language fits
  const fallback = { languageTag: "en", isRTL: false };

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);

  // set I18n-js config
  I18n.fallbacks = true;
  I18n.translations =
    languageTag === "en"
      ? {
          [languageTag]: translationGetters[languageTag]()
        }
      : {
          en: translationGetters["en"](),
          [languageTag]: translationGetters[languageTag]()
        };

  I18n.locale = languageTag;

  console.log("main locale", I18n.locale);
  // ========================================================================
}

export default {
  initAsync: initAsync,
  locale: () => I18n.locale,
  localeShort: () => I18n.locale.slice(0, 2),
  t: (key: string, config?: any) => translate(key, config)
};
