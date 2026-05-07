function fire(pattern: number | number[]) {
  try { navigator.vibrate?.(pattern); } catch {}
}

export const haptic = {
  select:  () => fire(5),
  light:   () => fire(8),
  medium:  () => fire(18),
  heavy:   () => fire(35),
  success: () => fire([12, 25, 12]),
  error:   () => fire([40, 20, 40]),
};
