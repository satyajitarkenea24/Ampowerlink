import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageTitleComponent } from "@components/page-title.component";
import { QuillEditorComponent } from 'ngx-quill'

@Component({
  selector: 'editors',
  standalone: true,
  imports: [PageTitleComponent,QuillEditorComponent,FormsModule],
  templateUrl: './editors.component.html',
  styles: ``
})
export class EditorsComponent {
  content: string = ` <div id="snow-editor" style="height: 300px">
  <h3><span class="ql-size-large">Hello World!</span></h3>
  <p><br /></p>
  <h3>This is an simple editable area.</h3>
  <p><br /></p>
  <ul>
    <li>Select a text to reveal the toolbar.</li>
    <li>Edit rich document on-the-fly, so elastic!</li>
  </ul>
  <p><br /></p>
  <p>End of simple area</p>
</div>`

  editorConfig = {
    toolbar: [
      [{ font: [] }, { size: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ script: 'super' }, { script: 'sub' }],
      [{ header: [false, 1, 2, 3, 4, 5, 6] }, 'blockquote', 'code-block'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['direction', { align: [] }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  }
}
