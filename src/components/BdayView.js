import React from "react";
import { birthdayData } from "./data";

const BdayView = () => {
  console.log(birthdayData);
  let one = birthdayData[0];
  let currentBday = birthdayData.filter((v) => {
    console.log(v.date);
  });
  var todayDate = new Date();
  console.log(todayDate);
  // console.log(one);
  return (
    <section className="bdayView">
      <div className="todayBday">Here display today's birthday list</div>
    </section>
  );
};

export default BdayView;
