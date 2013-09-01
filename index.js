var body = function(options){
    this.settings = options || {};
    this.settings.bodyAsJSON = this.settings.bodyAsJSON || false;
    this.on("setup", function(request, server, done){
        var self = this;
        request.body = new Buffer(0);
        request.on("data", function(chunk){
            request.body = Buffer.concat([request.body, chunk]);
        });
        request.on("end", function(){
            if(self.settings.bodyAsJSON){
                try{
                    request.body = JSON.parse(request.body);
                }catch(e){
                    request.body = undefined;
                    request.bodyError = e.toString();
                }
            }
            done();
        });

        request.on("error", function(error){
            request.body = undefined;
            request.bodyError = error;
            done();
        });
    });
};

module.exports = body;
