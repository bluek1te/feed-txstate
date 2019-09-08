import { Injectable } from "@angular/core";

@Injectable()
export class AppGlobal {
    readonly baseAppUrl: string = 'http://localhost';
    readonly basePort: string = ':8080';
}