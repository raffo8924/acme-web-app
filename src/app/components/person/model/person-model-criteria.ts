import {AbstracModelCriteria} from '../../../shared/model/abstrac-model-criteria';

export interface PersonModelCriteria extends AbstracModelCriteria {
  names: string;
  id: number;
}
