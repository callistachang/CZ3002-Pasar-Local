import {
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
  getDoc,
  deleteDoc,
  updateDoc,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore"
import db from "./firebase"

export async function getAllDocuments(colName) {
  const docsSnap = await getDocs(collection(db, colName))
  const docsData = docsSnap.docs.map((doc) => {
    const data = doc.data()
    data.id = doc.id
    return data
  })
  return docsData
}

export async function getDocument(colName, id) {
  const docRef = doc(db, colName, id)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    const data = docSnap.data()
    data.id = docSnap.id
    return data
  } else {
    console.log("No such document!")
    return null
  }
}

export async function addNewDocument(colName, data) {
  try {
    const docRef = await addDoc(collection(db, colName), data)
    console.log("Document written with ID: ", docRef.id)
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}

export async function patchDocument(colName, data, id) {
  await updateDoc(doc(db, colName, id), data)
}

export async function putDocument(colName, data, id) {
  await setDoc(doc(db, colName, id), data)
}

export async function deleteDocument(colName, id) {
  await deleteDoc(doc(db, colName, id))
}

export async function getVendorsFromCategory(category) {
  const ref = collection(db, "vendor")
  if (typeof category == "string") {
    const q = query(ref, where("vendorCategory", "==", category.toLowerCase()))
    const querySnapshot = await getDocs(q)
    const docsData = querySnapshot.docs.map((doc) => {
      const data = doc.data()
      data.id = doc.id
      return data
    })
    return docsData
  } else {
    return []
  }
}

export async function getProductsFromVendor(vendorId) {
  const ref = collection(db, "product")
  const q = query(ref, where("vendorId", "==", vendorId))
  const querySnapshot = await getDocs(q)
  const docsData = querySnapshot.docs.map((doc) => {
    const data = doc.data()
    data.id = doc.id
    return data
  })
  return docsData
}

export async function getAllIds(colName) {
  const docsSnap = await getDocs(collection(db, colName))
  const docIdsData = docsSnap.docs.map((doc) => {
    return doc.id
  })
  return docIdsData
}
