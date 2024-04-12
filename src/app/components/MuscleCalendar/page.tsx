export default function Page() {
  return (
    <>
      <div></div>
    </>
  );
}

import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";

document.addEventListener("DOMContentLoaded", function () {
  let calendarEl: HTMLElement = document.getElementById("calendar")!;

  let calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin],
    // options here
  });

  calendar.render();
});
