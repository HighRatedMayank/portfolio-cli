export const commands = {
  help: `
🧭 HELP :: COMMAND INDEX
──────────────────────────────────────────────
> about ......... 📖  Learn about Mayank Vishwakarma
> projects ...... 🚀  Explore featured creations
> skills ........ 🛠️  View technical stack
> extracurricular 👥  Clubs & content creation
> education ..... 🎓  Academic milestones
> contact ....... 📞  Reach out or connect
> sudo .......... 🔐  Secret command? Try it
> clear ......... 🧹  Clear terminal output

💡 Tip: Type any command and hit [Enter] to explore.
`,

  about: `
👨‍💻 ABOUT :: MAYANK VISHWAKARMA
──────────────────────────────────────────────
I am an aspiring software developer with a strong foundation in Data Structures and Algorithms. My journey began with competitive programming, and I am now channeling that logic into building modern web applications. I thrive on strategy and problem-solving, which fuels both my coding sessions and my daily games of Chess. As a tech enthusiast, I am always eager to learn new tools and turn complex ideas into reality.


🎯 Always learning, building, and pushing boundaries.
`,

  projects: `
🚀 PROJECTS :: FEATURED & PRODUCTION-GRADE
──────────────────────────────────────────────
💻 Note Stack — Real-Time Collaborative Notes Platform
> Built a Notion-style rich-text editor using Lexical with autosave, a sticky toolbar, and a hierarchical document
  tree featuring drag-and-drop reorganization, collapsible sections, and fast search.
> Architected real-time collaboration & billing workflows, combining Yjs/WebSockets for live multi-user cursors
  and presence indicators with Razorpay payment gateway integration and Firestore tiered access control.
> Tech: Next.js • Firebase • Lexical • Yjs • Razorpay
> 🔗 Repo: https://github.com/HighRatedMayank/note-stack

🌌 Distributed Task Orchestrator
> Architected a fault-tolerant distributed system in Go capable of coordinating async jobs across a dynamic
  cluster, utilizing a leader-follower pattern to manage task assignment and prevent double-execution.
> Implemented distributed locking and leader election using Redis (SETNX) primitives, ensuring strong
  consistency and "at-least-once" delivery guarantees even during network partitions or node crashes.
> Optimized database throughput by implementing connection pooling via pgxpool, managing high-concurrency
  write loads significantly more efficiently than standard ORM implementations.
> Tech: Go • Postgres • Redis • Docker 
> 🔗 Repo: https://github.com/HighRatedMayank/task-scheduler

🆔 P2P File Sharing
> Engineered a secure real-time P2P file-sharing platform with end-to-end encryption, integrating a WebSocket
  signaling server and Redis Hashes for peer discovery to reduce connection latency by 50%.
> Optimized system scalability & network performance using WebRTC DataChannels and implementing
  conditional SFU scaling, maintaining low-latency bandwidth distribution across 1,000+ concurrent peers.
> Tech: Go • Redis • WebSocket • WebRTC • SFU
> 🔗 Repo: https://github.com/HighRatedMayank/P2P-GO
`,

  skills: `
🛠️ SKILLS :: ENGINEERING TOOLCHAIN
──────────────────────────────────────────────
💻 Languages
> C++ • C • Python • Typescript • Javascript

🌐 Frameworks & Libraries
> PyTorch • TensorFlow • React • Next.js • Node.js • MongoDB 

🔧 Tools & Platforms
> Git • VS Code • Linux • Antigravity

🧠 Domains
> Machine Learning • Web Development • Data Structures Algorithms
`,

  extracurricular: `
👥 EXTRACURRICULAR :: CLUBS & TEAMS
──────────────────────────────────────────────
🔹 Rotaract club of youth - IIIT Gwalior
> Head of Operations

🔹 Team Member - Aurora'24
> Content Team

`,

  education: `
🎓 EDUCATION :: ACADEMIC BACKGROUND
──────────────────────────────────────────────
🏛️ ABV - Indian Institute of Information Technology and Management, Gwalior
> Branch: Electrical and Electronics Engineering
> Year: 2023-2027

`,

  contact: `
📞 CONTACT :: CONNECT WITH MAYANK

──────────────────────────────────────────────
📧 Email ...... 🔗 Copy Email: mailto:shreshth.vishwakarma.7@gmail.com
🐙 GitHub ..... 🔗 Profile: https://github.com/HighRatedMayank
💼 LinkedIn ... 🔗 Connect: https://www.linkedin.com/in/mayank-vishwakarma-38146a279/
🧠 Leetcode ... 🔗 Profile: https://leetcode.com/HighRatedMayank

> Open to collaborations, hackathons & Software-driven projects.
`,

  sudo: `
🔐 ACCESS DENIED :: NICE TRY
──────────────────────────────────────────────
> Root privileges required.
> Only Mayank has administrative clearance.


💡 Curiosity is cool — intrusion isn’t 😉
`,

  clear: "",
};
