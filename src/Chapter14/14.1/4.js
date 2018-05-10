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
	
	if( size[ n - 1] > capacity ) // ������һλ���������������� ������ �ټ���һ����
	{
		return knapsack( capacity , size  , value , n - 1);
	}
	else
	{
		//������һλ������С�� ������
		
		//��λ������ �� ��
		//���㵱ǰλ�õ��� �� ǰ�߼�λ�����ĺ� 
		let a = value[n-1] + knapsack( capacity - size[n-1] , size , value , n - 1 );
		
		//��λ �ò��ϵ���
		//����ǰ��λ��������
		let b = knapsack( capacity , size , value , n - 1 );
		console.log( a + " " + b );
		
		//ȡ����ֵ,
		return max (  a, b ) ;	
	}
}

let value = [ 4 , 5 , 10 , 11 , 13 ] ;
let size  = [ 3 , 4 , 7  , 8  , 9  ] ;
let capacity = 16;
let n = 5;

console.log( knapsack( capacity , size , value , n ) );

