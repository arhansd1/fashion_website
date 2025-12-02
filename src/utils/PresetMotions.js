// Animation Presets for Motion Components

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const fadeInUpDelayed = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay }
});

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

export const fadeInScaleDelayed = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, delay }
});

export const hoverLift = {
  whileHover: { y: -5, transition: { duration: 0.2 } }
};

export const hoverScale = {
  whileHover: { scale: 1.03, transition: { duration: 0.2 } },
  whileTap: { scale: 0.98 }
};

export const hoverScaleSmall = {
  whileHover: { scale: 1.02, transition: { duration: 0.3 } }
};

export const blobAnimation = (duration = 10, delay = 0) => ({
  animate: { scale: [1, 1.1, 1] },
  transition: {
    duration,
    repeat: Infinity,
    repeatType: "reverse",
    delay
  }
});

export const viewportOnce = {
  viewport: { once: true }
};

// Combined presets for common patterns
export const cardHover = {
  ...hoverLift,
  ...viewportOnce
};

export const fadeInUpOnView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay }
});