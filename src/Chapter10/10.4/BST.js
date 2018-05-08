
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
	getMin : function()
	{
		let current = this.root;
		
		while( current.left != null )
		{
			current = current.left;
		}
		
		return current.data;
	},
	getMax : function()
	{
		let current = this.root;
		
		while( current.right != null )
		{
			current = current.right;
		}
		
		return current.data;
	},
	find : function(data)
	{
		let current = this.root;
		
		while( current != null )
		{
			if(data == current.data)
			{
				return current;
			}
			else if(data < current.data)
			{
				current = current.left;
			}
			else
			{
				current = current.right;
			}
		}
		
		return null;
	},
	remove : function(data)
	{
		this.root = removeNode(this.root , data);
	}
}

function removeNode(node , data)
{
	if(node == null)
	{
		return null;
	}

	if(node.data == data)
	{
		if(node.left == null && node.right == null)
		{
			return null;
		}
		
		if(node.left == null)
		{
			return node.right;
		}

		if(node.right == null)
		{
			return node.left;
		}
		
		let tempNode = getSmallest( node.right );
			
		node.data =  tempNode.data;
		node.right = removeNode( node.right , tempNode.data );
		
		return node;
	}
	else if( data < node.data )
	{
		node.left = removeNode( node.left , data );
		return node;
	}
	else
	{
		node.right = removeNode( node.right , data );
		return node;
	}
}

function getSmallest(node)
{
	let current = node ;
		
	while( current.left != null )
	{
		current = current.left;
	}
	
	return current.data;
}


BST.insert(52);
BST.insert(68);
BST.insert(32);
BST.insert(45);
BST.insert(46);
BST.insert(66);
BST.insert(1);
BST.insert(3);
BST.insert(89);
 
BST.remove(45);

console.log(BST);