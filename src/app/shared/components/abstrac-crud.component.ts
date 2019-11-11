import {IMyDate, INgxMyDpOptions, NgxMyDatePickerDirective} from 'ngx-mydatepicker';
import {IMyDateModel} from 'mydatepicker';
import {AbstracModel} from '../model/abstrac-model';

export class AbstracCrudComponent {

  constructor() {
  }

  public getRandomInt(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public getValidRandomInt(property: string, items: any[]): number {
    let value = this.getRandomInt(1, 10000) * -1;
    let item = this.getItem(value, property, items);
    while (item) {
      value = this.getRandomInt(1, 10000) * -1;
      item = this.getItem(value, property, items);
    }
    return value;
  }

  public getLabel(id: number, propertyId: string, propertyDescrip: string, items: any[]) {

    let valDescrip = null;

    // console.log('id', id);
    if (items) {
      for (const item of items) {
        // console.log('item', item);
        const map = this.buildMap(item);
        // console.log('map', map);
        const valId = map.get(propertyId);

        // console.log('valId', valId);
        // console.log('valId === id', valId === id);

        if (valId || valId === 0) {
          if (valId === id) {
            // console.log('valId', valId);
            valDescrip = map.get(propertyDescrip);
            // console.log('valDescrip', valDescrip);
            break;
          }
        } else {
          console.log('valId', 'undefined!!');
        }
      }
    }

    return valDescrip;
  }

  public getItem(value: any, property: string, items: any[]): any {

    if (items) {
      for (const item of items) {
        if (item) {
          const map = this.buildMap(item);
          const valProperty = map.get(property);
          if (valProperty) {
            if (valProperty === value) {
              return item;
            }
          } else {
            return null;
          }
        } else {
          return null;
        }
      }
    } else {
      return null;
    }

  }


  public getIndexOfRecord(value: number, property: string, items: any[]): number {

    let index = 0;
    for (const item of items) {
      const map = this.buildMap(item);
      const valProperty = map.get(property);
      if (valProperty) {
        if (valProperty === value) {
          return index;
        }
      } else {
        return null;
      }
      index++;
    }

  }

  public getItemsAvailable(property: string, items: any[], propertyEval: string, itemsEval: any[], itemsIgnore: any[]): any[] {

    const itemsAvailable = new Array();

    if (items) {
      for (const item of items) {
        const map = this.buildMap(item);
        const valProperty = map.get(property);

        const finded = this.getItem(valProperty, propertyEval, itemsEval);
        let findedIgnore = null;
        if (itemsIgnore) {
          findedIgnore = this.getItem(valProperty, propertyEval, itemsIgnore);
        }

        if (!finded) {
          itemsAvailable.push(item);
        } else if (finded && findedIgnore) {
          itemsAvailable.push(item);
        }
      }
    }

    return itemsAvailable;
  }

  public getItemsAvailableGrouped(property: string, items: any[], propertyEval: string, itemsEval: any[], itemsIgnore: any[], dataGroup: any[]): any[] {

    const itemsAvailable = new Array();

    if (items) {
      for (const item of items) {
        const map = this.buildMap(item);
        const valProperty = map.get(property);

        let criterias: any[] = [{property: propertyEval, value: valProperty}];
        criterias = criterias.concat(dataGroup);

        const finded = this.getItemByCriteria(criterias, itemsEval);

        let findedIgnore = null;
        if (itemsIgnore) {
          findedIgnore = this.getItemByCriteria(criterias, itemsIgnore);
        }

        if (!finded) {
          itemsAvailable.push(item);
        } else if (finded && findedIgnore) {
          itemsAvailable.push(item);
        }
      }
    }

    return itemsAvailable;
  }

  public getItemsNonIgnores(property: string, items: any[], propertyEval: string, itemsIgnore: any[]): any[] {

    const itemsAvailable = new Array();

    if (items) {
      for (const item of items) {
        const map = this.buildMap(item);
        const valProperty = map.get(property);

        let findedIgnore = null;
        if (itemsIgnore) {
          findedIgnore = this.getItem(valProperty, propertyEval, itemsIgnore);
        }

        if (!findedIgnore) {
          itemsAvailable.push(item);
        }
      }
    }

    return itemsAvailable;
  }

  public getTotalValidRecords(list) {
    let count = 0;
    for (const item of list) {
      if (!item.removedRecord) {
        count++;
      }
    }
    return count;
  }

  public getValidRecords(list: any[]) {
    const newList = new Array();
    if (list) {
      for (const item of list) {
        if (!item.removedRecord) {
          newList.push(item);
        }
      }
    }

    return newList;
  }

  public buildMap(obj): Map<any, any> {
    const finalMap = new Map();
    Object.keys(obj).forEach(key => {
      finalMap.set(key, obj[key]);
    });
    return finalMap;
  }

  public generateQueryString(map) {
    let queryString = '';
    queryString = '?q=foo';
    map.forEach((value: any, key: string) => {
      if (value) {
        queryString = queryString + '&' + key + '=' + value;
      }
    });
    return queryString;
  }

  public getNgxMydatepicker(date: Date): IMyDate {
    if (date) {
      return {

        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()

      };
    } else {
      return null;
    }
  }

  public iMyDatetoDate(iMyDate: IMyDate): Date {
    if (iMyDate) {
      return new Date(iMyDate.year, iMyDate.month - 1, iMyDate.day);
    } else {
      return null;
    }
  }

  public setDisableUntil(dp: NgxMyDatePickerDirective, options: INgxMyDpOptions, date: IMyDate) {
    if (options && dp) {
      options.disableUntil = date;
      dp.parseOptions(options);
    }
  }

  //
  onDateClear(dp: NgxMyDatePickerDirective, date: Date): void {
    dp.clearDate();
    date = null;
  }

  onDateChanged(event: IMyDateModel): Date {
    if (event.jsdate) {
      return event.jsdate;
    }
    return null;
  }

  onDateChangedAndDisableUntil(event: IMyDateModel, dp: NgxMyDatePickerDirective, dpDisableUntil: NgxMyDatePickerDirective, options: INgxMyDpOptions): Date {
    if (event.jsdate) {
      if (options && dpDisableUntil) {
        this.setDisableUntil(dpDisableUntil, options, this.getNgxMydatepicker(event.jsdate));
      }
      return event.jsdate;
    }
    return null;
  }

  public getIndexOfRecordByCriteria(criterias: any[], items: any[]): number {

    let index = 0;
    for (const item of items) {
      const map = this.buildMap(item);
      if (this.checkCriteria(criterias, map)) {
        return index;
      }
      index++;
    }

  }

  public getItemByCriteria(criterias: any[], items: any[]): any {

    for (const item of items) {
      if (item) {
        const map = this.buildMap(item);
        if (this.checkCriteria(criterias, map)) {
          return item;
        }
      } else {
        return null;
      }
    }

  }

  public filterListByCriteria(criterias: any[], items: any[]): any {
    const itemsAvailable = new Array();
    if (items) {
      for (const item of items) {
        if (item) {
          const map = this.buildMap(item);
          if (this.checkCriteria(criterias, map)) {
            itemsAvailable.push(item);
          }
        }
      }
    }
    return itemsAvailable;
  }

  public checkCriteria(criterias: any[], mapItem: any): boolean {
    let checkValid = 0;
    for (const criteria of criterias) {

      const valProperty = mapItem.get(criteria.property);
      if (valProperty) {
        if (valProperty !== criteria.value) {
          checkValid = checkValid + 1;
        }
      } else {
        checkValid = checkValid + 1;
      }

    }
    if (checkValid === 0) {
      return true;
    } else {
      return false;
    }
  }

  public getOldValueInForm(form: any, property: any): any {
    const obj = form.get(property).parent.value;
    return obj[property];
  }

  public getValueInForm(form: any, property: any): any {
    const val = form.get(property).value;
    return val;
  }

  public evaluateVal(form: any, property: any, propertyFired, callbackSuccess: () => void, callbackAlter: () => void): void {

    const valProperty = form.get(property).value;

    if (valProperty) {
      const oldValue = this.getOldValueInForm(form, property);
      if (oldValue && oldValue !== valProperty) {
        form.get(propertyFired).setValue(null);
      }
      callbackSuccess();
    } else {
      form.get(propertyFired).setValue(null);
      callbackAlter();
    }
  }

  // public checkValueInArray(value: any, items: any[]): boolean {
  //
  //   if(items.indexOf(value)>-1){
  //     return true;
  //   }else {
  //     return false;
  //   }
  //
  // }
}
