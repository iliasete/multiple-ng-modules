import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Shared1Module } from "src/app/components/shared1.module";
import { Shared2Module } from "src/app/components/shared2.module";
import { Shared3Module } from "src/app/components/shared3.module";
import { PageCComponent } from "./page-c.component";

const C_ROUTES: Routes = [
    {
        path: '',
        component: PageCComponent
    }
]

@NgModule({
    declarations: [PageCComponent],
    imports: [
        Shared1Module,
        Shared2Module,
        Shared3Module,
        RouterModule.forChild(C_ROUTES)
    ]
})
export class PageCModule {}