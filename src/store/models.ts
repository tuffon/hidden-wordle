import { Models } from "@rematch/core"
import { solution } from "./solution"
 
export interface RootModel extends Models<RootModel> {
  solution: typeof solution
}
 
export const models: RootModel = { solution }