export class Section{
    public name: string;
    public description:string;
    public imagePath: string;
    /**
     *   Khởi tạo constructor
     */
    constructor(name:string, desc:string, imagePath:string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}
