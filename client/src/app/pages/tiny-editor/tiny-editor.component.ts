import {
  Component,
  AfterViewInit,
  EventEmitter,
  OnDestroy,
  Input,
  Output
}
from '@angular/core';
import 'tinymce';
import 'tinymce/themes/modern';

import 'tinymce/plugins/table';
import 'tinymce/plugins/link';

declare var tinymce: any;


@Component({
  selector: 'app-tiny-editor',
  template: '<textarea id="{{elementId}}"></textarea>',
  styleUrls: ['./tiny-editor.component.scss']
})
export class TinyEditorComponent implements AfterViewInit, OnDestroy  {

  constructor() {}
  @Input() elementId: String;
  @Output() onEditorContentChange = new EventEmitter();

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'table'],
      skin_url: '/assets/skins/lightgray',
      apiKey: 'gzyk9l830l23ji091ikq8wso8g3kyuqoq4funirxbls5gtax',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup change input', () => {
          const content = editor.getContent();
          this.onEditorContentChange.emit(content);
        });
      }
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
