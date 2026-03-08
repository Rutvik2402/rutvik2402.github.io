/* =====================================================
   RUTVIK RAVAL · Portfolio · script.js
===================================================== */

// ── AI CONFIG ─────────────────────────────────────────
const AI = {
    key: "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",
    model: "llama-3.1-8b-instant",
    tokens: 500,
    system: `
  You are an AI assistant for Rutvik Raval's portfolio website. Your job is to answer recruiter, hiring manager, and collaborator questions about Rutvik clearly, professionally, and concisely.

Keep answers helpful, friendly, and under 4 sentences unless more detail is specifically requested.

--------------------------------
ABOUT RUTVIK RAVAL
--------------------------------

Name: Rutvik Raval  
Email: rrutvik41@gmail.com  
Phone: +91 97734 84053  
Location: Surat, Gujarat, India (available for global opportunities)

Role: Senior Software Engineer — OTA Integration

Rutvik is a backend engineer with 4+ years of professional experience designing scalable backend systems, modernizing legacy platforms, and building high-performance APIs.

He specializes in Python-based backend architectures, OTA integrations, and large-scale system migrations.

--------------------------------
PROFESSIONAL EXPERIENCE
--------------------------------

Company: STAAH (An Access Group Company, UK)  
Role: Senior Software Engineer — OTA Integration  
Duration: September 2021 – September 2025  
Location: Surat, Gujarat, India

Rutvik worked on global hospitality technology platforms integrating with Online Travel Agencies (OTAs).

--------------------------------
KEY ACHIEVEMENTS
--------------------------------

• Migrated 90+ OTA integration scripts from Perl to Python, reducing technical debt by 35%.
• Architected a unified Python ARI Push System consolidating 85+ legacy scripts, reducing OTA onboarding time by 80%.
• Designed a flag-based modular backend framework supporting 85+ global OTA partners.
• Built a proactive failure alerting system performing automated checks every 30 minutes.
• Led the end-to-end architecture and migration of OTA reservation flows from Perl to Python.
• Built reusable backend modules for MySQL, Redis, AWS SQS, and DynamoDB, improving developer productivity by 25%.
• Mentored and guided 5+ junior engineers through architecture reviews, code reviews, and engineering best practices.

--------------------------------
TECHNICAL SKILLS
--------------------------------

Backend Engineering: Python, Perl, FastAPI, Flask, Django, Microservices Architecture
API & Integrations: REST APIs, OTA Integrations, ARI Push Systems, Reservation Workflows
Cloud & DevOps: AWS, Docker, Git, Linux, CRON jobs, SQS
Databases: MySQL, PostgreSQL, SQLite, Redis, Amazon DynamoDB
System Design: Legacy modernization (Perl → Python), API migrations, scalable backend architectures
Leadership: Technical mentoring, architectural design, backend best practices

--------------------------------
EDUCATION
--------------------------------

Bachelor of Engineering in Computer Engineering  
Gujarat Technological University  
Graduated: 2021 · CGPA: 8.42

--------------------------------
RESEARCH
--------------------------------

Published research paper in the International Journal of Computer Applications (IJCA):
"Face Mask, Social Distance and Body Temperature Detector"  
Authors: Raval R., Patel J., Patel H.  
Volume 184, Number 13, Pages 38–43 (2022)

--------------------------------
AWARDS
--------------------------------

Strategic Recognition Award at STAAH for leading critical backend API migrations from Perl to Python and improving system reliability and maintainability.

--------------------------------
INTERESTS
--------------------------------

Technology & Innovation · Investing & Finance · Cinema · Global Travel

--------------------------------
ASSISTANT BEHAVIOR
--------------------------------

• Be professional, friendly, and concise.
• Prefer short answers (under 4 sentences).
• If asked about salary or confidential info, redirect to the contact form.
• If asked how to hire or collaborate, suggest email or LinkedIn.
  `
};

