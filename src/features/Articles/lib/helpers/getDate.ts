//new Date() => [Year, Month, Day, Hours, Minutes]
export function getDate(Time: Date): string[] {
    const Year: string = `${Time.getFullYear()}`;
    const Month: string = rigthTime(Time.getMonth() + 1);
    const Day: string = rigthTime(Time.getDate());
    const Hours: string = rigthTime(Time.getHours());
    const Minutes: string = rigthTime(Time.getMinutes());
    return [Year, Month, Day, Hours, Minutes]
}

//e.g. 5.6.2022 => 05.06.2022
function rigthTime(partTime: number): string {
    return `${partTime}`.length === 1 ? `0${partTime}` : `${partTime}`
}