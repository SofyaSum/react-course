import { nanoid } from "nanoid";
import { db } from "./firebase";

// const d = {
//   conversations: {
//     room1: {
//       title: "room1",
//       // value: "",
//     }
//   }
//   messages: {}
// }

export const getMessagesApi = () => {
  return db.ref("messages").get();
};

export const sendMessageApi = (roomId, message) => {
  return db
    .ref("conversations")
    .child(roomId)
    .push({ id: nanoid(), ...message });
};
