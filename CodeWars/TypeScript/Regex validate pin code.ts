/*
 *ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
 * If the function is passed a valid PIN string, return true, else return false.
 */

export class Kata {
  static validatePin(pin: string): boolean {
    const regex = /^[0-9]{4}$|^[0-9]{6}$/;
    return regex.test(pin);
  }
}
