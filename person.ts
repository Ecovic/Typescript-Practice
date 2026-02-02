class Person {
    private _name: string; 
    private _age: number;
    private _city: string;

    constructor(name: string, age: number, city: string) {

        if (!name || name.trim().length === 0) {
        throw new Error("Name must not be empty");
        }

        if (age <= 0) {
        throw new Error("Age must be a positive number");
        }   

        this._name = name;
        this._age = age;
        this._city = city;
    }

    get name(): string {
        return this._name;
    }

    get age(): number {
     return this._age;
    }

    get city(): string {
      return this._city;
    }

    greet(): void {
        console.log(`Hi, I'm ${this._name} from ${this._city}`);
    }   

    celebrateBirthday(): void {
        this._age += 1;
    }

    updatecity(newcity:string): void {
        if (!newcity || newcity.trim().length === 0) {
        throw new Error("City must not be empty");
        }
        this._city = newcity
    }
    
    isAdult(): boolean {
        return this._age >= 18;
    }
    
    hasSameCity(other: Person): boolean {
        return this._city === other.city;
    }

    toJSON(): object {
        return {
        name: this._name,
        age: this._age,
        city: this._city
        };
    }

    static fromJSON(data: any): Person {
        return new Person(data.name, data.age, data.city);
    }
}

export default Person;

