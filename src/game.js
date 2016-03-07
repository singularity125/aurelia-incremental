import {GameService} from 'gameservice';
import {inject} from 'aurelia-framework';

@inject(GameService)
export class Game {
  heading = 'Game Test';
  
  constructor(gameService)
  {
	this.gameService = gameService;
  }
  
  clicker()
  {
    this.gameService.addMoney(1);
  }
  
  buyathing()
  {
	this.gameService.buyathing();
  }
  
  buyupgrade()
  {
	this.gameService.buyupgrade();
  }
  
  get money()
  {
	  return this.gameService.money;
  }
  
  get moneyPerSec()
  {
	return this.gameService.moneyPerSec;
  }
  
  get thingyCost()
  {
	return this.gameService.thingyCost;
  }
  
  get upgradeCost()
  {
	return this.gameService.upgradeCost;
  }
}
