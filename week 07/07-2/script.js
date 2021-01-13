function compute_age(form)
{
    today = (new Date()).getTime();
    var year = form.year.value;
    var month = form.month.value - 1;
    var day = form.day.value;
	birthdate = (new Date(year, month, day)).getTime();
		age = (today - birthdate) / (1000 * 3600 * 24);
    if (age > 0.0) {
        form.marsday.value = int_zero( 10 * age / 1.03 ) / 10;
        form.marsyear.value = int_zero( 10 * age / 686.98 ) / 10;
	}
}
function int_zero(x)
{
	if ( x < 1 )
		return 0 ;
	else
		return parseInt( x ,10 );
}
