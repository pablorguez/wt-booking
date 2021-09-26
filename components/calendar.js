import React from 'react';
import {
  Calendar as ModernCalendar,
  utils,
} from 'react-modern-calendar-datepicker';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';

const Calendar = (props) => (
  <ModernCalendar {...props} minimumDate={utils('en').getToday()} />
);

export default Calendar;
