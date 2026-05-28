const statusDate = document.getElementById("status-date");

if (statusDate) {
  const now = new Date();
  statusDate.textContent = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

if (window.anime) {
  anime({
    targets: [".topbar", ".hero-copy", ".signal-panel", ".hero-strip .strip-card", ".reveal"],
    opacity: [0, 1],
    translateY: [18, 0],
    easing: "easeOutCubic",
    duration: 700,
    delay: anime.stagger(80),
  });

  anime({
    targets: [".manifesto-card", ".plan-card", ".status-board", ".status-side .status-card", ".philosophy-card"],
    opacity: [0, 1],
    translateY: [14, 0],
    easing: "easeOutQuad",
    duration: 600,
    delay: anime.stagger(60, { start: 240 }),
  });
}
