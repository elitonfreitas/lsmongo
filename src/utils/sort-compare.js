const compare = (sort, a, b, i, fields) => {
	i = i || 0
	fields = fields || Object.keys(sort)
  
	let field = fields[i]
  
	if (!field) {
	  return 0
	}
  
	if (a[field] === b[field]) {
	  i++
	  return compare(sort, a, b, i, fields)
	}
  
	if (sort[field] === 1) {
	  if (a[field] < b[field]) return -1;
	  if (a[field] > b[field]) return 1;
	  return 0;
	}
	if (sort[field] === -1) {
	  if (a[field] > b[field]) return -1;
	  if (a[field] < b[field]) return 1;
	  return 0;
	}
  }
  
  export default compare
  
