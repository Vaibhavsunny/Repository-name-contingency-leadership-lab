import {useEffect,useRef,useState} from "react";
import type {ReactNode, CSSProperties} from "react";
import Lenis from "lenis";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import {chapters, glossary, viva} from "./content";
import Scene from "./World";

function ProgressBar({progress}:{progress:number}) {
  return <div className="progress-rail" aria-hidden="true"><div className="progress-fill" style={{height:`${progress*100}%`}}/></div>;
}

function Badge({children,kind="neutral"}:{children:ReactNode;kind?:string}) {
  return <span className={`badge badge-${kind}`}>{children}</span>;
}

function CaseEvidence({c}:{c:any}) {
  if(!c.fact && !c.lens && !c.analysis && !c.limitation) return null;
  return <div className="evidence-grid">
    {c.fact && <div className="evidence fact"><Badge kind="fact">FACT</Badge><p>{c.fact}</p></div>}
    {c.lens && <div className="evidence lens"><Badge kind="lens">THEORY LENS</Badge><p>{c.lens}</p></div>}
    {c.analysis && <div className="evidence analysis"><Badge kind="analysis">ANALYSIS</Badge><p>{c.analysis}</p></div>}
    {c.limitation && <div className="evidence limitation"><Badge>LIMITATION</Badge><p>{c.limitation}</p></div>}
  </div>
}

function CoreDiagram({theme}:{theme:string}) {
  const labels=["LEADER","FOLLOWERS","TASK","AUTHORITY","ENVIRONMENT","SITUATION"];
  return <div className={`core-diagram ${theme}`}>
    <div className="core-orbit orbit-a"/><div className="core-orbit orbit-b"/>
    <div className="core-sphere"><span>FIT</span><small>CORE</small></div>
    {labels.map((x,i)=><span key={x} className="core-node" style={{"--i":i} as CSSProperties}>{x}</span>)}
  </div>
}

function LpcLab() {
  const [v,setV]=useState(42);
  const relationship=v>=55;
  return <div className="lab-panel">
    <div className="lab-header"><span>LPC ORIENTATION</span><strong>{v < 55 ? "LOW LPC / TASK" : "HIGH LPC / RELATIONSHIP"}</strong></div>
    <input aria-label="LPC orientation slider" type="range" min="0" max="100" value={v} onChange={e=>setV(+e.target.value)}/>
    <div className="scale"><span>LOW LPC</span><span>HIGH LPC</span></div>
    <div className={`lab-machine ${relationship ? "social":"mechanical"}`}>
      <div className="machine-core">{relationship ? "RELATE":"EXECUTE"}</div>
      <div className="machine-ring"/>
      <p>{relationship ? "Trust • acceptance • communication • support" : "Deadlines • procedures • output • role clarity"}</p>
    </div>
    <small className="microcopy">Conceptual visualization of Fiedler’s LPC orientation; not a diagnostic test.</small>
  </div>
}

function TriangleLab() {
  const [active,setActive]=useState(0);
  const labels=[["RELATIONS","Trust / acceptance / cooperation"],["TASK STRUCTURE","Clear goals / procedures / outcomes"],["POSITION POWER","Formal authority / rewards / resources"]];
  return <div className="triangle-lab">
    <div className="tri-wrap"><div className="tri-line"/>{labels.map(([a,b],i)=><button key={a} className={`tri-node n${i} ${active===i?"active":""}`} onClick={()=>setActive(i)}><b>{a}</b><small>{b}</small></button>)}</div>
    <div className="tri-readout"><Badge kind="lens">SITUATIONAL VARIABLE</Badge><h3>{labels[active][0]}</h3><p>{labels[active][1]}</p><strong>{active===0?"GOOD → TRUST / ACCEPTANCE":active===1?"HIGH → CLEAR STRUCTURE":"STRONG → FORMAL AUTHORITY"}</strong></div>
  </div>
}

