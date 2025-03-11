import ClassRoom from "./0-classroom"
const initializeRooms = () => {
  let list = [];
  const one = new ClassRoom(19);
  const two = new ClassRoom(20);
  const three = new ClassRoom(34);
  list[0] = one;
  list[1] = two;
  list[2] = three;
  return list;
}