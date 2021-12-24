import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

export default function Leavec() {

    const localizer = momentLocalizer(moment);

    return (
        <div>
            <Calendar
                    localizer={localizer}
                   
                    startAccessor="start"
                    endAccessor="end"
                    style={{ width: 1100 }}
                />
        </div>
    )
}
