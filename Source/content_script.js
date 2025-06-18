walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bAI\b/g, "wet fart");
	v = v.replace(/\bArtificial Intelligence\b/g, "Wet Fart");
	v = v.replace(/\bartificial intelligence\b/g, "wet fart");
	v = v.replace(/\bArtificial intelligence\b/g, "Wet fart");
	v = v.replace(/\bartificial Intelligence\b/g, "wet Fart");
	v = v.replace(/\bMachine Learning\b/g, "Wet Fart");
	v = v.replace(/\bMachine learning\b/g, "Wet fart");
	v = v.replace(/\bmachine Learning\b/g, "wet Fart");
	v = v.replace(/\bmachine learning\b/g, "wet fart");
	v = v.replace(/\bNeural Network\b/g, "Wet Fart");
	v = v.replace(/\bNeural network\b/g, "Wet fart");
	v = v.replace(/\bneural Network\b/g, "wet Fart");
	v = v.replace(/\bneural network\b/g, "wet fart");
	
	textNode.nodeValue = v;
}


