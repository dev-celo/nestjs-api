import { Injectable } from '@nestjs/common';
import {
  DirectionsRequest,
  Client as googleMapsClient,
  TravelMode,
} from '@googlemaps/google-maps-services-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DirectionsService {
  constructor(
    private googleMapsClient: googleMapsClient,
    private configService: ConfigService,
  ) {}

  async getDirection(originId: string, destinationId: string) {
    const requestParams: DirectionsRequest['params'] = {
      origin: `place_id:${originId}`,
      destination: `place_id:${destinationId}`,
      mode: TravelMode.driving,
      key: this.configService.get('GOOGLE_MAPS_API_KEY'),
    };

    const { data } = await this.googleMapsClient.directions({
      params: requestParams,
    });

    return {
      ...data,
      request: {
        origin: {
          place_id: requestParams.origin,
          location: {
            lat: data.routes[0].legs[0].start_location.lat,
            long: data.routes[0].legs[0].start_location.lng,
          },
        },
        destination: {
          place_id: requestParams.destination,
          location: {
            lat: data.routes[0].legs[0].end_location.lat,
            long: data.routes[0].legs[0].end_location.lng,
          },
        },
        mode: requestParams.mode,
      },
    };
  }
}
