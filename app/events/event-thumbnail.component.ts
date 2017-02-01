import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well howerwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
            Time: {{event?.time}}&nbsp;
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'9:00 am'">(Normal Start)</span>
            <span *ngSwitchDefault>(Late Start)</span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location.address}},</span>
            <span class="pad-left">{{event?.location.city}}, {{event?.location.country}}</span>
        </div>
        <div *ngIf="event?.onlineurl">
            <span>Onlinr URL: {{event.onlineurl}}</span>
        </div>
    </div>
    `,
    styles: [`
        .green { color: #003300 !important }
        .bold { fint-weight: bold }
        .thumbnail {min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
    @Input() event:any;

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am' && this.event.time === '8:00 am';
        return {green: isEarlyStart, bold: isEarlyStart};
    }
}