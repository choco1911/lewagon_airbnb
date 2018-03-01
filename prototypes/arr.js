class Test {
    constructor(name, value, obj) {
        this.name = name;
        this.value = value;
        this.data = obj;
    }

    n() {
        return this.name;
    }

    v() {
        return this.value;
    }

    obj(){
        return this.data;
    }

    out() {
        console.log(`'${this.n()}--${this.v()}--${this.obj().animal}'`);
    }
}

const check = new Test('mir', 'may', { animal: 'cat' });

check.out();

const an = check.obj();
an.animal =  'dog';

check.out();




