// Hey there!
// This is CODE, lets you control your character with code.
// If you don't know how to code, don't worry, It's easy.
// Just set attack_mode to true and ENGAGE!

var attack_mode=true

setInterval(function(){

	if(character.hp <= character.max_hp - character.max_hp/5){
	use(0);
	}
	if(character.mp <= character.max_mp/2){
	use(1);
	}
	
	loot();
	var party_leader = get_player("MinaMaga");
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
	
	
	
	
		if (party_leader.hp != party_leader.max_hp)
		{
			heal(party_leader);
	
		}
	//	else if (party_second.hp != party_second.max_hp)
	//	{
	//		heal(party_second);
	//	}
		else
		{
		var target = get_nearest_monster({min_xp:100,max_att:660});
			 if(can_attack(target))
				{
					attack(target);
				}
		}
	
	
	
},1000/4); // Loops every 1/4 seconds.

// NOTE: If the tab isn't focused, browsers slow down the game
// Learn Javascript: https://www.codecademy.com/learn/javascript
// Write your own CODE: https://github.com/kaansoral/adventureland
