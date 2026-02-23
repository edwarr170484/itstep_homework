import Element from "./element";

class ImageElement extends Element{
    constructor(elementName){
        super(elementName);
        this.src = null;
        this.alt ='';
        this.title ='';
    }
    setSrc(src) {
        this.src = src;
    }
    setAlt(alt) {
        this.alt = alt;
    }
    setTitle(title) {
        this.title = title;
    }

    createDomElement(){
        let img = super.createDomElement();
        
        img.src = this.src;
        img.alt = this.alt;

        if(this.title){
            img.title = this.title;
        }
        return img;
    }
}

export default ImageElement;