import React from 'react';
import { commonTextStyle } from './fontStyle';

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="sm:max-w-md w-full">
        <div className="bg-gray-100 px-3 py-6 ring-1 ring-gray-900/10 mt-[80px]">
          <p className="text-sm text-gray-400 text-center" style={commonTextStyle}>
            상품 가격과 재고 수량은 상황에 따라 달라질 수 있습니다.
            <br />
            또한 파트너스 활동을 통해 수수료를 제공받을 수 있고
            <br />
            이는 채널 운영에 도움이 됩니다.
            <br />
            <br />
            이 페이지는 <a target="_blank" href="https://hopzie.me" rel="noopener noreferrer" style={{ whiteSpace: 'nowrap' }}>
              <strong><u>Hopzie(홉지)</u></strong>
            </a>로 만들었습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
