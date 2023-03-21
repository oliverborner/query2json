
class Rule {
    constructor(identifier) {
        this.identifier = identifier;
    }
}



function buildQuery(options) {
    let query = []
    

    if (options.rules?.length) {

        for (const rule of options.rules) {
            query.push(new Rule(rule.operator));
        } 
    

    }

   

    console.log(query)
    const debug = document.getElementById("debug").innerHTML = JSON.stringify(query)
    return query;
}


