/**
 * UTILS
 **/

function LOG(value)
{
	$.writeln(value);
}

function toArray(value)
{
    var i = value.length;
	var array = [];
    while(i--){
		array.push(value[i]);
    }
    return array;
}

function inArray(value, array)
{
	var res = false;
	for (i = 0; i < value.length; i ++){
		if (array[i] == value){
			res = true;
			break;
		}
	}
	return res;
}

function stringify(value)
{
	return value+"";
}

function pad2(value)
{
	return value < 10 ? "0"+value : ""+value;
}