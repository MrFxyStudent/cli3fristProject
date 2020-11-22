export const mutations = {
    imgNumAdd(state) {
        state.imgNum++;
    },
    CartArrFun(state, CarObj) {
        CarObj.isClass = false;
        state.CartArr.push(CarObj);
    },
    countIsCheck(state, index) {
        let menry = 0;
        let count = 0;
        state.CartArr[index].isClass = !state.CartArr[index].isClass;

        for (let i = 0; i < state.CartArr.length; i++) {
            if (state.CartArr[i].isClass == true) {
                count++;
                menry += parseInt(state.CartArr[i].Price.slice(1)) * state.CartArr[i].count;
            }
        }
        console.log(count, state.CartArr.length);
        if (state.CartArr.length == count) {
            state.isBoolean = true;
        } else {
            state.isBoolean = false;
        }

        state.checkObj = {
            menry,
            count
        }
    },
    checkAllFun(state, isAllcheck) {
        let menry = 0;
        let count = 0;
        if (state.CartArr.length != 0) {
            for (let i = 0; i < state.CartArr.length; i++) {
                state.CartArr[i].isClass = isAllcheck
                if (state.CartArr[i].isClass == true) {
                    count++;
                    menry += parseInt(state.CartArr[i].Price.slice(1)) * state.CartArr[i].count;
                }
            }
        }
        state.checkObj = {
            menry,
            count
        }
    }
}