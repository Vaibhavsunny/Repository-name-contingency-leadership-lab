export type Chapter = {
  id: number;
  slug: string;
  title: string;
  eyebrow: string;
  speaker?: string;
  caseName?: string;
  theme: string;
  body: string;
  bullets?: string[];
  fact?: string;
  lens?: string;
  analysis?: string;
  limitation?: string;
};

export const chapters: Chapter[] = [
  { id:1, slug:"question", title:"THE QUESTION", eyebrow:"01 / THE QUESTION", theme:"theory",
    body:"There is no single leadership style that is universally effective. Leadership effectiveness depends on the fit between the leader, followers, task and surrounding situation.",
    bullets:["Same leader. Different context.","Urgency changes the value of participation versus direction.","Expert teams can need autonomy where new employees need guidance."] },
  { id:2, slug:"context", title:"FROM TRAITS TO CONTEXT", eyebrow:"02 / FROM TRAITS TO CONTEXT", theme:"theory",
    body:"Leadership thinking shifts from the person, to behaviour, to the conditions under which an approach works.",
    bullets:["Trait: WHO is the leader?","Behavioural: WHAT does the leader do?","Contingency: UNDER WHAT CONDITIONS is an approach effective?"] },
  { id:3, slug:"contingency", title:"CONTINGENCY", eyebrow:"03 / CONTINGENCY", theme:"theory",
    body:"The central managerial question is not “What is the best leadership style?” but “What leadership approach fits this situation, and why?”",
    bullets:["Task: routine or ambiguous? urgent or developmental?","Followers: capable, experienced and confident for this task?","Leader, environment, structure and power all matter."] },
  { id:4, slug:"group8", title:"GROUP 8 ARCHIVE", eyebrow:"04 / GROUP 8", theme:"archive",
    body:"Five portals. Five concept blocks. Five real-world cases. The experience is designed as one connected leadership lab.",
    bullets:["56 — Introduction + Johnson & Johnson / Tylenol","60 — Fiedler + LPC + Southwest Airlines","61 — Fiedler variables + Intel / Andy Grove","63 — Hersey & Blanchard + Microsoft","65 — Industry applications + Toyota + comparison"] },
  { id:5, slug:"fiedler", title:"FIEDLER", eyebrow:"05 / FIEDLER", theme:"fiedler", speaker:"ROLL 60", caseName:"Southwest Airlines",
    body:"Fred E. Fiedler proposed that leadership effectiveness depends on the match between a leader’s relatively stable orientation and the favourableness of the leadership situation.",
    bullets:["Task-oriented: task completion, performance, deadlines and role clarity.","Relationship-oriented: trust, acceptance, communication and support.","The model emphasizes matching leader and situation rather than assuming constant style switching."] },
  { id:6, slug:"lpc", title:"THE LPC MACHINE", eyebrow:"06 / LPC", theme:"fiedler",
    body:"Least Preferred Coworker (LPC) is used by Fiedler to infer leadership orientation. For classroom recall: low LPC → task orientation; high LPC → relationship orientation.",
    bullets:["Low LPC — more task-oriented","High LPC — more relationship-oriented","Orientation is treated as relatively stable in the original model."] },
  { id:7, slug:"variables", title:"THREE VARIABLES", eyebrow:"07 / THREE VARIABLES", theme:"fiedler", speaker:"ROLL 61", caseName:"Intel under Andy Grove",
    body:"Fiedler assesses the situation using leader-member relations, task structure and position power. Together these shape situational favourableness.",
    bullets:["Leader-member relations: trust, acceptance and cooperation.","Task structure: clarity of goals, procedures and acceptable solutions.","Position power: formal authority to reward, discipline, allocate resources or decide."] },
  { id:8, slug:"tylenol", title:"TYLENOL CRISIS", eyebrow:"08 / CASE / 1982", theme:"tylenol", speaker:"ROLL 56", caseName:"Johnson & Johnson — Tylenol crisis",
    body:"In 1982, seven people in the Chicago area died after taking Tylenol capsules contaminated with cyanide. The case is used here as a real-world situation analysed through contingency thinking.",
    fact:"The study material records the crisis, FDA packaging implications, and Johnson & Johnson’s identification of James E. Burke as a key leader in the response.",
    lens:"Crisis conditions create unusual leadership requirements: high uncertainty, high stakes, time pressure and reputation risk.",
    analysis:"The useful contingency question is how leadership requirements change when consumer safety, public trust and rapid coordination become immediate priorities.",
    limitation:"The case is not evidence that Johnson & Johnson deliberately applied a textbook contingency model." },
  { id:9, slug:"southwest", title:"SOUTHWEST", eyebrow:"09 / CASE / OPERATIONS", theme:"southwest", speaker:"ROLL 60", caseName:"Southwest Airlines",
    body:"Airline operations combine standardized processes, interdependence, formal roles and time pressure — a useful environment for asking Fiedler’s fit questions.",
    fact:"The study material cites Southwest’s 2025 annual report for operational-efficiency, reliability, productivity, turn-time and process-modernization initiatives.",
    lens:"Map leader-member relations, task structure and position power to the operating context.",
    analysis:"High task structure and formal roles can support task-focused coordination in parts of an operational environment.",
    limitation:"This is an academic application, not proof that Southwest formally adopted Fiedler’s model." },
  { id:10, slug:"intel", title:"INTEL / ANDY GROVE", eyebrow:"10 / CASE / STRATEGIC CHANGE", theme:"intel", speaker:"ROLL 61", caseName:"Intel under Andy Grove",
    body:"Intel’s historical record describes Andy Grove’s critical role in the decision to move the company’s focus from memory chips to microprocessors and in the subsequent transformation.",
    fact:"The study material uses Intel’s own historical record as the basis for the strategic-transition narrative.",
    lens:"Strategic change increases uncertainty, competitive pressure, resource-allocation demands and difficult trade-offs.",
    analysis:"Lower task structure in a less predictable future market increases ambiguity, while senior formal authority can enable major strategic moves.",
    limitation:"The case is an analytical mapping, not evidence that Fiedler personally diagnosed Intel." },
  { id:11, slug:"fiedler-limits", title:"FIEDLER / LIMITS", eyebrow:"11 / LIMITATIONS", theme:"fiedler",
    body:"Models simplify reality. Fiedler’s framework is useful precisely because it forces diagnosis, but it cannot capture every organizational variable.",
    bullets:["Orientation is treated as relatively stable.","LPC can be conceptually difficult to interpret.","Three situational variables cannot capture every organizational factor.","Culture, technology, politics, individual differences and external shocks also matter.","Real leadership situations can be more complex than the model."] },
  { id:12, slug:"adaptive", title:"FIT → ADAPT", eyebrow:"12 / HERSEY-BLANCHARD", theme:"adaptive", speaker:"ROLL 63", caseName:"Microsoft",
    body:"Hersey and Blanchard argue that leaders should adjust their style according to follower development/readiness for a specific task.",
    bullets:["Task behaviour = direction.","Relationship behaviour = support.","The key question: what level of direction and support does this follower need for this task right now?"] },
  { id:13, slug:"s1s4", title:"DIRECT → COACH → SUPPORT → DELEGATE", eyebrow:"13 / S1—S4", theme:"adaptive",
    body:"Four styles connect direction and support to follower development/readiness. The framework is not a ranking: S4 is not universally “best.”",
    bullets:["S1 Directing — high direction, low support.","S2 Coaching — high direction, high support.","S3 Supporting — low direction, high support.","S4 Delegating — low direction, low support."] },
  { id:14, slug:"microsoft", title:"MICROSOFT", eyebrow:"14 / CASE / DEVELOPMENT", theme:"microsoft", speaker:"ROLL 63", caseName:"Microsoft",
    body:"Microsoft publicly describes a culture involving growth mindset, continuous learning, experimentation, agility and employee development. The case is interpreted through Hersey-Blanchard.",
    fact:"The study material distinguishes Microsoft’s public culture statements from the theoretical mapping.",
    lens:"Employees can differ substantially in experience and confidence, so the same manager may need different levels of direction and support.",
    analysis:"New employees can illustrate S1, developing employees S2, experienced specialists needing confidence/support S3, and highly experienced teams with clear objectives S4.",
    limitation:"Public culture material does not establish that Microsoft formally adopted Hersey-Blanchard." },
  { id:15, slug:"toyota", title:"TOYOTA PRODUCTION SYSTEM", eyebrow:"15 / CASE / INDUSTRY", theme:"toyota", speaker:"ROLL 65", caseName:"Toyota Production System",
    body:"Toyota describes TPS around waste elimination, shorter lead times, quality and easier work, with Just-in-Time and Jidoka as pillars and Kaizen as a core practice.",
    fact:"Toyota’s own descriptions cover standardized work, Jidoka, Just-in-Time and daily incremental Kaizen.",
    lens:"Different work situations inside the same production system create different leadership requirements.",
    analysis:"Standardized work emphasizes direction and process discipline; abnormalities emphasize escalation and coordination; Kaizen emphasizes support, listening and employee involvement; experienced problem-solving teams allow greater autonomy.",
    limitation:"The theory mapping is an academic interpretation, not a claim that Toyota formally adopted contingency theory." },
  { id:16, slug:"industry", title:"THE ORGANISATIONAL CITY", eyebrow:"16 / INDUSTRY + APPLICATION", theme:"city", speaker:"ROLL 65",
    body:"One organization can contain routine, crisis, innovation and developmental situations at the same time. Contingency thinking diagnoses the work context before choosing a leadership response.",
    bullets:["Manufacturing — routine production → standards and coordination.","Healthcare — emergency care → fast coordination and clear authority.","Technology — innovation → autonomy, discussion and experimentation.","Retail — peak demand → rapid deployment and operational direction.","Education — new learners → guidance and feedback.","Consulting — experienced teams → autonomy and problem ownership."] },
  { id:17, slug:"synthesis", title:"FIT / FLEX", eyebrow:"17 / FINAL SYNTHESIS", theme:"final",
    body:"Fiedler = FIT. Hersey-Blanchard = FLEX. Both reject the assumption that one leadership style is universally effective, but they structure the problem differently.",
    bullets:["Fiedler: relatively stable orientation + situational variables.","Hersey-Blanchard: adaptive direction/support + follower development.","Managerial checklist: task, urgency, structure, capability, authority, relations, direction and support."] }
];

