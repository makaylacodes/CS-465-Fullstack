import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { trips } from '../data/trips';
import { TripDataService } from 'src/app/services/trip-data.service';
import { Trip } from 'src/app/models/trip';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})

export class TripListingComponent implements OnInit {
  // trips: Array<any> = trips;
  trips: Trip[];

  message: string;
  
  constructor(
    private tripDataService: TripDataService,
    private router: Router,
    private authenticationService: AuthenticationService
    ) { }

    private addTrip(): void {
      this.router.navigate(['add-trip']);
    }
    public isLoggedIn(): boolean {
      return this.authenticationService.isLoggedIn();
     }

    private getTrips(): void {
      console.log('Inside TripListingComponent#getTrips');
      this.message = 'Searching for trips';
      this.tripDataService
        .getTrips()
        .then(foundTrips => {
        this.message = foundTrips.length > 0 ? ''
        : 'No trips found';
      this.trips = foundTrips;
 });
  }
ngOnInit(): void {
 this.getTrips();
}
}

