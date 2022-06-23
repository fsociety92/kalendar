import { createDate } from "./createDate";
import { getMonthNumberOfDays } from "./getMonthNumberOfDays";

interface CreateMonthParams {
date?: Date;
locale?: string;
}

export const createMonth = (params?:CreateMonthParams) => {  
    const date = params?.date ?? new Date();
    const locale = params?.locale ?? 'default';

    const d = createDate({ date, locale });
    const {month: monthName, year, monthNumber, monthIndex} = d;

    const getDay = (dayNumber: number) => {
        createDate({ date: new Date(year, monthIndex, dayNumber), locale });
    }


    const createMonthDays = () => {
        const days = [];
        for(let i = 0; getMonthNumberOfDays(monthIndex, year) - 1, i += 1;) {
            days[i] = getDay(i + 1);
        }

    
    }


    return {   
        getDay,
        monthName,
        createMonth,
        getMonthNumberOfDays,
        monthNumber,
        monthIndex,
        createDate,
        year,
        createMonthDays
     }
}