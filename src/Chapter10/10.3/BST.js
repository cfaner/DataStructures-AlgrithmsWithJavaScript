
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
	}
}

BST.insert(52);
BST.insert(52);
BST.insert(68);
BST.insert(32);
BST.insert(45);
BST.insert(46);
BST.insert(66);
BST.insert(1);
BST.insert(3);
BST.insert(89);


console.log(BST.getMin());
console.log(BST.getMax());
console.log(BST.find(45));

