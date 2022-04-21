import {IPostPhoto} from "../Interfaces/IPostPhoto";
import {IPostPhotoPayload} from "../Interfaces/IPostPhotoPayload";

export class PostPhotoRepository {
    private id: number;
    private photos: IPostPhoto[];

    constructor() {
        this.id = 1;
        this.photos = [];
    }

    public addPhoto(payload: IPostPhotoPayload): void {
        this.photos.push({
            photo_id: this.id,
            ...payload,
        });
        this.id = this.id + 1;
    }

    public editPostPhoto(id: number, dimension: number): void {
        this.photos.forEach(el => {
            if (el.post_id === id) {
                el.dimension = dimension
            }
        })
    }
}

