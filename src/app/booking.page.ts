import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookingService } from './booking.service';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class BookingPage {

  name = '';
  service = '';
  date = '';
  bookingId = 1;
  bookings: any[] = [];

  constructor(private bookingService: BookingService) {}

  // GET all bookings
  loadBookings() {
    this.bookingService.getBookings().subscribe({
      next: (res: any) => {
        this.bookings = res;
      },
      error: (err: any) => {
        alert('Error loading bookings: ' + err.message);
      }
    });
  }
  

  //fetching a specific booking by ID
  loadBookingById() {
    this.bookingService.getBookingById(5).subscribe({
      next: (res: any) => {
        this.name = res.name;
        this.service = res.service;
        this.date = res.date;
      },
      error: (err: any) => {
        alert('Error loading booking: ' + err.message);
      }
    });
  }

  // constructing header with an id and fetching booking
  loadBookingWithHeader() {
  const headers = new HttpHeaders({
    id: 5
  });

  this.bookingService.getBookingByIdWithHeader(headers).subscribe({
    next: (res: any) => {
      this.name = res.name;
      this.service = res.service;
      this.date = res.date;
    },
    error: (err: any) => {
      alert('Error loading booking: ' + err.message);
    }
  });
}

loadBookingWithParams() {

  const params = new HttpParams()
    .set('userId', '6');

  this.bookingService.getBookingsWithParams(params).subscribe({
    next: (res: any) => {
       this.name = res.name;
      this.service = res.service;
      this.date = res.date;
      
    },
    error: (err: any) => {
      alert('Error: ' + err.message);
    }
  });
}


  // POST booking
  sendBooking() {

    const booking = {
      title: this.name,
      body: `${this.service} on ${this.date}`
    };

    this.bookingService.createBooking(booking).subscribe({
      next: (res: any) => {
        this.bookingId = res.id;
        alert(`Booking created successfully (ID: ${res.id})`);
      },
      error: (err: any) => {
        alert('Error creating booking: ' + err.message);
      }
    });
  }

  // PUT (full update)
  updateBooking() {

    const booking = {
      title: this.name,
      body: `${this.service} on ${this.date}`
    };

    this.bookingService.updateBooking(this.bookingId, booking).subscribe({
      next: () => {
        alert('Booking updated successfully');
      },
      error: (err) => {
        alert('Error updating booking: ' + err.message);
      }
    });
  }

  // PATCH (partial update)
  patchBooking() {

    const updatedFields = {
      title: this.name
    };

    this.bookingService.patchBooking(this.bookingId, updatedFields).subscribe({
      next: () => {
        alert('Booking patched successfully');
      },
      error: (err) => {
        alert('Error patching booking: ' + err.message);
      }
    });
  }

  // DELETE booking(remove booking  with the specified ID)
  deleteBooking() {

    this.bookingService.deleteBooking(this.bookingId).subscribe({
      next: () => {
        alert('Booking deleted successfully');

        this.name = '';
        this.service = '';
        this.date = '';
      },
      error: (err) => {
        alert('Error deleting booking: ' + err.message);
      }
    });
  }
}