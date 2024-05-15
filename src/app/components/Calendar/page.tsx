"use client";

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { DayHeaderContentArg, EventContentArg } from "@fullcalendar/core";

export default function Page() {
  function renderEventContent(eventInfo: EventContentArg) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  const handleDateClick = (arg: DateClickArg) => {
    alert(arg.dateStr);
    console.log(arg);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      // eventContent={renderEventContent}
      weekends={false}
      events={[
        { title: "event 1", date: "2024-05-15" },
        { title: "event 2", date: "2024-05-20" },
      ]}
      dateClick={handleDateClick}
    />
  );
}
