import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovie: any
  popularMovie: any
  threaterMovie: any
  constructor(private http: HttpClient ,private router: Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getThreaterMovies();
    this.getPopulargMovies();
  }
  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/data/trending.movie.json').subscribe( (movie) => {
      this.trendingMovie = (movie)
      console.log(this.trendingMovie);
      })
  }
  getPopulargMovies() {
    this.http.get('http://localhost:4200/assets/data/popular.movie.json').subscribe( (movie) => {
      this.popularMovie = (movie)
      console.log(this.popularMovie);
      })
  }
  getThreaterMovies() {
    this.http.get('http://localhost:4200/assets/data/threater.movie.json').subscribe( (movie) => {
      this.threaterMovie = (movie)
      console.log(this.threaterMovie);
      })
  }
  goToMovie(type:string,id:string){
  this.router.navigate(['movie',type,id])
  }
  

}
