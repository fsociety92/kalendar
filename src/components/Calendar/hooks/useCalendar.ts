import React from 'react';
import { useState } from 'react';
import { getWeekDaysNames } from '../../../utilis/helpers/date';
import { createDate } from '../../../utilis/helpers/date/createDate';
import { createMonth } from '../../../utilis/helpers/date/createMonth';
import { getMonthesNames } from '../../../utilis/helpers/date/getMonthesNames';


interface UseCalendarParams {

locale?: string;
selectedDate?: Date;


}



export const useCalendar = ({locale = 'default', selectedDate: date}:UseCalendarParams) => {
    const [mode, setMode] = React.useState<'days' | 'monthes' | 'years'>('days');
        const [selectedDate, setSelectedDate] = React.useState(createDate({date}));
        const [selectedMonth, setSelectedMonth] = React.useState(createMonth({date: new Date(selectedDate.year, selectedDate.monthIndex), locale}));

        const [selectedYear, setSelectedYear] = React.useState(selectedDate.year);
        const monthesNames = React.useMemo(() => getMonthesNames(locale), []);
        const weekDaysNames =  React.useMemo(() => getWeekDaysNames (locale), []);

        console.log('weekDaysNames', weekDaysNames)
        return{};

} 