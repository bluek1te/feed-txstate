export class Rescue {
     constructor(
     public district?: string,
     public location?: string,
     public meat_temp_pick_up?: string,
     public produce_temp_pick_up?: string,
     public meat_temp_drop_off?: string,
     public produce_temp_drop_off?: string,	
     public created_at?: Date,
     public updated_at?: Date,
     public last_updated_by?: string,
  ) {}
}