function FollowerLab() {
  const [competence,setCompetence]=useState(35);
  const [confidence,setConfidence]=useState(40);
  const avg=(competence+confidence)/2;
  const style=avg<25?"S1 — DIRECTING":avg<50?"S2 — COACHING":avg<75?"S3 — SUPPORTING":"S4 — DELEGATING";
  const dir=avg<50?90:avg<75?45:15;
  const support=avg<25?25:avg<50?75:avg<75?95:25;
  return <div className="lab-panel follower-lab">
    <div className="slider-row"><label>COMPETENCE <b>{competence}</b></label><input type="range" min="0" max="100" value={competence} onChange={e=>setCompetence(+e.target.value)}/></div>
    <div className="slider-row"><label>CONFIDENCE <b>{confidence}</b></label><input type="range" min="0" max="100" value={confidence} onChange={e=>setConfidence(+e.target.value)}/></div>
    <div className="follower-stage">
      <div className="leader-avatar" style={{transform:`translateX(${(100-dir)*1.4}px)`}}>L</div>
      <div className="follower-avatar">F</div>
      <div className="direction-beam" style={{width:`${dir}%`}}/>
      <div className="support-field" style={{opacity:Math.max(.12,support/100)}}/>
    </div>
    <div className="style-readout"><span>CONCEPTUAL STATE</span><strong>{style}</strong><small>Direction: {Math.round(dir)}% · Support: {Math.round(support)}%</small></div>
    <small className="microcopy">The simulator visualizes the model; it is not a mathematical decision rule.</small>
  </div>
}

function MemberPortals({onSelect}:{onSelect:(id:number)=>void}) {
  return <div className="portal-grid">{[
    [56,"INTRODUCTION","TYLENOL"],[60,"FIEDLER + LPC","SOUTHWEST"],[61,"VARIABLES","INTEL"],[63,"HERSEY-BLANCHARD","MICROSOFT"],[65,"APPLICATIONS","TOYOTA"]
  ].map(([roll,topic,caseName],i)=><button className="portal" key={roll as number} onClick={()=>onSelect([4,5,7,12,15][i])}>
    <div className="portal-index">0{i+1}</div><div className="portal-ring"/><strong>ROLL {roll}</strong><span>{topic}</span><small>{caseName}</small>
  </button>)}</div>
}

function Revision({onClose}:{onClose:()=>void}) {
  return <div className="overlay">
    <div className="overlay-inner revision">
      <button className="close" onClick={onClose}>ESC</button>
      <p className="eyebrow">REVISION MODE</p><h2>ONE-PAGE MEMORY SYSTEM</h2>
      <div className="revision-grid">
        <div><b>CONTINGENCY</b><span>No single best style. Context matters.</span></div>
        <div><b>FIEDLER</b><span>Orientation + situational favourableness = FIT</span></div>
        <div><b>LPC</b><span>Low → task · High → relationship</span></div>
        <div><b>3 VARIABLES</b><span>Relations · Task structure · Position power</span></div>
        <div><b>H-B</b><span>Follower development/readiness → direction + support</span></div>
        <div><b>S1—S4</b><span>Direct · Coach · Support · Delegate</span></div>
        <div><b>CASES</b><span>Tylenol · Southwest · Intel · Microsoft · Toyota</span></div>
        <div><b>CASE FORMULA</b><span>Situation → Diagnose → Framework → Map → Fit → Lesson</span></div>
      </div>
    </div>
  </div>
}

function Presenter({chapter}:{chapter:any}) {
  return <div className="presenter"><Badge kind="live">PRESENTER</Badge><b>{chapter.speaker || "GROUP 8"}</b><span>{chapter.title}</span>{chapter.caseName && <small>CASE · {chapter.caseName}</small>}</div>
}

function Viva() {
  const [open,setOpen]=useState<number|null>(null);
  return <div className="viva-list">{viva.map(([q,a],i)=><button key={q} className={`viva-item ${open===i?"open":""}`} onClick={()=>setOpen(open===i?null:i)}><span>{String(i+1).padStart(2,"0")}</span><b>{q}</b><em>{open===i?"−":"+"}</em>{open===i&&<p>{a}</p>}</button>)}</div>
}

