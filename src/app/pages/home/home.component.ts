import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { LatestNewsComponent } from '../../components/latest-news/latest-news.component';
import { FirebaseService } from '../../core/services/firebase.service';
import { isPlatformServer } from '@angular/common';
import { HighlightsComponent } from '../../components/highlights/highlights.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighlightsComponent,LatestNewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {


}
