import React from 'react';
import { Calendar } from './components/Calendar/Calendar';
import './static/css/global.css';
import { createYear } from './utilis/helpers/date/createYear';
import './src/utils/helpers/date/createDate';
import { createDate } from './utilis/helpers/date/createDate';
import { createMonth } from './utilis/helpers/date/createMonth';
import './utilis/helpers/date/createMonth';
import { getMonthesNames } from './utilis/helpers/date/getMonthesNames';
// import {selectDate, selectedDate} from './components/Calendar/hooks/Calendar'


// console.log ('createDate', getMonthesNames());



    // console.log('createDate', createMonth({locale: 'ru-RU'}));
      // console.log(createMonth({}).createMonthDays());
       // console.log('createDate', createMonth({locale: 'ru-RU'}));



       

    export const App: React.FC = () => {
     const [selectDate, selectedDate] = React.useState(new Date());


return (
    <div className='app_container'>
      <Calendar selectDate = {selectDate}  selectedDate = {selectedDate} />
    </div>
    
    
    
    
  );
     } ;

 export default App;
