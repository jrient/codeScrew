var params = $("form").serializeArray();
var values = {};
for( x in params ){
    values[params[x].name] = params[x].value;
}
var idata = JSON.stringify(values);