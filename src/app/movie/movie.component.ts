import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;


  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];

    console.log('type:', this.type); // Debug log
    console.log('Id:', this.id);     // Debug log

    if (this.type === 'trending' || this.type === 'trendingMovie') {
      this.url = 'http://localhost:4200/assets/data/trending.movie.json';
    }
    else if (this.type === 'threater' || this.type === 'threaterMovie') {
      this.url = 'http://localhost:4200/assets/data/threater.movie.json';
    }
    else if (this.type === 'popular' || this.type === 'popularMovie') {
      this.url = 'http://localhost:4200/assets/data/popular.movie.json';
    } else {
      console.error('Invalid type:', this.type);
      return;
    }


    console.log('URL:', this.url); // Debug log
    this.getMovie();
  }

  getMovie() {
    this.http.get(this.url).subscribe(
      (movies: any) => {
        this.movies = movies;
        let index = this.movies.findIndex(
          (movie: { id: string }) => movie.id == this.id);
        if (index > -1) {
          this.movie = this.movies[index];
        }
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }
}
