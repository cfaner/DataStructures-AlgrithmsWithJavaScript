let Vertex = {
	label : null , 
	wasVisited : false,
};

function addEdge(v,w)
{
	this.adj[v].push(w);
	this.adj[w].push(v);
	
	this.edges++;
}

function Graph( v )
{
	this.vertices = v;
	this.edges    = 0;
	this.adj      = [];
	
	for( var i = 0 ; i < this.vertices ; ++i )
	{
		this.adj[i] = [];
		this.adj[i].push("");
 	}
	
	this.addEdge  = addEdge;
	this.toString = toString;
}


