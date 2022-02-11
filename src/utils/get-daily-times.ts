const getDailyTimes = ( interval: number = 5 ): string[] => {
  const times: string[] = [];
  const date: Date = new Date();  
  for (let minutes: number = 0; minutes < 24 * 60; minutes = minutes + interval) {
    date.setHours(0);
    date.setMinutes(minutes);
    times.push(date.toLocaleTimeString('en', { hour: 'numeric', minute: 'numeric' }));
  }
  return times;
};

export default getDailyTimes;