"use client";

import { db, auth } from "@/config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useState, useEffect } from "react";

type SampleDataType = {
  id: string;
  isValid: boolean;
  name: string;
  value: number;
};

export default function SampleData() {
  const [sampleData, setSampleData] = useState<SampleDataType[]>([]);

  // New SampleData States
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [isValid, setIsValid] = useState(false);

  // Update name state
  const [updateName, setUpdateName] = useState("");

  const adminCollectionRef = collection(db, "sampleData");

  const getSampleData = async () => {
    try {
      const data = await getDocs(adminCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as SampleDataType[];
      setSampleData(filteredData);
      console.log(filteredData);
    } catch (error) {
      console.error("Error fetching sample data:", error);
    }
  };

  useEffect(() => {
    getSampleData();
  }, []);

  const onSubmitNewSampleData = async () => {
    try {
      await addDoc(adminCollectionRef, {
        name: name,
        value: value,
        isValid: isValid,
        userId: auth?.currentUser?.uid === undefined ? "anon" : auth?.currentUser?.uid, // Use current user ID or "anonymous" if not logged in
      });
      getSampleData();
    } catch (error) {
      console.error("Error adding new sample data:", error);
    }
  };

  const deleteSampleData = async (id: string) => {
    try {
      const sampleDataToDelete = doc(db, "sampleData", id);
      await deleteDoc(sampleDataToDelete);
    } catch (error) {
      console.error("Error deleting sample data:", error);
    }
    getSampleData();
  };

  const updateSampleData = async (id: string) => {
    try {
      const sampleDataToUpdate = doc(db, "sampleData", id);
      await updateDoc(sampleDataToUpdate, {name: updateName});
    } catch (error) {
      console.error("Error updating sample data:", error);
    }
    getSampleData();
  };

  return (
    <>
      <h2>Sample Data</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input
        placeholder="Value"
        type="number"
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <input
        type="checkbox"
        checked={isValid}
        onChange={(e) => setIsValid(e.target.checked)}
      />
      <label>Valid</label>
      <button onClick={onSubmitNewSampleData}>Add</button>

      {sampleData.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Value: {item.value}</p>
          <p>Valid: {item.isValid ? "Yes" : "No"}</p>
          <button onClick={() => deleteSampleData(item.id)}>
            Delete this data
          </button>
          <input
            placeholder="Update title"
            onChange={(e) => setUpdateName(e.target.value)}
          />
          <button onClick={() => updateSampleData(item.id)}>
            Update this data title
          </button>
        </div>
      ))}
    </>
  );
}
