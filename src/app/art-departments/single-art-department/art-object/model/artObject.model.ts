export class BasicArtObject{
    primaryImageSmall: string;
    title: string;

    constructor(object: any){
        this.primaryImageSmall = object.primaryImageSmall;
        this.title = object.title;
        
    }
}
