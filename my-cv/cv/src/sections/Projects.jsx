import React from "react";


const projects = [
{ id: 1, title: "Note Taker", desc: "Add/edit/delete, localStorage persist." },
{ id: 2, title: "Random User Card", desc: "Fetch API + smooth UI." },
{ id: 3, title: "Text Analyzer", desc: "Counts chars/words/sentences." },
];


export default function Projects() {
return (
<div className="stack">
<h2>Projects</h2>
<div className="grid">
{projects.map((p) => (
<article key={p.id} className="card">
<h3>{p.title}</h3>
<p>{p.desc}</p>
{/* Later: link to live demo / GitHub */}
</article>
))}
</div>
</div>
);
}