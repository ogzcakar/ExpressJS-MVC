const testSchema = () => {
    console.log('testSchema');
};

class Home {

    constructor(data) {
        this.data = data;
    }

    getTitle(){
        return this.data.title;
    }

    getName(){
        return this.data.name;
    }

}

module.exports.Home = Home;
module.exports.testSchema = testSchema;
