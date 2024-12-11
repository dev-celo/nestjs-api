import { Module } from '@nestjs/common';
import { PlacesController } from './places/places.controller';
import { PlacesService } from './places/places.service';
import { Client as googleMapsClient } from '@googlemaps/google-maps-services-js';

@Module({
  controllers: [PlacesController],
  providers: [
    PlacesService,
    {
      provide: googleMapsClient,
      useValue: new googleMapsClient(),
    },
  ],
})
export class MapsModule {}
