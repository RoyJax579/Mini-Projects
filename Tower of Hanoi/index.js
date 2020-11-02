function towerHanoi(discs) {
	if (discs <= 0){
        return 0;
    }
    else if(discs == 1){
        return 1;
    }
    else{
        return (towerHanoi(discs-1)*2)+1;
    }
}

for (let x=0; x<=10; x++)
{
 console.log(x+`->${towerHanoi(x)}`)
}


