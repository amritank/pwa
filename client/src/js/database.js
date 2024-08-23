import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate_db', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("Put data to the db");
  // open db jate_db
  const jateDB = await openDB('jate_db', 1);
  // create a trasactional connection to the objsect store jate
  const tx = jateDB.transaction('jate', 'readwrite');
  // open the desired object store
  const jateStore = tx.objectStore("jate");
  const getResult = await jateStore.get(1);
  console.log("result: ", getResult);
  let result;
  if (getResult) {
    result = await jateStore.put({ id: getResult.id, content });
  } else {
    result = await jateStore.add({ content });
  }
  console.log("Data saved to the jate db: ", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("Get data from  the db");
  // open db jate_db
  const jateDB = await openDB('jate_db', 1);
  // create a trasactional connection to the objsect store jate
  const tx = jateDB.transaction('jate', 'readonly');
  // open the desired object store
  const jateStore = tx.objectStore("jate");
  const request = jateStore.get();
  const result = await request;
  console.log("Data returned from the jate db: ", result);
  return result;

};

initdb();
