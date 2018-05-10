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
			if( i == 0 || w == 0 ) // ��ԵΪ 0 
			{
				K[i][w] = 0;
			}
			else if( size[ i - 1 ] <= w ) //�����ǰ���� С������
			{
				//�б�λ���� û�б�λ�������м���
				K[i][w] = max( value[ i - 1 ] + K[ i - 1 ][ w - size[ i - 1] ] , K[i-1][w]  );
			}
			else //�����ǰ���� ��������
			{
				K[i][w] = K[i-1][w]; //�Ǵ˴ε�����һֱ��ǰ�ߵ��� ����ʹ�ñ��εļ�����
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

