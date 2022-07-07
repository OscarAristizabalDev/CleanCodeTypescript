interface Bird {
    fly(): void;
    eat(): void;
    run(): void;
    swin(): void;
}

class Tucan implements Bird {

    public fly() {}
    public eat() {}
    public run() {}
    public swin() {
        throw new Error('Esta ave no nada.');
    }
}

class Humminbird implements Bird {
    public fly() {}
    public eat() {}
    public run() {}
    public swin() {
        throw new Error('Esta ave no nada.');
    }
}

class Ostrich implements Bird {
    public fly() {
        throw new Error('Esta ave no vuela.');
    }
    public eat() {}
    public run() {}
    public swin() {
        throw new Error('Esta ave no nada.');
    }
}

class Penguin implements Bird {
    public fly() {
        throw new Error('Esta ave no vuela.');
    }
    public eat() {}
    public run() {}
    public swin() {}
}