export class Rescue {
  constructor(
    public store_name?: string,
    public store_number?: string,
    public district?: string,
    public location?: string,
    public meat_temp_pick_up?: number,
    public produce_temp_pick_up?: number,
    public meat_temp_drop_off?: number,
    public produce_temp_drop_off?: number,
    public time_pick_up?: Date,
    public last_updated_by?: string
  ) {}
}
