import { Component, OnInit, ChangeDetectorRef } from '@angular/core'

import * as fs from 'fs'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'electro-angular'

    fileList: string[] = []
    constructor(private changeDetector: ChangeDetectorRef) {}
    ngOnInit() {
        // NOTE: simple usage of fs
        fs.readdir('.', (err, files) => {
            if (err) {
                console.error(err)
                return
            }
            this.fileList = files
            this.changeDetector.detectChanges()
        })
    }
}
