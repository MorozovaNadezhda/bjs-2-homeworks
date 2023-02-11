class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(time, func) {
    if (!time || !func) throw new Error("Отсутствуют обязательные аргументы");
    if (this.alarmCollection.includes(time))
      console.warn("Уже присутствует звонок на это же время");
    this.alarmCollection.push({ callback: func, time: time, canCall: true });
  }
  removeClock(time) {
    if (this.alarmCollection.length) {
      this.alarmCollection = this.alarmCollection.filter((timer) => timer.time != time);
    } else {
      return;
    }
  }

  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5);
  }
  start() {
    if (this.intervalId) return;
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((alarm) => {
        if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        } else {
          return;
        }
      });
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => (alarm.canCall = true));
  }
}
