import { NewNote } from "./NewNote";
import { Note } from "./Note";
import { useState, useEffect } from 'react';

export interface Inote {
  id: number,
  content: string,
}

const url =  'http://localhost:7070/notes';

export const Crud = () => {
  const [ notes, setNotes] = useState<Inote[]>([]);

  const fetchGet = () => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ответ сети был не ok");
        }
        return response.json()  // читаем ответ в формате JSON
      .then((data) => {
          console.log(data);
          setNotes(data);
        })
      .catch((error) => {	
        console.log("Возникла проблема с fetch запросом: ", error.message);
        })	         
      });
  }

  useEffect(() => {
    fetchGet();
  }, []);

  const handleCreate = (form: Inote) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(form),
    }).then(() => {
      fetchGet();
    })
  }

  const handleDelete = (id: number) => {
    fetch(url + "/" + id, {
      method: 'DELETE',
    }).then(() => {
      fetchGet();
    })
  }

  const handleClick = () => {
    fetchGet();
  }

  return (
    <>
      <div className="notes">
        <h2>Notes</h2>
        <div className="material-icons autorenew" onClick={handleClick}>autorenew</div>
      </div>
      <div className="notes-items">
        {notes.map((item) => <Note key={crypto.randomUUID()} note={item} remove={handleDelete} />)}
      </div>
      <NewNote create={handleCreate} />
    </>
  )
}
