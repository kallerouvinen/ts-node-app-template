/**
 * Clears previously loggerPrinted line and prints a new one.
 * Useful as a replacement for console.log in progress logging.
 * @param {string} str - String to print
 */
export function loggerPrint(str: string) {
  process.stdout.write("\r\x1b[K");
  process.stdout.write(str);
}
