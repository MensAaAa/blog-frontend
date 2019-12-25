
import { FormObject } from '../../shared/form/interfaces/form-object';
import EditorComponent from '../../shared/editor/components/editor.component';

export const AddPostObject: FormObject[] = [
  {
    name: 'title',
    placeholder: 'Naslov',
    type: 'text',
  },
  {
    name: 'path',
    placeholder: 'Putanja',
    type: 'text',
  },
  {
    name: 'content',
    placeholder: 'Sadrzaj',
    type: 'text',
    component: EditorComponent,
  }
]