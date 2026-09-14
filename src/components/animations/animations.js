/**
 * Reusable Motion / Framer Motion Animation Variants & Interactive Props
 * Compatible with 'motion/react' (Motion v13+) & 'framer-motion'
 */

// ==========================================
// 1. CURATED EASING CURVES & TIMINGS
// ==========================================
export const transitions = {
  smooth: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  fast: { duration: 0.2, ease: [0.25, 1, 0.5, 1] },
  spring: { type: "spring", stiffness: 400, damping: 28 },
  gentleSpring: { type: "spring", stiffness: 260, damping: 20 },
  dropdown: { duration: 0.26, ease: [0.16, 1, 0.3, 1] },
  drawer: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
};

// ==========================================
// 2. FADE ANIMATION VARIANTS
// ==========================================
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.smooth,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
  exit: {
    opacity: 0,
    y: 12,
    transition: { duration: 0.2 },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.smooth,
  },
  exit: {
    opacity: 0,
    x: -16,
    transition: { duration: 0.2 },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.smooth,
  },
  exit: {
    opacity: 0,
    x: 16,
    transition: { duration: 0.2 },
  },
};

// ==========================================
// 3. SCALE & POP VARIANTS
// ==========================================
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.smooth,
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    transition: { duration: 0.18 },
  },
};

export const scaleInSpring = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.gentleSpring,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.18 },
  },
};

// ==========================================
// 4. STAGGER CONTAINERS
// ==========================================
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
};

// ==========================================
// 5. BUTTON & INTERACTIVE CLICK / HOVER PROPS
// ==========================================
export const btnClick = {
  whileHover: { scale: 1.025 },
  whileTap: { scale: 0.96 },
  transition: transitions.fast,
};

export const btnTapOnly = {
  whileTap: { scale: 0.95 },
  transition: { duration: 0.1 },
};

export const subtleHoverLift = {
  whileHover: { y: -2 },
  whileTap: { y: 0, scale: 0.98 },
  transition: transitions.fast,
};

export const iconHoverRotate = {
  whileHover: { rotate: 15, scale: 1.1 },
  whileTap: { scale: 0.9 },
  transition: transitions.fast,
};

// ==========================================
// 6. DROPDOWNS & MENUS (Mega Menus, Nav Dropdowns)
// ==========================================
export const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -8,
    scaleY: 0.98,
    transformOrigin: "top",
  },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transformOrigin: "top",
    transition: transitions.dropdown,
  },
  exit: {
    opacity: 0,
    y: -6,
    scaleY: 0.98,
    transformOrigin: "top",
    transition: { duration: 0.16, ease: "easeIn" },
  },
};

// ==========================================
// 7. SIDE DRAWERS & MODALS
// ==========================================
export const drawerLeftVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: transitions.drawer,
  },
  exit: {
    x: "-100%",
    transition: { duration: 0.24, ease: [0.16, 1, 0.3, 1] },
  },
};

export const drawerRightVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: transitions.drawer,
  },
  exit: {
    x: "100%",
    transition: { duration: 0.24, ease: [0.16, 1, 0.3, 1] },
  },
};

export const modalVariants = {
  hidden: { opacity: 0, scale: 0.96, y: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: transitions.smooth,
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: -10,
    transition: { duration: 0.2 },
  },
};

// ==========================================
// 8. ACCORDION / EXPANDABLE ITEMS
// ==========================================
export const accordionVariants = {
  collapsed: {
    opacity: 0,
    height: 0,
    overflow: "hidden",
    transition: { duration: 0.22, ease: [0.04, 0.62, 0.23, 0.98] },
  },
  open: {
    opacity: 1,
    height: "auto",
    overflow: "hidden",
    transition: { duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] },
  },
};

// ==========================================
// 9. TEXT REVEAL ANIMATIONS (Modern Masked Slide & Fade)
// ==========================================
export const textRevealContainer = (staggerChildren = 0.04, delayChildren = 0.05) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textRevealWord = {
  hidden: {
    opacity: 0,
    y: "120%",
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const paragraphReveal = {
  hidden: { opacity: 0, y: 25 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

