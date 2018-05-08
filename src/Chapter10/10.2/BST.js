
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

//console.log(BST);

function inOrder(node)
{
	if(node !== null)
	{
		inOrder(node.left);
		console.log(node.data + "  ");
		inOrder(node.right);
	}
}

inOrder(BST.root);
console.log( "  preOrder ==  ");

function preOrder(node)
{
	if(node !== null)
	{
		console.log(node.data + "  ");
		preOrder(node.left);
		preOrder(node.right);
	}
}

preOrder(BST.root);

console.log( "  postOrder ==  ");

function postOrder(node)
{
	if(node !== null)
	{
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.data + "  ");
	}
}

postOrder(BST.root);
