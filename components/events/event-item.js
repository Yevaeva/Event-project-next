import Link from "next/link";
import React from "react";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import Button from "../ui/button";
import classes from "./event-item.module.css";

const EventItem = ({ title, date, image, location, id }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt="image" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
        </div>
      </div>
      <div className={classes.address}>
        <AddressIcon />
        <address>{formattedAddress}</address>
      </div>
      <div className={classes.actions}>
        <Button link={exploreLink}>
          <span>Explore Event</span>
          <span className={classes.icon}><ArrowRightIcon/></span>
        </Button>
      </div>
    </li>
  );
};

export default EventItem;
