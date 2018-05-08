
let Node = function (data)
		{
			this.data  = data;
			this.left  = null;
			this.right = null;
		};

let BST = {
	root : null ,
	insert : function(data)
	{
		let newNode = new Node(data);
		
		if(this.root == null)
		{
			this.root = newNode;
		}
		else
		{
			let current = this.root;
			let parent ;
		
			while(true)
			{
				parent = current;
				if(data < current.data)
				{
					current = current.left;
					
					if(current == null)
					{
						parent.left = newNode;
						break;
					}
				}
				else
				{
					current = current.right;
					
					if(current == null)
					{
						parent.right = newNode;
						break;
					}
				}
			}
		}
	},
	findAndWrite : function( data )
	{
		let current = this.root ;
		
		while( current != null )
		{
			if(current.data == data)
			{
				console.log( data );
				break;
			}
			else if( data < current.data )
			{
				console.log( current.data );
				current = current.left ;
			}
			else
			{
				console.log( current.data );
				current = current.right ;
			}
		}
	}
}

BST.insert(52);
BST.insert(52);
BST.insert(68);
BST.insert(32);
BST.insert(45);
BST.insert(46);
BST.insert(45);
BST.insert(1);
BST.insert(3);
BST.insert(89);

BST.findAndWrite(45);