function Glossary() {
  const entries=Object.entries(glossary);
  return <div className="glossary">{entries.map(([k,v])=><details key={k}><summary>{k}</summary><p>{v}</p></details>)}</div>
}

export default function App() {
  const [progress,setProgress]=useState(0);
  const [chapterIndex,setChapterIndex]=useState(0);
  const [mouse,setMouse]=useState({x:0,y:0});
  const [reduced,setReduced]=useState(false);
  const [revision,setRevision]=useState(false);
  const [presenter,setPresenter]=useState(false);
  const [sound,setSound]=useState(false);
  const [webgl,setWebgl]=useState(true);
  const lenisRef=useRef<Lenis|null>(null);

  useEffect(()=>{
    const test=document.createElement("canvas");
    try { setWebgl(!!(window.WebGLRenderingContext && (test.getContext("webgl") || test.getContext("experimental-webgl")))); } catch { setWebgl(false); }
    const prefers=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if(prefers) setReduced(true);
    const lenis=new Lenis({duration:1.15,smoothWheel:true,lerp:.08});
    lenisRef.current=lenis;
    let raf=0;
    const loop=(t:number)=>{lenis.raf(t);raf=requestAnimationFrame(loop)};
    raf=requestAnimationFrame(loop);
    const onScroll=()=> {
      const max=document.documentElement.scrollHeight-window.innerHeight;
      const p=max>0?window.scrollY/max:0;
      setProgress(p);
      const idx=Math.min(chapters.length-1,Math.floor(p*chapters.length));
      setChapterIndex(idx);
    };
    const onMouse=(e:MouseEvent)=>setMouse({x:(e.clientX/window.innerWidth-.5)*2,y:(e.clientY/window.innerHeight-.5)*-2});
    window.addEventListener("scroll",onScroll,{passive:true});
    window.addEventListener("mousemove",onMouse,{passive:true});
    const key=(e:KeyboardEvent)=>{
      if(e.key.toLowerCase()==="r") setRevision(v=>!v);
      if(e.key.toLowerCase()==="p") setPresenter(v=>!v);
      if(e.key==="Escape"){setRevision(false);setPresenter(false);}
      if(e.key.toLowerCase()==="m") setReduced(v=>!v);
    };
    window.addEventListener("keydown",key);
    onScroll();
    return ()=>{cancelAnimationFrame(raf);lenis.destroy();window.removeEventListener("scroll",onScroll);window.removeEventListener("mousemove",onMouse);window.removeEventListener("keydown",key);}
  },[]);

  useEffect(()=>{
    gsap.utils.toArray<HTMLElement>(".chapter-content").forEach(el=>{
      gsap.fromTo(el,{y:55,opacity:0},{y:0,opacity:1,duration:1.0,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 82%",end:"bottom 55%",toggleActions:"play none none reverse"}});
    });
  },[]);

  const scrollTo=(idx:number)=>{
    const el=document.getElementById(`chapter-${idx+1}`);
    if(el) lenisRef.current?.scrollTo(el,{offset:-20,duration:1.2});
  };

  const active=chapters[chapterIndex];

  return <div className={`app ${reduced?"reduced":""}`}>
    <div className="webgl-layer">{webgl?<Scene progress={progress} theme={active.theme} mouse={mouse} reduced={reduced}/>:<div className="fallback-world"><div className="fallback-core"/><span>2.5D MODE</span></div>}</div>
    <header className="hud">
      <div className="brand">GROUP 8 <span>·</span> LEADERSHIP LAB</div>
      <div className="hud-actions">
        <button onClick={()=>setSound(v=>!v)} aria-label="Toggle sound">{sound?"SOUND ON":"SOUND OFF"}</button>
        <button onClick={()=>setReduced(v=>!v)} aria-label="Toggle reduced motion">{reduced?"MOTION REDUCED":"MOTION FULL"}</button>
        <button onClick={()=>setRevision(true)}>R · REVISION</button>
        <button onClick={()=>setPresenter(v=>!v)}>P · PRESENTER</button>
      </div>
    </header>
    <ProgressBar progress={progress}/>
    <aside className="chapter-nav">
      <div className="chapter-count">{String(active.id).padStart(2,"0")} / {chapters.length}</div>
      {chapters.map((c,i)=><button key={c.id} className={i===chapterIndex?"active":""} title={c.title} onClick={()=>scrollTo(i)}><span>{String(c.id).padStart(2,"0")}</span></button>)}
    </aside>
    <main>
      <section className="hero scene-section" id="chapter-1">
        <div className="hero-copy">
          <p className="eyebrow">ORGANISATIONAL BEHAVIOUR · UNIT 3</p>
          <h1>CONTINGENCY<br/><i>THEORY</i></h1>
          <p className="hero-sub">THE LEADERSHIP LAB</p>
          <p className="hero-line">Leadership depends on the situation.</p>
          <div className="hero-scroll">SCROLL TO ENTER <span>↓</span></div>
        </div>
        <CoreDiagram theme="theory"/>
      </section>

            {chapters.map((c, i) => {
        const isCase = !!c.caseName;

        return (
          <section
            key={c.id}
            id={`chapter-${c.id}`}
            className={`scene-section section-${c.theme} ${
              i === 0 ? "question-section" : ""
            }`}
          >
            <div className="chapter-content">
              <div className="chapter-meta">
                <span>{c.eyebrow}</span>
                {c.speaker && <Badge kind="speaker">{c.speaker}</Badge>}
              </div>

              <h2>{c.title}</h2>
              <p className="lead">{c.body}</p>

              {c.bullets && (
                <ul className="concept-list">
                  {c.bullets.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              )}

              {c.id === 1 && (
                <div className="three-worlds">
                  <div><b>CRISIS</b><span>urgency / risk</span></div>
                  <div><b>INNOVATION</b><span>ambiguity / experimentation</span></div>
                  <div><b>EXPERT TEAM</b><span>capability / autonomy</span></div>
                </div>
              )}

              {c.id === 2 && (
                <div className="evolution">
                  <span>TRAIT</span><b>WHO?</b><span>→</span>
                  <span>BEHAVIOUR</span><b>WHAT?</b><span>→</span>
                  <span>CONTINGENCY</span><b>UNDER WHAT CONDITIONS?</b>
                </div>
              )}

              {c.id === 3 && (
                <div className="equation">
                  <span>LEADER</span><i>+</i>
                  <span>FOLLOWERS</span><i>+</i>
                  <span>TASK</span><i>+</i>
                  <span>ENVIRONMENT</span>
                  <b>↓</b>
                  <strong>LEADERSHIP EFFECTIVENESS</strong>
                </div>
              )}

              {c.id === 4 && <MemberPortals onSelect={scrollTo} />}
              {c.id === 6 && <LpcLab />}
              {c.id === 7 && <TriangleLab />}
              {c.id === 8 && <CaseEvidence c={c} />}

              {c.id === 9 && (
                <div className="mode-switch">
                  <button className="active">ROUTINE OPERATIONS</button>
                  <button>HIGH-PRESSURE DISRUPTION</button>
                  <p>
                    Structured processes, interdependent operations, formal
                    roles and time pressure create a distinct operating context.
                  </p>
                </div>
              )}

              {c.id === 10 && <CaseEvidence c={c} />}

              {c.id === 12 && (
                <div className="fit-adapt">
                  <div><span>FIEDLER</span><strong>FIT</strong></div>
                  <i>→</i>
                  <div><span>HERSEY & BLANCHARD</span><strong>ADAPT</strong></div>
                </div>
              )}

              {c.id === 13 && (
                <div className="s4-grid">
                  {[
                    ["S1", "DIRECTING", "HIGH DIRECTION", "LOW SUPPORT"],
                    ["S2", "COACHING", "HIGH DIRECTION", "HIGH SUPPORT"],
                    ["S3", "SUPPORTING", "LOW DIRECTION", "HIGH SUPPORT"],
                    ["S4", "DELEGATING", "LOW DIRECTION", "LOW SUPPORT"],
                  ].map((x) => (
                    <div key={x[0]}>
                      <span>{x[0]}</span>
                      <b>{x[1]}</b>
                      <small>{x[2]} · {x[3]}</small>
                    </div>
                  ))}
                </div>
              )}

              {c.id === 14 && <CaseEvidence c={c} />}
              {c.id === 15 && <CaseEvidence c={c} />}

              {c.id === 16 && (
                <div className="industry-city">
                  {[
                    "HEALTHCARE",
                    "MANUFACTURING",
                    "TECHNOLOGY",
                    "AIRLINES",
                    "STARTUPS",
                    "RETAIL",
                    "EDUCATION",
                    "CONSULTING",
                  ].map((x, i) => (
                    <button
                      key={x}
                      style={
                        {
                          "--h": `${100 + i * 23}px`,
                        } as CSSProperties
                      }
                    >
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <b>{x}</b>
                      <small>
                        {
                          [
                            "Emergency coordination",
                            "Structured tasks",
                            "Innovation",
                            "Time-sensitive coordination",
                            "Ambiguity",
                            "Peak demand",
                            "New learners",
                            "Experienced teams",
                          ][i]
                        }
                      </small>
                    </button>
                  ))}
                </div>
              )}

              {c.id === 17 && (
                <div className="comparison">
                  <div>
                    <Badge kind="lens">FIEDLER</Badge>
                    <h3>FIT</h3>
                    <p>
                      Relatively stable orientation · LPC · relations · task
                      structure · position power
                    </p>
                  </div>

                  <div>
                    <Badge kind="analysis">HERSEY-BLANCHARD</Badge>
                    <h3>FLEX</h3>
                    <p>
                      Adaptive direction/support · follower
                      development/readiness · S1–S4
                    </p>
                  </div>
                </div>
              )}

              {isCase &&
                c.id !== 8 &&
                c.id !== 10 &&
                c.id !== 14 &&
                c.id !== 15 && <CaseEvidence c={c} />}

              {c.id === 11 && (
                <div className="limits">
                  <span>STABLE ORIENTATION</span>
                  <span>LPC INTERPRETATION</span>
                  <span>VARIABLE COVERAGE</span>
                  <span>ORGANISATIONAL COMPLEXITY</span>
                </div>
              )}

              {c.id === 12 && <FollowerLab />}

              {c.id === 17 && (
                <>
                  <div className="manager-check">
                    <b>MANAGERIAL CHECKLIST</b>
                    <span>
                      Task · urgency · structure · capability · authority ·
                      relations · direction · support
                    </span>
                  </div>

                  <div className="viva-zone">
                    <p className="eyebrow">VIVA ZONE</p>
                    <h3>ASK THE LAB</h3>
                    <Viva />
                  </div>

                  <div className="glossary-zone">
                    <p className="eyebrow">KEY TERMS</p>
                    <h3>GLOSSARY</h3>
                    <Glossary />
                  </div>
                </>
              )}
            </div>
          </section>
        );
      })}

      <section className="finale scene-section">
        <div className="finale-copy">
          <p className="eyebrow">GROUP 8 · ORGANISATIONAL BEHAVIOUR</p>
          <h2>THERE IS<br/>NO ONE<br/><i>BEST</i><br/>LEADERSHIP STYLE.</h2>
          <p className="final-question">THE REAL QUESTION IS:</p>
          <strong>WHAT DOES THIS SITUATION REQUIRE?</strong>
          <div className="final-core">CONTINGENCY THEORY <span>·</span> THE LEADERSHIP LAB</div>
        </div>
      </section>
    </main>

    {presenter && <Presenter chapter={active}/>}
    {revision && <Revision onClose={()=>setRevision(false)}/>}
    <footer>GROUP 8 · 56 · 60 · 61 · 63 · 65 <span>CONTINGENCY THEORY</span></footer>
  </div>
}
