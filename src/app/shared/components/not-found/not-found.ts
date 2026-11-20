import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, MatButtonModule],
  styleUrl: './not-found.css',
  templateUrl: './not-found.html',
})
export class NotFound {}
