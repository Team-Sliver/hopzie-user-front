import { Channel } from '@/recoil/make/types';
import React from 'react';
import Swal from "sweetalert2";

function ShareLinkSection({ channel, channelNickname } : { channel : Channel, channelNickname : string}) {
  const isShareSupported = (): boolean => navigator.share !== undefined;
  const isClipboardCommandSupported = (): boolean =>
    document.queryCommandSupported?.("copy") ?? false;

  const getDummyTextarea = (): HTMLTextAreaElement => {
    const textarea = document.createElement("textarea");
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "0";
    textarea.style.opacity = "0";

    return textarea;
  };

  const copyToClipboard = (text: string): Promise<boolean> => {
    return new Promise((resolve) => {
      if (typeof document === "undefined") {
        resolve(false);
        return;
      }

      if (isClipboardCommandSupported()) {
        const textarea = getDummyTextarea();
        textarea.value = text;

        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        document.execCommand("copy");
        document.body.removeChild(textarea);
        resolve(true);
        return;
      }

      resolve(false);
    });
  };

  const share = (data: ShareData): Promise<string> => {
    return new Promise(async (resolve) => {
      if (navigator.share) {
        try {
          await navigator.share(data);
          resolve("shared");
          return "shared";
        } catch (error) {
          resolve("cancelled");
          return "cancelled";
        }
      }

      if (data.url) {
        const result = await copyToClipboard(data.url);
        if (result) {
          resolve("copiedToClipboard");
          return "copiedToClipboard";
        }
      }
      resolve("failed");
      return "failed";
    });
  };

  const onClickHandler = async (data: ShareData) => {
    const result = await share(data);
    if (result === "copiedToClipboard") {
      Swal.fire({
        text: "링크를 클립보드에 복사했습니다",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
    } else if (result === "failed") {
      Swal.fire({
        text: "공유하기가 지원되지 않는 환경입니다",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="my-16 text-center">
      <button
        type="button"
        className="rounded-full py-2.5 px-16 bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() => onClickHandler({
          url: typeof window !== 'undefined' ? window.location.href : '',
          title: channel.content.title,
          text: channelNickname,
          files: [],
        })}
      >
        공유하기
      </button>
    </div>
  );
}

export default ShareLinkSection;