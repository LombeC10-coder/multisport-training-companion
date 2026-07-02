import { useState } from "react";
import "./styles/global.css";

function App() {

  const [sessionForm, setSessionForm] = useState({
    sport : " ",
    duration : " ",
    rpe : " ", 
    notes : " ",
  })

  const [sessions, setSessions] = useState([]);

  const weeklyLoad = sessions.reduce((total, session) => {
    return total + session.load;
  }, 0);

  function handleSessionChange(event){

    const {name, value} = event.target;

    setSessionForm({
      ...sessionForm,
      [name]: value,
    });
  }

  function handleSessionSubmit(event) {
    event.preventDefault();

    console.log("Form submitted");

    const duration = Number(sessionForm.duration);
    const rpe = Number(sessionForm.rpe);

    if (!sessionForm.sport.trim()) {
      alert("please enter a sport.");
      return;
    }

    if(duration <= 0) {
      alert("Duration must be greater than 0.");
      return;
    }

    if (rpe < 1 || rpe > 10) {
      alert("RPE must be between 1 and 10");
      return;
    }

    const newSession = {
      id: Date.now(),
      sport: sessionForm.sport.trim(),
      duration : duration,
      rpe: rpe,
      notes: sessionForm.notes.trim(),
      load: duration * rpe,
      createdAt: new Date().toISOString(),
    };

    console.log("New session:", newSession);

    setSessions([newSession, ...sessions]);

    setSessionForm({
      sport: "",
      duration: "",
      rpe: "",
      notes: "",
    });
  }return (

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
          <h2>{weeklyLoad}</h2>
          <p>Calculated using duration x RPE.</p>
        </article>

        <article className="card">
          <p className="cardLabel">Sessions Logged</p>
          <h2>{sessions.length}</h2>
          <p>Total sessions added during this prototype week.</p>

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

        <form className="sessionForm" onSubmit={handleSessionSubmit}>
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

          <button className="primaryButton" type="submit">
            Save Session
          </button>
        </form>
        
        <div className="previewBox">
          <h3>Recent Sessions</h3>
          
          {sessions.length === 0 ? (
            <p>No sessions logged yet.</p>
          
          ) : (
            sessions.map((session) => (
            <div className="sessionItem" key={session.id}>
              <strong>{session.sport}</strong>
              <p>
                {session.duration} min × RPE {session.rpe} = {session.load} load
                </p>
                {session.notes && <p>{session.notes}</p>}
                </div>
                ))
                )}
            </div>
                
      </section>
    </main>
  );
}

export default App;