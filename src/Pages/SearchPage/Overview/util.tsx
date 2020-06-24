export function convertSecondToHour(second : number) {
    const hour = Math.floor(second / (60 * 60));
    const minute = Math.floor(second / 60) - hour * 60;
    return `${hour}H ${minute}M`;
}

export function convertThreeDemicalPoint(value : number) {
    return Math.round(value * 1000) / 1000;
}