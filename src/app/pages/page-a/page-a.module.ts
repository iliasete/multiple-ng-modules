import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Shared1Module } from "src/app/components/shared1.module";
import { PageAComponent } from "./page-a.component";

const A_ROUTES: Routes = [
    {
        path: '',
        component: PageAComponent
    }
]

@NgModule({
    declarations: [PageAComponent],
    imports: [
        Shared1Module, 
        RouterModule.forChild(A_ROUTES)
    ]
})
export class PageAModule {}