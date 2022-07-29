import React from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          id={event.id}
          location={event.location}
          image={event.image}
          title={event.title}
          key={event.id}
          date={event.date}
        />
      ))}
    </ul>
  );
};

export default EventList;
