import { request } from './request.js'
//商品详细信息
export function detailData(iid) {
    return request({
        url: '/detail?iid=' + iid,
    })
}
//推荐商品
export function recommendData() {
    return request({
        url: '/recommend'
    })
}
//商品信息
export class detailItem {
    constructor(itemInfo, columns, services) {
        this.topImages = itemInfo.topImages; //轮播图
        this.title = itemInfo.title; //标题
        this.price = itemInfo.price; //现价
        this.oldPrice = itemInfo.oldPrice; //之前价格
        this.discountDesc = itemInfo.discountDesc; //价格类型
        this.columns = columns;
        this.services = services;
    }
}
//店铺信息
export class shop {
    constructor(shopInfo) {
        this.shopLogo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.cGoods = shopInfo.cGoods;
        this.cFans = shopInfo.cFans;
        this.score = shopInfo.score;
        this.cSells = shopInfo.cSells;
    }
}
//店铺详情信息
export class imgDetailedC {
    constructor(detailImage) {
        this.key = detailImage.key;
        this.desc = detailImage.desc;
        this.list = detailImage.list;
    }
}

//店铺用户评论
export class userComment {
    constructor(rate) {
        this.content = rate.content;
        this.images = rate.images;
        this.style = rate.style;
        this.user = rate.user;
        this.created = rate.created
    }
}
export class parameterC {
    constructor(itemParams) {
        this.rule = itemParams.rule.tables[0];
        this.info = itemParams.info.set;
    }
}
//商品参数