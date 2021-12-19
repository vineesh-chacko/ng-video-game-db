import { NgModule } from '@angular/core'
import { MatTabsModule } from '@angular/material/tabs'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        FormsModule, ReactiveFormsModule
    ],
    exports: [MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        MatTabsModule, FormsModule, ReactiveFormsModule, MatInputModule
    ],
    declarations: []
})
export class MaterialModule {
    constructor() {

    }
}