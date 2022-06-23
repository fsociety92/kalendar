import { createDate } from "./createDate";
import { createMonth } from "./createMonth";

interface CreateYearParams {
year?: number;
locale?: string;
monthNumber?: number;
}

 export const createYear = (params?:CreateYearParams) => {
    const locale = params?.locale ?? 'default';

    const monthCount = 12;
    const today = createDate();

    const year = params?.year ?? today.year;
    const monthNumber = params?.monthNumber ?? today.monthNumber;

    const month = createMonth({date: new Date(year, monthNumber - 1), locale});

    const getMonthDays = (monthNumber: number) => createMonth({date: new Date(year, monthNumber), locale}).createMonthDays();


    const createYearMonthes = () => {
        const monthes = [];


        for(let i = 0; i < monthCount - 1; i += 1) {
                monthes[i] = getMonthDays(i + 1);
        }

        return monthes;


    }


    return {
        createYearMonthes,
        month,
        year,
    }



 }