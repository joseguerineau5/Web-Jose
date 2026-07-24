import {
  initNavigation,
  initWhatsAppFloat,
  initWhatsAppLinks,
  initSocialLinks,
} from "./modules/navigation.js";
import { initAnimations } from "./modules/animations.js";
import { initFaq } from "./modules/forms.js";
import { initTestimonialsCarousel } from "./modules/testimonials.js";

document.addEventListener("DOMContentLoaded", () => {
  initWhatsAppLinks();
  initNavigation();
  initAnimations();
  initFaq();
  initWhatsAppFloat();
  initSocialLinks();
  initTestimonialsCarousel();
});
