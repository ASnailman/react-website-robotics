import React, { useState } from "react";
import "./UpcomingEvents.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "./Footer.js";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "FTC Season Kickoff 9:30am-3pm",
    start: new Date(2022, 8, 10),
    end: new Date(2022, 8, 10),
  },
  {
    title: "Caterpillar Technical Center Family Day",
    start: new Date(2022, 9, 1),
    end: new Date(2022, 9, 1),
  },
  {
    title: "Pre-meet Scrimmage 9am-3pm",
    start: new Date(2022, 9, 22),
    end: new Date(2022, 9, 22),
  },
  {
    title: "Open House Outreach IFP",
    start: new Date(2022, 9, 31),
    end: new Date(2022, 9, 31),
  },
  {
    title: "Meet 1 at Dunlap",
    start: new Date(2022, 10, 5),
    end: new Date(2022, 10, 5),
  },
  {
    title: "Meet 2 at Mall",
    start: new Date(2022, 11, 10),
    end: new Date(2022, 11, 10),
  },
];

function UpcomingEvents() {
  //   const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  //   const [allEvents, setAllEvents] = useState(events);

  //   function handleAddEvent() {
  //     setAllEvents([...allEvents, newEvent]);
  //   }

  return (
    <div className="calContainer">
      {/* <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button>
      </div> */}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, margin: "50px" }}
      />
      <Footer />
    </div>
  );
}

export default UpcomingEvents;
