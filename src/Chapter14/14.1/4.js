function max( a , b )
{
	return ( a > b ) ? a : b ;
}


function knapsack( capacity , size , value , n )
{
	if( n == 0 || capacity == 0 )
	{
		return 0;
	}
	
	if( size[ n - 1] > capacity ) // 如果最后一位的容量超过总容量 就抛弃 少计算一个。
	{
		return knapsack( capacity , size  , value , n - 1);
	}
	else
	{
		//如果最后一位的容量小于 总容量
		
		//本位能用上 的 量
		//计算当前位置的量 和 前边几位的量的和 
		let a = value[n-1] + knapsack( capacity - size[n-1] , size , value , n - 1 );
		
		//本位 用不上的量
		//计算前几位的总容量
		let b = knapsack( capacity , size , value , n - 1 );
		console.log( a + " " + b );
		
		//取最大的值,
		return max (  a, b ) ;	
	}
}

let value = [ 4 , 5 , 10 , 11 , 13 ] ;
let size  = [ 3 , 4 , 7  , 8  , 9  ] ;
let capacity = 16;
let n = 5;

console.log( knapsack( capacity , size , value , n ) );

