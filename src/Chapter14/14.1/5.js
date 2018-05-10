function max( a , b )
{
	return ( a > b ) ? a : b ;
}


function dKnapsack( capacity , size , value , n )
{
	let K = [];
	
	for( var i = 0 ; i <= n ; i++ )
	{
		K[i] = [];
	}
	
	for( var i = 0 ; i <= n ; i++)
	{
		for( var w = 0 ; w <= capacity ; w++)
		{
			if( i == 0 || w == 0 ) // 边缘为 0 
			{
				K[i][w] = 0;
			}
			else if( size[ i - 1 ] <= w ) //如果当前的量 小于容量
			{
				//有本位的量 没有本位的量进行计算
				K[i][w] = max( value[ i - 1 ] + K[ i - 1 ][ w - size[ i - 1] ] , K[i-1][w]  );
			}
			else //如果当前的量 大于容量
			{
				K[i][w] = K[i-1][w]; //那此次的量就一直是前边的量 不会使用本次的计算量
			}
		}
	}
	
	return K[n][capacity];
}

let value = [ 4 , 5 , 10 , 11 , 13 ] ;
let size  = [ 3 , 4 , 7  , 8  , 9  ] ;
let capacity = 16;
let n = 5;

console.log( dKnapsack( capacity , size , value , n ) );

