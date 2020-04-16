export enum InputType {
  PROJECT= "Project",
  SNIPPET = "Snippet"
}

export interface CodeReference {
  type: InputType;
  contents?: any;
}
