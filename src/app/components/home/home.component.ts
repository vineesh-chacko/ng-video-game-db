import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, observable, Subscription } from 'rxjs';
import { APIResponse, Game } from '../../models/models';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: string = "";
  public games: Array<Game> = [];
  private route: Subscription;
  private gameSub: Subscription;
  private test: Subscription;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

  }
  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }
    if (this.route) {
      this.route.unsubscribe();
    }

  }

  ngOnInit(): void {
    this.gameSub = this.activatedRoute.params.subscribe((params: Params) => {
      //this.testMethod();
      // if (params['game-search']) {
      //   this.searchGames('test', params['game-search']);
      // }
      // else {
      //   console.log("getting games list");
      //   this.searchGames('metacrit');
      // }
    });
  }

  searchGames(sort: string, search?: string): void {
    this.route = this.httpService.getGameList(sort, search).subscribe(
      (gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        //console.log(this.games);
      }
      ,
      error => {
        this.route.unsubscribe();
      },
      () => {
        this.route.unsubscribe();
      });
  }


  openGameDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

  // my test method
  testMethod() {
    var count = 0;
    var subscription = new Observable((observer) => {
      setInterval(() => {
        observer.next(count);
        if(count > 6){
         observer.error(new Error("number > 6"));
        }
        count++;
      }, 1000)
    });

    subscription.subscribe((data) => {
      console.log(data)
    }, (err) => {
      console.log(err);
    });
    
  }


}
