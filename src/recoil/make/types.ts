export interface Content {
    title: string;
    image: string;
    linkUrl: string;
}

export interface Product {
    uid: string;
    title: string;
    imageUrl: string;
    price: string | null;
    originalPrice: string | null;
    linkUrl: string;
    description: string
}

export interface Channel {
    title: string;
    profileImageUrl: string;
    bannerUrl: string;
    content: Content;
}

// 클래스 정의
export class ChannelData {
    channel: Channel;
    products: Product[];

    constructor(channel: Channel, products: Product[]) {
        this.channel = channel;
        this.products = products;
    }

    // 새 채널 데이터로 업데이트
    updateChannel(newChannelData: Channel) {
        this.channel = { ...this.channel, ...newChannelData };
    }

    // 새로운 객체 생성 (CopyWith 패턴)
    copyWith(channel?: Channel, products?: Product[]): ChannelData {
        return new ChannelData(channel ?? this.channel, products ?? this.products);
    }

    // 빈 상태로 초기화
    static empty(): ChannelData {
        return new ChannelData({
            title: "",
            profileImageUrl: "",
            bannerUrl: "",
            content: {
                title: "",
                image: "",
                linkUrl: ""
            }
        }, []);
    }
}