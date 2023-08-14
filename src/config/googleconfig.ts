/// <reference path="./custom.d.ts" />


// googleAnalytics.js
// googleAnalytics.js
export const GA_ID = 'G-Y9YVYRJ9JG';

export const initializeGA = () => {
  //@ts-ignore
  window.dataLayer = window.dataLayer || [];
  //@ts-ignore
  function gtag(){dataLayer.push(arguments);}
  //@ts-ignore
  gtag('js', new Date());
  //@ts-ignore
  gtag('config', GA_ID);
};

export const trackEvent = ({ category, action, label }: {
  category: string;
  action: string;
  label: string;
}) => {
  //@ts-ignore
  gtag('event', action, {
    event_category: category,
    event_label: label,
  });
};
