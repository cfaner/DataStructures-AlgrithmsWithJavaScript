function lcs(word1,word2)
{
	let max   = 0;
	let index = 0;
	
	var lcsArr = new Array(  word1.length + 1 );
	
	for( var i = 0; i < word1.length ; i ++ )
	{
		lcsArr[i] = new Array ( word2.length );
		
		for ( var j = 0 ; j < word2.length ; j++)
		{
			lcsArr[i][j] = 0;
		}
		
	}
	
	console.log(lcsArr);
	
	for( var i = 0; i < word1.length ; i ++ )
	{	
		for ( var j = 0 ; j < word2.length ; j++)
		{
			if( i == 0 || j == 0 )
			{
				lcsArr[i][j] = 0;
			}
			else
			{ 
				if( word1[i - 1] == word2[ j -1] )
				{
					lcsArr[i][j] = lcsArr[ i - 1 ][ j - 1 ] + 1;
				}
				else
				{
					lcsArr[i][j] = 0;
				}
			}
			
			if( max < lcsArr[i][j] )
			{
				max = lcsArr[i][j];
				index = i;
			}
		}
	}
	
	console.log(lcsArr);
	
	let str = "";
	
	if(max == 0)
	{
		return "";
	}
	else
	{
		for( var i = index - max ; i<= max ; ++i )
		{
			str += word1[i];
		}
		
		return str;
	}
}

let r = lcs('oWorld!','hisWorld~~');

console.log(r);