import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  // GET all bookings
  getBookings() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  //fetchinng a specicific booking by ID
getBookingById(id: number) {
  return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

  // POST new booking  
  createBooking(booking: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', booking);
  }

// PUT update entire booking
updateBooking(id: number, booking: any) {
  return this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, booking);
}

// PATCH update part of the booking
patchBooking(id: number, booking: any) {
  return this.http.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, booking);
}

// DELETE remove booking
deleteBooking(id: number) {
  return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

//constructing and passing headers with an id
getBookingByIdWithHeader(headers: HttpHeaders) {
return this.http.get('https://jsonplaceholder.typicode.com/posts', { headers });
}
// GET bookings with query parameters
getBookingsWithParams(params: any) {
  return this.http.get('https://jsonplaceholder.typicode.com/posts', { params });
}}


