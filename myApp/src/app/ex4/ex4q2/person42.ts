
export class Person42 {

    clone(): Person42 {
        let other: Person42 = new Person42()

        other.name = this.name
        other.age = this.age
        other.city = this.city
        other.isAdult = this.isAdult

        return other
    }

    name: string = ""
    age: string = ""
    city: string = ""
    isAdult: boolean = false
}
