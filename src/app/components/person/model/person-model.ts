import {AbstracModel} from '../../../shared/model/abstrac-model';

export interface PersonModel extends AbstracModel {
  id: number;
  name: string;
  lastname: string;
  birth_date: any;
  age: number;
  death_date: any;
  death_age: number;
}
