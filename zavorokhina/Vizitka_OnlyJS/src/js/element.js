class Element {
    constructor(elementName){
        this.name = elementName;
        this.id = null;
        this.innerText = null;
        this.classes = [];
        //this.classes = [1,2,3];
        this.children = [];
        this.css = {};
    }

    setId(id){
        this.id = id;
    }

    setInnerText(innerText){
        this.innerText = innerText;
    }

    addClasses(...classes){  // ["class1", "class2"]
        // for (let classEl of classes){
        //     this.classes.push(classEl);
        // }
        this.classes = [...this.classes, ...classes];
        //this.classes = [1,2,3, ...classes];
    }

    removeClasses(...classes){
        for (let c of classes){
            let index = this.classes.indexOf(c);

            if(index != -1){
                this.classes.splice(index, 1);
            }
        }
    }

    addStyles(styles){        // ["style1", "style2"]
        // this.css.push(styles);
        Object.assign(this.css, styles);
    }


    deleteStyles(...styles){   // deleteStyles('width', 'transform')
        
        for (let key of styles){
            delete this.css[key];
        }
    }

    appendChilds(...childs){
        for (let c of childs){
            this.children.push(c);
        }
    };


    // function summ(...params){
    //     let result = 0;
    //     for (let param of params){
    //         result += param;
    //     }

    //     return result;
    // }
    // console.log(summ(2,3));
    // console.log(summ(2,3,4));


    // не удобно для работы с детями:
    // render(parentElement){
    // let el = document.createElement(this.name);
    // el.id = this.id;

    // for (let c of this.classes){
    //     el.classList.add(c);
    // }

    // console.dir(el);
    // parentElement.append(el);

   //parentElement.append(document.createElement(this.name));

    createDomElement(){
        let el = document.createElement(this.name);
        
        if (this.id){
            el.id = this.id;
        }

        if (this.innerText) {
            el.innerText = this.innerText;
        }

        for (let c of this.classes){
            el.classList.add(c);
        }

        //el.style.border = "1px solid black";
        //el.style['border'] = "1px solid black";

        //console.dir(el);
        
        // let elStyles = document.createElement(this.css);
        // el.css= this.css;

        /* 
        this.css = {
            width: "100px"
        }
        */

        for (let key in this.css){
            //let styleName = key;               // width
            //let styleValue = this.css[key];    //this.css[width];
            //console.log(key);
            //console.log(this.css[key]);
            el.style[key] = this.css[key];    // el.style['width'] = this.css['width'] => el.style['width'] = '100px'; 
        }

        for (let child of this.children){
            el.append(child.createDomElement());
        }
    
        return el;
    }
}

export default Element;