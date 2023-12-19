pm.test("Check response object", function () {
    var jsonData = pm.response.json();

    pm.expect(pm.response).to.have.property('name', 'Successful operation');
    pm.expect(pm.response).to.have.property('status', 'OK');
    pm.expect(pm.response).to.have.property('code', undefined);
    pm.expect(pm.response).to.have.property('header').to.be.an('object');
    pm.expect(jsonData.body).to.be.an('array').that.includes.deep.members([
        {
            "id": 1,
            "name": "apple",
            "description": "apple",
            "price": 50
        },
        {
            "id": 2,
            "name": "1",
            "description": "apple",
            "price": 50
        }
    ]);
});


pm.test("Check response object attributes and values", function () {
    var jsonData = pm.response.json();
    
    if(pm.response.code === 200) {
        pm.expect(pm.response.request.name).to.eql('Successful operation');
        pm.expect(pm.response.status).to.eql('OK');
        pm.expect(pm.response.code).to.eql(undefined);
        pm.expect(typeof pm.response.headers).to.eql('object');
        
        pm.expect(jsonData).to.have.property('id');
        pm.expect(jsonData.id).to.eql(4);
        
        pm.expect(jsonData).to.have.property('name');
        pm.expect(jsonData.name).to.eql('apple');
        
        pm.expect(jsonData).to.have.property('description');
        pm.expect(jsonData.description).to.eql('apple');
        
        pm.expect(jsonData).to.have.property('price');
        pm.expect(jsonData.price).to.eql(50);
    } else if (pm.response.code === 405) {
        pm.expect(pm.response.request.name).to.eql(undefined);
        pm.expect(pm.response.status).to.eql('Method Not Allowed');
        pm.expect(pm.response.code).to.eql(405);
        pm.expect(typeof pm.response.headers).to.eql('object');
        
        pm.expect(jsonData).to.have.property('message');
        pm.expect(jsonData.message).to.eql('Method not allowed');
    }
});


pm.test("Check response details", function () {
    var jsonData = pm.response.json();

    if(pm.response.code === 200){
        pm.expect(pm.response.status).to.eql("OK");
        pm.expect(jsonData.name).to.eql("successful operation");
        pm.expect(pm.response.headers).to.be.an("object");
        pm.expect(jsonData.body).to.be.an("object");
        pm.expect(jsonData.body.id).to.eql(4);
        pm.expect(jsonData.body.name).to.eql("1");
        pm.expect(jsonData.body.description).to.eql("banana");
        pm.expect(jsonData.body.price).to.eql(50);
    } else if(pm.response.code === 404){
        pm.expect(pm.response.status).to.eql("Not Found");
        pm.expect(jsonData.name).to.eql(undefined);
        pm.expect(pm.response.headers).to.be.an("object");
        pm.expect(jsonData.body).to.be.an("object");
        pm.expect(jsonData.body.id).to.eql(undefined);
        pm.expect(jsonData.body.name).to.eql(undefined);
        pm.expect(jsonData.body.description).to.eql(undefined);
        pm.expect(jsonData.body.price).to.eql(undefined);
    }
});


pm.test("Validate response attributes", function () {
    var jsonData = pm.response.json();

    if (pm.response.code === 200) {
        pm.expect(pm.response).to.have.property('name', 'Updated Product');
        pm.expect(pm.response).to.have.property('status', 'OK');
        pm.expect(pm.response).to.have.property('code', undefined);
        pm.expect(pm.response).to.have.property('header').to.be.an('object');
        
        pm.expect(jsonData).to.be.an('object');
        pm.expect(jsonData).to.have.property('id', 4);
        pm.expect(jsonData).to.have.property('name', '1');
        pm.expect(jsonData).to.have.property('description', 'mango');
        pm.expect(jsonData).to.have.property('price', 50);
    } else if (pm.response.code === 404) {
        pm.expect(pm.response).to.have.property('name', undefined);
        pm.expect(pm.response).to.have.property('status', 'Not Found');
        pm.expect(pm.response).to.have.property('code', 404);
        pm.expect(pm.response).to.have.property('header').to.be.an('object');
    } else {
        pm.expect(pm.response).to.have.property('status', 'error');
    }
});


pm.test("Validate response attributes", function () {
    var jsonData = pm.response.json();

    pm.expect(jsonData).to.be.an('object');
    pm.expect(jsonData.header).to.be.an('object');
    pm.expect(jsonData.body).to.exist;

    if(jsonData.status === 'OK'){
        pm.expect(jsonData.name).to.eql('Product deleted');
        pm.expect(jsonData.code).to.be.undefined;
    } else if(jsonData.status === 'Not Found'){
        pm.expect(jsonData.name).to.be.undefined;
        pm.expect(jsonData.code).to.eql(404);
    }
});
