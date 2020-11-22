export const actions = {
    isCarObj(context, CarObj) {
        return new Promise((resolve, reject) => {
            //加入购物车Toast文本
            let StrObj = {
                strAdd: "同种商品数量+1",
                strAdd1: "添加新商品到购物车"
            }
            for (let i in context.state.CartArr) {
                //判断购物车是否有这个商品
                if (context.state.CartArr[i].iid == CarObj.iid) {
                    resolve(StrObj.strAdd)
                    return context.state.CartArr[i].count += 1
                }
            }
            //提交新的商品到购物车
            context.commit("CartArrFun", CarObj);
            resolve(StrObj.strAdd1)
        })
    }
}