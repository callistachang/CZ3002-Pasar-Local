import db from "./firebase"
import { collection, getDocs, doc, getDocFromCache } from "firebase/firestore"

export async function getAllDocuments(colName) {
  const ref = collection(db, colName)
  const snapshot = await getDocs(ref)
  const res = snapshot.docs.map((doc) => doc.data())
  return res
}
