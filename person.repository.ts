import * as fs from "fs";
import Person from "./person.ts";

export default class PersonRepository {
  private inputPath: string;
  private outputPath: string;

  constructor(
    inputPath: string = "data/people.json",
    outputPath: string = "data/people.output.json"
  ) {
    this.inputPath = inputPath;
    this.outputPath = outputPath;
  }

  load(): Person[] {
    try {
      if (!fs.existsSync(this.inputPath)) {
        throw new Error(`File not found: ${this.inputPath}`);
      }

      const raw = fs.readFileSync(this.inputPath, "utf-8");

      const data = JSON.parse(raw);

      if (!Array.isArray(data)) {
        throw new Error("Invalid JSON format: expected an array");
      }

      return data.map((item: any) => Person.fromJSON(item));

    } catch (error: any) {
      console.error("Failed to load people:", error.message);
      return [];
    }
  }

  save(people: Person[]): void {
    try {
      const json = people.map(p => p.toJSON());

      fs.writeFileSync(
        this.outputPath,
        JSON.stringify(json, null, 2),
        "utf-8"
      );

      console.log(`Saved ${people.length} people to ${this.outputPath}`);

    } catch (error: any) {
      console.error("Failed to save people:", error.message);
    }
  }
}
