# CONTINGENCY THEORY — THE LEADERSHIP LAB

A production-oriented React + Three.js presentation experience for BMS Organisational Behaviour, Unit 3.

## Run

```bash
npm install
npm run dev
```

Then open the Vite URL.

## Build

```bash
npm run build
npm run preview
```

## Controls

- Scroll: cinematic chapter progression
- P: Presenter mode
- R: Revision mode
- M: reduced-motion toggle
- ESC: close overlay
- Right-side rail: chapter jump
- LPC slider: interactive Fiedler orientation visualization
- Fiedler triangle: inspect the three situational variables
- Follower simulator: conceptual competence/confidence visualization
- Member portals: jump into each member-owned chapter

## Architecture

- `src/World.tsx`: persistent WebGL world, camera choreography and environment objects
- `src/content.ts`: academic content and viva/glossary data
- `src/App.tsx`: chapter storytelling, interactions and modes
- `src/styles.css`: cinematic visual system

## Academic grounding

The content is based on the supplied Group 8 study material. The study material explicitly distinguishes documented company facts from contingency-theory interpretations; the implementation preserves that distinction using FACT / THEORY LENS / ANALYSIS / LIMITATION blocks.

The case studies should not be presented as proof that the companies formally adopted Fiedler or Hersey-Blanchard unless separately verified.
