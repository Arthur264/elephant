import { Component, Input } from '@angular/core';
import { File } from '../file';

@Component({
    selector: 'app-list-file',
    templateUrl: "./mydataset-host.component.html",
    styleUrls: ['./mydataset.component.scss']
})

export class DatasetListFile {
    @Input() files: File[];
    constructor() {

    }
    public ParseTypeFile(type) {
        switch (type) {
            case "text/csv":
                return 'icon-csv-file-format-extension'
            case "application/sql":
                return 'icon-sql-file-format-symbol'
            case "application/zip":
                return 'icon-zip-compressed-files-extension'
            case 'application/pdf':
                return 'icon-pdf-file'
            case 'text/plainf':
                return 'icon-txt-text-file-extension-symbol'
            default:
                return 'icon-blank-file'
        }
    }
}
