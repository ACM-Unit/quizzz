import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from "@angular/core";

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    @Input()
    caption: string = 'Title Caption';


    @ViewChild('titleElement')
    myH1Element: any;


    constructor() {
        console.log(`app-title constructor, caption = ${this.caption}`);
    }

    ngOnInit(): void {
        console.log(`app-title ngOnInit, caption = ${this.caption}, myH1Element = ${this.myH1Element}`);
    }

    ngAfterViewInit(): void {
        console.log(`app-title ngAfterViewInit, caption = ${this.caption}, myH1Element = ${this.myH1Element}`);
        console.log(this.myH1Element);

        this.myH1Element.nativeElement.title = 'Our amazing app, and this tooltip is set by code';
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges');
        console.log(changes);
    }

    ngOnDestroy(): void {
        console.log('app-title ngOnDestroy');
    }
}
