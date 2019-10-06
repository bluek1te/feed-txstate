export class Rescue {
  constructor(
    public store_name?: string,
    public store_number?: string,
    public district?: string,
    public location?: string,
    public date?: Date,
    public food_name?: string,
    public time_pick_up?: Date,
    public time_drop_off?: Date,
    public last_updated_by?: string
  ) {}
}