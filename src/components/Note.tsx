import { Inote } from "./Crud"

interface NoteProps {
  note: Inote,
  remove: (id: number) => void,
}

export const Note = ({ note, remove }: NoteProps) => {
  return (
    <div className="note">
      <div>{note.content}</div>
      <div className="material-icons close" onClick={() => remove(note.id)} >close</div>
    </div>
  )
}
