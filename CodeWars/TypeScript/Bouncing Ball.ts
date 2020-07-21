/*
 *A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
 *He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
 *His mother looks out of a window 1.5 meters from the ground.
 *How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
 */
export function bouncingBall(
  h: number,
  bounce: number,
  window: number
): number {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  let count = 1;
  while (h * bounce > window) {
    count += 2;
    h *= bounce;
  }
  return count;
}
