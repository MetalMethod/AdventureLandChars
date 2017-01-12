// Hey there!
// This is CODE, lets you control your character with code.
// If you don't know how to code, don't worry, It's easy.
// Just set attack_mode to true and ENGAGE!

var attack_mode=true;

setInterval(function(){

	use_hp_or_mp();
	loot();
	
	
	
	var party_leader = get_player("MinaMaga");
	var party_leader_target = get_target_of(party_leader)
	

	

	if(!attack_mode || character.moving) return;

	var target=get_targeted_monster();
	
	target=get_nearest_monster({min_xp:500,max_att:660}); ///weird i know
	
	
	if(!target)
	{
		target=get_nearest_monster({min_xp:500,max_att:660});
		if(target) change_target(target);
		else
		{
			//set_message("No Monsters, moving");
			move(
			party_leader.real_x - 20  ,
			party_leader.real_y + 40
			);
			return;
		}
	}
	
	if(!in_attack_range(target))
	{
	
		
		move(
			party_leader.real_x - 20  ,
			party_leader.real_y - 10
			);
	
		
		
	}
	else if(can_attack(target))
	{
		
		attack(target);
	}
	
	
},1000/4); // Loops every 1/4 seconds.

// NOTE: If the tab isn't focused, browsers slow down the game
// Learn Javascript: https://www.codecademy.com/learn/javascript
// Write your own CODE: https://github.com/kaansoral/adventureland




