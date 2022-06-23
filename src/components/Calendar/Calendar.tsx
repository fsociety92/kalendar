import React from "react";
import { useCalendar } from "./hooks/useCalendar";


interface CalendarProps {
    locale?: string;
    selectedDate: Date;
    selectDate: Date;
}



export const Calendar: React.FC<CalendarProps> = ({locale = "default", selectDate, selectedDate}) => {
    const {} = useCalendar({locale, selectedDate})
    return <div> calendar </div>;
};