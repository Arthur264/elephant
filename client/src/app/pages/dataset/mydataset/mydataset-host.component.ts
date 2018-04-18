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
        console.log(type)
        switch (type) {
            case "text/csv":
                return 'icon-csv-file-format-extension'
        }
    }
}
