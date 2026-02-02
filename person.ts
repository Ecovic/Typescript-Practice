class Person {
    private name: string;
    private age: number;
    private city: string;

    constructor(name: string, age: number, city: string) {

        if (!name || name.trim().length === 0) {
            throw new Error("Name must not be empty");
        }

        if (age <= 0) {
            throw new Error("Age must be a positive number");
        }

        this.name = name;
        this.age = age;
        this.city = city;
    }

    get getName(): string {
        return this.name;
    }

    get getAge(): number {
        return this.age;
    }

    get getCity(): string {
        return this.city;
    }

    greet(): void {
        console.log(`Hi, I'm ${this.name} from ${this.city}`);
    }

    celebrateBirthday(): void {
        this.age += 1;
    }

    updateCity(newCity: string): void {
        if (!newCity || newCity.trim().length === 0) {
            throw new Error("City must not be empty");
        }
        this.city = newCity
    }

    isAdult(): boolean {
        return this.age >= 18;
    }

    hasSameCity(other: Person): boolean {
        return this.city === other.city;
    }

    toJSON(): object {
        return {
            name: this.name,
            age: this.age,
            city: this.city
        };
    }

    static fromJSON(data: any): Person {
        return new Person(data.name, data.age, data.city);
    }
}

export default Person;

