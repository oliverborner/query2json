
class Rule {
    constructor(identifier) {
        this.identifier = identifier;
    }
}



function buildQuery(options) {
    let query = []

    for (const rule of options.rules) {
       query.push(new Rule(rule.operator));
    } 
    
   

    console.log(query)

    return query;
}


