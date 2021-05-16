function korpus (model, type, volt, oppacity, unit, shell) {
    var model = (modelCap.indexOf(model));
    if (model==0) {
        var type = (typeDielectric.indexOf(type));
        var chip = typeShellOtech.indexOf(shell);
        return (typeShell[chip+2] + " " +typeDielectricImp[type] + " " + volt + "В")
    }


    var type = (typeDielectric.indexOf(type));
    var volt = (voltage.indexOf(volt));
    var unit = (unitBase.indexOf(unit));
    if (unit==1) {
        oppacity*=1000000;
    }
    
    for (let spr of storage79[model][type][volt]){
        if (oppacity >= spr[1] && oppacity <= spr[2]){
            return(typeShell[spr[0]] + " " +typeDielectricImp[type] + " " + voltage[volt] + "В")
        } 
    }
}