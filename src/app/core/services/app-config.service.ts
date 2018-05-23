import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable()
export class AppConfigService {

    constructor() { }

    ROOT_DOMAIN = environment.rootUrl;
    ROOT_DOMAIN_BACKEND = environment.apiEndpoint;

    API = {

    };
}
