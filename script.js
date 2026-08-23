(() => {
  "use strict";

  const header = document.querySelector("[data-header]");
  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 24);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const canvas = document.querySelector("#soft-canvas");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!canvas) return;

  const context = canvas.getContext("2d");
  if (!context) return;

  const pointer = { x: 0, y: 0, active: false };
  const blob = {
    centerX: 0,
    centerY: 0,
    radius: 0,
    points: [],
    count: 22
  };
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let animationFrame = 0;

  const resize = () => {
    const bounds = canvas.getBoundingClientRect();
    width = bounds.width;
    height = bounds.height;
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    blob.centerX = width > 900 ? width * 0.76 : width * 0.7;
    blob.centerY = height * 0.44;
    blob.radius = Math.min(width, height) * (width > 900 ? 0.27 : 0.34);
    blob.points = Array.from({ length: blob.count }, (_, index) => ({
      angle: (Math.PI * 2 * index) / blob.count,
      offset: 0,
      velocity: 0,
      phase: Math.random() * Math.PI * 2
    }));
  };

  const setPointer = (event) => {
    const bounds = canvas.getBoundingClientRect();
    pointer.x = event.clientX - bounds.left;
    pointer.y = event.clientY - bounds.top;
    pointer.active = true;
  };

  const drawGrid = () => {
    context.save();
    context.strokeStyle = "rgba(170, 221, 195, 0.075)";
    context.lineWidth = 1;
    const spacing = 74;
    for (let x = width % spacing; x < width; x += spacing) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, height);
      context.stroke();
    }
    for (let y = height % spacing; y < height; y += spacing) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(width, y);
      context.stroke();
    }
    context.restore();
  };

  const drawBlob = (time) => {
    const coordinates = blob.points.map((point, index) => {
      const wave = reducedMotion ? 0 : Math.sin(time * 0.0007 + point.phase) * blob.radius * 0.045;
      const baseX = blob.centerX + Math.cos(point.angle) * (blob.radius + point.offset + wave);
      const baseY = blob.centerY + Math.sin(point.angle) * (blob.radius + point.offset + wave);

      if (pointer.active && !reducedMotion) {
        const distance = Math.hypot(pointer.x - baseX, pointer.y - baseY);
        if (distance < blob.radius * 0.85) {
          const influence = 1 - distance / (blob.radius * 0.85);
          point.velocity -= influence * 1.3;
        }
      }
      point.velocity += -point.offset * 0.018;
      point.velocity *= 0.91;
      point.offset += point.velocity;

      const nextAngle = (Math.PI * 2 * (index + 1)) / blob.count;
      return {
        x: blob.centerX + Math.cos(point.angle) * (blob.radius + point.offset + wave),
        y: blob.centerY + Math.sin(point.angle) * (blob.radius + point.offset + wave),
        nextAngle
      };
    });

    const gradient = context.createRadialGradient(
      blob.centerX - blob.radius * 0.35,
      blob.centerY - blob.radius * 0.35,
      blob.radius * 0.05,
      blob.centerX,
      blob.centerY,
      blob.radius * 1.2
    );
    gradient.addColorStop(0, "rgba(199, 255, 80, 0.28)");
    gradient.addColorStop(0.52, "rgba(78, 210, 180, 0.17)");
    gradient.addColorStop(1, "rgba(8, 30, 26, 0.02)");

    context.save();
    context.beginPath();
    coordinates.forEach((point, index) => {
      const next = coordinates[(index + 1) % coordinates.length];
      const midpointX = (point.x + next.x) / 2;
      const midpointY = (point.y + next.y) / 2;
      if (index === 0) context.moveTo(midpointX, midpointY);
      context.quadraticCurveTo(point.x, point.y, midpointX, midpointY);
    });
    context.closePath();
    context.fillStyle = gradient;
    context.fill();
    context.strokeStyle = "rgba(167, 255, 216, 0.45)";
    context.lineWidth = 1;
    context.stroke();

    context.clip();
    context.strokeStyle = "rgba(199, 255, 80, 0.12)";
    const step = Math.max(28, blob.radius / 8);
    for (let y = blob.centerY - blob.radius; y <= blob.centerY + blob.radius; y += step) {
      context.beginPath();
      context.moveTo(blob.centerX - blob.radius * 1.1, y);
      context.bezierCurveTo(blob.centerX - blob.radius * .2, y + 22, blob.centerX + blob.radius * .2, y - 22, blob.centerX + blob.radius * 1.1, y);
      context.stroke();
    }
    context.restore();

    coordinates.forEach((point, index) => {
      if (index % 2 !== 0) return;
      context.beginPath();
      context.arc(point.x, point.y, 1.7, 0, Math.PI * 2);
      context.fillStyle = "rgba(199, 255, 80, 0.7)";
      context.fill();
    });
  };

  const render = (time = 0) => {
    context.clearRect(0, 0, width, height);
    drawGrid();
    drawBlob(time);
    if (!reducedMotion) animationFrame = requestAnimationFrame(render);
  };

  resize();
  render();
  window.addEventListener("resize", resize, { passive: true });
  canvas.addEventListener("pointermove", setPointer, { passive: true });
  canvas.addEventListener("pointerleave", () => { pointer.active = false; }, { passive: true });

  window.addEventListener("pagehide", () => cancelAnimationFrame(animationFrame), { once: true });
})();
