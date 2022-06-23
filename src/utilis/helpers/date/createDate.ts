import { getWeekNumber } from './getWeekNumber';
import './getWeekNumber.ts';


    interface CreateDateParams {
    locale?: string;    
    date?: Date;
    }


    export const createDate = (params?:CreateDateParams) => {
    const locale = params?.locale ?? 'default'


    const d = params?.date ?? new Date();
    const daynumber = d.getDate();
    const day = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    const dayNumberInWeek = d.getDate() +1;
    const dayShort = d.toLocaleDateString(locale, {weekday: 'short'});
    const year = d.getFullYear();
    const YearShort = d.toLocaleDateString(locale, {year: '2-digit'});
    const month = d.toLocaleDateString(locale, {month: 'long'});
    const monthShort = d.toLocaleDateString(locale, {month: 'short'});
    const monthNumber = d.getMonth() + 1;
    const monthIndex = d.getMonth()
    const timestamp = d.getTime();
    const week = getWeekNumber(d);
    

    return {
     date: d,
     daynumber ,
     day ,
     dayNumberInWeek ,
     dayShort ,
     year ,
     YearShort, 
     month ,
     monthShort ,
     monthNumber ,
     monthIndex ,
     timestamp ,
     week 
    }



}