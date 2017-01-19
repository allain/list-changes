module.exports = listChanges

function listChanges(a, b) {
  let changes = []
  
  let aKeys = Object.keys(a)
  
  aKeys.forEach(key => {
    let val = a[key]
    if (typeof val !== 'object') {
      if (val !== b[key])
        changes.push(key)            
    } else if (typeof b[key] !== 'object') {
      changes.push(key)           
    } else {       
      changes = changes.concat(listChanges(val, b[key]).map(k => key + '.' + k))        
    }
  })
  
  let newKeys = Object.keys(b).filter(k => aKeys.indexOf(k) === -1)
  
  return changes.concat(newKeys)  
}
