export function getDayName(date) {
    const day = new Date(date).getDay();
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return days[day];
}