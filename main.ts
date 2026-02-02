import PersonRepository from "./personRepository.ts";

const repo = new PersonRepository();

const people = repo.load();

if (people.length === 0) {
  console.log("No people loaded. Exiting.");
  process.exit(0);
}

people.forEach(person => {
  person.celebrateBirthday();
});

people.forEach(person => {
  person.greet();
  console.log("Is adult:", person.isAdult());
  console.log("-----");
});

repo.save(people);
