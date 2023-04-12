import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Shared1Module } from "src/app/components/shared1.module";
import { Shared2Module } from "src/app/components/shared2.module";
import { PageBComponent } from "./page-b.component";

const B_ROUTES: Routes = [
    {
        path: '',
        component: PageBComponent
    }
]

@NgModule({
    declarations: [PageBComponent],
    imports: [
        Shared1Module, 
        Shared2Module,
        RouterModule.forChild(B_ROUTES)
    ]
})
export class PageBModule {}