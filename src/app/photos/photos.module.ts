import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photos.component";


@NgModule({
    declarations:[PhotoComponent],
    exports: [PhotoComponent]
})
export class PhotosModule {}