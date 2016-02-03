//import {computedFrom} from 'aurelia-framework';

export class Welcome {
    heading = 'Welcome to the Aurelia Navigation App!';
    firstName = 'John';
    lastName = 'Doe';
    previousValue = this.fullName;

    types: string[] = ["basic", "primary", "command", "hero", "compound"];
    type: string = "basic";
    icons: string[] = ["none", "minus", "home", "minus", "none"];
    listicons:string[] = ["mail","trash","flag","pinLeft", "mail"];
    labels: string[] = ["basic", "primary", "command", "hero", "compound"];
    label: string = "basic btn";
    descriptions: string[] = ["basic button", "primary button ", "command button ", "hero button ", "compound button"];

    icon: string = "person";
    selectable: boolean = false;    
    name: string = "Name";
    title: string = "Accountant";
    status: string = "In Meeting";
    detail: string = "Available after 4 pm";
    src1: string = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAIAAABt+uBvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkExQkNEMjczQjZFQTExRTJCOTFBREQ5RjI0REVENzc3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkExQkNEMjc0QjZFQTExRTJCOTFBREQ5RjI0REVENzc3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTFCQ0QyNzFCNkVBMTFFMkI5MUFERDlGMjRERUQ3NzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTFCQ0QyNzJCNkVBMTFFMkI5MUFERDlGMjRERUQ3NzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5BxfgaAAA4JklEQVR42qy9aawl55ke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';

    src2: string = 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Nzc4NTFCNUFDNjcwMTFFMzk3QzFERjExOUYyQjIyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Nzc4NTFCNUJDNjcwMTFFMzk3QzFERjExOUYyQjIyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3Nzg1MUI1OEM2NzAxMUUzOTdDMURGMTE5RjJCMjIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3Nzg1MUI1OUM2NzAxMUUzOTdDMURGMTE5RjJCMjIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAICAgICAgICAgIDAgICAwQDAgID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';
    
    src: string = this.src1;
    
    //Getters can't be directly observed, so they must be dirty checked.
    //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
    //To optimize by declaring the properties that this getter is computed from, uncomment the line below
    //as well as the corresponding import above.
    //@computedFrom('firstName', 'lastName')
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    submit() {
        this.previousValue = this.fullName;
        alert(`Welcome, ${this.fullName}!`);
    }

    changebtn() {
        console.log("event received");
        this.selectable = !this.selectable;
        this.icon = this.icon === "person" ? "group" : "person";
        this.src = this.src == this.src1 ? this.src2 : (this.src === this.src2 ? undefined : this.src1);
        
        // 
        //         this.type = this.types[this.types.indexOf(this.type) <= this.types.length ? this.types.indexOf(this.type) + 1 : 0];
        //         this.label = this.labels[this.labels.indexOf(this.label) <= this.labels.length ? this.labels.indexOf(this.label) + 1 : 0];
        //         this.icon = this.icons[this.icons.indexOf(this.icon) <= this.icons.length ? this.icons.indexOf(this.type) + 2 : 0];
    }

    shuffle(o: any, type: any) {
        for (var j, x, i = o.types.length; i; j = Math.floor(Math.random() * i), x = o[type][--i], o[type].splice(i, 1, o[type][j]), o[type].splice(j, 1, x));
        return o[type];
    }

    canDeactivate() {
        if (this.fullName !== this.previousValue) {
            return confirm('Are you sure you want to leave?');
        }
    }
    
    listiconclick(){
        this.listicons.pop();
    }

}

export class UpperValueConverter {
    toView(value) {
        return value && value.toUpperCase();
    }
}