export const viva = [
  ["What is contingency theory?","There is no universally best leadership style; effectiveness depends on the fit between leadership and situational conditions."],
  ["Who developed Fiedler’s Contingency Model?","Fred E. Fiedler."],
  ["What does LPC stand for?","Least Preferred Coworker."],
  ["What are Fiedler’s three situational variables?","Leader-member relations, task structure and position power."],
  ["What are the two Fiedler orientations?","Task-oriented and relationship-oriented."],
  ["Is Fiedler’s orientation flexible?","In the original model it is treated as relatively stable; the model emphasizes matching leader and situation."],
  ["Who developed Situational Leadership?","Paul Hersey and Ken Blanchard."],
  ["What are S1–S4?","Directing, Coaching, Supporting and Delegating."],
  ["What is the central Hersey-Blanchard idea?","Adjust direction and support according to follower development/readiness for the specific task."],
  ["What is the biggest difference?","Fiedler emphasizes leader-situation fit; Hersey-Blanchard emphasizes adaptive leadership based on follower development/readiness."],
  ["Is S4 always best?","No. The style depends on the follower and task conditions."],
  ["Why is contingency theory useful?","Organizations contain different tasks, employees, risks and environments, so leadership requirements vary."]
];

export const glossary: Record<string,string> = {
  "CONTINGENCY":"Leadership effectiveness depends on situational conditions rather than one universally best style.",
  "LPC":"Least Preferred Coworker; Fiedler’s measure used to infer leadership orientation.",
  "TASK-ORIENTED":"Emphasis on task completion, performance, deadlines, procedures and role clarity.",
  "RELATIONSHIP-ORIENTED":"Emphasis on trust, acceptance, communication, support and interpersonal relationships.",
  "LEADER-MEMBER RELATIONS":"Quality of the relationship between leader and followers.",
  "TASK STRUCTURE":"Degree to which goals, procedures and acceptable solutions are clearly defined.",
  "POSITION POWER":"Formal authority attached to the leader’s role.",
  "SITUATIONAL FAVOURABLENESS":"The structural conditions affecting a leader’s ability to exercise influence.",
  "TASK BEHAVIOUR":"Direction: telling/clarifying what needs to be done and how.",
  "RELATIONSHIP BEHAVIOUR":"Support: listening, encouraging, involving and building confidence.",
  "DEVELOPMENT / READINESS":"Follower capability and willingness/confidence for a specific task.",
  "DIRECTING":"S1: high direction, low support.",
  "COACHING":"S2: high direction, high support.",
  "SUPPORTING":"S3: low direction, high support.",
  "DELEGATING":"S4: low direction, low support.",
  "FIT":"Fiedler memory line: match leader orientation to situation.",
  "ADAPTATION":"Hersey-Blanchard memory line: adjust leadership behaviour to follower/task needs."
};
