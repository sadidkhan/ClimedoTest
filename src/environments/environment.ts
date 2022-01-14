// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.

import { ApiServices } from "src/shared/services.model";

// The list of file replacements can be found in `angular.json`.
const DOMAIN = 'collectionapi.metmuseum.org';
const GATEWAY_URL = `https://${DOMAIN}/public/collection`;

const services: ApiServices = {
  getDepartments: {
      url: `${GATEWAY_URL}/v1/departments`,
  },
  getArtObjects: {
    url: `${GATEWAY_URL}/v1/objects`,
  },
}
export const environment = {
  production: false,
  services: services
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
