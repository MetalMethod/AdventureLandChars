// Hey there!
// This is CODE, lets you control your character with code.
// If you don't know how to code, don't worry, It's easy.
// Just set attack_mode to true and ENGAGE!

var attack_mode=true;

var party_leader = get_player("MinaMaga");

setInterval(function(){

	
	if(character.hp <= character.max_hp/2+100){
	use(0);
	}
	else if(character.mp <= character.max_mp/2+100){
	use(1);
	}
	
	
	loot();

	
	if(!attack_mode || character.moving) return;

	var target=get_targeted_monster();
	
	if(!target)
	{
		target=get_nearest_monster({min_xp:10,max_att:50});
		if(target) change_target(target);
		else
		{
			set_message("No Monsters");
			return;
		}
	}
	




	//var party_second = get_player("MinaTreta");
	// var party_third = get_player("nome");
	
	
	
	
	if  (party_leader == null){
		set_message("Can't reach the leader");
		return;	
	}
	else{
		var leader_position_x = party_leader.real_x;
		var leader_position_y = party_leader.real_y;
		move(
		leader_position_x + leader_position_x/20 , 
		leader_position_y - leader_position_y/20
		);
	}	



	
	// moving
	
	if(!in_attack_range(target))
	{
		move(
			character.real_x+(target.real_x-character.real_x)/2,
			character.real_y+(target.real_y-character.real_y)/2
			);
		// Walk half the distance
	}
	else if(can_attack(target))
	{set_message("Attacking");
		
		attack(target);
	 move(
			leader_position_x+(target.real_x+50-character.real_x)/4,
			leader_position_y+(target.real_y-50-character.real_y)/4
			);
	
	}
	
	
},1000/4); // Loops every 1/4 seconds.

//Functions definitions


function moveStep(){
		move(
			character.real_x+(target.real_x-character.real_x)/3,
			character.real_y+(target.real_y-character.real_y)/3
			);
}

//TO DO
// check if target is moving forward ou backwards in x and y
// srore each state in vars
// take step in direction againt target





// NOTE: If the tab isn't focused, browsers slow down the game
// Learn Javascript: https://www.codecademy.com/learn/javascript
// Write your own CODE: https://github.com/kaansoral/adventureland
