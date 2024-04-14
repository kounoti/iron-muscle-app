// "use client";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin, {
//   Draggable,
//   DropArg,
// } from "@fullcalendar/interaction";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import { Fragment, useEffect, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { CheckIcon, ExclamationTriangleIcon } from "@heroicons/react/20/solid";
// import { EventSourceInput } from "@fullcalendar/core/index.js";

// interface Event {
//   tile: string;
//   start: Date | string;
//   allday: boolean;
//   id: number;
// }

// export default function Page() {
//   return (
//     <>
//       <nav className="flex justify-between mb-12 border-b border-violet-100 p-4">
//         <h1 className="font-bold text-2xl text-gray-700">Calendar</h1>
//       </nav>
//       <main className="flex min-h-screen flex-col items-center justify-between p-24">
//         <div className="grid grid-cols-10">
//           <div className="col-span-8">
//             <FullCalendar
//               plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
//               headerToolbar={{
//                 left: "prev, next today",
//                 center: "title",
//                 right: "resourceTimelineWook, dayGridMonth, timeGridWeek",
//               }}
//             />
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export default function MuscleCalendar() {
  return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />;
}
