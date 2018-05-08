function iterFib(n)
{
	let last     = 1;
	let nextLast = 1;
	let result 	 = 1;
	
	for( var i = 2 ; i < n ; i++ )
	{
		result   = last + nextLast;
		nextLast = last;
		last     = result;
		console.log(result);
	}
	
	return result;
}

iterFib(10);
