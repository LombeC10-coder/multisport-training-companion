import { useState } from "react";
import "./styles/global.css";

function App() {

  const [sessionForm, setSessionForm] = useState({
    sport : " ",
    duration : " ",
    rpe : " ", 
    notes : " ",
  })

  function handleSessionChange(event){

    const {name, value} = event.target;

    setSessionForm({
      ...sessionForm,
      [name]: value,
    });
  }
  return (
    <main>
      <section className="hero">
      <h1>MultiSport Training Companion</h1>
      <p>
        A training dashboard for athletes to log sessions, track workload,
        monitor recovery, and train safer.
      </p>
      </section>

      <section className="Dashboard">   
        <article className="card">
          <p className="cardLabel">Weekly Training Load</p>
          <h2>0</h2>
          <p>Calculated using duration x RPE.</p>
        </article>
      </section>

   {/*
      This is the FORM Section.
      - Contains LOgging categories such as: 
        * sPORT 
        * DURATION 
        * RPE 
        * NOTES (HOW WAS THE WORKOUT EXPLAINED)

        ALSO , Containing a preveiw box. */}

      <section className="formSection">
        <h2>Log Training Session</h2>

        <form className="sessionForm">
          <label>
            Sport
            <input
            type="text"
            name="sport"
            value={sessionForm.sport}
            onChange={handleSessionChange}
            placeholder="e.g. Football"
            />
          </label>
          <label>
            Duration
            <input
            type="text"
            name="duration"
            value={sessionForm.duration}
            onChange={handleSessionChange}
            placeholder="Minutes"
            />
          </label>
          
          <label>
            RPE
            <input
            type="text"
            name="rpe"
            value={sessionForm.rpe}
            onChange={handleSessionChange}
            placeholder="1-10"
            />
          </label>
          
          <label>
            Notes
            <textarea
            name="notes"
            value={sessionForm.notes}
            onChange={handleSessionChange}
            placeholder="How did the session feel?"
            />
          </label>
        </form>

        <div className="previewBox">
          <p>Sport: {sessionForm.sport || "Not entered"}</p>
          <p>Duration: {sessionForm.duration || "Not entered"}</p>
          <p>RPE: {sessionForm.rpe || "Not entered"}</p>
          <p>Notes: {sessionForm.notes || "Not entered"}</p>
        </div>

      </section>
    </main>
  );
}

export default App;