const isLeapYear = (year)=> {
    if(year === undefined){
        throw new Error("Аргумент не передан");
        return;
    }
    if(typeof year !== "number"){
        throw new Error("Аргумент может иметь тип только Number");
        return;
    }
    if(!Number.isInteger(year)){
        throw new Error("Число должно быть целым");
        return;
    }
    const date = new Date(year, 2, 0);
    // 00.03 - последний день февраля
    // 32.01 - 1 февраля
    // -2.08 - 29 июля
    const februaryDays = date.getDate();
    return (februaryDays === 29);
};

module.exports = isLeapYear;