export class GameService {
 
  constructor()
  {
	//basic game vars for now
	this.money = 0;
	//this.moneypersec = 0;
	this.things = 0;
	this.thingyBaseCost = 10;
	this.baseIncomeRate = 1;
	this.upgradeBaseCost = 50;
	this.upgrades = 0;

	this.tick();
	setInterval(()=>this.tick(), 1000);
  }
  
  addMoney(mon)
  {
	  this.money += mon;
  }
  
  buyathing()
  {
	if (this.money >= this.thingyCost)
	{
	  this.money -= this.thingyCost;
	  this.things++;
	}
  }
  
  buyupgrade()
  {
	if (this.money >= this.upgradeCost)
	{
		this.money -= this.upgradeCost;
		this.upgrades++;
	}
  }
  
  tick()
  {
	this.money += this.moneyPerSec;
  }
  
  get moneyPerSec()
  {
	return (this.things * this.baseIncomeRate * (this.upgrades+1));
  }
  
  get thingyCost()
  {
	return (this.thingyBaseCost * Math.pow(1.2,(this.things)));
  }
  
  get upgradeCost()
  {
	return (this.upgradeBaseCost * Math.pow(1.3, (this.upgrades)));
  }
}
