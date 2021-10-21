class AlarmClock {
  
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }
  
  addClock(time, param, id) {
    if (id === undefined) {
      throw new Error('Параметр id не передан')
    }
    for (let i = 0; i < this.alarmCollection.length; i++) {
      if(id === this.alarmCollection[i].id) {
        console.error('Будильник с таким id уже существует')
      }
    }
    this.alarmCollection.push({time, param, id})
  }
  
  removeClock(id) {
    for (let i = 0; i < this.alarmCollection.length; i++) {
      if (id === this.alarmCollection[i].id) {
        this.alarmCollection.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  
  getCurrentFormattedTime() {
    let date = new Date;
    let hour = date.getHours();
    if (hour >= 0 && hour <= 9) {
      hour = ('0' + hour);
    }
    let min = date.getMinutes();
    if (min >= 0 && min <= 9) {
      min = ('0' + min);
    }
    return (hour + ':' + min);
  }
  
  start() {
    let currentTime = this.getCurrentFormattedTime();
    function checkClock(clock, time) {
      if (clock.time === time) {
        return clock.param();
      } 
    }
    if (this.timerId === null) {
      this.timerId = setInterval(getClock(this.alarmCollection));     
      function getClock(clock) {
        for (let i = 0; i < clock.length; i++) {
          checkClock(clock[i], currentTime);
        }
      }       
    }     
  }
  
  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
  
  printAlarms() {
    this.alarmCollection.forEach(item => console.log(item.id, item.time));
  }
  
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
  
  
}

function testCase() {
  let clock = new AlarmClock;
  
  clock.addClock('21:18', () => console.log('Пора вставать!'), 1);
  
  clock.addClock('20:08', () => {console.log('Пора вставать уже!'); clock.removeClock(2)}, 2);
  
  clock.addClock('20:08', () => {console.log('Пора вставать!'); clock.clearAlarms(); clock.printAlarms()}, 3);
  
  clock.printAlarms();
  
  clock.start();
}

testCase();





















