import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSliderModule } from "@angular/material/slider";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

const MaterialComponent = [
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatGridListModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSlideToggleModule,
];

@NgModule({
    declarations: [],
    imports: [MaterialComponent],
    exports: [MaterialComponent],
})
export class MaterialModule {}
