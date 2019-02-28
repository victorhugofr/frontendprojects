function multiplicar(a, b) {
    return (a * b);
}
function adicionar(a, b) {
    return (a + b);
}
function diminuir(a, b) {
    return (a - b);
}
function dividir(a, b) {
    return (a / b);
}
function transformToEl(text){
    var exp = document.getElementById("InputExp");
	var opened_bracket_level = []; var is_bracket_closed = [];
	var i = new Number(); var j = new Number(); var k = new Number(); var current_open_brackets = new Number(0);
	
	for (i = 0; i < exp.value.length; i++) {
		if (exp.value.charAt(i) == "(" || exp.value.charAt(i) == "[" || exp.value.charAt(i) == "{") {
			current_open_brackets++;
			opened_bracket_level.push(1);
			is_bracket_closed.push(false);
			k = 1;
			for (j = opened_bracket_level.length - 2; j >= 0; j--) {
				if (!is_bracket_closed[j]) {
					opened_bracket_level[j] = ++k;
				}
			}
		}
		
		if (exp.value.charAt(i) == ")" || exp.value.charAt(i) == "]" || exp.value.charAt(i) == "}") {
			current_open_brackets--;
			if (current_open_brackets >= 0) {
				j = opened_bracket_level.length - 1;
				while (j >= 0 && is_bracket_closed[j]) { j--; }
				if (j >= 0) {
					is_bracket_closed[j] = true;
				}
			}
			else {
				break;
			}
		}
	}

	if (opened_bracket_level.length > 0 && current_open_brackets >= 0) {
		var opening_br = ["{", "(", "["];
		var closing_br = ["}", ")", "]"];
		var brackets_to_be_closed = [];
		var s = new String("");

		for (i = j = 0; i < exp.value.length; i++) {
			if (exp.value.charAt(i) == "(" || exp.value.charAt(i) == "[" || exp.value.charAt(i) == "{") {
				s = s + opening_br[opened_bracket_level[j] % 3];
				brackets_to_be_closed.push(closing_br[opened_bracket_level[j] % 3]);
				j++;
			}
			else
				if (exp.value.charAt(i) == ")" || exp.value.charAt(i) == "]" || exp.value.charAt(i) == "}") {
					s = s + brackets_to_be_closed.pop();
				}
				else {
					s = s + exp.value.charAt(i);
				}
		}
		exp.value = s.valueOf();
	}
}