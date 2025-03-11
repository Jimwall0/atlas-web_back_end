import ClassRoom from './0-classroom';

const initializeRooms = () => {
  const list = [];
  const one = new ClassRoom(19);
  const two = new ClassRoom(20);
  const three = new ClassRoom(34);
  list[0] = one._maxStudentsSize;
  list[1] = two._maxStudentsSize;
  list[2] = three._maxStudentsSize;
  return list;
};

export default initializeRooms;
