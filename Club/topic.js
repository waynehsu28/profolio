var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷"


];

var startDate = new Date();
function setMonthAndDay(startMonth, startDay) {
    //一次設定好月分與日期
    //把社長說的那個日期變成javascrip需要的日期時間格式
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
    
}
setMonthAndDay(4,1);