// ── PARTICLES CANVAS ──────────────────────────────────
(function initParticles() {
    const canvas = document.getElementById("particles");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H, dots = [];

    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    // Fewer particles on mobile for performance
    const count = window.innerWidth < 768 ? 30 : 60;
    for (let i = 0; i < count; i++) {
        dots.push({
            x: Math.random() * 1920,
            y: Math.random() * 1080,
            r: Math.random() * 1.5 + .3,
            vx: (Math.random() - .5) * .25,
            vy: (Math.random() - .5) * .25,
            a: Math.random() * .5 + .1
        });
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        dots.forEach(d => {
            d.x += d.vx; d.y += d.vy;
            if (d.x < 0) d.x = W; if (d.x > W) d.x = 0;
            if (d.y < 0) d.y = H; if (d.y > H) d.y = 0;
            ctx.beginPath();
            ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0,255,135,${d.a})`;
            ctx.fill();
        });

        // Lines between close dots (skip on mobile for perf)
        if (window.innerWidth >= 768) {
            for (let i = 0; i < dots.length; i++) {
                for (let j = i + 1; j < dots.length; j++) {
                    const dx = dots[i].x - dots[j].x;
                    const dy = dots[i].y - dots[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(dots[i].x, dots[i].y);
                        ctx.lineTo(dots[j].x, dots[j].y);
                        ctx.strokeStyle = `rgba(0,255,135,${.06 * (1 - dist / 120)})`;
                        ctx.lineWidth = .5;
                        ctx.stroke();
                    }
                }
            }
        }
        requestAnimationFrame(draw);
    }
    draw();
})();

// ── UPTIME COUNTER ────────────────────────────────────
(function uptime() {
    const el = document.getElementById("uptime-text");
    if (!el) return;
    const start = Date.now();
    setInterval(() => {
        const s   = Math.floor((Date.now() - start) / 1000);
        const h   = String(Math.floor(s / 3600)).padStart(2, "0");
        const m   = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
        const sec = String(s % 60).padStart(2, "0");
        el.textContent = `uptime ${h}:${m}:${sec}`;
    }, 1000);
})();

// ── SIDEBAR ROLE TYPER ────────────────────────────────
(function roleTyper() {
    const el = document.getElementById("sidebarRole");
    if (!el) return;
    const phrases = ["Senior SWE", "Python Expert", "Backend Arch", "OTA Specialist"];
    let pi = 0, ci = 0, del = false;
    function tick() {
        const p = phrases[pi];
        el.textContent = del ? p.slice(0, --ci) : p.slice(0, ++ci);
        let t = del ? 60 : 100;
        if (!del && ci === p.length) { t = 1600; del = true; }
        else if (del && ci === 0) { del = false; pi = (pi + 1) % phrases.length; t = 350; }
        setTimeout(tick, t);
    }
    tick();
})();

// ── SIDEBAR HELPERS ───────────────────────────────────
const sidebar     = document.getElementById("sidebar");
const hamburgerBtn= document.getElementById("hamburger");
const overlay     = document.getElementById("sidebarOverlay");

function openSidebar() {
    sidebar.classList.add("open");
    overlay.classList.add("visible");
    hamburgerBtn.classList.add("open");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
}

function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("visible");
    hamburgerBtn.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
}

hamburgerBtn?.addEventListener("click", () => {
    sidebar.classList.contains("open") ? closeSidebar() : openSidebar();
});

overlay?.addEventListener("click", closeSidebar);

// Close sidebar on ESC
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeSidebar();
});

// ── SMOOTH SCROLL + ACTIVE NAV ────────────────────────
const navItems   = document.querySelectorAll(".nav-item");
const mbnItems   = document.querySelectorAll(".mbn-item");
const sections   = document.querySelectorAll("section[id]");

// NOTE: Renamed from scrollTo → scrollToSection to avoid overriding
// the native window.scrollTo API (critical mobile navigation bug fix).
function scrollToSection(href) {
    const target = document.querySelector(href);
    if (!target) return;
    // Account for mobile topbar offset on mobile
    const isMobile = window.innerWidth <= 960;
    const offset = isMobile ? 56 : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
}

navItems.forEach(item => {
    item.addEventListener("click", e => {
        e.preventDefault();
        scrollToSection(item.getAttribute("href"));
        closeSidebar();
    });
});

mbnItems.forEach(item => {
    item.addEventListener("click", e => {
        e.preventDefault();
        scrollToSection(item.getAttribute("href"));
    });
});

// Active nav highlighting via IntersectionObserver
function setActiveNav(id) {
    navItems.forEach(n => n.classList.toggle("active", n.dataset.sec === id));
    mbnItems.forEach(n => n.classList.toggle("active", n.dataset.sec === id));
}

sections.forEach(s => {
    new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
    }, { rootMargin: "-40% 0px -50% 0px" }).observe(s);
});

// ── REVEAL ON SCROLL ──────────────────────────────────
document.querySelectorAll(".reveal").forEach(el => {
    new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: .08 }).observe(el);
});

// ── SKILL BAR ANIMATION ───────────────────────────────
const skillsSection = document.getElementById("skills");
if (skillsSection) {
    new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll(".prof-fill").forEach(b => {
                    b.style.width = b.dataset.w + "%";
                });
            }
        });
    }, { threshold: .15 }).observe(skillsSection);
}

// ── CONTACT FORM ──────────────────────────────────────
document.getElementById("contactForm")?.addEventListener("submit", async e => {
    e.preventDefault();
    const btn  = document.getElementById("sendBtn");
    const note = document.getElementById("formNote");
    btn.disabled = true;
    btn.textContent = "Sending...";
    const fd = new FormData(e.target);
    try {
        const res = await fetch("https://formspree.io/f/xgonvokp", {
            method: "POST",
            body: fd,
            headers: { Accept: "application/json" }
        });
        if (res.ok) {
            note.textContent = "✓ Message sent! Rutvik will get back to you soon.";
            e.target.reset();
        } else {
            note.textContent = "⚠ Something went wrong. Email directly!";
        }
    } catch {
        note.textContent = "⚠ Network error. Try again.";
    }
    btn.disabled = false;
    btn.textContent = "Send Message →";
});

// ── AI CHAT ───────────────────────────────────────────
const chatFab  = document.getElementById("chatFab");
const chatWin  = document.getElementById("chatWin");
const chatX    = document.getElementById("chatX");
const chatIn   = document.getElementById("chatIn");
const chatGo   = document.getElementById("chatGo");
const chatBody = document.getElementById("chatBody");
let history    = [];

const toggleChat = (open) => {
    const state = open !== undefined ? open : !chatWin.classList.contains("open");
    chatWin.classList.toggle("open", state);
    if (state) setTimeout(() => chatIn?.focus(), 300);
};

chatFab?.addEventListener("click", () => toggleChat());
chatX?.addEventListener("click",  () => toggleChat(false));

function addMsg(text, role) {
    const wrap   = document.createElement("div");
    wrap.className = `cmsg ${role}`;
    const bubble = document.createElement("div");
    bubble.className = "cbubble";
    bubble.textContent = text;
    wrap.appendChild(bubble);
    chatBody.appendChild(wrap);
    chatBody.scrollTop = chatBody.scrollHeight;
    return bubble;
}

function showTyping() {
    const wrap = document.createElement("div");
    wrap.className = "cmsg bot";
    wrap.id = "tdots";
    wrap.innerHTML = `<div class="cbubble"><span class="typing"><span></span><span></span><span></span></span></div>`;
    chatBody.appendChild(wrap);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function hideTyping() { document.getElementById("tdots")?.remove(); }

async function sendMsg() {
    const text = chatIn.value.trim();
    if (!text) return;
    chatIn.value = "";
    chatGo.disabled = true;
    addMsg(text, "user");
    history.push({ role: "user", content: text });
    showTyping();

    try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${AI.key}`
            },
            body: JSON.stringify({
                model: AI.model,
                max_tokens: AI.tokens,
                messages: [
                    { role: "system", content: AI.system },
                    ...history
                ]
            })
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error.message);
        const reply = data.choices[0].message.content;
        history.push({ role: "assistant", content: reply });
        hideTyping();
        addMsg(reply, "bot");
    } catch (err) {
        hideTyping();
        addMsg("⚠️ Connection issue. Reach Rutvik at rrutvik41@gmail.com!", "bot");
        console.error(err);
    } finally {
        chatGo.disabled = false;
        chatIn.focus();
    }
}

chatGo?.addEventListener("click", sendMsg);
chatIn?.addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMsg(); }
});