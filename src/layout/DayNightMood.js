import { useEffect, useState } from "react";

const DayNightMood = () => {
  const [night, setNight] = useState(true);
  const changeMood = () => {
    document.querySelector("body").classList.toggle("theme-light");
  };
  useEffect(()=>{
    changeMood()
  },[])
  return (
    <label className="color_switch" onClick={() => changeMood()}>
      <i className="fas fa-moon" />
    </label>
  );
};
export default DayNightMood;
