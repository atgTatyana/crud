import { useState } from 'react';
import { Inote } from './Crud';

interface NewNoteProps {
  create: (form: Inote) => void,
}

export const NewNote = ({ create }: NewNoteProps) => {
  const [form, setForm] = useState<Inote>({
    id: 0,
    content: '',
  });
  const { content } = form;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('form = ', form)
    create(form);
    setForm({
      id: 0,
      content: '',
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { 
    const { value } = e.target;
    setForm(({
      id: 0,
      content: value,
    }));
  };
    
  return (
    <>
      <h4>New Note</h4>
      <form className="form" onSubmit={handleSubmit}>
        <textarea value={content} name='content' onChange={handleChange}></textarea>
        <button type="submit" className="material-icons navigation">navigation</button>
      </form>
    </>
  )
}
