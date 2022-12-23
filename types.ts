export type Guest = {
  id: number,
  name: string,
  diet: string,
  dishes: Dishes[],

}

export type Dishes = {
  dishId: number,
  dishType: string,
  dishName: string,
  dishDietary?: string,
  notes?: string
}