import { isSafari } from "react-device-detect";


export const openOutLink = ({ appLink, webLink } : { appLink : string, webLink : string }) => {
  // FIXME: 풀링크가 파트너스에서 제대로 집계되지 않는 이슈 + link.coupang.com을 열지 못하는 이슈로 아래 로직 주석 처리
  // if (appLink && isMobile) {
  //   if (isChrome) {
  //     window.open(appLink, "_blank"); // 크롬 브라우저에서 동작
  //   } else if (isSafari) {
  //     window.location.href = appLink; // 사파리에서 동작
  //   } else {
  //     window.open(appLink);
  //   }
  // } else {
  //   if (isSafari) {
  //     window.location.href = webLink;
  //   } else {
  //     window.open(webLink, "_blank");
  //   }
  // }
  if (isSafari) {
    window.location.href = webLink;
  } else {
    window.open(webLink, "_blank");
  }
};

export const onBlurSaveItem = () => {
  localStorage.setItem("onBlurOrHideTime", new Date().getTime().toString());
};

export const onVisibilityChangeSaveItem = () => {
  if (document.hidden) {
    localStorage.setItem("onBlurOrHideTime", new Date().getTime().toString());
  }
};
