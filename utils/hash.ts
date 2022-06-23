import {crypto} from '../deps.ts'



const toHexString = (bytes: ArrayBuffer): string =>
  new Uint8Array(bytes).reduce(
    (str, byte) => str + byte.toString(16).padStart(2, "0"),
    "",
  )



export const getTableHash = async (inputString: string) => {
  const inputBytes = new TextEncoder().encode(inputString)
  return toHexString(await crypto.subtle.digest({ name: "BLAKE3", length: 8 }, inputBytes))
}