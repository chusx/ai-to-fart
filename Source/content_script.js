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

	v = v.replace(/\bcrypto\b/g, "funny numbers (maybe)");
	v = v.replace(/\bCrypto\b/g, "Funny numbers (maybe)");
	v = v.replace(/\bcryptography\b/g, "funny numbers (cool!)");
	v = v.replace(/\bCryptography\b/g, "Funny numbers (cool!)");
	v = v.replace(/\bcryptocurrency\b/g, "funny numbers (lame)");
	v = v.replace(/\bCryptocurrency\b/g, "Funny numbers (lame)");
	
	textNode.nodeValue = v;
}


