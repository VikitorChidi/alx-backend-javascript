export default function createInt8TypedArray(
  length = 0,
  position = 0,
  value = 0
) {
  if (position >= length) {
    throw new Error("Position outside range");
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
