const crypto = require("crypto");
const { Buffer } = require("buffer");
// import { isEmpty, isEqual, xorWith } from "lodash";

const ALGORITHM = "aes-256-cbc";
const CIPHER_KEY = "@ZETTABYTES#ROOST$ENTERPRISE&IO?"; // Same key used across Repositorties
const BLOCK_SIZE = 16;

const encryptedText =
  "aWQsbmFtZSxkZXNjcmlwdGlvbixwcmljZQowLEpvaG4gd2ljayx0aGlzIGlzIGEgdW5pcXVlIGRlc2NyaXB0aW9uLDE0Ljk5CjEsSm9obiBEb2UsVGhpcyBpcyBhIGR1bW15IGRlc2NyaXB0aW9uLDE1Ljk5CjIsSmFuZSBTbWl0aCxBbm90aGVyIGR1bW15IGRlc2NyaXB0aW9uLDI1Ljk5CjMsSmFtZXMgSm9obnNvbixZZXQgYW5vdGhlciBkdW1teSBkZXNjcmlwdGlvbiwxOS45OQo0LFBhdHJpY2lhIFdpbGxpYW1zLFRoaXMgaXMgYSBkaWZmZXJlbnQgZHVtbXkgZGVzY3JpcHRpb24sMjkuOTkKNSxSb2JlcnQgQnJvd24sT25lIG1vcmUgZHVtbXkgZGVzY3JpcHRpb24sMzUuOTkKNixMaW5kYSBEYXZpcyxUaGlzIGlzIHRoZSBsYXN0IGR1bW15IGRlc2NyaXB0aW9uLDQwLjk5";

// Encrypts plain text into cipher text
// export
const encrypt = (plainText) => {
  let cipherText;
  try {
    if (plainText === "") {
      return "";
    }
    const iv = crypto.randomBytes(BLOCK_SIZE);
    const cipher = crypto.createCipheriv(ALGORITHM, CIPHER_KEY, iv);
    cipherText = cipher.update(plainText, "utf8", "hex");
    cipherText += cipher.final("hex");
    cipherText = iv.toString("hex") + cipherText;
  } catch (e) {
    return plainText;
  }
  return cipherText;
};

// Decrypts cipher text into plain text
// export
const decrypt = (cipherText) => {
  let decrypted;
  try {
    if (cipherText === "") {
      return "";
    }
    const contents = Buffer.from(cipherText, "hex");
    const iv = contents.slice(0, BLOCK_SIZE);
    const textBytes = contents.slice(BLOCK_SIZE);
    const decipher = crypto.createDecipheriv(ALGORITHM, CIPHER_KEY, iv);
    decrypted = decipher.update(textBytes, "hex", "utf8");
    decrypted += decipher.final("utf8");
  } catch (e) {
    return cipherText;
  }
  console.log(decrypted);
  return decrypted;
};

decrypt(encryptedText);

// export const isArrayEqual = (x: any, y: any) => isEmpty(xorWith(x, y, isEqual));
